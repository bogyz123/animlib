import { useEffect, useState } from "react";
import bottom from "../../assets/bottom.png";
import full from "../../assets/full.png";
import CodeSample from "../CodeSample";
import Document from "../Document";
import useTooltip from "../hooks/useTooltip";

export default function Parallax() {
  const [scrollY, setScrollY] = useState(0);
  const [bg, setBg] = useState(full); 
  const tooltipClick = useTooltip();

  useEffect(() => {
    const scrollHandler = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", scrollHandler);


    const fullImg = sessionStorage.getItem("fullImage");
    console.log(fullImg);
    if (!fullImg) {
      sessionStorage.setItem("fullImage", full);
    }

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Document>
      <div className="h-screen p-2 relative flex flex-col justify-center items-center">
        <div className="bg-cover h-screen absolute inset-0 z-0 bg-fixed" style={{ backgroundImage: `url(${bg})` }} />
        <div className="bg-cover h-screen absolute inset-0 z-20 bg-center" style={{ backgroundImage: `url(${bottom})` }} />
        <span
          className="z-10 text-3xl md:text-6xl lg:text-7xl text-white font-extrabold"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          PARALLAX EFFECT
        </span>
      </div>
      <Document.Content>
        <Document.Header>What is Parallax Effect?</Document.Header>
        <span>Parallax is a visual effect where the background content (an image) is moved at a different speed than the foreground content while scrolling.</span>
        <Document.Subheader>When to use Parallax?</Document.Subheader>
        <div className="pl-0.5">
          <span>Websites that include Parallax effect are often used in:</span>
          <ul>
            <li>Portfolio sites</li>
            <li>Story-telling websites</li>
            <li>Product showcases</li>
            <li>Landing pages</li>
          </ul>
        </div>

        <Document.Header>Creating a Simple Parallax Effect</Document.Header>
        <div>1. Create a containing element and set a background image you want.</div>
        <div>2. Create a foreground element inside of it that contains some content.</div>
        <div className="w-fit">
          <CodeSample
            language={["JavaScript"]}
            pages={[
              `<div 
  className="flex justify-center p-4 mx-auto w-[80%] bg-cover bg-center rounded-md" 
  style={{ backgroundImage: 'url(https://picsum.photos/200/300)' }}
  >
  <div 
  className="bg-gray-700 rounded-md p-2 text-white font-bold text-xl w-fit"
  >
  <span>PARALLAX</span>
  </div>
  </div>
  `,
            ]}
          />
        </div>

        <div className="flex justify-center mt-5 p-4 py-4 md:py-6 lg:py-12 mx-auto w-[100%] md:w-[85%] bg-cover bg-top bg-no-repeat rounded-md" style={{ backgroundImage: `url(https://picsum.photos/1920/720)`, backgroundAttachment: "fixed" }}>
          <div className="bg-card outline outline-red-900 rounded-md p-4 text-white font-bold text-xl w-fit">
            <span>PARALLAX</span>
          </div>
        </div>
        <div className="my-4">
          <Document.Header>Explanation</Document.Header>
          <p onClick={tooltipClick}>
            In the example above, we've set <span className="highlighted">background-attachment: fixed</span> property to the container.
          </p>

          <div>While scrolling, the image stays fixed, and the foreground moves, creating a Parallax Effect.</div>
          <Document.Separator width={"w-full"} />
        </div>
      </Document.Content>
    </Document>
  );
}