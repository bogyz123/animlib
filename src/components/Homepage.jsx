import { useNavigate } from "react-router";
import "../index.css";
import Contact from "./Contact";

export default function Homepage() {
  const nav = useNavigate();
  return (
    <>
      <div className="w-full h-screen box-border flex text-white">
        <div className="w-full flex-grow text-sm md:text-base flex flex-col  ">
          <div className="flex flex-col  max-w-[90%] mx-auto p-2 md:p-5 ">
            <h1 className="font-bold text-base md:text-xl transition-transform">AnimLib | Animations | Designs</h1>
            <p className="text-gray-300">
              Learn the most common CSS animations, designs, practices in <span className="text-green-600">one place.</span>
            </p>
          </div>

          <div className="pt-5 pb-2 grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto gap-3 lg:gap-4 ">
            <div className="p-6 md:p-12 lg:p-14 relative group bg-card flex flex-col pointer-events-none md:pointer-events-auto  rounded-md transition-all duration-300  cursor-pointer justify-center items-center" onClick={() => nav("/typewriter")}>
              <div className="flex items-center justify-center absolute group-hover:top-6 transition-all duration-300 ease-in-out top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                <span
                  className="ml-2 font-bold  animate-typing whitespace-nowrap w-fit overflow-hidden text-base md:text-lg lg:text-xl"
                  style={{
                    "--animation-duration": "2s",
                    "--animation-steps": "64",
                    "--animation-delay": "0s",
                    "--from-ch": "0ch",
                    "--to-ch": "15ch",
                  }}
                >
                  Typewriter Effect
                </span>
              </div>
              <div className="w-full opacity-0 transition-all duration-300 ease group-hover:opacity-100 md:translate-y-[50%] lg:translate-y-[100%] group-hover:translate-y-[0%]">
                <span className="text-gray-300 font-sans">
                  Learn how to create a <span>Typewriting</span> effect without JavaScript in just <span className="text-red-500 font-bold">2 minutes.</span>
                </span>
              </div>
            </div>

            <div className="p-6 md:p-12 lg:p-14 relative group bg-card flex flex-col rounded-md transition-all duration-300  cursor-pointer justify-center items-center pointer-events-none md:pointer-events-auto" onClick={() => nav("/gradient-borders")}>
              <div className="bg-[conic-gradient(teal,blue,purple,teal)] absolute inset-0 rounded-md -m-1 -z-10 blur-sm" />
              <div className="flex items-center justify-center absolute group-hover:top-6 transition-all duration-300 ease-in-out top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                <span className="ml-2 font-bold  animate-typing whitespace-nowrap w-fit overflow-hidden text-base md:text-lg lg:text-xl">Gradient Borders</span>
              </div>
              <div className="w-full opacity-0 transition-all duration-300 ease group-hover:opacity-100 md:translate-y-[50%] lg:translate-y-[100%] group-hover:translate-y-[0%]">
                <span className="text-gray-300 font-sans">
                  Creating gradient borders has never been so easy. Create one in just <span className="text-red-500 font-bold">1 line of code.</span>
                </span>
              </div>
            </div>

            <div className="pointer-events-none md:pointer-events-auto p-6 md:p-12 lg:p-14 relative group bg-card flex flex-col  rounded-md transition-all duration-300  cursor-pointer justify-center items-center" onClick={() => nav("/typewriter")}>
              <div className="flex items-center justify-center absolute group-hover:top-6 transition-all duration-300 ease-in-out top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                <span
                  className="ml-2 font-bold  animate-typing whitespace-nowrap w-fit overflow-hidden text-base md:text-lg lg:text-xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 text-transparent"
                  style={{
                    "--animation-duration": "2s",
                    "--animation-steps": "64",
                    "--animation-delay": "0s",
                  }}
                >
                  Gradient Text
                </span>
              </div>
              <div className="w-full opacity-0 transition-all duration-300 ease group-hover:opacity-100 md:translate-y-[50%] lg:translate-y-[100%] group-hover:translate-y-[0%]">
                <span className="text-transparent bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text">
                  Creating gradient texts has never been so easy. Create one in just <span className="text-red-500 font-bold">1 line of code.</span>
                </span>
              </div>
            </div>
            <div className="pointer-events-none md:pointer-events-auto p-6 md:p-12 lg:p-14 relative group bg-card flex flex-col  rounded-md transition-all duration-300  cursor-pointer justify-center items-center" onClick={() => nav("/typewriter")}>
              <div className="flex items-center justify-center absolute group-hover:top-6 transition-all duration-300 ease-in-out top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                <span
                  className="ml-2 font-bold  animate-typing whitespace-nowrap w-fit overflow-hidden text-base md:text-lg lg:text-xl"
                  style={{
                    "--animation-duration": "2s",
                    "--animation-steps": "64",
                    "--animation-delay": "0s",
                  }}
                >
                  Parallax Scrolling
                </span>
              </div>
              <div className="w-full opacity-0 transition-all duration-300 ease group-hover:opacity-100 md:translate-y-[50%] lg:translate-y-[100%] group-hover:translate-y-[0%]">
                <span>Learn how to create the Parallax scrolling effect.</span>
              </div>
            </div>
          </div>
          <div className="p-1 max-w-[90%] mx-auto  w-full  mt-auto mb-4 ">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
