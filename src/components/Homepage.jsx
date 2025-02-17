import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Contact from "../components/Contact";
import "../index.css";
import full from "../assets/full.png";

export default function Homepage() {
  const nav = useNavigate();
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [areCardsStacked, setAreCardsStacked] = useState(true);
  const itemData = [
    {
      title: 'Typewriter Effect',
      description: 'Learn how to create a Typewriting Effect without JavaScript in just 2 minutes.',
      url: '/typewriter'
    }, {
      title: 'Gradient Borders',
      description: 'Creating gradient borders has never been so easy. Create one in just 2 minutes. ',
      url: '/gradient-borders'
    }, {
      title: 'Gradient Text',
      description: 'Creating gradient texts has never been so easy. Create one in just 1 line of code.',
      url: '/gradient-text'
    }, {
      title: 'Parallax Scrolling',
      description: 'Learn how to create the Parallax scrolling effect.',
      url: '/parallax'
    }, {
      title: 'Scrolling Animations',
      description: 'Animation-timeline? IntersectionObserver? Lets learn them all!',
      url: '/scrolling',
    }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAnimation(prev => (prev + 1) % itemData.length);
    }, 5000);

    if (full) {
      const img = new Image();
      img.src = full;
      img.onload = () => {
        sessionStorage.setItem("fullImage", full);
      }
    }

    return () => clearInterval(intervalId);
  }, []);

  const navigateTo = (url) => {
    if (!areCardsStacked) {
      nav(url);
    }
     else {
      const cards = document.querySelectorAll(".example-item");
      cards.forEach(card => {
        card.style.transform = `translateX(0px) translateY(0) skew(0) rotate(0)`;
        card.style.transition = 'transform 0.5s ease-out';
        card.style.filter = "blur(0)";
        card.style.position = "static";
        card.style.opacity = "1";
        card.style.width = "100%";

        
      });
 
      setAreCardsStacked(false);
    }
  };
  const renderItems = () => {
    return itemData.map((item, index) => (
      <div key={index} style={{ '--offset': `${index - 1}` }} className={`${index === itemData.length - 1 && 'col-span-full mb-2'} ${areCardsStacked ? "w-[70%] md:w-[50%]" : "w-full"} font-inter bg-card group rounded-lg p-6 md:p-8 lg:p-10 flex flex-col justify-center items-center example-item cursor-pointer relative`} onClick={() => navigateTo(item.url)}>
        <h1 className={`${index === currentAnimation && !areCardsStacked ? '-translate-y-[50%] lg:-translate-y-[90%]' : ''} text-xl md:text-2xl example-item-title ${index === 0 && 'animate-typing inline-block justify-between overflow-hidden whitespace-nowrap mx-auto'}`} style={{
          "--animation-duration": "1.5s",
          "--animation-steps": "32",
          "--animation-delay": "0s",
          "--from-ch": "0ch",
          "--to-ch": "14ch",
        }}>
          <span className={`${index === 2 && 'text-md bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent'}`}>{item.title}</span>
        </h1>
        <div className={`${index === currentAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"} transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-[0]`}>
  <span className={`${index === 2 ? 'bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent' : ''}`}>
    {item.description}
  </span>
</div>

      </div>
    ));
  };

  return (
    <div className="min-h-screen w-full flex flex-col" id="homepage-container">
      <div className="text-white text-md md:text-lg lg:text-xl mx-auto flex flex-col justify-center items-center text-center pt-4 px-2">
        <h1>AnimLib | Animations | Designs</h1>
        <span>Learn the most common CSS animations, designs and practices in <span className="text-green-500  bg-none border-none outline-none" style={{boxShadow:'1px 1px green'}}>one place.</span></span>
      </div>
      <div className={`${areCardsStacked ? 'flex h-screen' : 'max-w-[90%]  grid grid-cols-1 md:grid-cols-2 gap-4 h-max'} w-full  mx-auto pt-12`}>
        {renderItems()}
      </div>
      <div className="w-[90%] mx-auto mt-auto mb-4">
        <Contact />
      </div>
    </div>
  );
}