import { useEffect, useRef, useState } from "react";

export const useActiveBackground = () => {
  const [activeBackground, setActiveBackground] = useState("false");
  const prevPosition = useRef(0);
  const [isShown, setIsShown] = useState("true");
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position === 0) {
      setActiveBackground("false");
    } else {
      setActiveBackground("true");
    }
    if (position < prevPosition.current) {
      setIsShown("true");
    } else {
      setIsShown("false");
    }
    prevPosition.current = position;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { activeBackground, isShown, prevPosition };
};
