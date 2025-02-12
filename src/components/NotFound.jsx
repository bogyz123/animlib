import { useNavigate } from "react-router";
import notfoundBg from "../assets/notfound-bg.jpg";

export default function NotFound() {
  const nav = useNavigate();
  return (
    <div>
      <div style={{ backgroundImage: `url(${notfoundBg})` }} className="h-screen w-full bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center">
        <div className="text-white text-center p-5">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-red-500">404</span> Not Found
          </h1>
          <p className="mt-3 text-xl md:text-2xl font-light">
            The page you're looking for doesn't exist.
          </p>
        </div>
        <button onClick={() => nav("/")} className="mt-5 bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:bg-gray-100">
          Go Home
        </button>
      </div>
    </div>
  );
}