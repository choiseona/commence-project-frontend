import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface IUseInterval {
  (callback: () => void, interval: number): void;
}

// box 애니매이션 variant
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

// setInterval을 사용해 상태 변화를 만들 수 있는 hook
const useInterval: IUseInterval = (callback, interval) => {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    // interval이 10초라는 예외의 숫자가 되었을 때 setInterval을 동작하지 않도록 함
    if (interval !== 10000) {
      let id = setInterval(tick, interval);
      return () => clearInterval(id);
    }
  }, [interval]);
};

// drag 슬라이드 용 함수와 변수
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function SlideBanner() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [custominterval, setCustomInterval] = useState(5000);
  const outRef = useRef<HTMLDivElement>(null);
  const slides = ["슬라이드1", "슬라이드2", "슬라이드3", "슬라이드4"];

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

  return (
    <div className="">
      <div
        className="relative h-[26.2rem] w-full flex justify-center items-center"
        ref={outRef}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="bg-gray-300 w-full h-full absolute top-0 flex items-center justify-center"
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                Nextpaginate();
              } else if (swipe > swipeConfidenceThreshold) {
                Prevpaginate();
              }
            }}
          >
            {slides[page]}
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-[0.5rem] flex items-center justify-center mt-3 space-x-1 z-[3]">
          {slides.map((i) =>
            slides.indexOf(i) === page ? (
              <div key={i} className="w-3 h-3 rounded-full bg-white" />
            ) : (
              <div key={i} className="w-3 h-3 rounded-full bg-black" />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default SlideBanner;
