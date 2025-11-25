

// import { FC } from "react";
// import { Quote, Star, TrendingUp, Building, ArrowRight } from "lucide-react";

// interface Industry {
//   name: string;
//   projects: number;
// }

// const industries: Industry[] = [
//   { name: "Technology", projects: 45 },
//   { name: "Healthcare", projects: 32 },
//   { name: "Finance", projects: 28 },
//   { name: "Education", projects: 25 },
//   { name: "Retail", projects: 20 },
//   { name: "Manufacturing", projects: 18 },
//   { name: "Logistics", projects: 15 },
//   { name: "Real Estate", projects: 12 },
// ];

// // भारतीय पुरुष और महिला नामों की सूची
// const indianMaleNames = [
//   "Ravi Kumar",
//   "Amit Sharma",
//   "Vikram Singh",
//   "Sandeep Menon",
//   "Rajesh Patel",
//   "Anil Gupta",
// ];

// const indianFemaleNames = [
//   "Priya Desai",
//   "Anjali Verma",
//   "Neha Singh",
//   "Pooja Sharma",
//   "Shruti Rao",
//   "Kavita Reddy",
// ];

// // प्रोफेशनल डमी इमेज URL (पुरुष और महिला के लिए)
// const getProfessionalDummyImageUrl = (isMale: boolean, index: number) => {
//   // Unsplash या UI Faces जैसे API का उपयोग कर सकते हैं।
//   // यहाँ मैं `randomuser.me` का उपयोग कर रहा हूँ क्योंकि यह लिंग के अनुसार चित्र देता है
//   // और प्रोफेशनल दिखने वाले चित्र भी प्रदान करता है।
//   const gender = isMale ? "men" : "women";
//   // `seed` पैरामीटर का उपयोग करें ताकि हर बार एक ही इंडेक्स के लिए समान इमेज मिले,
//   // लेकिन अलग-अलग इंडेक्स के लिए अलग-अलग।
//   return `https://randomuser.me/api/portraits/${gender}/${index + 10}.jpg`;
// };


// // कंपनी और पद (Dummy Data)
// const designations = [
//   "Software Engineer",
//   "Marketing Manager",
//   "Product Owner",
//   "HR Director",
//   "Financial Analyst",
//   "Operations Lead",
// ];
// const companies = [
//   "Infosys Solutions",
//   "Wipro Digital",
//   "Tech Mahindra",
//   "HCL Tech",
//   "TCS Innovations",
//   "Reliance Digital",
// ];

// const Testimonials: FC = () => {
//   return (
//     // Updated to Teal theme and Roman font
//     <div className="font-serif">
//       {/* 1. HERO TESTIMONIALS SECTION (Remains the same) */}
//       <section className="relative py-32 bg-gradient-to-br from-teal-50 via-white to-teal-100 text-gray-900 overflow-hidden">
//         {/* Decorative gradient blobs */}
//         <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-teal-300 rounded-full blur-3xl opacity-40"></div>
//         <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-200 rounded-full blur-3xl opacity-40"></div>

//         {/* Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-8">
//             Client{" "}
//             <span className="bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-600 bg-clip-text text-transparent">
//               Testimonials
//             </span>
//           </h1>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16">
//             Real stories from our partners and clients who trusted{" "}
//             <strong className="text-teal-600">ATS GLOBAL TECH</strong> to turn
//             their vision into reality.
//           </p>

//           {/* Testimonials Grid (Fixed Data for Top 3 - can also be dynamic) */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Card 1 - Male */}
//             <div className="bg-white shadow-xl p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-teal-100">
//               <p className="text-gray-700 italic mb-6">
//                 “ATS Global Tech helped us transform our outdated system into a
//                 modern, automated solution. Their team is simply the best!”
//               </p>
//               <h3 className="text-teal-600 font-semibold">— Rahul Kapoor</h3>
//               <p className="text-sm text-gray-500">CEO, Bharat Logistics</p>
//             </div>

//             {/* Card 2 - Female */}
//             <div className="bg-white shadow-xl p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-teal-100">
//               <p className="text-gray-700 italic mb-6">
//                 “From UI/UX design to final delivery, their process was seamless.
//                 ATS Global Tech truly delivers quality and innovation.”
//               </p>
//               <h3 className="text-teal-600 font-semibold">— Sneha Reddy</h3>
//               <p className="text-sm text-gray-500">Founder, Nexa Startups</p>
//             </div>

//             {/* Card 3 - Male */}
//             <div className="bg-white shadow-xl p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-teal-100">
//               <p className="text-gray-700 italic mb-6">
//                 “We wanted a robust AI dashboard and they nailed it. Exceptional
//                 attention to detail and great communication throughout.”
//               </p>
//               <h3 className="text-teal-600 font-semibold">— Dinesh Taneja</h3>
//               <p className="text-sm text-gray-500">CTO, Visionary Analytics</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. STATS SECTION (Teal Theme) */}
//       <section className="py-16 bg-gradient-to-r from-teal-100 via-white to-teal-50 text-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { value: "150+", label: "Happy Clients", icon: "users" },
//               { value: "4.9/5", label: "Average Rating", icon: "star" },
//               { value: "98%", label: "Success Rate", icon: "trending-up" },
//               { value: "25+", label: "Industry Awards", icon: "award" },
//             ].map((stat, i) => (
//               <div key={i} className="text-center">
//                 <div className="bg-gradient-to-r from-teal-400 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
//                   {stat.icon === "users" && (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-8 w-8 text-black"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                     >
//                       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//                       <circle cx="9" cy="7" r="4" />
//                       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//                       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//                     </svg>
//                   )}
//                   {stat.icon === "star" && (
//                     <Star className="h-8 w-8 text-black" strokeWidth={2} />
//                   )}
//                   {stat.icon === "trending-up" && (
//                     <TrendingUp className="h-8 w-8 text-black" />
//                   )}
//                   {stat.icon === "award" && (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-8 w-8 text-black"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                     >
//                       <circle cx="12" cy="8" r="6" />
//                       <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
//                     </svg>
//                   )}
//                 </div>
//                 <div className="text-3xl font-bold text-teal-600">
//                   {stat.value}
//                 </div>
//                 <div className="text-gray-700 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. DETAILED TESTIMONIALS GRID (UPDATED with Indian Names, Professional Images & Gender Mix) */}
//       <section className="bg-gradient-to-r from-teal-50 via-white to-teal-100 py-20 text-gray-900">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">
//               What Our Clients Say
//             </h2>
//             <p className="text-xl text-gray-700 max-w-2xl mx-auto">
//               Real feedback from real clients who have experienced the ATS
//               GLOBAL TECH difference.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[...Array(6)].map((_, i) => {
//               const isMale = i % 2 === 0; // Alternate between male and female
//               const clientName = isMale
//                 ? indianMaleNames[Math.floor(i / 2) % indianMaleNames.length]
//                 : indianFemaleNames[Math.floor(i / 2) % indianFemaleNames.length];
//               const clientDesignation = designations[i % designations.length];
//               const clientCompany = companies[i % companies.length];

//               return (
//                 <div
//                   key={i}
//                   className="rounded-lg bg-white text-gray-800 border border-teal-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
//                 >
//                   <div className="absolute top-4 right-4">
//                     <Quote className="h-8 w-8 text-black" />
//                   </div>
//                   <div className="flex flex-col space-y-1.5 p-6 pb-4">
//                     <div className="flex items-center space-x-4 mb-4">
//                       {/* UPDATED: Professional Dummy Image URL (gender-specific) */}
//                       <img
//                         src={getProfessionalDummyImageUrl(isMale, i)}
//                         alt={`Client ${clientName}`}
//                         className="w-16 h-16 rounded-full object-cover border-2 border-teal-400"
//                       />
//                       <div>
//                         {/* UPDATED: Indian Names (gender-specific) */}
//                         <h3 className="font-semibold text-teal-800">
//                           {clientName}
//                         </h3>
//                         {/* UPDATED: Dummy Designation */}
//                         <p className="text-sm text-gray-600">
//                           {clientDesignation}
//                         </p>
//                         {/* UPDATED: Dummy Company Name */}
//                         <p className="text-sm font-medium text-teal-500">
//                           {clientCompany}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-center space-x-1 mb-2">
//                       {[...Array(5)].map((_, j) => (
//                         <Star
//                           key={j}
//                           className="h-4 w-4 text-yellow-400 fill-current"
//                         />
//                       ))}
//                     </div>

//                     <div className="inline-flex items-center rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-700 w-fit">
//                       Project Type {i + 1}
//                     </div>
//                   </div>

//                   <div className="p-6 pt-0">
//                     <p className="text-gray-700 mb-4 text-base leading-relaxed">
//                       “ATS GLOBAL TECH exceeded our expectations by delivering an
//                       innovative and scalable solution tailored to our needs.”
//                     </p>
//                     <div>
//                       <h4 className="font-semibold text-teal-700 mb-2">
//                         Results Achieved:
//                       </h4>
//                       <ul className="space-y-1">
//                         {[
//                           "Increased ROI",
//                           "Streamlined Operations",
//                           "Enhanced Client Satisfaction",
//                         ].map((r, k) => (
//                           <li
//                             key={k}
//                             className="flex items-center text-sm text-gray-700"
//                           >
//                             <TrendingUp className="h-3 w-3 text-black mr-2" />{" "}
//                             {r}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 4. INDUSTRIES SECTION (Teal Theme) */}
//       <section className="py-20 bg-gradient-to-r from-teal-100 via-white to-teal-50 text-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">
//               Industries We Serve
//             </h2>
//             <p className="text-lg text-gray-700 max-w-2xl mx-auto">
//               We've successfully delivered projects across diverse industries,
//               bringing specialized expertise to each sector.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {industries.map((industry) => (
//               <div
//                 key={industry.name}
//                 className="rounded-lg bg-white text-gray-900 text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-teal-100"
//               >
//                 <div className="flex flex-col space-y-1.5 p-6 pb-2">
//                   <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
//                     <Building className="h-6 w-6 text-black" />
//                   </div>
//                   <h3 className="font-semibold text-teal-700">
//                     {industry.name}
//                   </h3>
//                 </div>
//                 <div className="p-6 pt-0">
//                   <p className="text-2xl font-bold text-teal-600">
//                     {industry.projects}
//                   </p>
//                   <p className="text-sm text-gray-600">Projects</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5. CTA SECTION (Teal Theme) */}
//       <section className="py-20 bg-gradient-to-r from-teal-50 via-white to-teal-100 text-gray-900 text-center">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
//             Ready to Join Our Success Stories?
//           </h2>
//           <p className="text-xl mb-8 text-gray-700">
//             Let us help you achieve similar results. Start your digital
//             transformation journey today and become our next success story.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/contact"
//               className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 text-white h-11 rounded-md px-8 py-3 shadow-lg hover:shadow-xl"
//             >
//               Start Your Project
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </a>
//             <a
//               href="/projects"
//               className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-teal-300 bg-transparent hover:bg-teal-50 transition-all duration-300 text-teal-700 h-11 rounded-md px-8 py-3"
//             >
//               View Our Work
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Testimonials;


import React, { FC } from "react";
import { Quote, Star, TrendingUp, Building, ArrowRight } from "lucide-react";

interface Industry {
  name: string;
  projects: number;
}

const industries: Industry[] = [
  { name: "Technology", projects: 45 },
  { name: "Healthcare", projects: 32 },
  { name: "Finance", projects: 28 },
  { name: "Education", projects: 25 },
  { name: "Retail", projects: 20 },
  { name: "Manufacturing", projects: 18 },
  { name: "Logistics", projects: 15 },
  { name: "Real Estate", projects: 12 },
];

// भारतीय पुरुष और महिला नामों की सूची
const indianMaleNames = [
  "Ravi Kumar",
  "Amit Sharma",
  "Vikram Singh",
  "Sandeep Menon",
  "Rajesh Patel",
  "Anil Gupta",
];

const indianFemaleNames = [
  "Priya Desai",
  "Anjali Verma",
  "Neha Singh",
  "Pooja Sharma",
  "Shruti Rao",
  "Kavita Reddy",
];

// प्रोफेशनल डमी इमेज URL (पुरुष और महिला के लिए)
const getProfessionalDummyImageUrl = (isMale: boolean, index: number) => {
  // `randomuser.me` का उपयोग करें ताकि हर बार एक ही इंडेक्स के लिए समान इमेज मिले।
  const gender = isMale ? "men" : "women";
  return `https://randomuser.me/api/portraits/${gender}/${index + 10}.jpg`;
};


// कंपनी और पद (Dummy Data)
const designations = [
  "Software Engineer",
  "Marketing Manager",
  "Product Owner",
  "HR Director",
  "Financial Analyst",
  "Operations Lead",
];
const companies = [
  "Infosys Solutions",
  "Wipro Digital",
  "Tech Mahindra",
  "HCL Tech",
  "TCS Innovations",
  "Reliance Digital",
];

const Testimonials: FC = () => {
  return (
    // font-serif provides a classic, authoritative look
    <div className="font-serif min-h-screen">
      
      {/* 1. HERO TESTIMONIALS SECTION (Responsive Padding & Typography) */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-teal-50 via-white to-teal-100 text-gray-900 overflow-hidden">
        {/* Decorative gradient blobs (Hidden on very small screens if performance is a concern, but kept for modern feel) */}
        <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-teal-300 rounded-full blur-3xl opacity-30 hidden lg:block"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-200 rounded-full blur-3xl opacity-30 hidden md:block"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Client{" "}
            <span className="bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-12 lg:mb-16">
            Real stories from our partners and clients who trusted{" "}
            <strong className="text-teal-600">ATS GLOBAL TECH</strong> to turn
            their vision into reality.
          </p>

          {/* Testimonials Grid (Responsive: 1 col on mobile, 3 cols on tablet/desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 - Male */}
            <div className="bg-white shadow-xl p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-teal-100">
              <p className="text-gray-700 italic mb-6 text-base sm:text-lg">
                “ATS Global Tech helped us transform our outdated system into a
                modern, automated solution. Their team is simply the best!”
              </p>
              <div className="flex flex-col items-center">
                <h3 className="text-teal-600 font-semibold text-lg">— Rahul Kapoor</h3>
                <p className="text-sm text-gray-500">CEO, Bharat Logistics</p>
              </div>
            </div>

            {/* Card 2 - Female */}
            <div className="bg-white shadow-xl p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-teal-100">
              <p className="text-gray-700 italic mb-6 text-base sm:text-lg">
                “From UI/UX design to final delivery, their process was seamless.
                ATS Global Tech truly delivers quality and innovation.”
              </p>
              <div className="flex flex-col items-center">
                <h3 className="text-teal-600 font-semibold text-lg">— Sneha Reddy</h3>
                <p className="text-sm text-gray-500">Founder, Nexa Startups</p>
              </div>
            </div>

            {/* Card 3 - Male */}
            <div className="bg-white shadow-xl p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-teal-100">
              <p className="text-gray-700 italic mb-6 text-base sm:text-lg">
                “We wanted a robust AI dashboard and they nailed it. Exceptional
                attention to detail and great communication throughout.”
              </p>
              <div className="flex flex-col items-center">
                <h3 className="text-teal-600 font-semibold text-lg">— Dinesh Taneja</h3>
                <p className="text-sm text-gray-500">CTO, Visionary Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION (Responsive Grid) */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-teal-100 via-white to-teal-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive Grid: 2 cols on mobile, 4 cols on tablet/desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Happy Clients", icon: "users" },
              { value: "4.9/5", label: "Average Rating", icon: "star" },
              { value: "98%", label: "Success Rate", icon: "trending-up" },
              { value: "25+", label: "Industry Awards", icon: "award" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="bg-gradient-to-r from-teal-400 to-cyan-500 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  {stat.icon === "users" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 md:h-8 md:w-8 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )}
                  {stat.icon === "star" && (
                    <Star className="h-7 w-7 md:h-8 md:w-8 text-black" strokeWidth={2} />
                  )}
                  {stat.icon === "trending-up" && (
                    <TrendingUp className="h-7 w-7 md:h-8 md:w-8 text-black" />
                  )}
                  {stat.icon === "award" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 md:h-8 md:w-8 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="8" r="6" />
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                    </svg>
                  )}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-teal-600">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED TESTIMONIALS GRID (Responsive Grid) */}
      <section className="bg-gradient-to-r from-teal-50 via-white to-teal-100 py-16 sm:py-20 text-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Real feedback from real clients who have experienced the ATS
              GLOBAL TECH difference.
            </p>
          </div>

          {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => {
              const isMale = i % 2 === 0; // Alternate between male and female
              const clientName = isMale
                ? indianMaleNames[Math.floor(i / 2) % indianMaleNames.length]
                : indianFemaleNames[Math.floor(i / 2) % indianFemaleNames.length];
              const clientDesignation = designations[i % designations.length];
              const clientCompany = companies[i % companies.length];

              return (
                <div
                  key={i}
                  className="rounded-xl bg-white text-gray-800 border border-teal-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 text-teal-400 opacity-20">
                    {/* Quote icon is now larger and subtle in the corner */}
                    <Quote className="h-10 w-10" />
                  </div>
                  
                  <div className="p-6 pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      {/* Professional Dummy Image URL (gender-specific) */}
                      <img
                        src={getProfessionalDummyImageUrl(isMale, i)}
                        alt={`Client ${clientName}`}
                        className="w-16 h-16 rounded-full object-cover border-4 border-teal-500 shadow-md"
                      />
                      <div>
                        {/* Indian Names (gender-specific) */}
                        <h3 className="font-bold text-lg text-teal-800">
                          {clientName}
                        </h3>
                        {/* Dummy Designation */}
                        <p className="text-sm text-gray-600">
                          {clientDesignation}
                        </p>
                        {/* Dummy Company Name */}
                        <p className="text-sm font-medium text-teal-500">
                          {clientCompany}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    <div className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700 w-fit mb-4">
                      Project Type {i + 1}
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <p className="text-gray-700 mb-4 text-base leading-relaxed italic border-l-4 border-teal-400 pl-4">
                      “ATS GLOBAL TECH exceeded our expectations by delivering an
                      innovative and scalable solution tailored to our needs.”
                    </p>
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-2 text-sm uppercase tracking-wider">
                        Results Achieved:
                      </h4>
                      <ul className="space-y-1">
                        {[
                          "Increased ROI (25%)",
                          "Streamlined Operations (30% Faster)",
                          "Enhanced Client Satisfaction (4.9/5 Rating)",
                        ].map((r, k) => (
                          <li
                            key={k}
                            className="flex items-center text-sm text-gray-700"
                          >
                            {/* Changed icon color to teal for consistency */}
                            <TrendingUp className="h-3 w-3 text-teal-600 mr-2 flex-shrink-0" />{" "}
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES SECTION (Responsive Grid) */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-100 via-white to-teal-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We've successfully delivered projects across diverse industries,
              bringing specialized expertise to each sector.
            </p>
          </div>

          {/* Responsive Grid: 2 cols on mobile, 4 cols on tablet/desktop, gap adjusted */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="rounded-xl bg-white text-gray-900 text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-teal-100 p-4 sm:p-6"
              >
                <div className="flex flex-col space-y-1.5 pb-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Building className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="font-bold text-teal-700 text-base sm:text-lg">
                    {industry.name}
                  </h3>
                </div>
                <div className="pt-2">
                  <p className="text-2xl sm:text-3xl font-bold text-teal-600">
                    {industry.projects}
                  </p>
                  <p className="text-sm text-gray-600">Projects Delivered</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION (Responsive Button Layout) */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-50 via-white to-teal-100 text-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-gray-700">
            Let us help you achieve similar results. Start your digital
            transformation journey today and become our next success story.
          </p>
          {/* Responsive Button Layout: Stacked on mobile, side-by-side on sm and up */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-base font-medium bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 text-white h-12 rounded-lg px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 text-base font-medium border-2 border-teal-400 bg-transparent hover:bg-teal-50 transition-all duration-300 text-teal-700 h-12 rounded-lg px-8 py-3"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;