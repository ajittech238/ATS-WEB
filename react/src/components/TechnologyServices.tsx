

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import {
//   ArrowRight,
//   Code,
//   Cloud,
//   Smartphone,
//   Shield,
//   Bot,
//   Database,
//   CircleCheckBig,
// } from "lucide-react";

// interface Service {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   image: string;
//   features: string[];
// }

// const services: Service[] = [
//   {
//     title: "Custom Software Development",
//     description:
//       "We build bespoke software solutions tailored to your business needs using modern technologies like React, Node.js, Python, and cloud-native architectures.",
//     icon: <Code className="h-8 w-8 text-white" />,
//     image:
//       "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
//     features: [
//       "Full-stack development",
//       "API integration",
//       "Database design",
//       // "Performance optimization",
//     ],
//   },
//   {
//     title: "Cloud Solutions & DevOps",
//     description:
//       "Comprehensive cloud migration, infrastructure setup, and DevOps implementation with AWS, Azure, and GCP platforms.",
//     icon: <Cloud className="h-8 w-8 text-white" />,
//     image:
//       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
//     features: [
//       "Cloud migration",
//       "CI/CD pipelines",
//       "Infrastructure as Code",
//       "Monitoring & logging",
//     ],
//   },
//   {
//     title: "Mobile App Development",
//     description:
//       "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter for maximum reach.",
//     icon: <Smartphone className="h-8 w-8 text-white" />,
//     image:
//       "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop",
//     features: [
//       "iOS & Android native",
//       "Cross-platform",
//       "App Store optimization",
//       "Push notifications",
//     ],
//   },
//   {
//     title: "Cybersecurity Solutions",
//     description:
//       "Advanced security implementations including penetration testing, security audits, and compliance management.",
//     icon: <Shield className="h-8 w-8 text-white" />,
//     image:
//       "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop",
//     features: [
//       "Security audits",
//       "Penetration testing",
//       "Compliance (SOC2, HIPAA)",
//       // "Threat monitoring",
//     ],
//   },
//   {
//     title: "AI & Machine Learning",
//     description:
//       "Cutting-edge AI solutions including chatbots, predictive analytics, and machine learning model development.",
//     icon: <Bot className="h-8 w-8 text-white" />,
//     image:
//       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
//     features: [
//       "Custom AI models",
//       "Natural language processing",
//       "Computer vision",
//       // "Predictive analytics",
//     ],
//   },
//   {
//     title: "Data Engineering",
//     description:
//       "Big data solutions, data warehousing, ETL pipelines, and business intelligence dashboards.",
//     icon: <Database className="h-8 w-8 text-white" />,
//     image:
//       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
//     features: [
//       "Data pipelines",
//       "Real-time analytics",
//       "Data warehousing",
//       "Business intelligence",
//     ],
//   },
// ];

// const TechnologyServices: React.FC = () => {
//   useEffect(() => {
//     AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
//   }, []);

//   return (
//     <section
//       className="pt-10 pb-24 bg-white"
//       style={{ fontFamily: "Times New Roman, serif" }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Header */}
//         <div className="text-center mb-20" data-aos="fade-up">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Comprehensive Technology Services
//           </h2>

//           {/* NEW Corporate Paragraph */}
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="150">
//             Empowering businesses with scalable, secure, and innovative digital
//             solutions engineered for long-term success.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               data-aos="zoom-in"
//               data-aos-delay={index * 150}
//               className="rounded-xl shadow-lg overflow-hidden group bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-1"
//             >
//               {/* Image */}
//               <div className="relative h-56 overflow-hidden">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

//                 {/* Icon */}
//                 <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md p-4 rounded-xl shadow-lg">
//                   {service.icon}
//                 </div>

//                 {/* Title */}
//                 <div className="absolute bottom-6 left-6 right-6">
//                   <h3 className="text-xl font-bold text-white mb-2">
//                     {service.title}
//                   </h3>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-8">
//                 <p className="text-gray-700 mb-6 text-base leading-relaxed">
//                   {service.description}
//                 </p>

//                 <div className="space-y-2 mb-6">
//                   {service.features.map((feature, i) => (
//                     <div key={i} className="flex items-center space-x-2">
//                       <CircleCheckBig className="h-4 w-4 text-teal-600 flex-shrink-0" />
//                       <span className="text-gray-700 text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Button */}
//                 <button
//                   className="inline-flex items-center justify-center gap-2 text-sm font-medium
//                     text-white h-10 rounded-md px-4 w-full
//                     bg-gradient-to-r from-cyan-500 to-teal-600
//                     hover:shadow-lg hover:scale-[1.02] transition-all"
//                 >
//                   Learn More
//                   <ArrowRight className="h-4 w-4 ml-1 text-white" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechnologyServices;



import React, { useEffect } from "react";
import {
  ArrowRight,
  Code,
  Cloud,
  Smartphone,
  Shield,
  Bot,
  Database,
  CircleCheckBig,
} from "lucide-react";

// Mocking AOS initialization for a single file environment since external imports are not supported
const AOS = {
    init: (config: any) => console.log('AOS initialized with config:', config),
};

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    title: "Custom Software Development",
    description:
      "We build bespoke software solutions tailored to your business needs using modern technologies like React, Node.js, Python, and cloud-native architectures.",
    icon: <Code className="h-8 w-8 text-white" />,
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
    features: [
      "Full-stack development",
      "API integration",
      "Database design",
    ],
  },
  {
    title: "Cloud Solutions & DevOps",
    description:
      "Comprehensive cloud migration, infrastructure setup, and DevOps implementation with AWS, Azure, and GCP platforms.",
    icon: <Cloud className="h-8 w-8 text-white" />,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
    features: [
      "Cloud migration",
      "CI/CD pipelines",
      "Infrastructure as Code",
      "Monitoring & logging",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter for maximum reach.",
    icon: <Smartphone className="h-8 w-8 text-white" />,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop",
    features: [
      "iOS & Android native",
      "Cross-platform",
      "App Store optimization",
      "Push notifications",
    ],
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Advanced security implementations including penetration testing, security audits, and compliance management.",
    icon: <Shield className="h-8 w-8 text-white" />,
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop",
    features: [
      "Security audits",
      "Penetration testing",
      "Compliance (SOC2, HIPAA)",
    ],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Cutting-edge AI solutions including chatbots, predictive analytics, and machine learning model development.",
    icon: <Bot className="h-8 w-8 text-white" />,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
    features: [
      "Custom AI models",
      "Natural language processing",
      "Computer vision",
    ],
  },
  {
    title: "Data Engineering",
    description:
      "Big data solutions, data warehousing, ETL pipelines, and business intelligence dashboards.",
    icon: <Database className="h-8 w-8 text-white" />,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
    features: [
      "Data pipelines",
      "Real-time analytics",
      "Data warehousing",
      "Business intelligence",
    ],
  },
];

const TechnologyServices: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  // Function to handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, title: string) => {
    e.currentTarget.onerror = null; // Prevent infinite loop
    e.currentTarget.src = `https://placehold.co/400x250/111827/F9FAFB?text=${encodeURIComponent(title)}`;
  };

  return (
    // Responsive vertical padding
    <section
      className="py-12 md:py-16 lg:py-24 bg-white"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Responsive Text Size & Spacing */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Comprehensive Technology Services
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="150">
            Empowering businesses with scalable, secure, and innovative digital
            solutions engineered for long-term success.
          </p>
        </div>

        {/* Services Grid - Responsive from 1 to 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="rounded-xl shadow-lg overflow-hidden group bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-1"
            >
              {/* Image and Icon Section */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  onError={(e) => handleImageError(e, service.title)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />


                {/* Icon */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-black/60 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-lg">
                  {/* Icon size remains good */}
                  {service.icon} 
                </div>

                {/* Title */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content - Responsive Padding */}
              <div className="p-6 md:p-8">
                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CircleCheckBig className="h-4 w-4 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button - Full width on mobile */}
                <button
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium
                    text-white h-10 rounded-md px-4 w-full
                    bg-gradient-to-r from-cyan-500 to-teal-600
                    hover:shadow-lg hover:scale-[1.01] transition-all"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyServices;