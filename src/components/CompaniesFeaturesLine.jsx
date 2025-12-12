import { useEffect, useRef } from "react";

const features = [
  "Download Analytics",
  "Custom Menus",
  "Multi-window support",
  "Trays",
  "Deep Linking",
  "Download Analytics",
  "Launch at startup",
  "Offline Support",
  "Good Signing",
];

const CompaniesFeaturesLine = () => {
  const line4Ref = useRef(null);

  useEffect(() => {
    const initialTranslateLTR = -48 * 4;
    const element = line4Ref.current;
    const speed = 0.8;
    const isLTR = true;

    if (!element) return;

    const scrollHandler = () => {
      const translateX =
        (window.innerHeight - element.getBoundingClientRect().top) * speed;
      const totalTranslate = isLTR
        ? translateX + initialTranslateLTR
        : -(translateX + initialTranslateLTR);

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

    return () => {
      observer.disconnect();
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <div
      id="features-line"
      className="px-6 max-w-7xl mt-10 mx-auto lg:px-8 lg:mt-16"
    >
      <div className="border border-slate-200 rounded-lg overflow-hidden flex justify-center p-4">
        <div id="line-4" ref={line4Ref} className="flex gap-8 p-6">
          {features.map((features, index) => (
            <>
              <h3
                key={index}
                className="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7"
              >
                {features}
              </h3>
              <span>•</span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesFeaturesLine;
