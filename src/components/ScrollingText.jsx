import { useEffect, useState } from "react";
import CodeSample from "./CodeSample";
import Document from "./Document";

export default function ScrollingText() {
    const [samplePage, setSamplePage] = useState(0);
    // this variable determines what page is shown on <CodeSample /> the user can click a button and it will switch to page 2 which shows css of this animation
    // this is optional for CodeSample component, if its omitted it will just fallback to page 0.
  return (
    <Document>
      <Document.Title>Scrolling Text Animation</Document.Title>
      <Document.Content>
        <Document.Explanation>
       <div className="flex">
           <p>We've all seen this animation before, whether it's</p>
            <div className="flex h-10 pt-2 rounded-md  box-content">
              <div className="overflow-hidden relative -mt-2 text-red-500">
                <span className="block h-full pl-1.5 animate-moveUp">this website.</span>
                <span className="block h-full pl-1.5 animate-moveUp">portfolio website.</span>
                <span className="block h-full pl-1.5 animate-moveUp">designer website.</span>
                <span className="block h-full pl-1.5 animate-moveUp">blog website.</span>
                <span className="block h-full pl-1.5 animate-moveUp">this website.</span>
              </div>
           </div>
      </div> 
      <div>But how do we create it...? Does it require <span className="text-orange-500">JavaScript?</span> Is it advanced <span className="text-red-500">CSS?</span></div>
      <div>Luckily, no, it requires no JavaScript and no advanced CSS either! Just a bit of logic and creativity. Here's how we'd make this animation.</div>
        </Document.Explanation>
        <Document.Header classes={["mt-4"]}>
          The idea
        </Document.Header>
        <ul>
            <li>1. Create a container for the list of scrolling texts.</li>
            <li>2. Create the texts as span elements.</li>
            <li>3. Create an animation on children texts where they translateY throughout the animation.</li>
        </ul>
        <div className="w-fit">
  <CodeSample 
    pages={[`<div className="flex">
      <p>We've all seen this animation before, whether it's</p>
      <div className="flex h-10 pt-2 rounded-md box-content">
        <div className="overflow-hidden relative -mt-2 text-red-500">
          <span className="block h-full pl-1.5 animate-moveUp">this website.</span>
          <span className="block h-full pl-1.5 animate-moveUp">portfolio website.</span>
          <span className="block h-full pl-1.5 animate-moveUp">designer website.</span>
          <span className="block h-full pl-1.5 animate-moveUp">blog website.</span>
          <span className="block h-full pl-1.5 animate-moveUp">this website.</span>
        </div>
      </div>
    </div>`, `.animate-moveUp{
  animation: moveUp 4s infinite;
}
@keyframes moveUp {
  10% {
    transform: translateY(-102%);
  }
  25% {
    transform: translateY(-100%);
  }
  35% {
    transform: translateY(-202%);
  }
  50% {
    transform: translateY(-200%);
  }
  60% {
    transform: translateY(-302%);
  }
  75% {
    transform: translateY(-300%);
  }
  85% {
    transform: translateY(-402%);
  }
  100% {
    transform: translateY(-400%);
  }
}`]}
    language={['JSX', 'CSS']} 
    pageIndexToShow={samplePage}
  />
  
</div>
<div>
    In the JSX code above, we created a parent element that contains <span className="text-red-300">everything </span>and is a inline flexbox.
    <div className="mt-2 md:mt-1">Then we made a {`<p />`} that is the fixed text you see and under that we made a container that contains every text that will scroll.</div>
    <div className="mt-2">Every text piece will have an animation that will move itself up, revealing the next text in line.</div>
    <div className="mt-2"><span className="text-red-500 cursor-pointer" onClick={() => setSamplePage((prev) => prev != 1 && 1)}>Click here</span> to show the CSS for this or manually switch in the Code Sample above.</div>
    <div>
    </div>
</div>


      </Document.Content>
    </Document>
  );
}
