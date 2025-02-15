import { memo, useState, useEffect } from "react";

const CodeSample = memo(function CodeSample({ fontSize, pages, language, pageIndexToShow }) {
  const [copied, setCopied] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(pageIndexToShow || 0);

 useEffect(() => {
  setCurrentPageIndex(pageIndexToShow || 0);
}, [pageIndexToShow]);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);
 

  const next = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex((prev) => prev - 1);
    }
  };

  const copyCode = async (code) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
  };

  return (
    <div>
      <div className={`w-full flex bg-card rounded-md rounded-b-none justify-end translate-y-1 p-2`}>
        <div className={`absolute top-0 md:top-1 left-1/2 -translate-x-[50%] text-sm`} style={{ color: language?.[currentPageIndex] === "JavaScript" ? "orange" : "crimson" }}>
          {language?.[currentPageIndex]}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`cursor-pointer size-6 ${copied ? "hidden" : "block"}`} onClick={() => copyCode(pages?.[currentPageIndex])}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-6 ${copied ? "block animate-pulse" : "hidden"}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
      <div className={`max-h-[250px] scrollbars bg-card relative p-4 md:p-6 lg:p-7 rounded-md whitespace-pre-wrap max-w-[1150px] font-mono overflow-x-auto text-${fontSize} `}>
        <div className="animate-scale transition-transform duration-500 ease-in-out">
        <code key={currentPageIndex}>
          {pages && pages[currentPageIndex]}
        </code>
        </div>
      </div>
      <div className={`bg-card flex justify-between items-center rounded-md rounded-t-none -translate-y-1 p-2 `}>
       {pages && pages.length > 1 && (
  <div className="bg-card flex justify-between items-center rounded-md rounded-t-none -translate-y-1 p-2  ml-auto">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth="1.5" 
      stroke="currentColor" 
      className="size-6 cursor-pointer" 
      onClick={prev}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
    </svg>
    
    <span className="text-sm">{`${currentPageIndex + 1}/${pages.length}`}</span>
    
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth="1.5" 
      stroke="currentColor" 
      className="size-6 cursor-pointer" 
      onClick={next}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
    </svg>
  </div>
)}

      </div>
    </div>
  );
});
export default CodeSample;