import { useEffect, useState } from "react";

export default function useModalBounds(element) {
  const [isOutOfBounds, setIsOutOfBounds] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (!element.current) return;

      const rect = element.current.getBoundingClientRect();
      const { clientX, clientY } = e;

      const isOutside =
        clientX < rect.left ||
        clientX > rect.right ||
        clientY < rect.top ||
        clientY > rect.bottom;

      setIsOutOfBounds((prev) => (prev !== isOutside ? isOutside : prev));
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [element]);

  return { isOutOfBounds };
}