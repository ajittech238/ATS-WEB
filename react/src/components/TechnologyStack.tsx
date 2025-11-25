

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const TechnologyStack: React.FC = () => {
//   useEffect(() => {
//     AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
//   }, []);

//   // 🌐 LANGUAGES
//   const languages = [
//     { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//     { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
//     { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
//     { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
//     { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
//     { name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
//     { name: "Kotlin", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
//     { name: "Swift", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
//   ];

//   // ☁️ CLOUD & DEVOPS
//   const cloud = [
//     { name: "Azure", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
//     { name: "Google Cloud", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
//     { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
//     { name: "Kubernetes", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
//     { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
//     { name: "Jenkins", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
//   ];

//   // 📊 MORE
//   const more = [
//     { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
//     { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
//     { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
//     { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
//     { name: "SQLite", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
//     { name: "Redis", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
//     { name: "Oracle", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
//     { name: "GraphQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
//   ];

//   // ⭐ Reusable Tech Card
//   const TechCard = ({ tech, index }: any) => (
//     <div
//       data-aos="zoom-in"
//       data-aos-delay={index * 70}
//       className="text-center group"
//       style={{ fontFamily: "Times New Roman, serif" }}
//     >
//       <div
//         className="relative w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-md
//           group-hover:shadow-2xl transition-all duration-300 bg-gray-50 flex items-center justify-center
//           border border-gray-200 group-hover:border-teal-600 group-hover:bg-gradient-to-r
//           group-hover:from-cyan-500/10 group-hover:to-teal-600/10 backdrop-blur-sm"
//       >
//         <img
//           src={tech.img}
//           alt={tech.name}
//           className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
//         />
//       </div>
//       <p className="text-sm font-semibold text-gray-800 group-hover:text-teal-700 transition-colors">
//         {tech.name}
//       </p>
//     </div>
//   );

//   return (
//     <section
//       className="pt-10 pb-24 bg-white"
//       style={{ fontFamily: "Times New Roman, serif" }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Header */}
//         <div className="text-center mb-20" data-aos="fade-up">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Cutting-Edge Technology Stack
//           </h2>

//           {/* NEW paragraph */}
//           <p
//             className="text-xl text-gray-600 max-w-3xl mx-auto"
//             data-aos="fade-up"
//             data-aos-delay="150"
//           >
//             A robust collection of modern technologies that ensures speed,
//             scalability, security, and long-term innovation for your business.
//           </p>
//         </div>

//         {/* 🌐 LANGUAGES */}
//         <h3 className="text-2xl font-bold text-gray-900 mb-6" data-aos="fade-up">
//           Programming Languages
//         </h3>
//         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 mb-16 justify-items-center">
//           {languages.map((tech, i) => (
//             <TechCard key={i} tech={tech} index={i} />
//           ))}
//         </div>

//         {/* ☁️ CLOUD */}
//         <h3 className="text-2xl font-bold text-gray-900 mb-6" data-aos="fade-up">
//           Cloud & DevOps
//         </h3>
//         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 mb-16 justify-items-center">
//           {cloud.map((tech, i) => (
//             <TechCard key={i} tech={tech} index={i} />
//           ))}
//         </div>

//         {/* 📊 MORE */}
//         <h3 className="text-2xl font-bold text-gray-900 mb-6" data-aos="fade-up">
//           Databases & Tools
//         </h3>
//         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-items-center">
//           {more.map((tech, i) => (
//             <TechCard key={i} tech={tech} index={i} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default TechnologyStack;



import React, { useEffect } from "react";
// Assuming AOS and its CSS are available in the runtime environment
// import AOS from "aos"; 
// import "aos/dist/aos.css";

// Mocking AOS initialization for a single file environment
const AOS = {
    init: (config: any) => console.log('AOS initialized with config:', config),
};

const TechnologyStack: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  // 🌐 LANGUAGES
  const languages = [
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Kotlin", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Swift", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  ];

  // ☁️ CLOUD & DEVOPS
  const cloud = [
    { name: "Azure", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Google Cloud", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Jenkins", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Terraform", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  ];

  // 📊 MORE
  const more = [
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "SQLite", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    { name: "Redis", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Oracle", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    { name: "GraphQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  ];

  // ⭐ Reusable Tech Card Component
  const TechCard = ({ tech, index }: { tech: { name: string, img: string }, index: number }) => {
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        // Fallback to a plain placeholder if the external image fails to load
        e.currentTarget.onerror = null; // Prevent infinite loop
        e.currentTarget.src = "https://placehold.co/40x40/E2E8F0/475569?text=Icon";
        e.currentTarget.className += " p-2"; // Add padding for text placeholder
    };

    return (
        <div
            data-aos="zoom-in"
            data-aos-delay={index * 70}
            className="text-center group"
            style={{ fontFamily: "Times New Roman, serif" }}
        >
            <div
                // Ensure card size is responsive or remains functional across sizes
                className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-2xl overflow-hidden shadow-md
                group-hover:shadow-2xl transition-all duration-300 bg-gray-50 flex items-center justify-center
                border border-gray-200 group-hover:border-teal-600 group-hover:bg-gradient-to-r
                group-hover:from-cyan-500/10 group-hover:to-teal-600/10 backdrop-blur-sm"
            >
                <img
                    src={tech.img}
                    alt={tech.name}
                    onError={handleImageError}
                    // Responsive icon size
                    className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
            </div>
            {/* Responsive text size */}
            <p className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-teal-700 transition-colors">
                {tech.name}
            </p>
        </div>
    );
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
            Cutting-Edge Technology Stack
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            A robust collection of modern technologies that ensures speed,
            scalability, security, and long-term innovation for your business.
          </p>
        </div>

        {/* 🌐 LANGUAGES */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6" data-aos="fade-up">
          Programming Languages
        </h3>
        {/* Grid is already responsive: 3 columns on small, up to 8 on large screens */}
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-8 mb-12 md:mb-16 justify-items-center">
          {languages.map((tech, i) => (
            <TechCard key={i} tech={tech} index={i} />
          ))}
        </div>

        {/* ☁️ CLOUD */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6" data-aos="fade-up">
          Cloud & DevOps
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-8 mb-12 md:mb-16 justify-items-center">
          {cloud.map((tech, i) => (
            <TechCard key={i} tech={tech} index={i} />
          ))}
        </div>

        {/* 📊 MORE */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6" data-aos="fade-up">
          Databases & Tools
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-8 justify-items-center">
          {more.map((tech, i) => (
            <TechCard key={i} tech={tech} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnologyStack;