import { useNavigate } from "react-router";
import notfoundBg from "../assets/notfound-bg.jpg";

export default function NotFound() {
  const nav = useNavigate();
  return (
    <div>
      <div style={{ backgroundImage: `url(${notfoundBg})` }} className="h-screen w-full bg-cover bg-no-repeat bg-center flex flex-col">
        <div className="text-white pt-5 text-center ">
          <h1 className="text-lg md:text-xl">
            <span className="text-red-500 text-6xl">404 </span>
            Not Found
          </h1>
        </div>
        <div className="mt-auto text-white  mb-5 text-center flex flex-col font-inter text-lg md:text-2xl">
          <span className="bg-gradient-to-b from-gray-500  to-yellow-600 bg-clip-text text-transparent">The page you're looking for doesn't exist.</span>
          <span className="bg-gradient-to-b from-gray-500  to-yellow-600 bg-clip-text text-transparent cursor-pointer select-none hover:from-gray-600 hover:to-yellow-700" onClick={() => nav("/")}>
            Home
          </span>
        </div>
      </div>
    </div>
  );
}
