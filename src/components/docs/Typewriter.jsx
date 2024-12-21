import { useState } from "react";
import CodeSample from "../CodeSample";
import Document from "../Document";

export default function Typewriter() {
  const [animKey, setAnimKey] = useState(0);
  return (
    <Document>
      <div className="px-6 md:px-16 lg:px-24">
        <Document.Title>The Typewriter Effect</Document.Title>
        <div className="w-full bg-gray-500 h-0.5 my-2"></div>
        <Document.Content>
          <p>The typewriter effect can be created without JavaScript, just plain CSS.</p>
          <p>First off, we will create an animation from width:0 to width:100% so it gives a typing effect, it will take 4 seconds to complete.</p>
          <div className="p-2 ">
            <CodeSample>
              {`
  @keyframes typing {
      from {
          width: 0;
      }
      to {
          width: 100%;
      }
  }
  `}
            </CodeSample>
          </div>
          <div className="text-sm ">Now for the text itself, apply the following styles.</div>
          <div className="p-2">
            <CodeSample>
              {`
  .typewriter h1 {
      overflow: hidden; 
      white-space: nowrap; 
      /* Keeps the content on a single line */
      margin: 0 auto; 
      /* Centers the text */
      letter-spacing: 0.15em; 
      /* Adjust as needed */
      animation: 
          typing 3.5s steps(40, end), 
  }
  `}
            </CodeSample>
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
                "--to-ch": "28ch",
              }}
              className="inline-block justify-between animate-typing overflow-hidden whitespace-nowrap mx-auto"
            >
              The result of the Typewriter Effect
            </span>
            <svg onClick={() => setAnimKey((p) => p + 1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2 cursor-pointer hover:fill-green-900">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
            </svg>
          </div>
        </Document.Content>
      </div>
    </Document>
  );
}
