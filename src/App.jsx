import { useCallback, useState } from "react";
import { HashRouter, Route, Routes } from "react-router";
import ButtonsIndex from "./components/docs/buttons/ButtonsIndex";
import GradientBorders from "./components/docs/GradientBorders";
import GradientText from "./components/docs/GradientText";
import Parallax from "./components/docs/Parallax";
import Blur from "./components/docs/scrolling/Blur";
import FadeIn from "./components/docs/scrolling/FadeIn";
import Scrolling, { AnimationTimeline, IntersectionObserverAPI } from "./components/docs/scrolling/Scrolling";
import { SlideIn } from "./components/docs/scrolling/SlideIn";
import Typewriter from "./components/docs/Typewriter";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import ScrollingText from "./components/ScrollingText";
import Sidebar from "./components/Sidebar";
import "./index.css";

function App() {
  const [sidebarState, setSidebarState] = useState({
    expanded: false,
    animations: {
      visible: false,
      items: {
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
              text: "Slide In",
            },
            shinyText: {
              url: "scrolling-text",
              text: "Scrolling Text",
            },
          },
        },
        gradient: {
          url: "/",
          text: "Gradients",
          children: {
            gradientText: {
              url: "gradient-text",
              text: "Gradient Text"
            },
            gradientBorders: {
              url: "gradient-borders",
              text: "Gradient Borders",
            }
          }
        },
        typewriter: {
          url: "/typewriter",
          text: "Typewriter",
        },
        parallax: {
          url: "parallax",
          text: "Parallax",
        },
        buttons: {
          url: "/buttons",
          text: "Buttons",
        }
      },
    },
  });


  const expandSidebar = useCallback(() => {
    setSidebarState((prev) => ({
      ...prev,
      expanded: !prev.expanded,
    }));
  }, []);

  const routes = [
    { path: "/", component: <Homepage /> },
    {path: "/buttons", component: <ButtonsIndex />},
    { path: "/typewriter", component: <Typewriter /> },
    { path: "/gradient-borders", component: <GradientBorders /> },
    { path: "/gradient-text", component: <GradientText /> },
    { path: "/parallax", component: <Parallax /> },
    { path: "/scrolling-text", component: <ScrollingText /> },
    {
      path: "/scrolling",
      component: <Scrolling />,
      children: [
        { path: "/scrolling/fade-in", component: <FadeIn /> },
        { path: "/scrolling/blur", component: <Blur /> },
        { path: "/scrolling/animationtimeline", component: <AnimationTimeline /> },
        { path: "/scrolling/intersectionobserver", component: <IntersectionObserverAPI /> },
        { path: "/scrolling/slide-in", component: <SlideIn /> },
        { path: "*", component: <NotFound /> },
      ],
    },
  ];

  return (
    <HashRouter>
      <Navigation />
      <Sidebar
        sidebarState={sidebarState}
        expandSidebar={expandSidebar}
        setSidebarState={setSidebarState}
      />
      <Routes>
        {routes.map((route) => {
          return (
            
              <Route key={route.path} path={route.path} element={route.component}>
              {route.children &&
                route.children.map((child, index) => (
                  <Route key={index} path={child.path} element={child.component} />
                ))}
              </Route>
             
            
          );
        })}
      </Routes>
    </HashRouter>
  );
}

export default App;
