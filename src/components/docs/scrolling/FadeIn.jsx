import React, { useEffect } from "react";
import Document from "../../Document";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router";

export default function FadeIn() {
  const nav = useNavigate();
  const messages = [
    "Hello!",
    "I am animated!",
    "How did you do that?",
    "I used IntersectionObserver API.",
    "Can you teach me?",
    "Sure! Click on me (:",
  ];

  const refs = messages.map(() => useInView({ threshold: 0.5, triggerOnce: true })); 
  useEffect(() => {
    const scrollElement = document.querySelector(".first");
    if (scrollElement) {
      const bottom = scrollElement.offsetTop - scrollElement.offsetHeight;
      const pos = bottom - window.innerHeight;
      window.scrollTo({
        top: pos,
        behavior:'smooth'
      });
    }
  }, []);
  return (
    <>
      <Document.Header>Fade In</Document.Header>
      <span>Here is a fading-in animation made with IntersectionObserver API.</span>
      <div className="flex flex-col h-screen justify-around">
        {messages.map((message, index) => {
          const { ref, inView } = refs[index]; 

          return (
            <div
              key={index}
              onClick={index === messages.length-1 ? () => {
                nav("/scrolling/intersectionobserver");
              } : undefined}
              className={`bg-card rounded-md w-fit p-2 text-center ${
                index % 2 !== 0 ? "ml-auto" : ""
                
              } ${inView ? "opacity-100" : "opacity-0"} ${index === 0 && 'first'} transition-opacity duration-1000`}
              ref={ref} 
            >
              <p
                className="overflow-hidden whitespace-nowrap animate-typing"
                style={{
                  "--animation-duration": `1.5s`,
                  "--animation-steps": "32",
                  "--animation-delay": "0s",
                  "--from-ch": "0ch",
                  "--to-ch": `25ch`,
                }}
              >
                {message}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
