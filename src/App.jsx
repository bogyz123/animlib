import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router";
import GradientBorders from "./components/docs/GradientBorders";
import GradientText from "./components/docs/GradientText";
import Parallax from "./components/docs/Parallax";
import Blur from "./components/docs/scrolling/Blur";
import FadeIn from "./components/docs/scrolling/FadeIn";
import Scrolling, { AnimationTimeline, IntersectionObserverAPI } from "./components/docs/scrolling/Scrolling";
import { SlideIn } from "./components/docs/scrolling/SlideIn";
import Typewriter from "./components/docs/Typewriter";
import Homepage from "./components/Homepage";
import NotFound from "./components/NotFound";
import Sidebar from "./components/Sidebar";
import ScrollingText from "./components/ScrollingText";
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
        parallax: {
          url: "parallax",
          text: "Parallax",
        },
        shinyText: {
          url: "scrolling-text",
          text: "Scrolling Text",
        },
        scrolling: {
          url: "scrolling",
          text: "Scrolling",
          children: {
            parallax: {
              url: "/parallax",
              text: "Parallax",
            },
            fadeIn: {
              url: "/scrolling/fade-in",
              text: "Fade In",
            },
            slideIn: {
              url: "/scrolling/slide-in",
              text: "Slide In"
            }
          },
        },
      },
    },
  });
  useEffect(() => {console.log(sidebarState)}, [sidebarState]);
  const expandSidebar = useCallback(() => {
    setSidebarState((prev) => ({
      ...prev,
      expanded: !prev.expanded,
    }));
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route element={<Sidebar sidebarState={sidebarState} expandSidebar={expandSidebar} setSidebarState={setSidebarState} />} path="/">
          <Route path="/typewriter" element={<Typewriter />} />
          <Route index element={<Homepage />} />
          <Route path="gradient-borders" element={<GradientBorders />} />
          <Route path="gradient-text" element={<GradientText />} />
          <Route path="parallax" element={<Parallax />} />
          <Route path="*" element={<NotFound sidebarState={sidebarState} expandSidebar={expandSidebar} setSidebarState={setSidebarState} />} />
          <Route path="scrolling-text" element={<ScrollingText />}/>
          <Route path="scrolling" element={<Scrolling />}>
            <Route path="fade-in" element={<FadeIn />} />
            <Route path="blur" element={<Blur />} />
            <Route path="animationtimeline" element={<AnimationTimeline />} />
            <Route path="intersectionobserver" element={<IntersectionObserverAPI />} />
            <Route path="slide-in" element={<SlideIn />}/>
     
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
