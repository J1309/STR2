import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useState } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import StarlinePreloader from "./components/StarlinePreloader";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Investment from "./pages/Investment";
import Journal from "./pages/Journal";
import Portfolio from "./pages/Portfolio";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/portfolio"} component={Portfolio} />
      <Route path={"/about"} component={About} />
      <Route path={"/journal"} component={Journal} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/pricing"} component={Contact} />
      <Route path={"/investment"} component={Contact} />
      <Route path={"/collections"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <StarlinePreloader onComplete={() => setPreloaderDone(true)} />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

