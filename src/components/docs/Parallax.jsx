import { useEffect, useState } from "react";
import CodeSample from "../CodeSample";
import Document from "../Document";
import useTooltip from "../hooks/useTooltip";
import parallax from "../../assets/parallax.jpg";
import left from "../../assets/left.png";
import right from "../../assets/right.png";

export default function Parallax() {
  const [scrollY, setScrollY] = useState(null);
  const onTooltipClick = useTooltip();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Document>
      <Document.Title>Parallax Scrolling</Document.Title>
      <Document.Content>
        <div onClick={onTooltipClick} className="">
          <Document.Header>What is Parallax Scrolling?</Document.Header>
          <span>Parallax scrolling is a visual effect where the background content (image) is moved at a different speed than the foreground content while scrolling.</span>
          <Document.Subheader>When to use Parallax Scrolling?</Document.Subheader>
          <span>Common websites that include Parallax Scrolling are:</span>
          <ul className="flex flex-col pl-3" style={{ listStyle: "initial" }}>
            <li>Story-telling website</li>
            <li>Blogs</li>
            <li>Websites with lots of images/text</li>
            <li>Design websites</li>
          </ul>
          <Document.Header>Creating a Parallax Effect</Document.Header>
          <span>Create a container and include the background image you want.</span>
          <div>
            <CodeSample>
              {`<div style={{backgroundImage:"url(https://picsum.photos/1920/720)"}} className="w-full py-4 flex justify-center bg-no-repeat bg-cover bg-center bg-fixed">
    <span className="bg-gray-800 rounded-md p-2">PARALLAX</span>
  </div>`}
            </CodeSample>
          </div>
          <span className="mt-4">
            We used <span className="highlighted">background-attachment: fixed</span>
            to make the image fixed so it doesn't move with scroll.
          </span>
          <div>
            <Document.Subheader>The Result</Document.Subheader>
            <div className="bg-red-500 bg-cover bg-center p-8 rounded-md text-center bg-fixed" style={{ backgroundImage: `url(${parallax})` }}>
              <span className="bg-gray-800 rounded-md p-2">PARALLAX</span>
            </div>
          </div>
          <Document.Subheader>More examples</Document.Subheader>
        </div>
        <div className="flex flex-col ">
          <div className="flex justify-center text-white font-bold font-inter text-5xl mb-4 ">
            <div className="ml-4" style={{ transform: `translateX(-${scrollY * 0.8}px)` }}>
              PARA
            </div>
            <div className="mr-4" style={{ transform: `translateX(${scrollY * 0.8}px)` }}>
              LLAX
            </div>
          </div>
          <div className="bg-red-500 bg-cover bg-center p-8 rounded-md text-center" style={{ backgroundImage: `url(${parallax})`, backgroundPosition: `center ${scrollY * 0.8}px` }}>
            <span className="bg-gray-800 rounded-md p-2">PARALLAX</span>
          </div>
        </div>
      </Document.Content>
    </Document>
  );
}
