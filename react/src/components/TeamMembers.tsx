


// import React from "react";
// import {
//   Users,
//   Code,
//   Briefcase,
//   Mail,
//   Phone,
//   MapPin,
//   BookOpen,
//   ExternalLink,
//   Linkedin,
//   Github,
//   Globe,
// } from "lucide-react";

// /* ======================================================
//    TYPES
// ====================================================== */

// interface Project {
//   title: string;
//   role: string;
//   description: string;
//   imageUrl: string;
//   skills: string[];
//   liveLink?: string;
// }

// interface Experience {
//   title: string;
//   company: string;
//   duration: string;
//   bulletPoints: string[];
// }

// interface Education {
//   degree: string;
//   institution: string;
//   years: string;
// }

// interface ProfileData {
//   name: string;
//   title: string;
//   location: string;
//   contact: {
//     email: string;
//     phone: string;
//   };
//   about: string;
//   profileImageUrl: string;
//   bannerImageUrl: string;
//   social: {
//     linkedin: string;
//     github: string;
//   };
// }

// /* ======================================================
//    PROFILE DATA
// ====================================================== */

// const profileData: ProfileData = {
//   name: "Pramod Saini",
//   title: "Frontend Developer",
//   location: "Jaipur, India",
//   contact: {
//     email: "pramodsaini189@gmail.com",
//     phone: "+91 820 917 5003",
//   },
//   about: `
//     A passionate <strong>Frontend Developer</strong> skilled in 
//     <strong>React, Tailwind CSS, JavaScript</strong> and modern UI practices.
//   `,
//   profileImageUrl: "/src/assets/Pramod.png",
//   bannerImageUrl:
//     "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1500&q=80",

//   social: {
//     linkedin: "https://www.linkedin.com/in/pramod-saini-0577a5229/",
//     github: "https://github.com/Pramod-saini",
//   },
// };

// /* ======================================================
//    6 FEATURED PROJECTS
// ====================================================== */

// const featuredProjects: Project[] = [
//   {
//     title: "E-Commerce Platform",
//     role: "Frontend Developer",
//     description:
//       "A modern e-commerce website with filtering, cart, and checkout features.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
//     skills: ["React", "Tailwind", "JavaScript"],
//   },
//   {
//     title: "Portfolio Website",
//     role: "Frontend Developer",
//     description:
//       "Personal portfolio with smooth animations and responsive UI.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1200&q=60",
//     skills: ["React", "Tailwind"],
//   },
//   {
//     title: "Task Manager App",
//     role: "UI Engineer",
//     description:
//       "Task manager with drag & drop functionality and clean UI layout.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=60",
//     skills: ["React", "JavaScript"],
//   },
//   {
//     title: "Weather Forecast App",
//     role: "Frontend Developer",
//     description:
//       "Weather app using OpenWeather API with animated UI backgrounds.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=60",
//     skills: ["React", "API"],
//   },
//   {
//     title: "Real Estate Landing Page",
//     role: "UI Developer",
//     description:
//       "High-conversion landing page for real estate with modern UI.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=60",
//     skills: ["HTML", "CSS", "JavaScript"],
//   },
//   // {
//   //   title: "Quiz Application",
//   //   role: "Frontend Developer",
//   //   description:
//   //     "Interactive quiz app with score calculation & animations.",
//   //   imageUrl:
//   //     "https://images.unsplash.com/photo-1584697964403-cf408f6f8653?auto=format&fit=crop&w=1200&q=60",
//   //   skills: ["React", "JavaScript"],
//   // },
// ];

// /* ======================================================
//    EXPERIENCE + EDUCATION
// ====================================================== */

// const workExperience: Experience[] = [
//   {
//     title: "Frontend Developer (Intern)",
//     company: "SudoTechLabs",
//     duration: "Jun 2023 - Aug 2023 • Remote",
//     bulletPoints: [
//       "Built reusable UI components",
//       "Improved responsiveness",
//       "Worked on dashboard UI",
//     ],
//   },
//   {
//     title: "Open Source Contributor",
//     company: "GitHub Community",
//     duration: "2022 - Present",
//     bulletPoints: [
//       "Contributed to React projects",
//       "Improved documentation",
//       "Enhanced UI/UX designs",
//     ],
//   },
// ];

// const educationData: Education[] = [
//   {
//     degree: "Bachelor of Computer Applications (BCA)",
//     institution: "University of Rajasthan",
//     years: "2021–2024",
//   },
//   {
//     degree: "12th – Science",
//     institution: "Govt. Senior Secondary School",
//     years: "2021",
//   },
// ];

// /* ======================================================
//    SMALL COMPONENTS
// ====================================================== */

// const SkillTag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//   <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold border border-orange-300">
//     {children}
//   </span>
// );

// const ProjectCard: React.FC<Project> = ({
//   title,
//   role,
//   description,
//   imageUrl,
//   skills,
// }) => (
//   <div className="bg-white border border-orange-100 rounded-xl p-6 shadow-sm">
//     <div className="flex flex-col md:flex-row gap-6">
//       <img src={imageUrl} className="w-full md:w-48 h-36 rounded-lg object-cover" />

//       <div className="flex-1">
//         <div className="flex justify-between">
//           <h3 className="text-xl font-bold">{title}</h3>
//           <p className="text-orange-600 font-semibold">{role}</p>
//         </div>

//         <p className="text-gray-600 mt-2 mb-3">{description}</p>

//         <div className="flex flex-wrap gap-2">
//           {skills.map((s, i) => (
//             <SkillTag key={i}>{s}</SkillTag>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// /* ======================================================
//    EXPERIENCE COMPONENT
// ====================================================== */

// const ExperienceItem: React.FC<Experience> = ({
//   title,
//   company,
//   duration,
//   bulletPoints,
// }) => (
//   <div className="border-l-4 border-orange-500 pl-4">
//     <h3 className="text-xl font-bold">{title}</h3>
//     <p className="text-orange-600 font-semibold">{company}</p>
//     <p className="text-sm text-gray-500">{duration}</p>

//     <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
//       {bulletPoints.map((b, i) => (
//         <li key={i}>{b}</li>
//       ))}
//     </ul>
//   </div>
// );

// /* ======================================================
//    MAIN COMPONENT
// ====================================================== */

// const TeamMembers: React.FC = () => {
//   return (
//     <section className="min-h-screen bg-gradient-to-r from-orange-50 via-white to-orange-100">
//       {/* BANNER */}
//       <div
//         className="h-80 bg-cover bg-center"
//         style={{ backgroundImage: `url(${profileData.bannerImageUrl})` }}
//       ></div>

//       {/* PROFILE CARD */}
//       <div className="max-w-6xl mx-auto px-6 -mt-24 relative">
//         <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">

//           {/* LEFT: IMAGE + DETAILS */}
//           <div className="flex items-center gap-6">
//             <img
//               src={profileData.profileImageUrl}
//               className="w-40 h-40 rounded-full border-4 border-orange-400 object-cover shadow-md"
//             />

//             <div>
//               <h1 className="text-3xl font-bold">{profileData.name}</h1>
//               <p className="text-orange-600 font-semibold">{profileData.title}</p>

//               <p className="flex items-center gap-2 text-gray-600 mt-1">
//                 <MapPin className="h-4 w-4 text-orange-500" />
//                 {profileData.location}
//               </p>
//             </div>
//           </div>

//           {/* RIGHT: SOCIAL ICONS */}
//           <div className="flex items-center gap-4">

//             <a
//               href={profileData.social.linkedin}
//               target="_blank"
//               className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md"
//             >
//               <Linkedin className="h-5 w-5" />
//             </a>

//             <a
//               href={profileData.social.github}
//               target="_blank"
//               className="p-3 bg-gray-900 hover:bg-black text-white rounded-full shadow-md"
//             >
//               <Github className="h-5 w-5" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* MAIN CONTENT GRID */}
//       <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

//         {/* LEFT SIDE (ABOUT + PROJECTS) */}
//         <div className="md:col-span-2 space-y-10">

//           {/* ABOUT */}
//           <div className="bg-white p-8 rounded-xl shadow-sm">
//             <h2 className="text-2xl font-bold text-orange-600 flex items-center gap-2">
//               <Users /> About Me
//             </h2>

//             <p
//               className="text-gray-700 leading-relaxed mt-3"
//               dangerouslySetInnerHTML={{ __html: profileData.about }}
//             />
//           </div>

//           {/* PROJECTS */}
//           <div className="bg-white p-8 rounded-xl shadow-sm">
//             <h2 className="text-2xl font-bold text-orange-600 flex items-center gap-2 mb-4">
//               <Code /> Featured Projects
//             </h2>

//             <div className="space-y-6">
//               {featuredProjects.map((p, i) => (
//                 <ProjectCard key={i} {...p} />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE (EXPERIENCE + CONTACT + EDUCATION) */}
//         <div className="space-y-8">

//           {/* EXPERIENCE */}
//           <div className="bg-white p-8 rounded-xl shadow-sm">
//             <h2 className="text-2xl font-bold text-orange-600 flex items-center gap-2 mb-4">
//               <Briefcase /> Work Experience
//             </h2>

//             <div className="space-y-6">
//               {workExperience.map((exp, i) => (
//                 <ExperienceItem key={i} {...exp} />
//               ))}
//             </div>
//           </div>

//           {/* CONTACT */}
//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <h3 className="text-lg font-bold text-orange-600 mb-2">Contact</h3>

//             <p className="text-gray-700">
//               <Mail className="inline h-4 w-4 mr-2 text-orange-500" />
//               {profileData.contact.email}
//             </p>

//             <p className="text-gray-700 mt-2">
//               <Phone className="inline h-4 w-4 mr-2 text-orange-500" />
//               {profileData.contact.phone}
//             </p>
//           </div>

//           {/* EDUCATION */}
//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <h3 className="text-lg font-bold text-orange-600 flex items-center gap-2 mb-2">
//               <BookOpen /> Education
//             </h3>

//             {educationData.map((e, i) => (
//               <div key={i} className="mb-3">
//                 <p className="font-semibold">{e.degree}</p>
//                 <p className="text-sm text-gray-600">{e.institution}</p>
//                 <p className="text-xs text-gray-500">{e.years}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default TeamMembers;



import React from "react";
import {
  Users,
  Code,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  ExternalLink,
  Linkedin,
  Github,
  Globe,
} from "lucide-react";

/* ======================================================
   TYPES (Omitted for brevity, assumed from original)
====================================================== */

interface Project {
  title: string;
  role: string;
  description: string;
  imageUrl: string;
  skills: string[];
  liveLink?: string;
}

interface Experience {
  title: string;
  company: string;
  duration: string;
  bulletPoints: string[];
}

interface Education {
  degree: string;
  institution: string;
  years: string;
}

interface ProfileData {
  name: string;
  title: string;
  location: string;
  contact: {
    email: string;
    phone: string;
  };
  about: string;
  profileImageUrl: string;
  bannerImageUrl: string;
  social: {
    linkedin: string;
    github: string;
  };
}

/* ======================================================
   PROFILE DATA (Assumed from original)
====================================================== */

const profileData: ProfileData = {
  name: "Pramod Saini",
  title: "Frontend Developer",
  location: "Jaipur, India",
  contact: {
    email: "pramodsaini189@gmail.com",
    phone: "+91 820 917 5003",
  },
  about: `
    A passionate <strong>Frontend Developer</strong> skilled in 
    <strong>React, Tailwind CSS, JavaScript</strong> and modern UI practices.
  `,
  profileImageUrl: "/src/assets/Pramod.png",
  bannerImageUrl:
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1500&q=80",

  social: {
    linkedin: "https://www.linkedin.com/in/pramod-saini-0577a5229/",
    github: "https://github.com/Pramod-saini",
  },
};

/* ======================================================
   6 FEATURED PROJECTS (Assumed from original)
====================================================== */

const featuredProjects: Project[] = [
  {
    title: "E-Commerce Platform",
    role: "Frontend Developer",
    description:
      "A modern e-commerce website with filtering, cart, and checkout features.",
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
    skills: ["React", "Tailwind", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    role: "Frontend Developer",
    description:
      "Personal portfolio with smooth animations and responsive UI.",
    imageUrl:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1200&q=60",
    skills: ["React", "Tailwind"],
  },
  {
    title: "Task Manager App",
    role: "UI Engineer",
    description:
      "Task manager with drag & drop functionality and clean UI layout.",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=60",
    skills: ["React", "JavaScript"],
  },
  {
    title: "Weather Forecast App",
    role: "Frontend Developer",
    description:
      "Weather app using OpenWeather API with animated UI backgrounds.",
    imageUrl:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=60",
    skills: ["React", "API"],
  },
  {
    title: "Real Estate Landing Page",
    role: "UI Developer",
    description:
      "High-conversion landing page for real estate with modern UI.",
    imageUrl:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=60",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

/* ======================================================
   EXPERIENCE + EDUCATION (Assumed from original)
====================================================== */

const workExperience: Experience[] = [
  {
    title: "Frontend Developer (Intern)",
    company: "SudoTechLabs",
    duration: "Jun 2023 - Aug 2023 • Remote",
    bulletPoints: [
      "Built reusable UI components",
      "Improved responsiveness",
      "Worked on dashboard UI",
    ],
  },
  {
    title: "Open Source Contributor",
    company: "GitHub Community",
    duration: "2022 - Present",
    bulletPoints: [
      "Contributed to React projects",
      "Improved documentation",
      "Enhanced UI/UX designs",
    ],
  },
];

const educationData: Education[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "University of Rajasthan",
    years: "2021–2024",
  },
  {
    degree: "12th – Science",
    institution: "Govt. Senior Secondary School",
    years: "2021",
  },
];

/* ======================================================
   SMALL COMPONENTS
====================================================== */

const SkillTag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold border border-orange-300">
    {children}
  </span>
);

const ProjectCard: React.FC<Project> = ({
  title,
  role,
  description,
  imageUrl,
  skills,
}) => (
  <div className="bg-white border border-orange-100 rounded-xl p-6 shadow-sm">
    {/* **RESPONSIVENESS:** flex-col on small screens, md:flex-row on large screens */}
    <div className="flex flex-col md:flex-row gap-6">
      {/* **RESPONSIVENESS:** Image is slightly smaller on mobile, constrained to md:w-48 on desktop */}
      <img 
        src={imageUrl} 
        className="w-full h-40 sm:w-64 md:w-48 md:h-36 rounded-lg object-cover" 
      />

      <div className="flex-1">
        <div className="flex justify-between flex-wrap"> {/* flex-wrap added for mobile text overflow */}
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-orange-600 font-semibold">{role}</p>
        </div>

        <p className="text-gray-600 mt-2 mb-3">{description}</p>

        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <SkillTag key={i}>{s}</SkillTag>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ======================================================
   EXPERIENCE COMPONENT (Assumed from original)
====================================================== */

const ExperienceItem: React.FC<Experience> = ({
  title,
  company,
  duration,
  bulletPoints,
}) => (
  <div className="border-l-4 border-orange-500 pl-4">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-orange-600 font-semibold">{company}</p>
    <p className="text-sm text-gray-500">{duration}</p>

    <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
      {bulletPoints.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </div>
);

/* ======================================================
   MAIN COMPONENT
====================================================== */

const TeamMembers: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-orange-50 via-white to-orange-100">
      {/* BANNER */}
      <div
        className="h-48 sm:h-64 md:h-80 bg-cover bg-center" // **RESPONSIVENESS:** Smaller height on small screens
        style={{ backgroundImage: `url(${profileData.bannerImageUrl})` }}
      ></div>

      {/* PROFILE CARD */}
      {/* **RESPONSIVENESS:** Max width and negative margin for overlay effect */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-20 sm:-mt-24 relative"> 
        <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT: IMAGE + DETAILS */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
            {/* **RESPONSIVENESS:** Image size adapted for mobile */}
            <img
              src={profileData.profileImageUrl}
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border-4 border-orange-400 object-cover shadow-md"
            />

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">{profileData.name}</h1>
              <p className="text-orange-600 font-semibold">{profileData.title}</p>

              <p className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 mt-1">
                <MapPin className="h-4 w-4 text-orange-500" />
                {profileData.location}
              </p>
          </div>
          </div>

          {/* RIGHT: SOCIAL ICONS */}
          <div className="flex items-center gap-3 sm:gap-4 mt-4 md:mt-0">
            {/* Social icons are already responsive by design */}
            <a
              href={profileData.social.linkedin}
              target="_blank"
              className="p-2 sm:p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href={profileData.social.github}
              target="_blank"
              className="p-2 sm:p-3 bg-gray-900 hover:bg-black text-white rounded-full shadow-md"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* LEFT SIDE (ABOUT + PROJECTS) */}
        {/* **RESPONSIVENESS:** Takes full width on mobile/tablet (grid-cols-1), 2/3rds on desktop (md:col-span-2) */}
        <div className="md:col-span-2 space-y-8 md:space-y-10">

          {/* ABOUT */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-orange-600 flex items-center gap-2">
              <Users /> About Me
            </h2>

            <p
              className="text-gray-700 leading-relaxed mt-3 text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: profileData.about }}
            />
          </div>

          {/* PROJECTS */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-orange-600 flex items-center gap-2 mb-4">
              <Code /> Featured Projects
            </h2>

            <div className="space-y-6">
              {featuredProjects.map((p, i) => (
                <ProjectCard key={i} {...p} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (EXPERIENCE + CONTACT + EDUCATION) */}
        {/* **RESPONSIVENESS:** Takes full width on mobile/tablet, 1/3rd on desktop */}
        <div className="space-y-6 md:space-y-8">

          {/* EXPERIENCE */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-orange-600 flex items-center gap-2 mb-4">
              <Briefcase /> Work Experience
            </h2>

            <div className="space-y-6">
              {workExperience.map((exp, i) => (
                <ExperienceItem key={i} {...exp} />
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-orange-600 mb-2">Contact</h3>

            <p className="text-gray-700 text-sm sm:text-base">
              <Mail className="inline h-4 w-4 mr-2 text-orange-500" />
              {profileData.contact.email}
            </p>

            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              <Phone className="inline h-4 w-4 mr-2 text-orange-500" />
              {profileData.contact.phone}
            </p>
          </div>

          {/* EDUCATION */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-orange-600 flex items-center gap-2 mb-2">
              <BookOpen /> Education
            </h3>

            {educationData.map((e, i) => (
              <div key={i} className="mb-3">
                <p className="font-semibold text-sm sm:text-base">{e.degree}</p>
                <p className="text-xs sm:text-sm text-gray-600">{e.institution}</p>
                <p className="text-xs text-gray-500">{e.years}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamMembers;