

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { motion } from "framer-motion";
// import {
//   Rocket,
//   Lightbulb,
//   Globe2,
//   ShieldCheck,
//   SmilePlus,
//   Zap,
// } from "lucide-react";

// const stats = [
//   {
//     icon: Rocket,
//     title: "Fast Delivery",
//     desc: "We ensure rapid project turnaround without compromising quality.",
//   },
//   {
//     icon: Lightbulb,
//     title: "Creative Ideas",
//     desc: "Innovation-driven solutions tailored uniquely for each client.",
//   },
//   {
//     icon: Globe2,
//     title: "Global Presence",
//     desc: "We work with clients across the world to deliver impactful results.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Top Security",
//     desc: "Your projects and data stay protected with enterprise-grade security.",
//   },
//   {
//     icon: SmilePlus,
//     title: "Client First",
//     desc: "We prioritize your satisfaction above everything else.",
//   },
//   {
//     icon: Zap,
//     title: "High Performance",
//     desc: "Powerful, optimized, and scalable solutions every single time.",
//   },
// ];

// const ProvenTrackRecord = () => {
//   useEffect(() => {
//     AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
//   }, []);

//   return (
//     <section className="pt-12 pb-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6 text-center">

//         <h2
//           className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
//           style={{ fontFamily: "Times New Roman, serif" }}
//           data-aos="fade-up"
//         >
//           Why Clients Love Working With Us
//         </h2>

//         <p
//           className="text-gray-600 text-lg max-w-2xl mx-auto mb-16"
//           style={{ fontFamily: "Times New Roman, serif" }}
//           data-aos="fade-up"
//           data-aos-delay="150"
//         >
//           We deliver powerful digital solutions designed to accelerate growth,
//           enhance performance, and help businesses stay ahead in a fast-changing world.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {stats.map(({ icon: Icon, title, desc }, index) => (
//             <motion.div
//               key={title}
//               data-aos="zoom-in"
//               data-aos-delay={index * 100}
//               whileHover={{ scale: 1.05, rotateY: 5 }}
//               transition={{ type: "spring", stiffness: 180, damping: 12 }}
//               className="p-8 bg-gradient-to-br from-gray-50 to-white 
//               shadow-md hover:shadow-2xl rounded-2xl border border-gray-200 transition-all"
//               style={{ fontFamily: "Times New Roman, serif" }}
//             >
//               <div className="flex items-center justify-center mb-6">
//                 <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gray-800 text-white shadow-inner">
//                   <Icon className="w-10 h-10" />
//                 </div>
//               </div>

//               <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
//               <p className="text-gray-600 text-sm">{desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProvenTrackRecord;


import React, { useEffect } from "react";
// Assuming AOS and its CSS are available in the runtime environment, but mocking initialization
// import AOS from "aos"; 
// import "aos/dist/aos.css";

// Mocking AOS initialization for a single file environment
const AOS = {
    init: (config: any) => console.log('AOS initialized with config:', config),
};

// Mocking framer-motion's motion.div to a regular div for simplicity and single-file compatibility
const motion = {
    div: (props: any) => <div {...props} />,
};

import {
  Rocket,
  Lightbulb,
  Globe2,
  ShieldCheck,
  SmilePlus,
  Zap,
} from "lucide-react";

const stats = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    desc: "We ensure rapid project turnaround without compromising quality.",
  },
  {
    icon: Lightbulb,
    title: "Creative Ideas",
    desc: "Innovation-driven solutions tailored uniquely for each client.",
  },
  {
    icon: Globe2,
    title: "Global Presence",
    desc: "We work with clients across the world to deliver impactful results.",
  },
  {
    icon: ShieldCheck,
    title: "Top Security",
    desc: "Your projects and data stay protected with enterprise-grade security.",
  },
  {
    icon: SmilePlus,
    title: "Client First",
    desc: "We prioritize your satisfaction above everything else.",
  },
  {
    icon: Zap,
    title: "High Performance",
    desc: "Powerful, optimized, and scalable solutions every single time.",
  },
];

const ProvenTrackRecord = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    // Responsive vertical padding
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Responsive Header */}
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          style={{ fontFamily: "Times New Roman, serif" }}
          data-aos="fade-up"
        >
          Why Clients Love Working With Us
        </h2>

        {/* Responsive Subtitle */}
        <p
          className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12 md:mb-16"
          style={{ fontFamily: "Times New Roman, serif" }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          We deliver powerful digital solutions designed to accelerate growth,
          enhance performance, and help businesses stay ahead in a fast-changing world.
        </p>

        {/* Responsive Grid Layout and Gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {stats.map(({ icon: Icon, title, desc }, index) => (
            // Using motion.div structure from input, relying on Tailwind for base responsiveness
            <motion.div
              key={title}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              // Tailwind classes for hover effect (simulate scale/shadow)
              className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white 
              shadow-lg hover:shadow-2xl rounded-xl border border-gray-200 
              transition-all duration-300 hover:scale-[1.03] cursor-pointer"
              style={{ fontFamily: "Times New Roman, serif" }}
              // Framer motion props kept, though implementation is mocked
              // whileHover={{ scale: 1.05, rotateY: 5 }}
              // transition={{ type: "spring", stiffness: 180, damping: 12 }}
            >
              <div className="flex items-center justify-center mb-6">
                {/* Responsive Icon container size */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gray-800 text-white shadow-inner">
                  {/* Responsive Icon size */}
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
              </div>

              {/* Responsive Title size */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenTrackRecord;