'use client'
import Style from "../css/header_publico.module.css";
import { useState, useCallback, useEffect } from "react";
import { CiHeart } from "react-icons/ci";

export default function ApoieVinculos() {
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      if (media.addEventListener) {
        media.addEventListener("change", updateTarget);
      } else {
        // compatibility for browser that dont have addEventListener
        media.addListener(updateTarget);
      }
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
      if (media.removeEventListener) {
        return () => media.removeEventListener("change", updateTarget);
      } else {
        // compatibility for browser that dont have removeEventListener
        return () => media.removeListener(updateTarget);
      }
    }, []);

    return targetReached;
  };

  const isBreakpoint = useMediaQuery(720);
  return (
    <>
      {isBreakpoint ? null : (
        <button className={`${Style.coracao}`}>
          <CiHeart
            size={32}
            className="font-bold"
            aria-label="Imagem de coração"
          />
          <p>Apoie Vínculos</p>
        </button>
      )}
    </>
  );
}
