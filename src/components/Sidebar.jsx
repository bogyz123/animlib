import { useEffect, useMemo, useState } from "react";
import "../index.css";
import { Outlet, useNavigate } from "react-router";

export default function Sidebar({ sidebarState, expandSidebar, setSidebarState }) {
  const nav = useNavigate();
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState({ ...sidebarState.animations.items });

  const items = useMemo(() => {
    // here whenever the user searches for something, we try to find it and return the object holding the search query, it's memoized for performance
    const searchQuery = search.toLowerCase();
    return Object.values(sidebarState.animations.items).filter((item) => item.text.toLowerCase().includes(searchQuery));
  }, [search]);

  useEffect(() => {
    // whenever search changes,
    setFilteredItems({ ...items });
    if (!sidebarState.animations.visible && items.length > 0) {
      setSidebarState((prev) => ({
        ...prev,
        animations: {
          ...prev.animations,
          visible: !prev.animations.visible,
        },
      }));
    }
  }, [search]);

  return (
    <>
      <div className={`z-50 transition-all duration-300 ease-in-out p-4 lg:p-6 inset-0 border-r fixed border-gray-700 font-inter text-white h-full flex flex-col bg-dark text-sm md:text-base w-fit ${sidebarState.expanded ? "transform translate-x-[0%] " : " transform -translate-x-[100%]"}`}>
        <div className="font-bold mb-2 cursor-pointer" onClick={() => nav("/")}>
          AnimLib
        </div>
        <div className="relative">
          {search && <span className="absolute right-0 -top-5 text-xs">{Object.keys(filteredItems).length} Results</span>}
          <input type="text" className="rounded-xl text-white px-4 py-1.5 bg-inherit border text-sm" placeholder="Search docs..." maxLength={20} value={search} onChange={(e) => setSearch(e.currentTarget.value)} />

          <div className=" w-fit absolute right-1 top-[5px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-5 md:size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>
        <p className="py-3">Documentation</p>
        <div className="w-full bg-gray-600 h-0.5 mb-5"></div>
        <div className="flex-grow overflow-y-auto flex flex-col justify-between">
          <ul className=" flex flex-col gap-y-2 select-none  ">
            <li className="flex flex-col justify-between">
              <div
                className="flex justify-between cursor-pointer  "
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

              <div className={`my-2 p-2 border-card  rounded-md w-full  border  ${sidebarState.animations.visible ? "visible block " : "hidden"}`}>
                <ul className="text-xs md:text-sm">
                  {Object.keys(filteredItems).map((key) => (
                    <li className="cursor-pointer  p-1  hover:bg-card transition-colors duration-100 hover:opacity-100 opacity-80" key={key} onClick={() => nav(filteredItems[key].url)}>
                      {filteredItems[key]?.text}
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="flex flex-col justify-between ">
              <div className="flex w-full justify-between cursor-pointer " onClick={() => setSidebarState((prev) => ({ ...prev, designs: !prev.designs }))}>
                <p className="hover:border-b-2 w-full">Designs</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              {sidebarState.designs && <div>Designs</div>}
            </li>
          </ul>
          <div className="bg-purple-500 text-center rounded-md p-1 md:p-2 cursor-pointer hover:bg-purple-600">Contact Me</div>
          <div className={`absolute  md:h-[20%] h-[10%]  top-1/2 translate-y-[-50%]  flex items-center justify-center right-0 cursor-pointer border-l border-gray-700   ${sidebarState.expanded && "visible"}`} onClick={expandSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="fixed top-1/2 left-0  z-50">
        <div className={`top-1/2 right-4 cursor-pointer ${sidebarState.expanded ? "hidden" : "visible"}   px-2 md:pl-4 w-fit h-[70%] flex  items-center my-auto`} onClick={expandSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
          </svg>
        </div>
      </div>
      <Outlet />
    </>
  );
}
