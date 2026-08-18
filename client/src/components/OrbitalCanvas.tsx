/**
 * STARLINE / TIDAL OBSERVATORY
 * Interaction role: a subtle instrument-like WebGL orbit that reinforces the black, white, and orbit-blue visual system.
 */
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function OrbitalCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.3, 7.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const cluster = new THREE.Group();
    scene.add(cluster);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.66, 4),
      new THREE.MeshPhysicalMaterial({
        color: 0x79a8ff,
        metalness: 0.75,
        roughness: 0.2,
        clearcoat: 0.6,
        transparent: true,
        opacity: 0.96,
      }),
    );
    cluster.add(core);

    const haloMaterial = new THREE.LineBasicMaterial({ color: 0x79a8ff, transparent: true, opacity: 0.56 });
    [1.25, 1.75, 2.4].forEach((radius, index) => {
      const curve = new THREE.EllipseCurve(0, 0, radius, radius * (index === 1 ? 0.43 : 0.58), 0, Math.PI * 2, false, 0);
      const points = curve.getPoints(96).map((point) => new THREE.Vector3(point.x, point.y, 0));
      const orbit = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), haloMaterial);
      orbit.rotation.x = [0.96, 1.72, 2.58][index];
      orbit.rotation.z = [0.22, -0.5, 0.18][index];
      cluster.add(orbit);

      const bead = new THREE.Mesh(
        new THREE.SphereGeometry(index === 1 ? 0.075 : 0.048, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xf7fbff }),
      );
      bead.userData = { radius, orbit, speed: 0.45 + index * 0.13, offset: index * 1.95 };
      cluster.add(bead);
    });

    const stars = new THREE.BufferGeometry();
    const starPositions = new Float32Array(170 * 3);
    for (let i = 0; i < 170; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 11;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 4 - 2;
    }
    stars.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    scene.add(new THREE.Points(stars, new THREE.PointsMaterial({ color: 0xf7fbff, size: 0.024, transparent: true, opacity: 0.62 })));

    const key = new THREE.PointLight(0x79a8ff, 15, 12);
    key.position.set(2, 3, 3);
    scene.add(key);
    const rim = new THREE.PointLight(0xffffff, 5, 9);
    rim.position.set(-3, -1, 2);
    scene.add(rim);

    const pointer = { x: 0, y: 0 };
    const onPointer = (event: PointerEvent) => {
      const box = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - box.left) / box.width - 0.5) * 2;
      pointer.y = ((event.clientY - box.top) / box.height - 0.5) * 2;
    };
    mount.addEventListener("pointermove", onPointer);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    let frame = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      cluster.rotation.y += (pointer.x * 0.2 - cluster.rotation.y) * 0.025;
      cluster.rotation.x += (-pointer.y * 0.1 - cluster.rotation.x) * 0.02;
      core.rotation.y = elapsed * 0.18;
      core.rotation.x = elapsed * 0.12;
      cluster.children.forEach((child) => {
        if (child.userData.radius) {
          const { radius, orbit, speed, offset } = child.userData;
          const phase = elapsed * speed + offset;
          const local = new THREE.Vector3(Math.cos(phase) * radius, Math.sin(phase) * radius * 0.58, 0);
          local.applyEuler(orbit.rotation);
          child.position.copy(local);
        }
      });
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      mount.removeEventListener("pointermove", onPointer);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      scene.traverse((item) => {
        if (item instanceof THREE.Mesh || item instanceof THREE.Line || item instanceof THREE.Points) {
          item.geometry?.dispose();
          const material = item.material as THREE.Material | THREE.Material[];
          Array.isArray(material) ? material.forEach((m) => m.dispose()) : material?.dispose();
        }
      });
    };
  }, []);

  return <div aria-hidden="true" className="orbital-canvas" ref={mountRef} />;
}
