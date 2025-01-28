import { useState } from "react";
import CodeSample from "../CodeSample";
import Document from "../Document";
import useTooltip from "../hooks/useTooltip";

export default function Typewriter() {
  const [animKey, setAnimKey] = useState(0);
  const onTooltipClick = useTooltip();
  return (
    <Document>
      <div className="px-6 md:px-16 lg:px-24">
        <Document.Title>The Typewriter Effect</Document.Title>
        <Document.Content>
          
          <div className="my-2 flex flex-col gap-y-2">
            <Document.Subheader>Animation-steps</Document.Subheader>
            <span>This is a CSS property that defines how many steps the animation will take to complete respecting the duration.</span>
            <span>These steps will help our Typewriting effect look more natural, rather than too smooth.</span>
          </div>
          <Document.Subheader>Creating the Typewriting effect</Document.Subheader>
          <span>We will define a simple h1 header text and style it accordingly.</span>
          <ul className="list-disc list-inside">
            <li>overflow:hidden and white-space: nowrap; will ensure the element stays on a single line.</li>
            <li>The typewriting animation we defined will take 3.5s to complete with 40 steps during that time.</li>
            <li>The keyframes of the animation will expand the width of our text element to it's end.</li>
          </ul>
          <div className="p-2 w-fit">
            <CodeSample
              language={["CSS", "CSS", "HTML"]}
              pages={[
                `.typewriter h1 {
      overflow: hidden; 
      white-space: nowrap; 
      margin: 0 auto; 
      letter-spacing: 0.15em; 
      animation: 
          typing 3.5s steps(40, end), 
  }`,
                `@keyframes typing {
      from {
          width: 0;
      }
      to {
          width: 100%;
      }
  }`,
                `<span
  key={animKey}
  style={{
    "--animation-duration": "2s",
    "--animation-steps": "32",
    "--animation-delay": "0s",
    "--from-ch": "0ch",
    "--to-ch": "30ch",
  }}
>
  The result of the Typewriter Effect
</span>
`,
              ]}
            />
          </div>
          <span className="text-start text-sm">Here is the final result.</span>
          <div className="animate-typing  py-2 bg-card rounded-md flex justify-between select-none">
            <span
              key={animKey}
              style={{
                "--animation-duration": "2s",
                "--animation-steps": "32",
                "--animation-delay": "0s",
                "--from-ch": "0ch",
                "--to-ch": "30ch",
              }}
              className="inline-block justify-between animate-typing overflow-hidden whitespace-nowrap mx-auto"
            >
              The result of the Typewriter Effect
            </span>
            <svg onClick={() => setAnimKey((p) => p + 1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2 cursor-pointer ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
            </svg>
          </div>
        </Document.Content>
      </div>
    </Document>
  );
}
