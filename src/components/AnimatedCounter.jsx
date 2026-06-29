import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants/index.js";
gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
  countersRef.current.forEach((counter, index) => {
    const numberElement = counter.querySelector(".counter-number");
    const item = counterItems[index];

    const obj = { value: 0 };

    gsap.to(obj, {
      value: item.value,
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: counter,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        numberElement.textContent =
          Math.floor(obj.value) + item.suffix;
      },
    });
  });
});

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;