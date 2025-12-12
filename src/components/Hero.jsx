import ArrowImg from "../assets/asset 2.svg";
import { useEffect, useRef } from "react";
import { line1, line2 } from "../data/companyData";

const Hero = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    const initialTranslateLTR = -48 * 4;
    const initialTranslateRTL = 36 * 4;

    const lines = [
      { ref: line1Ref, isLTR: true, speed: 0.15 },
      { ref: line2Ref, isLTR: false, speed: 0.15 },
      { ref: line3Ref, isLTR: true, speed: 0.15 },
    ];

    const observers = [];

    lines.forEach(({ ref, isLTR, speed }) => {
      const element = ref.current;
      if (!element) return;

      const scrollHandler = () => {
        const translateX =
          (window.innerHeight - element.getBoundingClientRect().top) * speed;
        const totalTranslate = isLTR
          ? translateX + initialTranslateLTR
          : -(translateX + initialTranslateRTL);

        element.style.transform = `translateX(${totalTranslate}px)`;
      };

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          document.addEventListener("scroll", scrollHandler);
        } else {
          document.removeEventListener("scroll", scrollHandler);
        }
      });

      observer.observe(element);
      observers.push({ observer, scrollHandler });
    });

    // Cleanup
    return () => {
      observers.forEach(({ observer, scrollHandler }) => {
        observer.disconnect();
        document.removeEventListener("scroll", scrollHandler);
      });
    };
  }, []);

  return (
    <div
      id="hero"
      className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent "
    >
      <div
        id="hero-container"
        className="max-w-4xl mx-auto px-6 pt-6 pb-32 flex flex-col sm:items-center sm:text-center sm:pt-12"
      >
        <div
          id="version-text"
          className="flex items-center my-6 gap-2 border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group"
        >
          <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
          <p className="font-display font-medium text-yellow-600">
            v0.21.1:
            <span className="text-yellow-800">Find-in-page bug fixes</span>
          </p>
          <i className="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transition duration-300"></i>
        </div>

        <div id="hero-features" className="hidden sm:flex gap-8 my-6">
          <div className="flex justify-center gap-2 items-center text-gray-500">
            <i className="fa-regular fa-file-code text-sm"></i>
            <p>Code Optional</p>
          </div>
          <div className="flex justify-center gap-2 items-center text-gray-500">
            <i className="fa-solid fa-hand-back-fist"></i>
            <p>Drag & drop builder</p>
          </div>
          <div className="flex justify-center gap-2 items-center text-gray-500">
            <i className="fa-solid fa-laptop"></i>
            <p>Windows, Mac, Linux</p>
          </div>
        </div>

        <h1 className="text-4xl font-semibold leading-snug mt-4 sm:text-6xl">
          Web app to desktop app in minutes
        </h1>
        <p className="text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800">
          Take your web app codebase and transform it into a cross platform
          desktop app with native functionality.
        </p>
        <div
          id="buttons-container"
          className="mt-12 flex gap-4 flex-col sm:flex-row"
        >
          <button className="px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:bg-opacity-90">
            Download now
          </button>
          <button className="px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800">
            Read Docs
          </button>
        </div>
      </div>

      <div id="companies-container" className="flex flex-col gap-8">
        <div id="companies-title" className="flex justify-center gap-2">
          <img className="translate-y-2" src={ArrowImg} alt="" />
          <span className="font-semibold">APPS POWERED BY TODESKTOP</span>
          <img className="-scale-x-100 translate-y-2" src={ArrowImg} alt="" />
        </div>
        <div
          id="lines-group"
          className="flex flex-col items-center gap-4 overflow-x-hidden "
        >
          {/* Line 1 */}
          <div
            id="line1"
            className="flex gap-4 w-screen -translate-x-48 "
            ref={line1Ref}
          >
            {line1.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32"
              >
                <img
                  src={item.image}
                  className="w-12 h-12 md:w-16 md:h-16"
                  alt=""
                />
                <span className="text-[12px] font-semibold lg:text-[16px]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          {/* Line 2 */}
          <div
            id="line2"
            className="flex gap-4 w-screen -translate-x-36 "
            ref={line2Ref}
          >
            {line2.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32"
              >
                <img
                  src={item.image}
                  className="w-12 h-12 md:w-16 md:h-16"
                  alt=""
                />
                <span className="text-[12px] font-semibold lg:text-[16px]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          {/* Line 3 */}
          <div
            id="line3"
            className="flex md:hidden gap-4 w-screen -translate-x-48 "
            ref={line3Ref}
          >
            {[...line1].reverse().map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32"
              >
                <img
                  src={item.image}
                  className="w-12 h-12 md:w-16 md:h-16"
                  alt=""
                />
                <span className="text-[12px] font-semibold lg:text-[16px]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
