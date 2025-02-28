import React, { useEffect, useMemo, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import "../index.css";
import Contact from "./Contact";
import useModalBounds from "./hooks/useModalBounds";
import { useCallback } from "react";


export default function Sidebar({ sidebarState, expandSidebar, setSidebarState }) {
  const nav = useNavigate();
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState({ ...sidebarState.animations.items });
  const [visibleItems, setVisibleItems] = useState([]);

  const [isContactVisible, setIsContactVisible] = useState(false);
  const { ref: sidebarRef } = useModalBounds(() => setSidebarState((prev) => ({...prev, expanded: false})), sidebarState.expanded);
  const { ref: contactRef } = useModalBounds(() => setIsContactVisible(false), isContactVisible);


  const items = useMemo(() => {
    const searchQuery = search.toLowerCase();
    return Object.values(sidebarState.animations.items).filter((item) => item.text.toLowerCase().includes(searchQuery));
  }, [search, sidebarState.animations.items]);

  const addItem = useCallback((item) => {
    setVisibleItems((prev) => 
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  });
  const toggleContact = () => {
    setIsContactVisible(!isContactVisible);
  }


  useEffect(() => {
    setFilteredItems({ ...items });
    if (!sidebarState.animations.visible && items.length > 0) {
      setSidebarState((prev) => ({
        ...prev,
        animations: {
          ...prev.animations,
          visible: true,
        },
      }));
    }
  }, [search]);

  const renderItems = (items) => {
    return Object.keys(items).map((key) => {
      const item = items[key];
      return (
        <div key={key} className="p-1">
          <div onClick={() => addItem(item.url)} className="cursor-pointer hover:text-gray-300 flex justify-between items-center">
            <Link to={item.url} aria-label={`Navigate to ${item.text}`}>{item.text}</Link>
            {item.children && (
              <span className="text-xl"  aria-label={`Toggle ${item.text} children`}>
                {visibleItems.includes(item.url) ? '-' : '+'} 
              </span>
              
            )}
          </div>
          
          {item.children && visibleItems.includes(item.url) && (
            <div className="flex-col pl-2 flex ">{renderItems(item.children)}</div>
          )}
        </div>
      );
    });
  };

  return (
    <div>
      
      <div ref={sidebarRef} className={` z-50 transition-all duration-300 ease-in-out p-4 lg:p-6 inset-0 border-r fixed border-gray-700 text-white h-full flex flex-col bg-dark text-sm md:text-base w-fit ${sidebarState.expanded ? "transform translate-x-[0%]" : "transform -translate-x-[100%]"}`}>
        <div className="font-bold mb-2 cursor-pointer" onClick={() => nav("/")}>
          AnimLib
          
        </div>
       
      
        <div className="relative">
          {search && <span className="absolute right-0 -top-5 text-xs">{Object.keys(filteredItems).length} Results</span>}
          <input 
            type="text" 
            className="rounded-xl text-white px-4 py-1.5 bg-inherit border text-sm" 
            placeholder="Search docs..." 
            maxLength={20} 
            value={search} 
            onChange={(e) => setSearch(e.currentTarget.value)} 
            aria-label="Search documentation"
          />
          <div className="w-fit absolute right-1 top-[5px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-5 md:size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>
        <p className="py-3">Documentation</p>
        <div className="w-full bg-gray-600 h-0.5 mb-5" />
        <div className="flex-grow overflow-y-auto flex flex-col justify-between">
          <ul className="flex flex-col gap-y-2 select-none">
            <li className="flex flex-col justify-between">
              <div
                className="flex justify-between cursor-pointer "
                onClick={() =>
                  setSidebarState((prev) => ({
                    ...prev,
                    animations: {
                      ...prev.animations,
                      visible: !prev.animations.visible,
                    },
                  }))
                }
              >
                <p className="hover:border-b-2 w-full">Animations</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>

             {Object.keys(filteredItems).length > 0 &&  <div className={`my-2 p-2 border-card rounded-md w-full border ${sidebarState.animations.visible ? "visible block" : "hidden"}`}>
                <ul className="text-sm md:text-base">{renderItems(filteredItems)}</ul>
              </div>}
            </li>
          </ul>
          <div className="bg-purple-500 text-center rounded-md  p-2 cursor-pointer hover:bg-purple-600 flex relative overflow-hidden group" onClick={toggleContact}>
            <span className="mx-auto">Contact Me</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 rotate-180 absolute right-2 translate-x-[30px] group-hover:translate-x-[0] transition-transform duration-150 ease">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>

          </div>
          <div className={`absolute md:h-[20%] h-[10%] top-1/2 translate-y-[-50%] flex items-center justify-center right-0 cursor-pointer border-gray-700 ${sidebarState.expanded && "visible"}`} onClick={expandSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="fixed top-1/2 left-0 z-50">
        <div className={`top-1/2 right-4 cursor-pointer ${sidebarState.expanded ? "hidden" : "visible"} px-2 md:pl-4 w-fit h-[70%] flex items-center my-auto`} onClick={expandSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
          </svg>
        </div>
      </div>
      <Outlet />
    
      {isContactVisible && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
    <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleContact}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

    </div>
    <div className={`w-[80%]  rounded-lg shadow-lg transition-transform duration-500 ease-out starting:-translate-x-[100vw]`} ref={contactRef}>
      <Contact />
    </div>
  </div>
)}

    </div>
  );
}