import { motion, AnimatePresence } from "framer-motion";
import { useTransition } from "../context/TransitionContext";
import useIsMobile from "../hooks/useIsMobile";

const ColorWipe = () => {
  const { direction } = useTransition();
  const isMobile = useIsMobile();

  if (!direction) return null;

  const isArtist = direction === "artist";

  const initial = isMobile
    ? {
        height: 0,
        top: isArtist ? 0 : "auto",
        bottom: !isArtist ? 0 : "auto",
      }
    : {
        width: 0,
        left: isArtist ? 0 : "auto",
        right: !isArtist ? 0 : "auto",
      };

  const animate = isMobile
    ? { height: "100%" }
    : { width: "100%" };

  return (
    <AnimatePresence>
      <motion.div
        initial={initial}
        animate={animate}
        exit={{}}
        transition={{
          duration: 0.7,
          ease: [0.4, 0, 0.2, 1],
        }}
        className={`fixed z-[9999] ${
          isMobile ? "w-full" : "h-full"
        } ${
          isArtist ? "bg-[#ff6d06]" : "bg-[#311505]"
        }`}
      />
    </AnimatePresence>
  );
};

export default ColorWipe;
