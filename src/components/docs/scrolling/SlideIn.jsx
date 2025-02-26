import React from 'react'

export const SlideIn = () => {
  const classNames = "bg-card p-4 rounded-md animate-timelineInline";
  return (
    
   <>
    <div className='flex flex-col p-2 gap-4  h-screen justify-around '>
    <div className='flex justify-around gap-4 animated-timelineDashIn'>
    <div className="bg-card p-4 rounded-md relative  w-1/2 h-[100px]">
      <div
        className="bg-[conic-gradient(red,blue,purple,red)] absolute inset-0 rounded-md -z-10 -m-1"
      ></div>
    </div>
    <div className="bg-card p-4 rounded-md relative  w-full h-[100px]">
      <div
        className="bg-[conic-gradient(red,blue,purple,red)] absolute inset-0 rounded-md -z-10 -m-1"
      ></div>
    </div>
    
    </div>
    <div className='flex justify-around gap-4 animated-timelineDashIn'>
    <div className="bg-card p-4 rounded-md relative  w-full h-[100px]">
      <div
        className="bg-[conic-gradient(red,blue,purple,red)] absolute inset-0 rounded-md -z-10 -m-1"
      ></div>
    </div>
    <div className="bg-card p-4 rounded-md relative  w-1/2 h-[100px]">
      <div
        className="bg-[conic-gradient(red,blue,purple,red)] absolute inset-0 rounded-md -z-10 -m-1"
      ></div>
    </div>

    
    </div>
    <div className='flex justify-around gap-4 animated-timelineDashIn'>
    <div className="bg-card p-4 rounded-md relative  w-1/2 h-[100px]">
      <div
        className="bg-[conic-gradient(red,blue,purple,red)] absolute inset-0 rounded-md -z-10 -m-1"
      ></div>
    </div>
    <div className="bg-card p-4 rounded-md relative  w-full h-[100px]">
      <div
        className="bg-[conic-gradient(red,blue,purple,red)] absolute inset-0 rounded-md -z-10 -m-1"
      ></div>
    </div>
    

    </div>
    <div className='flex justify-around gap-4 animated-timelineDashIn'>
    <div className="bg-card p-4 rounded-md relative  w-full h-[100px]">
      <div
        className="bg-[conic-gradient(red,blue,purple,red)] absolute inset-0 rounded-md -z-10 -m-1"
      ></div>
    </div>
    <div className="bg-card p-4 rounded-md relative  w-1/2 h-[100px]">
      <div
        className="bg-[conic-gradient(red,blue,purple,red)] absolute inset-0 rounded-md -z-10 -m-1"
      ></div>
    </div>
    </div>
    </div>
    <div className="bg-inherit flex overflow-hidden p-4 gap-x-2  min-w-[225px] w-full md:w-[70%] md:mx-auto lg:w-1/2">
     {Array.from({length: 16}, (_, index) => index).map((i) => {
      if (i % 2 === 0) {
        return <div className={`${classNames} ml-1`}>Lorem</div>
      }
      else {
        return <div className={classNames}>Ipsum</div>
      }
     })}
    </div>
    <div className="bg-inherit flex overflow-hidden p-4 gap-x-2  min-w-[225px] w-full md:w-[70%] md:mx-auto lg:w-1/2">

      {Array.from({length: 16}, (_, index) => index).map((i) => {
      if (i % 2 === 0) {
        return <div className={classNames} data-direction="right">Lorem</div>
      }
      else {
        return <div className={classNames} data-direction="right">Ipsum</div>
      }
     })}
    </div>
   </>
  )
}
