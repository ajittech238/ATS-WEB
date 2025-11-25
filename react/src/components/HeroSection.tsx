

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


// Component को React.FC के रूप में परिभाषित करें
const HeroSection: React.FC = () => {
  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);

  // New state for the text slider
  const [textIndex, setTextIndex] = useState(0);
  const navigate = useNavigate();


  // New text array for the sliding effect
  const slidingTexts = [
    "Future",
    "Innovate",
    "Moment",
  ];

  const topSlides = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=800&auto=format&fit=crop",
  ];

  const bottomSlides = [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=800&auto=format&fit=crop",
  ];

  useEffect(() => {
    // Timer for image sliders (3s and 4s)
    const topTimer = setInterval(
      () => setTopIndex((prev) => (prev + 1) % topSlides.length),
      3000
    );
    const bottomTimer = setInterval(
      () => setBottomIndex((prev) => (prev + 1) % bottomSlides.length),
      4000
    );

    // Timer for text slider (2.5s)
    const textTimer = setInterval(
      () => setTextIndex((prev) => (prev + 1) % slidingTexts.length),
      2500
    );

    return () => {
      clearInterval(topTimer);
      clearInterval(bottomTimer);
      clearInterval(textTimer); // Cleanup text timer
    };
  }, []);

  // const handleOpenContact = () => {
  //   // सुनिश्चित करें कि 'openContactModal' इवेंट सही से डिस्पैच हो
  //   const event = new CustomEvent("openContactModal");
  //   window.dispatchEvent(event);
  // };
  const handleOpenContact = () => {
  navigate("/lets-create");
};


  return (
    // THEME & FONT CHANGE: Added 'font-serif' to apply Roman font globally
    <section className="relative flex flex-col lg:flex-row bg-gray-50 mb-4 px-4 min-h-[500px] gap-[10px] lg:gap-[10px] overflow-x-hidden font-serif">
      <div className="relative w-full lg:w-[60%] flex items-center justify-center text-white px-8 py-16 rounded-[10px] overflow-hidden min-h-[300px]">
        
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/company1.mp4"
            className="absolute inset-0 w-full h-full object-cover"
          />
        {/* bg-[#0a1522]/70 */}
        <div className="absolute inset-0 bg-[#0a1522]/70"></div>

        <div className="relative max-w-2xl text-center lg:text-left z-10" data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-white/10 border border-white/20 mb-6">
            ✨ Empowering Digital Transformation
          </span>

          {/* <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mb-2">
            Building the{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent animate-gradient-x">
              Future of Tech
            </span>
          </h1>

          <div className="relative h-10 overflow-hidden mb-6">
            {slidingTexts.map((text, i) => (
              <p 
                key={i} 
                className={`absolute w-full text-2xl md:text-3xl font-bold transition-transform duration-700 ease-out 
                  ${i === textIndex 
                    ? 'translate-y-0 opacity-100' 
                    : i < textIndex 
                    ? '-translate-y-full opacity-0' 
                    : 'translate-y-full opacity-0'
                  }
                  ${i === textIndex ? 'text-cyan-400' : 'text-gray-400'}
                `}
              >
                {text}
              </p>
            ))}
          </div> */}
          {/* <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mb-4">
  <div className="flex items-center gap-3 flex-wrap">
    <span>Building the</span>

    <div className="relative overflow-hidden text-8xl font-bold h-[40px] w-[260px] inline-block">
      {slidingTexts.map((text, i) => (
        <div
          key={i}
          className={`
            absolute w-full text-4xl md:text-3xl font-bold
            transition-transform duration-700 ease-out

            ${i === textIndex
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"}

            ${i === textIndex ? "text-cyan-400" : "text-gray-400"}
          `}
          style={{ top: 0, left: 0 }}
        >
          {text}
        </div>
      ))}
    </div>
  </div>
</h1> */}
<h1 className="flex items-center gap-4 text-5xl md:text-6xl font-extrabold leading-none whitespace-nowrap mb-4">

  <span>Building the</span>

  {/* INLINE SLIDER */}
  <div className="relative overflow-hidden h-[70px] w-[420px]">
    {slidingTexts.map((text, i) => (
      <span
        key={i}
        className={`
          absolute left-0 top-0 
          text-5xl md:text-6xl font-extrabold leading-none
          whitespace-nowrap transition-transform duration-700 ease-out

          ${i === textIndex 
            ? "translate-y-0 opacity-100" 
            : "translate-y-full opacity-0"}

          ${i === textIndex ? "text-cyan-600" : "text-gray-400"}
        `}
      >
        {text}
      </span>
    ))}
  </div>

</h1>




          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            <span className="text-white font-bold text-xl block mb-2">
              ATS GLOBAL TECH
            </span>
          We craft intelligent digital solutions that elevate businesses to the next level.
Our team blends creativity with technology to build experiences people love.
From automation to custom software, we simplify complex challenges with ease.

          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleOpenContact}
              className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white rounded-md overflow-hidden group"
            >
              {/* THEME CHANGE: Button gradient color changed to Blue/Purple/Teal */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 transition-transform duration-500 group-hover:scale-110 rounded-md"></span>
              <span className="relative z-10">Start Your Project</span>
            </button>

            <a href="/work/projects">
              <button className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
                Explore Works
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION TWO SLIDERS */}
      <div className="w-full lg:w-[40%] flex flex-col justify-between gap-[10px] p-0 bg-white rounded-[10px]">
        {/* Top Slider */}
        <div className="relative w-full h-[50%] rounded-[10px] overflow-hidden shadow-lg border border-gray-200 min-h-[250px]">
          {topSlides.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`top-slide-${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === topIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Bottom Slider */}
        <div className="relative w-full h-[50%] rounded-[10px] overflow-hidden shadow-lg border border-gray-200 min-h-[320px]">
          {bottomSlides.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`bottom-slide-${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === bottomIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;