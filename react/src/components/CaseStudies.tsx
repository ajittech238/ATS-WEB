

// import {
//   Target,
//   Zap,
//   ChartNoAxesColumnIncreasing,
//   TrendingUp,
//   Users,
//   Award,
//   Calendar,
//   Building,
//   ExternalLink,
//   DollarSign,
//   CircleCheckBig,
//   Clock,
//   Globe,
// } from "lucide-react";
// import { FC } from "react";

// // --- THEME CONSTANTS ---
// const PRIMARY_COLOR = "teal-500"; 
// const HOVER_COLOR = "teal-600";
// const ACCENT_TEXT = "text-teal-600";

// const CaseStudies: FC = () => {
//   return (
//     <>
//       {/* HERO SECTION - Updated to Teal Gradient */}
//       <section className={`relative py-32 bg-gradient-to-br from-teal-50 to-blue-50 text-gray-900`}>
//         <div className="absolute inset-0"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${ACCENT_TEXT}`}>
//             Client Success Stories
//           </h1>
//           <p className="text-xl mb-10 max-w-4xl mx-auto leading-relaxed text-gray-600">
//             Discover how we've helped businesses across industries achieve
//             remarkable transformations through innovative technology solutions.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className={`inline-flex items-center justify-center gap-2 h-11 rounded-lg bg-${PRIMARY_COLOR} hover:bg-${HOVER_COLOR} text-white px-10 py-4 text-lg font-semibold shadow-xl shadow-teal-200 transition`}>
//               Explore Case Studies
//               <ExternalLink className="h-5 w-5 ml-2" />
//             </button>

//             <button className={`inline-flex items-center justify-center gap-2 font-medium h-11 rounded-lg border-2 border-teal-300 ${ACCENT_TEXT} hover:bg-teal-100 transition px-10 py-4 text-lg`}>
//               Start Your Success Story
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* STATS SECTION - Updated to White BG with Teal Accent */}
//       <section className="py-20 bg-white text-gray-900 border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <div>
//               <Award className={`h-8 w-8 mx-auto mb-3 ${ACCENT_TEXT}`} />
//               <div className={`text-4xl font-bold ${ACCENT_TEXT} mb-1`}>15+</div>
//               <div className="text-gray-600">Successful Projects</div>
//             </div>
//             <div>
//               <Users className={`h-8 w-8 mx-auto mb-3 ${ACCENT_TEXT}`} />
//               <div className={`text-4xl font-bold ${ACCENT_TEXT} mb-1`}>2k</div>
//               <div className="text-gray-600">Client Trusted</div>
//             </div>
//             <div>
//               <CircleCheckBig className={`h-8 w-8 mx-auto mb-3 ${ACCENT_TEXT}`} />
//               <div className={`text-4xl font-bold ${ACCENT_TEXT} mb-1`}>98%</div>
//               <div className="text-gray-600">Client Satisfaction</div>
//             </div>
//             <div>
//               <Target className={`h-8 w-8 mx-auto mb-3 ${ACCENT_TEXT}`} />
//               <div className={`text-4xl font-bold ${ACCENT_TEXT} mb-1`}>5+</div>
//               <div className="text-gray-600">Industry Awards</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CASE STUDIES - Updated to Teal/Blue Gradient BG with White Cards */}
//       <section className={`py-24 bg-gradient-to-br from-teal-50 to-blue-50 text-gray-900`}>
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className={`text-4xl md:text-5xl font-bold ${ACCENT_TEXT} mb-6`}>
//               Transformative Case Studies
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Real challenges, innovative solutions, and measurable results that
//               demonstrate our commitment to delivering exceptional value.
//             </p>
//           </div>

//           {/* CASE STUDY LIST */}
//           <div className="space-y-16">
//             {/* CASE STUDY 1 */}
//             <div className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
//               <div className="grid grid-cols-1 lg:grid-cols-2">
//                 <div className="relative overflow-hidden">
//                   <img
//                     src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&h=600&fit=crop"
//                     alt="AI-Powered E-Commerce Revolution"
//                     className="w-full h-64 lg:h-full object-cover"
//                   />
//                   <div className="absolute top-6 left-6 flex gap-2">
//                     <span className={`bg-${PRIMARY_COLOR} text-white text-xs font-semibold px-3 py-1 rounded-full uppercase`}>
//                       E-commerce
//                     </span>
//                     <span className="bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
//                       Featured
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-8 lg:p-12">
//                   <h3 className={`text-2xl font-bold ${ACCENT_TEXT} mb-4`}>
//                     AI-Powered E-Commerce Revolution
//                   </h3>
//                   <p className="text-gray-700 mb-6">
//                     Low conversion rates, high cart abandonment, and inefficient
//                     inventory management were costing millions in lost revenue.
//                   </p>
//                   <div className="grid grid-cols-2 gap-4">
//                     {[
//                       ["300%", "Revenue Increase"],
//                       ["+85%", "Conversion Rate"],
//                       ["-60%", "Cart Abandonment"],
//                       ["96%", "Customer Satisfaction"],
//                     ].map(([val, label]) => (
//                       <div
//                         key={label}
//                         className="text-center p-4 bg-teal-50 rounded-lg border border-teal-100"
//                       >
//                         <div className={`text-2xl font-bold ${ACCENT_TEXT} mb-1`}>
//                           {val}
//                         </div>
//                         <div className="text-sm text-gray-700">{label}</div>
//                       </div>
//                     ))}
//                   </div>
//                   <button className={`mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-${PRIMARY_COLOR} hover:bg-${HOVER_COLOR} text-white h-10 px-6 py-2 transition-all`}>
//                     <ExternalLink className="h-4 w-4" /> View Case Study
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* CASE STUDY 2 */}
//             <div className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
//               <div className="grid grid-cols-1 lg:grid-cols-2">
//                 <div className="relative overflow-hidden">
//                   <img
//                     src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&h=600&fit=crop"
//                     alt="Secure Banking Transformation"
//                     className="w-full h-64 lg:h-full object-cover"
//                   />
//                   <div className="absolute top-6 left-6 flex gap-2">
//                     <span className={`bg-${PRIMARY_COLOR} text-white text-xs font-semibold px-3 py-1 rounded-full uppercase`}>
//                       Financial Services
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-8 lg:p-12">
//                   <h3 className={`text-2xl font-bold ${ACCENT_TEXT} mb-4`}>
//                     Secure Banking Transformation
//                   </h3>
//                   <p className="text-gray-700 mb-6">
//                     Legacy banking systems hindered digital transformation and
//                     security modernization.
//                   </p>
//                   <div className="grid grid-cols-2 gap-4">
//                     {[
//                       ["90%", "Mobile Adoption"],
//                       ["99.9%", "Fraud Prevention"],
//                       ["10x", "Processing Speed"],
//                       ["45%", "Cost Reduction"],
//                     ].map(([val, label]) => (
//                       <div
//                         key={label}
//                         className="text-center p-4 bg-teal-50 rounded-lg border border-teal-100"
//                       >
//                         <div className={`text-2xl font-bold ${ACCENT_TEXT} mb-1`}>
//                           {val}
//                         </div>
//                         <div className="text-sm text-gray-700">{label}</div>
//                       </div>
//                     ))}
//                   </div>
//                   <button className={`mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-${PRIMARY_COLOR} hover:bg-${HOVER_COLOR} text-white h-10 px-6 py-2 transition-all`}>
//                     <ExternalLink className="h-4 w-4" /> View Case Study
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* CASE STUDY 3 */}
//             <div className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
//               <div className="grid grid-cols-1 lg:grid-cols-2">
//                 <div className="relative overflow-hidden">
//                   <img
//                     src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg"
//                     alt="Healthcare Analytics Revolution"
//                     className="w-full h-64 lg:h-full object-cover"
//                   />
//                   <div className="absolute top-6 left-6 flex gap-2">
//                     <span className={`bg-${PRIMARY_COLOR} text-white text-xs font-semibold px-3 py-1 rounded-full uppercase`}>
//                       Healthcare
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-8 lg:p-12">
//                   <h3 className={`text-2xl font-bold ${ACCENT_TEXT} mb-4`}>
//                     Healthcare Analytics Revolution
//                   </h3>
//                   <p className="text-gray-700 mb-6">
//                     Hospitals struggled with patient data management and delayed
//                     diagnoses.
//                   </p>
//                   <div className="grid grid-cols-2 gap-4">
//                     {[
//                       ["+40%", "Diagnosis Speed"],
//                       ["+35%", "Patient Outcomes"],
//                       ["$5M", "Annual Savings"],
//                       ["99.8%", "Data Accuracy"],
//                     ].map(([val, label]) => (
//                       <div
//                         key={label}
//                         className="text-center p-4 bg-teal-50 rounded-lg border border-teal-100"
//                       >
//                         <div className={`text-2xl font-bold ${ACCENT_TEXT} mb-1`}>
//                           {val}
//                         </div>
//                         <div className="text-sm text-gray-700">{label}</div>
//                       </div>
//                     ))}
//                   </div>
//                   <button className={`mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-${PRIMARY_COLOR} hover:bg-${HOVER_COLOR} text-white h-10 px-6 py-2 transition-all`}>
//                     <ExternalLink className="h-4 w-4" /> View Case Study
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* CASE STUDY 4 */}
//             <div className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
//               <div className="grid grid-cols-1 lg:grid-cols-2">
//                 <div className="relative overflow-hidden">
//                   <img
//                     src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=600&fit=crop"
//                     alt="Enterprise Cloud Migration"
//                     className="w-full h-64 lg:h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-8 lg:p-12">
//                   <h3 className={`text-2xl font-bold ${ACCENT_TEXT} mb-4`}>
//                     Enterprise Cloud Migration
//                   </h3>
//                   <p className="text-gray-700 mb-6">
//                     On-prem infrastructure was costly and unscalable. We migrated
//                     systems seamlessly.
//                   </p>
//                   <div className="grid grid-cols-2 gap-4">
//                     {[
//                       ["60%", "Cost Reduction"],
//                       ["99.99%", "System Uptime"],
//                       ["90%", "Faster Deployment"],
//                       ["15", "Countries Covered"],
//                     ].map(([val, label]) => (
//                       <div
//                         key={label}
//                         className="text-center p-4 bg-teal-50 rounded-lg border border-teal-100"
//                       >
//                         <div className={`text-2xl font-bold ${ACCENT_TEXT} mb-1`}>
//                           {val}
//                         </div>
//                         <div className="text-sm text-gray-700">{label}</div>
//                       </div>
//                     ))}
//                   </div>
//                   <button className={`mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-${PRIMARY_COLOR} hover:bg-${HOVER_COLOR} text-white h-10 px-6 py-2 transition-all`}>
//                     <ExternalLink className="h-4 w-4" /> View Case Study
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* CASE STUDY 5 */}
//             <div className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
//               <div className="grid grid-cols-1 lg:grid-cols-2">
//                 <div className="relative overflow-hidden">
//                   <img
//                     src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&h=600&fit=crop"
//                     alt="EdTech Learning Platform"
//                     className="w-full h-64 lg:h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-8 lg:p-12">
//                   <h3 className={`text-2xl font-bold ${ACCENT_TEXT} mb-4`}>
//                     EdTech Learning Platform
//                   </h3>
//                   <p className="text-gray-700 mb-6">
//                     Traditional learning lacked engagement. AI-personalized
//                     education increased results.
//                   </p>
//                   <div className="grid grid-cols-2 gap-4">
//                     {[
//                       ["+75%", "Engagement"],
//                       ["85%", "Completion Rate"],
//                       ["+50%", "Efficiency"],
//                       ["500K+", "Users"],
//                     ].map(([val, label]) => (
//                       <div
//                         key={label}
//                         className="text-center p-4 bg-teal-50 rounded-lg border border-teal-100"
//                       >
//                         <div className={`text-2xl font-bold ${ACCENT_TEXT} mb-1`}>
//                           {val}
//                         </div>
//                         <div className="text-sm text-gray-700">{label}</div>
//                       </div>
//                     ))}
//                   </div>
//                   <button className={`mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-${PRIMARY_COLOR} hover:bg-${HOVER_COLOR} text-white h-10 px-6 py-2 transition-all`}>
//                     <ExternalLink className="h-4 w-4" /> View Case Study
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* CASE STUDY 6 */}
//             <div className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
//               <div className="grid grid-cols-1 lg:grid-cols-2">
//                 <div className="relative overflow-hidden">
//                   <img
//                     src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&h=600&fit=crop"
//                     alt="Smart Logistics Optimization"
//                     className="w-full h-64 lg:h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-8 lg:p-12">
//                   <h3 className={`text-2xl font-bold ${ACCENT_TEXT} mb-4`}>
//                     Smart Logistics Optimization
//                   </h3>
//                   <p className="text-gray-700 mb-6">
//                     Inefficient fleet management was driving up costs and delays.
//                     AI-driven logistics fixed it.
//                   </p>
//                   <div className="grid grid-cols-2 gap-4">
//                     {[
//                       ["30%", "Fuel Savings"],
//                       ["95%", "On-time Delivery"],
//                       ["+40%", "Efficiency"],
//                       ["92%", "Customer Satisfaction"],
//                     ].map(([val, label]) => (
//                       <div
//                         key={label}
//                         className="text-center p-4 bg-teal-50 rounded-lg border border-teal-100"
//                       >
//                         <div className={`text-2xl font-bold ${ACCENT_TEXT} mb-1`}>
//                           {val}
//                         </div>
//                         <div className="text-sm text-gray-700">{label}</div>
//                       </div>
//                     ))}
//                   </div>
//                   <button className={`mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-${PRIMARY_COLOR} hover:bg-${HOVER_COLOR} text-white h-10 px-6 py-2 transition-all`}>
//                     <ExternalLink className="h-4 w-4" /> View Case Study
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA SECTION - Updated to Teal Gradient */}
//       <section className={`py-24 bg-${PRIMARY_COLOR} text-white text-center`}>
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl md:text-5xl font-bold mb-8">
//             Ready to Write Your Success Story?
//           </h2>
//           <p className="text-xl mb-12 max-w-3xl mx-auto">
//             Join our growing list of successful clients who have transformed
//             their businesses with our innovative solutions.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
//             <button className={`inline-flex items-center justify-center gap-2 bg-white text-${PRIMARY_COLOR} hover:bg-gray-100 px-12 py-6 text-lg font-semibold rounded-lg transition shadow-xl`}>
//               Start Your Transformation
//               <ExternalLink className="h-6 w-6" />
//             </button>
//             <a href="/contact">
//               <button className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-12 py-6 text-lg font-semibold rounded-lg transition">
//                 Schedule Free Consultation
//               </button>
//             </a>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             {[
//               [
//                 "Proven Methodology",
//                 "Battle-tested processes that deliver consistent results",
//               ],
//               [
//                 "Industry Recognition",
//                 "Award-winning solutions recognized by leaders",
//               ],
//               [
//                 "Measurable Impact",
//                 "Quantifiable results that drive real business value",
//               ],
//             ].map(([title, desc]) => (
//               <div
//                 key={title}
//                 className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
//               >
//                 <h3 className={`font-bold text-lg ${ACCENT_TEXT} mb-2`}>
//                   {title}
//                 </h3>
//                 <p className="text-gray-700">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CaseStudies;

import {
  Target,
  Zap,
  ChartNoAxesColumnIncreasing, // Not used but included in the original imports
  TrendingUp, // Not used but included in the original imports
  Users,
  Award,
  Calendar, // Not used but included in the original imports
  Building, // Not used but included in the original imports
  ExternalLink,
  DollarSign, // Not used but included in the original imports
  CircleCheckBig,
  Clock, // Not used but included in the original imports
  Globe, // Not used but included in the original imports
} from "lucide-react";
import { FC } from "react";

// --- THEME CONSTANTS ---
const PRIMARY_COLOR = "teal-500"; 
const HOVER_COLOR = "teal-600";
const ACCENT_TEXT = "text-teal-600";

const CaseStudies: FC = () => {
  return (
    <>
      {/* HERO SECTION - Updated to Teal Gradient */}
      {/* Responsive Padding: py-32 provides large vertical space */}
      <section className={`relative py-24 md:py-32 bg-gradient-to-br from-teal-50 to-blue-50 text-gray-900`}>
        <div className="absolute inset-0"></div>
        {/* Responsive Width: max-w-7xl ensures content doesn't stretch too far on desktop */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Responsive Text Size: text-5xl (mobile) to md:text-7xl (desktop) */}
          <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight ${ACCENT_TEXT}`}>
            Client Success Stories
          </h1>
          <p className="text-lg sm:text-xl mb-10 max-w-4xl mx-auto leading-relaxed text-gray-600">
            Discover how we've helped businesses across industries achieve
            remarkable transformations through innovative technology solutions.
          </p>

          {/* Responsive Buttons: flex-col (mobile) to sm:flex-row (tablet/desktop) */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button className={`inline-flex items-center justify-center gap-2 h-11 rounded-lg bg-${PRIMARY_COLOR} hover:bg-${HOVER_COLOR} text-white px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold shadow-xl shadow-teal-200 transition w-full sm:w-auto`}>
              Explore Case Studies
              <ExternalLink className="h-5 w-5" />
            </button>

            <button className={`inline-flex items-center justify-center gap-2 font-medium h-11 rounded-lg border-2 border-teal-300 ${ACCENT_TEXT} hover:bg-teal-100 transition px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg w-full sm:w-auto`}>
              Start Your Success Story
            </button>
          </div>
        </div>
      </section>

      ---

      {/* STATS SECTION - Updated to White BG with Teal Accent */}
      <section className="py-12 sm:py-20 bg-white text-gray-900 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive Grid: grid-cols-2 (mobile) to md:grid-cols-4 (tablet/desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Award className={`h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 ${ACCENT_TEXT}`} />
              <div className={`text-3xl sm:text-4xl font-bold ${ACCENT_TEXT} mb-1`}>15+</div>
              <div className="text-sm sm:text-base text-gray-600">Successful Projects</div>
            </div>
            <div>
              <Users className={`h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 ${ACCENT_TEXT}`} />
              <div className={`text-3xl sm:text-4xl font-bold ${ACCENT_TEXT} mb-1`}>2k</div>
              <div className="text-sm sm:text-base text-gray-600">Client Trusted</div>
            </div>
            <div>
              <CircleCheckBig className={`h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 ${ACCENT_TEXT}`} />
              <div className={`text-3xl sm:text-4xl font-bold ${ACCENT_TEXT} mb-1`}>98%</div>
              <div className="text-sm sm:text-base text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <Target className={`h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 ${ACCENT_TEXT}`} />
              <div className={`text-3xl sm:text-4xl font-bold ${ACCENT_TEXT} mb-1`}>5+</div>
              <div className="text-sm sm:text-base text-gray-600">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      ---

      {/* CASE STUDIES - Updated to Teal/Blue Gradient BG with White Cards */}
      <section className={`py-16 sm:py-24 bg-gradient-to-br from-teal-50 to-blue-50 text-gray-900`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${ACCENT_TEXT} mb-4`}>
              Transformative Case Studies
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Real challenges, innovative solutions, and measurable results that
              demonstrate our commitment to delivering exceptional value.
            </p>
          </div>

          {/* CASE STUDY LIST */}
          <div className="space-y-12 sm:space-y-16">
            {/* CASE STUDY CARD TEMPLATE */}
            {[
              {
                title: "AI-Powered E-Commerce Revolution",
                industry: "E-commerce",
                featured: true,
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&h=600&fit=crop",
                challenge: "Low conversion rates, high cart abandonment, and inefficient inventory management were costing millions in lost revenue.",
                metrics: [
                  ["300%", "Revenue Increase"],
                  ["+85%", "Conversion Rate"],
                  ["-60%", "Cart Abandonment"],
                  ["96%", "Customer Satisfaction"],
                ],
              },
              {
                title: "Secure Banking Transformation",
                industry: "Financial Services",
                featured: false,
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&h=600&fit=crop",
                challenge: "Legacy banking systems hindered digital transformation and security modernization.",
                metrics: [
                  ["90%", "Mobile Adoption"],
                  ["99.9%", "Fraud Prevention"],
                  ["10x", "Processing Speed"],
                  ["45%", "Cost Reduction"],
                ],
              },
              {
                title: "Healthcare Analytics Revolution",
                industry: "Healthcare",
                featured: false,
                image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
                challenge: "Hospitals struggled with patient data management and delayed diagnoses.",
                metrics: [
                  ["+40%", "Diagnosis Speed"],
                  ["+35%", "Patient Outcomes"],
                  ["$5M", "Annual Savings"],
                  ["99.8%", "Data Accuracy"],
                ],
              },
              {
                title: "Enterprise Cloud Migration",
                industry: "Cloud Solutions",
                featured: false,
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=600&fit=crop",
                challenge: "On-prem infrastructure was costly and unscalable. We migrated systems seamlessly.",
                metrics: [
                  ["60%", "Cost Reduction"],
                  ["99.99%", "System Uptime"],
                  ["90%", "Faster Deployment"],
                  ["15", "Countries Covered"],
                ],
              },
              {
                title: "EdTech Learning Platform",
                industry: "Education Technology",
                featured: false,
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&h=600&fit=crop",
                challenge: "Traditional learning lacked engagement. AI-personalized education increased results.",
                metrics: [
                  ["+75%", "Engagement"],
                  ["85%", "Completion Rate"],
                  ["+50%", "Efficiency"],
                  ["500K+", "Users"],
                ],
              },
              {
                title: "Smart Logistics Optimization",
                industry: "Logistics",
                featured: false,
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&h=600&fit=crop",
                challenge: "Inefficient fleet management was driving up costs and delays. AI-driven logistics fixed it.",
                metrics: [
                  ["30%", "Fuel Savings"],
                  ["95%", "On-time Delivery"],
                  ["+40%", "Efficiency"],
                  ["92%", "Customer Satisfaction"],
                ],
              },
            ].map((study, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Responsive Grid: grid-cols-1 (mobile/tablet) to lg:grid-cols-2 (desktop) */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`bg-${PRIMARY_COLOR} text-white text-xs font-semibold px-3 py-1 rounded-full uppercase`}>
                        {study.industry}
                      </span>
                      {study.featured && (
                        <span className="bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                          Featured
                        </span>
                      )}
                  </div>
                </div>
                <div className="p-6 sm:p-8 lg:p-12">
                  <h3 className={`text-xl sm:text-2xl font-bold ${ACCENT_TEXT} mb-4`}>
                    {study.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-sm sm:text-base">
                    **Challenge:** {study.challenge}
                  </p>
                  {/* Responsive Grid: grid-cols-2 */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {study.metrics.map(([val, label]) => (
                      <div
                        key={label}
                        className="text-center p-3 sm:p-4 bg-teal-50 rounded-lg border border-teal-100"
                      >
                        <div className={`text-xl sm:text-2xl font-bold ${ACCENT_TEXT} mb-1`}>
                          {val}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-700">{label}</div>
                      </div>
                    ))}
                  </div>
                  {/* Responsive Button: w-full on small screens */}
                  <button className={`mt-6 sm:mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-${PRIMARY_COLOR} hover:bg-${HOVER_COLOR} text-white h-10 px-6 py-2 transition-all w-full lg:w-auto text-sm sm:text-base`}>
                    <ExternalLink className="h-4 w-4" /> View Case Study
                  </button>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      ---

      {/* CTA SECTION - Updated to Teal Gradient */}
      <section className={`py-16 sm:py-24 bg-${PRIMARY_COLOR} text-white text-center`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg sm:text-xl mb-10 sm:mb-12 max-w-3xl mx-auto">
            Join our growing list of successful clients who have transformed
            their businesses with our innovative solutions.
          </p>

          {/* Responsive Buttons: flex-col (mobile) to sm:flex-row (tablet/desktop) */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-12">
            <button className={`inline-flex items-center justify-center gap-2 bg-white text-${PRIMARY_COLOR} hover:bg-gray-100 px-8 py-3 sm:px-12 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition shadow-xl w-full sm:w-auto`}>
              Start Your Transformation
              <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <a href="/contact" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-3 sm:px-12 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition w-full">
                Schedule Free Consultation
              </button>
            </a>
          </div>

          {/* Responsive Grid: grid-cols-1 (mobile) to md:grid-cols-3 (tablet/desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            {[
              [
                "Proven Methodology",
                "Battle-tested processes that deliver consistent results",
              ],
              [
                "Industry Recognition",
                "Award-winning solutions recognized by leaders",
              ],
              [
                "Measurable Impact",
                "Quantifiable results that drive real business value",
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-white shadow-lg rounded-xl p-4 sm:p-6 hover:shadow-xl transition"
              >
                <h3 className={`font-bold text-base sm:text-lg ${ACCENT_TEXT} mb-2`}>
                  {title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;