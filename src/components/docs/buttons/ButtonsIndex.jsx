import { useState } from "react";
import Document from "../../Document";
import CodeSample from "../../CodeSample";

export default function ButtonsIndex(){
    const [currentButtonIndex, setCurrentButtonIndex] = useState(0);
    const handleClick = (e) => {
        const index = parseInt(e.target?.getAttribute("data-index"));
        if (index !== currentButtonIndex) setCurrentButtonIndex(index);
    }
    
 
return (
    <Document>
        <Document.Title>Button Animations</Document.Title>
        <Document.Content>
            <Document.Explanation>
            <div>Buttons, one of the most used elements on the web, they can of course be styled a million different ways! <br/> From simple designs to more interactive ones, buttons serve as essential elements in guiding users through a site.</div>
            <div>In this section, we'll explore some cool CSS tricks to make your buttons shine!</div>
            </Document.Explanation>
            <div className="my-2 flex w-full gap-x-4 p-4 ">
            <button onClick={handleClick} data-index={0} className="cursor-pointer hover:shadow-none hover:translate-y-[5px] transition-all duration-300 rounded-full bg-card w-max p-3 md:p-4 border border-purple-600 shadow-lg shadow-purple-800">AnimLib</button>
            <button onClick={handleClick} data-index={1}  className="bg-card p-3 md:p-4 shine-element cursor-pointer">Apply here!</button>
            </div>
            <div className="w-fit">
               {currentButtonIndex === 0 ? 
               <>
                <CodeSample pages={[`<button
  onClick={handleClick}
  className="cursor-pointer hover:shadow-none hover:translate-y-[5px] transition-all duration-300 
 rounded-full bg-card w-max p-3 md:p-4 border border-purple-600 shadow-lg shadow-purple-800">
  AnimLib
</button>
`]} language={["JSX"]} />
<span>For this button, on hover we translate Y to 5 px down and we remove the initial box-shadox we set.</span>
               </> : currentButtonIndex === 1 ? 
             <div className="max-w-full md:max-w-1/2">
             <CodeSample language={["JSX", "CSS", "CSS Animation"]} pages={[
    `<button onClick={handleClick} id="shineBtn">Apply here!</button>`,
    `#shineBtn {
     border: 1px solid purple;
     border-radius: 50px;
     overflow: hidden;
     position: relative;
}

    #shineBtn::before {
    content: "";
    background-image: linear-gradient(120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%);
    width: 50px;
    position: absolute;
    height: 100%;
    top: 0;
    left: -100px;
}`
              ,`#shineBtn:hover::before {
  animation: shine 1.5s infinite ease-out;

}
@keyframes shine {
  0% {
    left: -100px;
  }
  60% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
} `]} />


<div style={{border:'none', borderRadius:'0'}} className="hover:scale-105 transition-transform duration-150 ease shine-element">As for this button, a little bit more CSS is needed. We do styling just like the button before but here we use a before pseudo element that is a 120deg skewed gradient.</div>

<div style={{border:'none', borderRadius:'0'}} className="hover:scale-105 transition-transform duration-150 ease shine-element">The pseudo element should be moved to -100px and the parent should be overflow hidden so it's hidden on the left side, and with animation, we make it move to the end of the parent.</div>
<div style={{border:'none', borderRadius:'0'}} className="hover:scale-105 transition-transform duration-150 ease shine-element">The animation will run infinitely and will start at it's original position (-100px) so it doesnt look like an animation rather an endless shining loop. All this is happening on hover of the parent element.</div>

             </div>
              
             : "a"
               }
            </div>

        </Document.Content>
    </Document>
)
}