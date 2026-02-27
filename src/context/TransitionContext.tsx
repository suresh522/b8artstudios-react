import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type Direction = "artist" | "designer" | null;

type TransitionContextType = {
  startTransition: (dir: Direction) => void;
  direction: Direction;
  isTransitioning: boolean;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [direction, setDirection] = useState<Direction>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = (dir: Direction) => {
    if (isTransitioning) return; // 🔒 lock clicks

    setIsTransitioning(true);

    // 🧠 micro haptic delay
    setTimeout(() => {
      setDirection(dir);
    }, 100);

    // route change after wipe
    setTimeout(() => {
      navigate(dir === "artist" ? "/artist" : "/designer");
      setDirection(null);
      setIsTransitioning(false);
    }, 800); // 100ms delay + 700ms wipe
  };

  return (
    <TransitionContext.Provider
      value={{ startTransition, direction, isTransitioning }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("useTransition must be used inside TransitionProvider");
  return ctx;
};
