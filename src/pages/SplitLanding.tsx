import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Direction = "artist" | "designer" | null;

const SplitLanding = () => {
  const navigate = useNavigate();
  const [direction, setDirection] = useState<Direction>(null);

  const handleClick = (dir: Direction) => {
    if (!dir) return;

    setDirection(dir);

    setTimeout(() => {
      navigate(dir === "artist" ? "/artist" : "/designer");
    }, 700); // must match animation duration
  };

  return (
    <div className="h-screen w-full flex relative overflow-hidden">

      {/* LEFT — ARTIST */}
      <div
        onClick={() => handleClick("artist")}
        className="w-1/2 bg-[#ff6d06] cursor-pointer flex items-center justify-center"
      >
        <h1 className="text-black text-6xl font-semibold">
          Artist
        </h1>
      </div>

      {/* RIGHT — DESIGNER */}
      <div
        onClick={() => handleClick("designer")}
        className="w-1/2 bg-[#311505] cursor-pointer flex items-center justify-center"
      >
        <h1 className="text-white text-6xl font-semibold">
          Designer
        </h1>
      </div>

      {/* OVERLAY TRANSITION */}
      <AnimatePresence>
        {direction && (
          <motion.div
            initial={{
              width: 0,
              left: direction === "artist" ? 0 : "auto",
              right: direction === "designer" ? 0 : "auto",
            }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className={`absolute top-0 h-full z-50 ${
              direction === "artist" ? "bg-[#ff6d06]" : "bg-[#311505]"
            }`}
          />
        )}
      </AnimatePresence>

    </div>
  );
};

export default SplitLanding;