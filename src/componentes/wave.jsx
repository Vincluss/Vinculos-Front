import Image from "next/image";
import WaveImg from "@/src/assets/img-efeitos/onda_cima.svg";
import Style from "@/src/css/wave.module.css";

export default function Wave({ bgColor, position }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={`${Style.wave} ${position} `}>
      <path
        fill={bgColor}
        fillOpacity="1"
        d="M0,320L80,314.7C160,309,320,299,480,256C640,213,800,139,960,133.3C1120,128,1280,192,1360,224L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg>
  );
}
