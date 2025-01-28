import React, { useEffect, useState } from 'react'
import Document from '../../Document'
import { Link, Outlet, useNavigate } from 'react-router'
import CodeSample from '../../CodeSample';
import bg from "../../../assets/bg.jpg";
import { useInView } from 'react-intersection-observer';

export default function Scrolling () {
    const nav = useNavigate();
  return (
    <Document>
        <Document.Title>Scrolling Animations</Document.Title>
            <Document.Explanation>
                <Document.Header>What are scrolling animations?</Document.Header>
                <p>Scrolling animations are effects that occur as you scroll down a webpage. They can enhance the user experience by adding visual interest and guiding the viewer’s attention. These animations can include elements that fade in, slide, or change in size as they come into view, making the content feel more dynamic and engaging.</p>
            </Document.Explanation>
        <Document.Content>
           <div className='md:my-2'>
           <Document.Subheader>Most common scroll animations:</Document.Subheader>
            <ul className='flex flex-col w-fit bg-card p-2 md:p-4 rounded-md'>
                <Link className='transition-all duration-300 hover:bg-purple-800 rounded-md p-2' to="fade-in">
                    <span>Fade In</span>
                    <span> - Elements gradually become visible as you scroll down.</span>
                </Link>
                <Link className='transition-all duration-300 hover:bg-purple-800 rounded-md p-2' to="slide-in">
                    <span>Slide In</span>
                    <span> - Elements slide in from the left, right, top, or bottom.</span>
                </Link>
                <Link className='transition-all duration-300 hover:bg-purple-800 rounded-md p-2' to="/parallax">
                    <span>Parallax Scrolling</span>
                    <span> - Background images move slower than foreground elements, creating a 3D effect.</span>
                </Link>
            </ul>
            <div className="">
                <Document.Subheader>How are they created?</Document.Subheader>
                <p>Scrolling animations are usually created with either one of these techniques:</p>
                <ul className='flex flex-col w-fit bg-card p-2 md:p-4 rounded-md'>
                <Link className='transition-all duration-300 hover:bg-purple-800 rounded-md p-2' to="intersectionobserver">
                    <span>Intersection Observer</span>
                    <span> - As you scroll, elements come in view, IntersectionObserver detects it and tells you.</span>
                </Link>
                <Link className='transition-all duration-300 hover:bg-purple-800 rounded-md p-2' to="animationtimeline">
                    <span>animation-timeline (CSS)</span>
                    <span> - Animations are based on time, this property lets you change that to scroll or view.</span>
                </Link>
            </ul>
            </div>
           </div>
           <div className='flex flex-col '>
            <Outlet />
           </div>
           <div className="min-h-screen"></div>
        </Document.Content>
    </Document>
  )
}
export const AnimationTimeline = () => {
    const blurMessages = ["Animlib", "Animation", "Timeline", "Example", "Coded", "By", "Bogdan"];
    const colors = ["red", "blue", "purple"];
    return (
        <>
        <Document.Header>animation-timeline (Experimental ⚠️)</Document.Header>
        <div className='text-gray-300'>
        <span>is a relatively new CSS property that lets you define animations that play based on the <span className='text-green-500'>scroll position</span> or if the element <span className='text-green-500'>is in view</span>.</span>
        <div className='w-fit'>
        <CodeSample language={["CSS", "CSS"]} pages={[`  animation: fade forwards;
  animation-timeline: scroll();
  animation-range-start: 20%
  animation-range-end: 70%;`, `@keyframes fade { 
  from { opacity: 0 }
  to { opacity: 1 }
}`]}/>
        
        </div>
        <p>In the example above we declared a <span className="text-green-500">fade animation</span> that will play as we scroll.</p>
        <p>It will start when the element is 20% in the viewport and will end when it's 70% in the viewport.</p>
        <p>Here's a more complex animation using animation-timeline.</p>
        <div className='flex flex-col text-center h-screen justify-around gap-20 my-24'>
            {blurMessages.map((msg) => <div key={msg} className="text-2xl md:text-5xl  uppercase animate-blur" style={{textShadow: '5px 2px 1px black'}}>{msg}</div>)}
        </div>
        <div className='flex flex-col gap-2  h-screen justify-around'>
            {Array(8).fill("AnimLib").map((item, index) => <div key={index} style={{backgroundColor: colors[index % colors.length]}} className={`rounded-md flex flex-col text-center justify-center items-center bg-purple-500 w-[40%] h-[100px] animate-test text-2xl`}>{item}</div>)}
        </div>
        <div className='animate-zoomBg relative w-full h-screen  bg-center bg-cover rounded-md' style={{backgroundImage: `url(${bg})`}}>
            <p className='absolute left-1/2 -translate-x-1/2 top-1/2 sans text-5xl'>AnimLib</p>
        </div>
        <div className=" text-center text-4xl md:text-5xl sans uppercase">Ta-daa! (:</div>
        </div>
        </>
    )
}
export const IntersectionObserverAPI = () => {
    const [ref, inView] = useInView();
    return (
        <>
        <Document.Header>IntersectionObserver</Document.Header>
        <span>is a JavaScript API to observe when elements enter or leave the viewport.</span>
        <span>The goal is when the element gets in the view, we apply it a class that has our animation.</span>
        <div className='w-fit'>
            <CodeSample language={["JavaScript", "CSS"]} pages={[`
import React from 'react';
import { useInView } from 'react-intersection-observer';

function IntersectionObserverExample() {
  const { ref, inView } = useInView();

  return (
    <div>
      <div>I AM THE TARGET ELEMENT</div>
      <div
      className='$ {inView ? 'animated-observer' : ''}'
        ref={ref}
       / >
    </div>
  );
}

export default IntersectionObserverExample;
`, `.animated-observer {
  animation: animate-observer .5s linear both ;
}
@keyframes animate-observer {
  from {
    transform: skew(30deg) translateX(-100%);

  }
  to {
    transform: translateX(0) skew(0);
  }
}`]}/>
        </div>
        <p>In the example above, we used a library called <span className='text-green-500'>react-intersection-observer</span> to make the process more clear.</p>
        <p>We destructured ref & inView from useInView() hook provided by the library.</p>
        <p>Then, we conditionally applied the class 'animated-observer' that contains a dashing animation.</p>
        <span className='my-4'>Here's what they mean:</span>
        <ul className='text-sm bg-card w-fit rounded-md p-2'>
            <li>
                <code>ref - We attach it to the element we want to observe</code>
            </li>
            <li>
                <code>inView - It returns us a boolean indicating if the element with the ref is in view or not</code>
            </li>
        </ul>
        <p>Scroll down the page to see how the element will animate when inView becomes true!</p>
        <span>
        {`const [ref, inView] = useInView({ threshold: 0.5} ) // `} 
        <span className='text-green-500'>Becomes true when the element is at least 50% visible.</span>
        </span>
        <div className='flex flex-col  min-h-screen'>
            <div ref={ref} className={`px-4 py-8 rounded-md bg-card w-fit my-auto outline outline-white shadow-xl font-inter uppercase ${inView ? 'animated-observer' : ''}`}>I am the target element!</div>
        </div>
        </>
    )
}
