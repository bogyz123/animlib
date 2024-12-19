import { useEffect, useState } from "react";
import parallax from "../../assets/parallax.jpg";

export default function Parallax() {
  const [scrollY, setScrollY] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col scroll-smooth min-h-screen w-full  gap-2">
      <div className="flex items-center justify-center w-full h-screen p-2 " style={{ backgroundImage: `url(${parallax})`, backgroundSize: "cover", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionY: `${scrollY * 0.7}px` }}>
        <div className="bg-card rounded-md px-10 py-5 text-5xl font-bold">PARALLAX (todo)</div>
      </div>
      <div className="flex items-center justify-center w-full min-h-screen p-2" style={{ backgroundImage: `url(${parallax})`, backgroundSize: "cover" }}>
        <div className="bg-card rounded-md px-10 py-5 text-5xl font-bold">PARALLAX</div>
      </div>
    </div>
  );
}
