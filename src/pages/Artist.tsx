import { useTransition } from "../context/TransitionContext";

const Artist = () => {
  const { startTransition } = useTransition();

  return (
    <div className="h-screen bg-[#ff6d06] flex flex-col items-center justify-center">
      <h1 className="text-6xl font-semibold mb-8">Artist</h1>

      <button
        onClick={() => startTransition("designer")}
        className="text-sm underline"
      >
        Switch to Designer
      </button>
    </div>
  );
};

export default Artist;
