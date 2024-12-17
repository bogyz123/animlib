import { useCallback, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import GradientBorders from "./components/docs/GradientBorders";
import GradientText from "./components/docs/GradientText";
import Typewriter from "./components/docs/Typewriter";
import Homepage from "./components/Homepage";
import NotFound from "./components/NotFound";
import Sidebar from "./components/Sidebar";
import "./index.css";

function App() {
  const [sidebarState, setSidebarState] = useState({
    expanded: false,
    animations: {
      visible: false,
      items: {
        typewriter: {
          url: "/typewriter",
          text: "Typewriter",
        },
        gradientText: {
          url: "gradient-text",
          text: "Gradient Text",
        },
        gradientBorders: {
          url: "gradient-borders",
          text: "Gradient Borders",
        },
      },
    },
    designs: {
      visible: false,
    },
  });
  const expandSidebar = useCallback(() => {
    setSidebarState((prev) => ({
      ...prev,
      expanded: !prev.expanded,
    }));
  }, []);

  return (
    <BrowserRouter basename="animlib">
      <Routes>
        <Route element={<Sidebar sidebarState={sidebarState} expandSidebar={expandSidebar} setSidebarState={setSidebarState} />} path="/">
          <Route path="/typewriter" element={<Typewriter />}></Route>
          <Route index element={<Homepage />}></Route>
          <Route path="gradient-borders" element={<GradientBorders />} />
          <Route path="gradient-text" element={<GradientText />} />
          <Route path="*" element={<NotFound sidebarState={sidebarState} expandSidebar={expandSidebar} setSidebarState={setSidebarState} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
