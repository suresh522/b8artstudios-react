import { useTransition } from "../context/TransitionContext";

const Designer = () => {
  const { startTransition } = useTransition();

  return (
    <div className="h-screen bg-[#311505] flex flex-col items-center justify-center">
      <h1 className="text-6xl font-semibold mb-8">Designer</h1>

      <button
        onClick={() => startTransition("artist")}
        className="text-sm underline"
      >
        Switch to Artist.
      </button>
    </div>
  );
};

export default Designer;
