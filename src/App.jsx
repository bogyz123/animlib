import { BrowserRouter, Route, Routes } from "react-router";
import Sidebar from "./components/Sidebar";
import "./index.css";
import Homepage from "./components/Homepage";
import Typewriter from "./components/Typewriter";
import { useCallback, useState } from "react";
import GradientBorders from "./components/GradientBorders";

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [sidebarState, setSidebarState] = useState({
    animations: false,
    designs: false,
  });
  const expandSidebar = useCallback(() => {
    setSidebarExpanded((prev) => !prev);
  }, []);
  const LoadingScreen = () => {
    return (
      <div className="flex w-full h-screen bg-teal-900">
        <p>x</p>
      </div>
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Sidebar sidebarExpanded={sidebarExpanded} sidebarState={sidebarState} expandSidebar={expandSidebar} setSidebarState={setSidebarState} />} path="/">
          <Route path="/typewriter" element={<Typewriter isMenuOpened={sidebarExpanded} />}></Route>
          <Route index element={<LoadingScreen />}></Route>
          <Route path="gradient-borders" element={<GradientBorders />} />
          <Route path="gradient-text" element={<p>a</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
