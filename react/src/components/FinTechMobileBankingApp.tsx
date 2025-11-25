

// import React from "react";

// // THEME CHANGE: FeatureCard uses Teal colors now
// const FeatureCard: React.FC<{ title: string; description: string }> = ({
//   title,
//   description,
// }) => (
//   // THEME CHANGE: Border color and hover shadow
//   <div className="bg-white border border-teal-200 p-6 rounded-2xl transition hover:shadow-md hover:shadow-teal-200/60">
//     {/* THEME CHANGE: Title color */}
//     <h4 className="text-lg font-semibold text-teal-800 mb-2">{title}</h4>
//     <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
//   </div>
// );

// export default function FinTechMobileBankingApp() {
//   return (
//     // THEME CHANGE: Background gradient and font family changed to Teal/Cyan and serif
//     <main className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-cyan-100 text-gray-900 py-32 px-4 font-serif">
//       <div className="max-w-6xl mx-auto">

//         {/* HERO */}
//         <section className="grid gap-10 lg:grid-cols-2 items-center mb-16">
//           <div>
//             {/* THEME CHANGE: Tag background and text color */}
//             <p className="text-sm font-semibold bg-teal-100 px-3 py-1 inline-block rounded-full text-teal-700">
//               Case Study · FinTech
//             </p>
//             {/* THEME CHANGE: Heading color */}
//             <h1 className="text-4xl md:text-5xl font-bold my-4 leading-tight text-teal-800">
//               FinTech Mobile Banking App
//             </h1>
//             <p className="text-gray-700 text-lg mb-6 max-w-xl">
//               A cross-platform banking solution offering biometric authentication,
//               instant payments, card controls, and proactive fraud detection —
//               delivering a secure, seamless financial experience.
//             </p>

//             <div className="grid grid-cols-2 gap-4 max-w-xs">
//               <div>
//                 {/* THEME CHANGE: Stat value color */}
//                 <p className="text-xl font-bold text-teal-700">3M+</p>
//                 <p className="text-xs text-gray-600">Active users</p>
//               </div>
//               <div>
//                 {/* THEME CHANGE: Stat value color */}
//                 <p className="text-xl font-bold text-teal-700">99.95%</p>
//                 <p className="text-xs text-gray-600">Uptime SLA</p>
//               </div>
//             </div>

//             {/* THEME CHANGE: Button gradient color and hover shadow */}
//             <button className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:shadow-teal-300/50">
//               Download Case Study
//             </button>
//           </div>

//           <img
//             src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop"
//             alt="Mobile banking mockup"
//             className="rounded-2xl shadow-lg w-full h-96 object-cover"
//           />
//         </section>

//         {/* Overview */}
//         <section className="grid gap-8 lg:grid-cols-3 items-start mb-20">
//           {/* THEME CHANGE: Overview box border and heading color */}
//           <div className="lg:col-span-2 bg-white border border-teal-200 rounded-2xl p-8 shadow-sm">
//             <h2 className="text-2xl font-semibold mb-4 text-teal-700">
//               Project Overview
//             </h2>
//             <p className="text-gray-700 leading-relaxed">
//               The goal was to build a secure, feature-rich banking app that
//               combines next-gen digital payments, real-time insights, and
//               personalized controls — empowering users with trust and transparency.
//             </p>
//           </div>

//           {/* THEME CHANGE: Snapshot background, border, and heading color */}
//           <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 shadow-sm">
//             <h4 className="text-xl font-semibold mb-3 text-teal-800">
//               Project Snapshot
//             </h4>
//             <div className="space-y-2 text-sm text-gray-700">
//               <p><strong>Duration:</strong> 8 months</p>
//               <p><strong>Team:</strong> 10 developers, 2 security leads, 3 QA</p>
//               <p><strong>Stack:</strong> React Native, Node.js, PostgreSQL, AWS</p>
//               <p><strong>Compliance:</strong> PCI DSS alignment</p>
//             </div>
//           </div>
//         </section>

//         {/* Core Features */}
//         <section className="mb-20">
//           {/* THEME CHANGE: Heading color */}
//           <h2 className="text-2xl font-semibold mb-6 text-teal-700">
//             Core Features
//           </h2>
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {/* FeatureCard components automatically use Teal theme */}
//             <FeatureCard title="Biometric Login" description="Face and fingerprint recognition for secure access with fallback PIN." />
//             <FeatureCard title="Instant Transfers" description="Real-time peer-to-peer payments with fraud protection." />
//             <FeatureCard title="Card Controls" description="Freeze cards, set limits, manage merchants and track usage." />
//             <FeatureCard title="Spending Insights" description="Categorized reports and proactive budgeting reminders." />
//             <FeatureCard title="Digital Onboarding" description="KYC verification and e-signatures within minutes." />
//             <FeatureCard title="Push Notifications" description="Instant alerts for every transaction and suspicious activity." />
//           </div>
//         </section>

//         {/* Security + Visual */}
//         <section className="grid gap-10 lg:grid-cols-2 mb-20 items-center">
//           <div className="rounded-2xl overflow-hidden shadow-lg">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1744843242870-f1635044c7eb?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=1000"
//               alt="Secure mobile banking"
//               className="w-full h-80 object-cover"
//             />
//           </div>

//           <div>
//             {/* THEME CHANGE: Heading color */}
//             <h3 className="text-2xl font-semibold mb-3 text-teal-800">
//               Bank-Grade Security
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               The app includes multi-layered encryption, continuous risk monitoring,
//               and adaptive fraud detection — ensuring full financial safety.
//             </p>

//             <ul className="list-disc ml-5 text-sm text-gray-600 mt-4 space-y-2">
//               <li>Encrypted communication</li>
//               <li>Device binding and tokenization</li>
//               <li>Anomaly-based fraud detection</li>
//               <li>Role-based access controls</li>
//             </ul>
//           </div>
//         </section>

//         {/* Metrics */}
//         <section className="mb-20">
//           {/* THEME CHANGE: Heading color */}
//           <h2 className="text-2xl font-semibold mb-6 text-teal-700">
//             Impact & Performance
//           </h2>
//           <div className="grid sm:grid-cols-3 gap-6">
//             {[
//               { value: "4.7", label: "App Store rating" },
//               { value: "+60%", label: "User engagement" },
//               { value: "-35%", label: "Fraud attempts" },
//             ].map((stat, i) => (
//               <div
//                 key={i}
//                 // THEME CHANGE: Box border and stat value color
//                 className="bg-white border border-teal-200 p-6 rounded-2xl text-center shadow-sm"
//               >
//                 <p className="text-3xl font-bold text-teal-700">{stat.value}</p>
//                 <p className="text-sm text-gray-600">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Tech Stack */}
//         <section className="mb-20">
//           {/* THEME CHANGE: Heading color */}
//           <h2 className="text-2xl font-semibold mb-4 text-teal-700">
//             Technology Stack
//           </h2>
//           <div className="flex flex-wrap gap-3">
//             {[
//               "React Native",
//               "Node.js",
//               "PostgreSQL",
//               "AWS",
//               "Kafka",
//               "JWT",
//               "GraphQL",
//               "Docker",
//             ].map((t) => (
//               <span
//                 key={t}
//                 // THEME CHANGE: Tech tag background, border, and text color
//                 className="px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-sm text-teal-700"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="mb-20">
//           {/* THEME CHANGE: Heading color */}
//           <h2 className="text-2xl font-semibold mb-5 text-teal-700">
//             What Clients Say
//           </h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             {[
//               {
//                 quote:
//                   "The seamless onboarding and instant payments boosted our retail adoption dramatically.",
//                 author: "Head of Digital Banking, National Bank",
//               },
//               {
//                 quote:
//                   "Security upgrades and risk scoring helped us reduce fraudulent card activity significantly.",
//                 author: "Chief Risk Officer, Finance Corp",
//               },
//             ].map((t, i) => (
//               <blockquote
//                 key={i}
//                 // THEME CHANGE: Blockquote border and footer text color
//                 className="bg-white border border-teal-200 p-6 rounded-2xl shadow-sm"
//               >
//                 <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
//                 <footer className="text-sm text-teal-700">— {t.author}</footer>
//               </blockquote>
//             ))}
//           </div>
//         </section>

//         {/* FAQ */}
//         <section className="mb-20">
//           {/* THEME CHANGE: Heading color */}
//           <h2 className="text-2xl font-semibold mb-6 text-teal-700">FAQs</h2>
//           <div className="space-y-4">
//             {[
//               {
//                 q: "What compliance standards does the app meet?",
//                 a: "Built with PCI-DSS alignment, frequent audits, and automated security scanning.",
//               },
//               {
//                 q: "How fast is the onboarding process?",
//                 a: "Onboarding takes just a few minutes with digital KYC and automated verification.",
//               },
//             ].map((faq, i) => (
//               <details
//                 key={i}
//                 // THEME CHANGE: FAQ background, border, and summary/question color
//                 className="bg-teal-50 border border-teal-200 p-4 rounded-lg"
//               >
//                 <summary className="font-medium text-teal-800 cursor-pointer">
//                   {faq.q}
//                 </summary>
//                 <p className="text-gray-700 text-sm mt-2">{faq.a}</p>
//               </details>
//             ))}
//           </div>
//         </section>

//         {/* CTA */}
//         <section 
//           // THEME CHANGE: CTA background, border, and shadow
//           className="bg-teal-50 border border-teal-200 rounded-2xl p-10 text-center shadow-sm"
//         >
//           {/* THEME CHANGE: Heading color */}
//           <h3 className="text-2xl font-semibold mb-3 text-teal-800">
//             Want to deliver a next-generation banking experience?
//           </h3>
//           <p className="text-gray-700 mb-6">
//             Let’s build a secure, future-ready financial platform together.
//           </p>
//           {/* THEME CHANGE: Button gradient color and hover shadow */}
//           <button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-teal-300/50">
//             Start Your Project
//           </button>
//         </section>
//       </div>
//     </main>
//   );
// }



import React from "react";
// Importing lucide-react icons for visual enhancement
import { ShieldCheck, TrendingUp, HandCoins } from 'lucide-react';

// Define the interface for FeatureCard props (Critical for TypeScript)
interface FeatureCardProps {
  title: string;
  description: string;
  Icon: React.ElementType; // Icon is an optional React component
}

// THEME CHANGE: FeatureCard uses Teal colors now (Applied Interface)
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  Icon
}) => (
  // THEME CHANGE: Border color and hover shadow
  <div className="bg-white border border-teal-200 p-6 rounded-2xl transition duration-300 hover:shadow-xl hover:shadow-teal-300/60 transform hover:-translate-y-0.5">
    <div className="flex items-start space-x-4 mb-3">
        {/* Icon container */}
        <div className="text-teal-600 bg-teal-100 p-2 rounded-full shadow-inner flex-shrink-0">
            {Icon && <Icon className="w-6 h-6" />}
        </div>
        {/* THEME CHANGE: Title color */}
        <h4 className="text-xl font-bold text-teal-800 mt-1">{title}</h4>
    </div>
    <p className="text-base text-gray-700 leading-relaxed pl-10 -mt-1">{description}</p>
  </div>
);

// Renaming the main component to App for standard single-file structure
export default function App() {
  
  const coreFeatures = [
    {
      title: "Biometric Login",
      description: "Face and fingerprint recognition for secure access with fallback PIN.",
      Icon: ShieldCheck,
    },
    {
      title: "Instant Transfers",
      description: "Real-time peer-to-peer payments with advanced fraud protection.",
      Icon: HandCoins,
    },
    {
      title: "Card Controls",
      description: "Freeze cards instantly, set limits, manage merchants and track usage.",
      Icon: ShieldCheck,
    },
    {
      title: "Spending Insights",
      description: "Categorized reports, personalized financial goals, and proactive budgeting reminders.",
      Icon: TrendingUp,
    },
    {
      title: "Digital Onboarding",
      description: "KYC verification and e-signatures completed entirely within the app in minutes.",
      Icon: HandCoins,
    },
    {
      title: "Push Notifications",
      description: "Instant, configurable alerts for every transaction and suspicious activity.",
      Icon: ShieldCheck,
    },
  ];

  const metrics = [
    { value: "4.8", label: "App Store rating" },
    { value: "+60%", label: "User Engagement" },
    { value: "-35%", label: "Fraud Attempts" },
    { value: "99.99%", label: "API Uptime" }, // Added an extra stat for grid balance
  ];

  return (
    // THEME CHANGE: Background gradient and font family changed. Responsive padding applied.
    <main className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-cyan-100 text-gray-900 py-16 md:py-24 lg:py-32 px-4 font-serif antialiased">
      <div className="max-w-7xl mx-auto">

        {/* HERO - Fully Responsive Grid */}
        <section className="grid gap-10 lg:grid-cols-2 items-center mb-20 md:mb-24">
          <div>
            {/* THEME CHANGE: Tag background and text color */}
            <p className="text-sm font-semibold bg-teal-100 px-4 py-1.5 inline-block rounded-full text-teal-700 shadow-sm mb-4">
              Case Study · FinTech Digital Transformation
            </p>
            {/* THEME CHANGE: Heading color and responsiveness increased */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold my-4 leading-tight text-teal-900">
              Next-Gen Mobile Banking Experience
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl">
              A secure, cross-platform banking solution offering biometric authentication,
              instant payments, card controls, and proactive fraud detection.
            </p>

            {/* Stats - Responsive grid: 2 columns on mobile, 4 columns on tablet */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-inner border border-teal-100 max-w-2xl">
              <div className="text-center">
                {/* THEME CHANGE: Stat value color */}
                <p className="text-3xl font-extrabold text-teal-700">3M+</p>
                <p className="text-xs text-gray-600 uppercase tracking-wider mt-0.5">Active users</p>
              </div>
              <div className="text-center">
                {/* THEME CHANGE: Stat value color */}
                <p className="text-3xl font-extrabold text-teal-700">99.95%</p>
                <p className="text-xs text-gray-600 uppercase tracking-wider mt-0.5">Uptime SLA</p>
              </div>
              <div className="text-center">
                {/* THEME CHANGE: Stat value color */}
                <p className="text-3xl font-extrabold text-teal-700">PCI-DSS</p>
                <p className="text-xs text-gray-600 uppercase tracking-wider mt-0.5">Compliance</p>
              </div>
              <div className="text-center">
                {/* THEME CHANGE: Stat value color */}
                <p className="text-3xl font-extrabold text-teal-700">2ms</p>
                <p className="text-xs text-gray-600 uppercase tracking-wider mt-0.5">Avg. Transfer Time</p>
              </div>
            </div>

            {/* THEME CHANGE: Button gradient color and hover shadow. Full width on small screen. */}
            <button className="mt-10 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-teal-400/50 transition duration-300 transform hover:scale-105 w-full sm:w-auto">
              Download Full Case Study
            </button>
          </div>

          {/* Hero Image - Responsive height and fallback */}
          <div className="rounded-3xl overflow-hidden shadow-2xl transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop"
              alt="Mobile banking mockup"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null; 
                e.currentTarget.src = "https://placehold.co/1200x900/4DB6AC/FFFFFF?text=Mobile+Banking+App";
              }}
            />
          </div>
        </section>

        {/* Overview & Snapshot - Fully Responsive Stacking */}
        <section className="grid gap-8 lg:grid-cols-3 items-start mb-20 md:mb-24">
          {/* Main Overview Content - Takes 2/3 space on large screens */}
          <div className="lg:col-span-2 bg-white border border-teal-200 rounded-3xl p-8 shadow-xl">
            {/* THEME CHANGE: Heading color */}
            <h2 className="text-3xl font-bold mb-4 text-teal-800">
              Project Overview
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-teal-400 pl-4 italic">
              The goal was to build a secure, feature-rich banking app that
              combines next-gen digital payments, real-time insights, and
              personalized controls — empowering users with trust and transparency across iOS and Android platforms.
            </p>
          </div>

          {/* Project Snapshot Sidebar */}
          <div className="bg-teal-100 border border-teal-300 rounded-3xl p-8 shadow-xl">
            <h4 className="text-2xl font-bold mb-4 text-teal-800">
              Project Snapshot
            </h4>
            <div className="space-y-3 text-base text-gray-800">
              <p className="flex justify-between border-b border-teal-200 pb-2">
                <span className="font-semibold">Duration:</span> <span>8 months</span>
              </p>
              <p className="flex justify-between border-b border-teal-200 pb-2">
                <span className="font-semibold">Team Size:</span> <span>15 specialists</span>
              </p>
              <p className="flex justify-between border-b border-teal-200 pb-2">
                <span className="font-semibold">Core Stack:</span> <span>React Native, Node.js</span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold">Compliance:</span> <span className="text-teal-700 font-bold">PCI DSS aligned</span>
              </p>
            </div>
          </div>
        </section>

        {/* Core Features - Responsive Grid: 1 column, 2 columns, 3 columns */}
        <section className="mb-20 md:mb-24">
          {/* THEME CHANGE: Heading color */}
          <h2 className="text-3xl font-bold text-center mb-10 text-teal-800">
            Platform Core Features
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* FeatureCard components automatically use Teal theme */}
            {coreFeatures.map((f, i) => (
                <FeatureCard 
                    key={i} 
                    title={f.title} 
                    description={f.description} 
                    Icon={f.Icon} 
                />
            ))}
          </div>
        </section>

        {/* Security + Visual - Fully Responsive Stacking */}
        <section className="grid gap-10 lg:grid-cols-2 mb-20 md:mb-24 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl transition duration-500">
            <img
              src="https://plus.unsplash.com/premium_photo-1744843242870-f1635044c7eb?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=1000"
              alt="Secure mobile banking"
              className="w-full h-64 sm:h-80 object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null; 
                e.currentTarget.src = "https://placehold.co/1200x800/26A69A/FFFFFF?text=Bank-Grade+Security";
              }}
            />
          </div>

          <div>
            {/* THEME CHANGE: Heading color */}
            <h3 className="text-3xl font-bold mb-4 text-teal-800">
              Bank-Grade Security Architecture
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The app includes multi-layered encryption, continuous risk monitoring,
              and adaptive fraud detection — ensuring full financial safety for every transaction.
            </p>

            <ul className="text-gray-700 space-y-2 text-base">
              <li className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0" /> Encrypted end-to-end communication (TLS 1.3)
              </li>
              <li className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0" /> Device binding and tokenization for sensitive data
              </li>
              <li className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0" /> Adaptive, anomaly-based fraud detection engine
              </li>
              <li className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0" /> Strict role-based access controls (RBAC)
              </li>
            </ul>
          </div>
        </section>

        {/* Metrics - Responsive Grid: 2 columns, 4 columns */}
        <section className="mb-20 md:mb-24">
          {/* THEME CHANGE: Heading color */}
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-800">
            Impact & Performance Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {metrics.map((stat, i) => (
              <div
                key={i}
                // THEME CHANGE: Box border and stat value color
                className="bg-white border-2 border-teal-200 p-6 rounded-2xl text-center shadow-md transition duration-200 hover:shadow-lg"
              >
                <p className="text-4xl font-extrabold text-teal-700 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack - Centered and clean tags */}
        <section className="mb-20 md:mb-24 text-center">
          <h2 className="text-3xl font-bold mb-6 text-teal-800">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {[
              "React Native (Cross-platform)",
              "Node.js (Microservices)",
              "PostgreSQL (Encrypted)",
              "AWS (Cloud Infrastructure)",
              "Kafka (Event Streaming)",
              "JWT (Authentication)",
              "GraphQL (Data Fetching)",
              "Docker & Kubernetes",
            ].map((t) => (
              <span
                key={t}
                // THEME CHANGE: Tech tag background, border, and text color
                className="px-4 py-2 bg-teal-50 border border-teal-300 rounded-full text-sm font-medium text-teal-700 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </section>


        {/* CTA Footer - Enhanced visuals, centering, and responsiveness */}
        <section 
          className="bg-teal-100 border-2 border-teal-300 rounded-3xl p-10 sm:p-12 text-center shadow-2xl shadow-teal-300/40"
        >
          {/* THEME CHANGE: Heading color */}
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-teal-900">
            Ready to deliver a next-generation banking experience?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Let’s build a secure, future-ready financial platform that drives user adoption and financial trust.
          </p>
          {/* Responsive button group */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary button style matched - Full width on mobile */}
            <button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:shadow-teal-400/50 transition duration-300 transform hover:scale-105 w-full sm:w-auto">
              Start Your Project Assessment
            </button>
            {/* Secondary button style matched - Full width on mobile */}
            <a
              href="#" // Placeholder link
              className="px-8 py-4 rounded-full border-2 border-teal-500 text-teal-700 font-bold hover:bg-teal-200 transition duration-300 w-full sm:w-auto"
            >
              Contact FinTech Experts
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}