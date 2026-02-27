import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplitLanding from "./pages/SplitLanding";
import Artist from "./pages/Artist";
import Designer from "./pages/Designer";
import { TransitionProvider } from "./context/TransitionContext";
import ColorWipe from "./components/ColorWipe";

function App() {
  return (
    <Router>
      <TransitionProvider>
        <ColorWipe />
        <Routes>
          <Route path="/" element={<SplitLanding />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/designer" element={<Designer />} />
        </Routes>
      </TransitionProvider>
    </Router>
  );
}

export default App;
