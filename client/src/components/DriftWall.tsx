/**
 * STARLINE / SUNLIT CHROMATIC JOURNAL
 * Component role: a slow, tactile stream of photographic fragments that invites exploration without feeling like a technical interface.
 */
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from "react";

export type DriftWallItem = { image: string; title: string; subtitle?: string };

type DriftWallProps = {
  items: DriftWallItem[];
  columns?: number;
  tileWidth?: number;
  tileHeight?: number;
  gap?: number;
  radius?: number;
  tilt?: number;
  turn?: number;
  perspective?: number;
  depth?: number;
  speed?: number;
  direction?: "up" | "down";
  variance?: number;
  parallax?: number;
  pauseOnHover?: boolean;
  lift?: number;
  dim?: number;
  overlayColor?: string;
  onSelect?: (item: DriftWallItem) => void;
};

const columnFactor = (index: number, variance: number) => {
  const pseudo = ((index * 0.6180339887 + 0.35) % 1) * 2 - 1;
  return 1 + variance * pseudo;
};

export default function DriftWall({
  items,
  columns = 4,
  tileWidth = 210,
  tileHeight = 282,
  gap = 16,
  radius = 2,
  tilt = 9,
  turn = -8,
  perspective = 1300,
  depth = 78,
  speed = 13,
  direction = "up",
  variance = 0.3,
  parallax = 0.32,
  pauseOnHover = false,
  lift = 34,
  dim = 0.78,
  overlayColor = "#1d1b19",
  onSelect,
}: DriftWallProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const tracksRef = useRef<HTMLDivElement[]>([]);
  const offsets = useRef<number[]>([]);
  const velocities = useRef<number[]>([]);
  const frameRef = useRef<number | null>(null);
  const lastTime = useRef<number | null>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const dampedPointer = useRef({ x: 0, y: 0 });
  const hoveredColumn = useRef(-1);
  const wallHovered = useRef(false);
  const [height, setHeight] = useState(580);
  const [activeTile, setActiveTile] = useState<string | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(([entry]) => setHeight(entry.contentRect.height || 580));
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const columnItems = useMemo(() => {
    const result = Array.from({ length: columns }, () => [] as DriftWallItem[]);
    items.forEach((item, index) => result[index % columns].push(item));
    return result.map((column) => column.length ? column : items.slice(0, 1));
  }, [columns, items]);

  const columnMeta = useMemo(() => columnItems.map((column) => {
    const copyHeight = Math.max(tileHeight + gap, column.length * (tileHeight + gap));
    return { copyHeight, copies: Math.max(2, Math.ceil((height * 1.55) / copyHeight) + 1) };
  }), [columnItems, gap, height, tileHeight]);

  const baseVelocities = useMemo(() => columnItems.map((_, index) => {
    const sign = direction === "up" ? 1 : -1;
    return speed * columnFactor(index, variance) * sign * (index % 2 === 0 ? 1 : -1);
  }), [columnItems, direction, speed, variance]);

  useEffect(() => {
    offsets.current = columnMeta.map((meta, index) => meta.copyHeight * ((index * 0.31) % 1));
    velocities.current = columnItems.map(() => 0);
  }, [columnItems, columnMeta]);

  const transformPlane = useCallback((x: number, y: number) => {
    if (!planeRef.current) return;
    planeRef.current.style.transform = `translate(-50%, -50%) scale(1.12) rotateX(${tilt + y}deg) rotateY(${turn + x}deg) translateZ(${-depth}px)`;
  }, [depth, tilt, turn]);

  useEffect(() => {
    const animate = (time: number) => {
      if (lastTime.current === null) lastTime.current = time;
      const delta = Math.min(.05, Math.max(0, (time - lastTime.current) / 1000));
      lastTime.current = time;
      const damping = 1 - Math.exp(-delta / .14);
      dampedPointer.current.x += (pointer.current.x * parallax * 8 - dampedPointer.current.x) * damping;
      dampedPointer.current.y += (-pointer.current.y * parallax * 8 - dampedPointer.current.y) * damping;
      transformPlane(dampedPointer.current.x, dampedPointer.current.y);

      tracksRef.current.forEach((track, index) => {
        const meta = columnMeta[index];
        if (!track || !meta) return;
        if (!reducedMotion) {
          const isPaused = (wallHovered.current && pauseOnHover) || hoveredColumn.current === index;
          const target = isPaused ? 0 : baseVelocities[index];
          velocities.current[index] += (target - velocities.current[index]) * (1 - Math.exp(-delta / (target === 0 ? .16 : .28)));
          offsets.current[index] = ((offsets.current[index] + velocities.current[index] * delta) % meta.copyHeight + meta.copyHeight) % meta.copyHeight;
        }
        track.style.transform = `translate3d(0, ${-(offsets.current[index] || 0)}px, 0)`;
      });
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
      lastTime.current = null;
    };
  }, [baseVelocities, columnMeta, parallax, pauseOnHover, reducedMotion, transformPlane]);

  const wallStyle = {
    "--dw-tile-w": `${tileWidth}px`, "--dw-tile-h": `${tileHeight}px`, "--dw-gap": `${gap}px`, "--dw-radius": `${radius}px`,
    "--dw-lift": `${lift}px`, "--dw-dim": dim, "--dw-overlay": overlayColor, "--dw-perspective": `${perspective}px`,
  } as CSSProperties;

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || reducedMotion) return;
    pointer.current = { x: (event.clientX - rect.left) / rect.width - .5, y: (event.clientY - rect.top) / rect.height - .5 };
  };

  return <div ref={containerRef} className="drift-wall" style={wallStyle} onPointerMove={onPointerMove} onPointerEnter={() => { wallHovered.current = true; }} onPointerLeave={() => { wallHovered.current = false; hoveredColumn.current = -1; setActiveTile(null); pointer.current = { x: 0, y: 0 }; }} aria-label="A drifting wall of Starline photographs">
    <div className="drift-wall__plane" ref={planeRef}>{columnItems.map((column, columnIndex) => <div className="drift-wall__column" key={`column-${columnIndex}`}><div className="drift-wall__track" ref={(element) => { if (element) tracksRef.current[columnIndex] = element; }}>{Array.from({ length: columnMeta[columnIndex]?.copies ?? 2 }).flatMap((_, copyIndex) => column.map((item, itemIndex) => {
      const tileId = `${columnIndex}-${copyIndex}-${itemIndex}`;
      const active = activeTile === tileId;
      return <button className={`drift-wall__tile${active ? " is-active" : ""}`} key={tileId} onMouseEnter={() => { hoveredColumn.current = columnIndex; setActiveTile(tileId); }} onFocus={() => { hoveredColumn.current = columnIndex; setActiveTile(tileId); }} onBlur={() => { hoveredColumn.current = -1; setActiveTile(null); }} onClick={() => onSelect?.(item)} aria-label={`View ${item.title}`}><span className="drift-wall__image"><img src={item.image} alt="" loading="lazy" /><span className="drift-wall__tint" /></span><span className="drift-wall__caption"><b>{item.title}</b><em>{item.subtitle}</em></span></button>;
    }))}</div></div>)}</div>
  </div>;
}
