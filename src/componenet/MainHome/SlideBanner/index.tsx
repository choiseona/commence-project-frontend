import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SlideBannerText from "../SlideBannerText";
import slideimg1 from "@/assets/images/slide1.webp";
import slideimg2 from "@/assets/images/slide2.webp";
import slideimg3 from "@/assets/images/slide3.webp";
import slideimg4 from "@/assets/images/slide4.webp";
import { preloading } from "@/libs/Preload";
import {
  swipeConfidenceThreshold,
  swipePower,
  useInterval,
  variants,
} from "@/libs/SlideHook";

function SlideBanner() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [custominterval, setCustomInterval] = useState(5000);
  const outRef = useRef<HTMLDivElement>(null);
  const slides = [slideimg1, slideimg2, slideimg3, slideimg4];

  const Nextpaginate = () => {
    setPage([(page + 1) % slides.length, 1]);
  };

  const Prevpaginate = () => {
    if (page == 0) {
      setPage([3, -1]);
    } else {
      setPage([page - 1, -1]);
    }
  };

  useInterval(() => Nextpaginate(), custominterval);

  // mouseover 이벤트 발생 시 customInterval을 10000으로 바꿈.
  // 이는 useInterval에서 조건문 처리가 되어, slideIndex 증가문을 실행하지 않게함.
  const stopSlide = () => {
    setCustomInterval(10000);
  };

  // mouseLeave 이벤트 발생 시 customInterval을 원래대로 복구시킴.
  const restartSlide = () => {
    setCustomInterval(5000);
  };

  // 이후 적용할 div 에 ref를 참조하게 한다.
  useEffect(() => {
    outRef.current?.addEventListener("mouseover", stopSlide);
    outRef.current?.addEventListener("mouseleave", restartSlide);

    return () => {
      outRef.current?.removeEventListener("mouseover", stopSlide);
      outRef.current?.removeEventListener("mouseleave", restartSlide);
    };
  }, [custominterval]);

  useEffect(() => {
    preloading(slides);
  }, []);
  return (
    <div
      className="relative  h-[30rem] max-[450px]:h-[28.2rem] w-full flex justify-center items-center overflow-x-hidden"
      ref={outRef}
    >
      <SlideBannerText />
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          src={slides[page]}
          className="w-full h-full absolute top-0 flex items-center justify-center grayscale "
          alt="slide"
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 70 },
            opacity: { duration: 0.3 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              Nextpaginate();
            } else if (swipe > swipeConfidenceThreshold) {
              Prevpaginate();
            }
          }}
        />
      </AnimatePresence>
    </div>
  );
}

export default SlideBanner;
