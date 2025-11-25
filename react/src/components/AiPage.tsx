

// import React from "react";
// // Lucide icons को लाने के लिए, हमें उन्हें इंस्टॉल करके यहां इंपोर्ट करना होगा,
// // लेकिन आपके द्वारा प्रदान किए गए कोड में उनका उपयोग नहीं किया गया था, इसलिए मैं उन्हें छोड़ रहा हूँ।
// // यदि आप Lucide icons चाहते हैं, तो कृपया बताएं।

// // FONT FAMILY CHANGE: Added font-serif to apply Roman font theme globally
// const FeatureCard: React.FC<{ title: string; text: string; icon?: React.ReactNode }> = ({
//   title,
//   text,
//   icon,
// }) => {
//   return (
//     // THEME CHANGE: Border, shadow, and hover colors
//     <article className="bg-white border border-teal-200 rounded-2xl p-6 shadow-md hover:shadow-teal-300/40 transition">
//       <div className="flex items-start gap-4 mb-4">
//         {/* THEME CHANGE: Icon background and text color */}
//         <div className="text-teal-500 bg-teal-50 rounded-lg p-3 w-12 h-12 flex items-center justify-center">
//           {icon ?? (
//             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
//               <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" />
//             </svg>
//           )}
//         </div>
//         {/* THEME CHANGE: Title color */}
//         <h4 className="text-lg font-semibold text-teal-700">{title}</h4>
//       </div>
//       <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
//     </article>
//   );
// };

// export default function ECommerceModernization() {
//   return (
//     // THEME CHANGE: Background gradient color and font-serif added
//     <main className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-cyan-100 text-gray-900 py-32 px-4 font-serif">
//       <div className="max-w-7xl mx-auto">

//         {/* HERO */}
//         <header className="grid gap-8 lg:grid-cols-2 items-center mb-16">
//           <div>
//             {/* THEME CHANGE: Tag background and text color */}
//             <p className="inline-block text-sm text-teal-600 font-medium bg-teal-100 px-3 py-1 rounded-full mb-4">
//               Case Study · Web Development
//             </p>
//             {/* THEME CHANGE: Heading color */}
//             <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-teal-800">
//               E-Commerce Platform Modernization
//             </h1>
//             <p className="text-lg text-gray-700 mb-6 max-w-2xl">
//               Modernizing legacy storefronts into scalable, AI-ready e-commerce platforms — faster checkouts, personalized merchandising, resilient infrastructure, and measurable revenue uplift.
//             </p>

//             <div className="flex flex-wrap gap-3">
//               {/* THEME CHANGE: Primary button gradient color */}
//               <button className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold px-5 py-3 rounded-2xl shadow-md">
//                 Request Demo
//               </button>
//               {/* THEME CHANGE: Secondary button border and text color */}
//               <a
//                 href="#features"
//                 className="inline-flex items-center gap-2 border border-teal-300 px-4 py-3 rounded-2xl text-sm text-teal-700 hover:bg-teal-50 transition"
//               >
//                 See Features
//               </a>
//             </div>

//             <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
//               {/* THEME CHANGE: Stat values color */}
//               {[
//                 { value: "+62%", label: "Conversion uplift" },
//                 { value: "-35%", label: "Infrastructure cost" },
//                 { value: "99.99%", label: "Availability SLA" },
//                 { value: "Real-time", label: "Analytics & personalization" },
//               ].map((stat, i) => (
//                 <div key={i} className="text-center">
//                   <p className="text-2xl font-bold text-teal-700">{stat.value}</p>
//                   <p className="text-xs text-gray-600">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="rounded-2xl overflow-hidden shadow-lg">
//             <img
//               src="https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1400&auto=format&fit=crop"
//               alt="Modern e-commerce design"
//               className="w-full h-80 object-cover"
//             />
//           </div>
//         </header>

//         {/* Overview & Challenges */}
//         <section className="grid gap-8 lg:grid-cols-3 items-start mb-16">
//           {/* THEME CHANGE: Border and heading color */}
//           <div className="lg:col-span-2 bg-white border border-teal-200 rounded-2xl p-8 shadow-sm">
//             <h2 className="text-2xl font-semibold mb-4 text-teal-700">Overview</h2>
//             <p className="text-gray-700 leading-relaxed mb-6">
//               We partnered with a top retail brand to modernize their monolithic e-commerce stack.
//               The objective: migrate to a composable, headless architecture, enable AI-driven personalization,
//               and reduce latency for global customers while cutting operational costs.
//             </p>

//             {/* THEME CHANGE: Sub-heading color */}
//             <h3 className="text-lg font-semibold mb-2 text-teal-700">Key challenges</h3>
//             <ul className="list-disc pl-5 text-gray-700 space-y-2">
//               <li>Legacy checkout causing poor conversion and cart abandonment.</li>
//               <li>Single-region hosting causing high latency for global markets.</li>
//               <li>Limited instrumentation — no real-time insights for merchandising.</li>
//               <li>Rigid catalog and slow release cycles.</li>
//             </ul>
//           </div>

//           {/* THEME CHANGE: Aside background, border, and heading color */}
//           <aside className="bg-teal-50 border border-teal-200 rounded-2xl p-6 shadow-sm">
//             <h4 className="text-xl font-semibold mb-3 text-teal-700">Project Snapshot</h4>
//             <div className="space-y-2 text-sm text-gray-700">
//               <p><strong>Duration:</strong> 6 months</p>
//               <p><strong>Team:</strong> 14 engineers, 2 data scientists, 1 product manager</p>
//               <p><strong>Stack:</strong> React, Node.js, Kubernetes, Redis, Postgres</p>
//               <p><strong>Outcome:</strong> 62% conversion uplift in 90 days</p>
//             </div>
//           </aside>
//         </section>

//         {/* Features */}
//         <section id="features" className="mb-16">
//           {/* THEME CHANGE: Heading color */}
//           <h2 className="text-2xl font-semibold mb-6 text-teal-700">
//             Core Capabilities & Modern Features
//           </h2>

//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             <FeatureCard
//               title="Headless Commerce"
//               text="Decoupled frontend and APIs for rapid experimentation — replace UX without touching backend commerce rules."
//             />
//             <FeatureCard
//               title="AI Personalization"
//               text="Real-time recommendations and personalized catalogs powered by hybrid models for speed and scalability."
//             />
//             <FeatureCard
//               title="Fast Global CDN"
//               text="Edge-rendered critical paths for sub-200ms TTFB across regions, with A/B testing at the edge."
//             />
//             <FeatureCard
//               title="Scalable Microservices"
//               text="Containerized services with autoscaling and circuit breakers for reliability under peak loads."
//             />
//             <FeatureCard
//               title="Resilient Checkout"
//               text="Modular checkout pipeline with optimized payment routing and resumable transactions."
//             />
//             <FeatureCard
//               title="Observability & SRE"
//               text="Distributed tracing, error budgets, and automated rollback for safe releases."
//             />
//           </div>
//         </section>

//         {/* Architecture */}
//         <section className="mb-16">
//           {/* THEME CHANGE: Heading color */}
//           <h2 className="text-2xl font-semibold mb-6 text-teal-700">Architecture Highlights</h2>

//           <div className="grid gap-6 lg:grid-cols-3">
//             {[
//               {
//                 title: "Data & AI Layer",
//                 desc: "Centralized event stream and model pipelines for real-time personalization.",
//                 points: ["Event bus (Kafka/Kinesis)", "Model registry & CI", "Feature serving"],
//               },
//               {
//                 title: "Platform & Infra",
//                 desc: "Kubernetes platform with Terraform IaC and multi-region failover.",
//                 points: ["Terraform + GitOps", "Autoscaler & failover", "Canary deployments"],
//               },
//               {
//                 title: "Frontend & UX",
//                 desc: "React SSR + edge rendering, accessible components, optimized images.",
//                 points: ["Headless CMS", "Image CDN", "Web Vitals monitoring"],
//               },
//             ].map((card, i) => (
//               // THEME CHANGE: Border and title color
//               <div key={i} className="bg-white border border-teal-200 rounded-2xl p-6 shadow-sm">
//                 <h4 className="text-lg font-semibold mb-3 text-teal-700">{card.title}</h4>
//                 <p className="text-gray-700 text-sm mb-3">{card.desc}</p>
//                 <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
//                   {card.points.map((p) => (
//                     <li key={p}>{p}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Dashboard Visual */}
//         <section className="mb-16 grid gap-6 lg:grid-cols-2 items-center">
//           <div className="rounded-2xl overflow-hidden shadow-lg">
//             <img
//               src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
//               alt="dashboard"
//               className="w-full h-80 object-cover"
//             />
//           </div>
//           <div>
//             {/* THEME CHANGE: Heading color */}
//             <h3 className="text-2xl font-semibold mb-3 text-teal-700">
//               Merchandising Dashboard
//             </h3>
//             <p className="text-gray-700 mb-4">
//               Unified dashboard for performance, promotions, and analytics. Empower marketing teams to act independently with real-time insights.
//             </p>
//             <div className="grid gap-4 sm:grid-cols-2">
//               {/* THEME CHANGE: Stat boxes background, border, and value color */}
//               <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg text-center">
//                 <p className="text-xs text-gray-600">Active A/B Tests</p>
//                 <p className="text-xl font-bold text-teal-700">12</p>
//               </div>
//               <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg text-center">
//                 <p className="text-xs text-gray-600">Avg. Order Value</p>
//                 <p className="text-xl font-bold text-teal-700">$124.50</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Tech Stack */}
//         <section className="mb-16">
//           {/* THEME CHANGE: Heading color */}
//           <h2 className="text-2xl font-semibold mb-6 text-teal-700">Technology Stack</h2>
//           <div className="flex flex-wrap gap-3">
//             {/* THEME CHANGE: Tech tag background, border, and text color */}
//             {[
//               "React",
//               "Next.js",
//               "Node.js",
//               "GraphQL",
//               "Postgres",
//               "Redis",
//               "Kubernetes",
//               "Docker",
//               "Terraform",
//               "Kafka",
//               "PyTorch",
//             ].map((tech) => (
//               <span
//                 key={tech}
//                 className="px-3 py-1 bg-teal-50 border border-teal-200 text-sm text-teal-700 rounded-full"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="mb-16">
//           {/* THEME CHANGE: Heading color */}
//           <h2 className="text-2xl font-semibold mb-6 text-teal-700">Customer Success</h2>
//           <div className="grid gap-6 md:grid-cols-2">
//             {[
//               {
//                 quote:
//                   "The migration was seamless — performance improved immediately, and our marketing team can now iterate promotions independently.",
//                 author: "VP Product, Retail Brand",
//               },
//               {
//                 quote:
//                   "Operational overhead dropped significantly. The SRE automation saved hours during peak traffic events.",
//                 author: "Director of Engineering",
//               },
//             ].map((t, i) => (
//               // THEME CHANGE: Border and author text color
//               <div
//                 key={i}
//                 className="bg-white border border-teal-200 p-6 rounded-2xl shadow-sm"
//               >
//                 <p className="italic text-gray-700 mb-3">“{t.quote}”</p>
//                 <p className="text-sm font-medium text-teal-700">— {t.author}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* CTA */}
//         {/* THEME CHANGE: Footer background, border, and heading color */}
//         <footer className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center shadow-md">
//           <h3 className="text-2xl font-semibold text-teal-700 mb-3">
//             Ready to modernize your e-commerce platform?
//           </h3>
//           <p className="text-gray-700 mb-6">
//             Schedule a free technical assessment and get a roadmap for your modernization.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
//             {/* THEME CHANGE: Primary button gradient color */}
//             <button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-700">
//               Request Assessment
//             </button>
//             {/* THEME CHANGE: Secondary button border and text color */}
//             <a
//               href="/projects"
//               className="px-6 py-3 rounded-full border border-teal-300 text-teal-700 hover:bg-teal-50"
//             >
//               View More Projects
//             </a>
//           </div>
//         </footer>
//       </div>
//     </main>
//   );
// }



import React from "react";
import { Link } from 'react-router-dom'; // Assuming you might use React Router for 'View More Projects'

// You can install and import Lucide icons here if needed, e.g.:
// import { Zap, Layers, Globe, Server, CheckCircle, Shield } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  text: string;
  // icon prop is optional, accepting a React Node
  icon?: React.ReactNode; 
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, text, icon }) => {
  return (
    <article className="bg-white border border-teal-200 rounded-2xl p-6 shadow-md hover:shadow-teal-300/40 transition duration-300">
      <div className="flex items-start gap-4 mb-4">
        {/* Placeholder Icon if none is provided */}
        <div className="text-teal-500 bg-teal-50 rounded-xl p-3 w-12 h-12 flex items-center justify-center flex-shrink-0">
          {icon ?? (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
            </svg>
          )}
        </div>
        <h4 className="text-lg font-semibold text-teal-700 mt-1">{title}</h4>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
    </article>
  );
};

export default function ECommerceModernization() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-cyan-100 text-gray-900 py-16 md:py-32 px-4 font-serif">
      <div className="max-w-7xl mx-auto">

        {/* HERO SECTION */}
        <header className="grid gap-8 lg:grid-cols-2 items-center mb-16">
          <div>
            <p className="inline-block text-sm text-teal-600 font-medium bg-teal-100 px-3 py-1 rounded-full mb-4">
              Case Study · Web Development
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-teal-800">
              E-Commerce Platform Modernization
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl">
              Modernizing legacy storefronts into scalable, AI-ready e-commerce platforms — faster checkouts, personalized merchandising, resilient infrastructure, and measurable revenue uplift.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold px-5 py-3 rounded-xl shadow-md transition duration-300 transform hover:scale-[1.02]">
                Request Demo
              </button>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 border border-teal-300 px-4 py-3 rounded-xl text-sm text-teal-700 hover:bg-teal-50 transition"
              >
                See Features
              </a>
            </div>

            {/* 💡 Responsive Stats: Uses mobile-first grid and scales to 4 columns on small screens */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "+62%", label: "Conversion uplift" },
                { value: "-35%", label: "Infrastructure cost" },
                { value: "99.99%", label: "Availability SLA" },
                { value: "Real-time", label: "Analytics & personalization" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold text-teal-700">{stat.value}</p>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                </div>
              ))}
          </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1400&auto=format&fit=crop"
              alt="Modern e-commerce design"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </header>

        <hr className="border-teal-100 my-10" />

        {/* OVERVIEW & CHALLENGES SECTION */}
        {/* 💡 Responsive Layout: Two-column grid on large screens, single column on mobile/tablet */}
        <section className="grid gap-8 lg:grid-cols-3 items-start mb-16">
          <div className="lg:col-span-2 bg-white border border-teal-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-teal-700">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We partnered with a top retail brand to modernize their monolithic e-commerce stack.
              The objective: migrate to a **composable, headless architecture**, enable AI-driven personalization,
              and reduce latency for global customers while cutting operational costs.
            </p>

            <h3 className="text-lg font-semibold mb-2 text-teal-700">Key Challenges</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Legacy checkout causing poor conversion and cart abandonment.</li>
              <li>Single-region hosting causing high latency for global markets.</li>
              <li>Limited instrumentation — no real-time insights for merchandising.</li>
              <li>Rigid catalog and slow release cycles.</li>
            </ul>
          </div>

          <aside className="bg-teal-50 border border-teal-200 rounded-2xl p-6 shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-teal-700">Project Snapshot</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Duration:</strong> 6 months</p>
              <p><strong>Team:</strong> 14 engineers, 2 data scientists, 1 product manager</p>
              <p><strong>Stack:</strong> React, Node.js, Kubernetes, Redis, Postgres</p>
              <p><strong>Outcome:</strong> <span className="font-bold text-teal-600">62% conversion uplift</span> in 90 days</p>
            </div>
          </aside>
        </section>

        <hr className="border-teal-100 my-10" />

        {/* FEATURES SECTION */}
        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-teal-800 text-center">
            Core Capabilities & Modern Features
          </h2>

          {/* 💡 Responsive Grid: 1 column on mobile, 2 columns on tablet, 3 columns on desktop */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Headless Commerce"
              text="Decoupled frontend and APIs for rapid experimentation — replace UX without touching backend commerce rules."
              // icon={<Layers className="w-6 h-6" />} // Example with Lucide
            />
            <FeatureCard
              title="AI Personalization"
              text="Real-time recommendations and personalized catalogs powered by hybrid models for speed and scalability."
              // icon={<Zap className="w-6 h-6" />}
            />
            <FeatureCard
              title="Fast Global CDN"
              text="Edge-rendered critical paths for sub-200ms TTFB across regions, with A/B testing at the edge."
              // icon={<Globe className="w-6 h-6" />}
            />
            <FeatureCard
              title="Scalable Microservices"
              text="Containerized services with autoscaling and circuit breakers for reliability under peak loads."
              // icon={<Server className="w-6 h-6" />}
            />
            <FeatureCard
              title="Resilient Checkout"
              text="Modular checkout pipeline with optimized payment routing and resumable transactions."
              // icon={<CheckCircle className="w-6 h-6" />}
            />
            <FeatureCard
              title="Observability & SRE"
              text="Distributed tracing, error budgets, and automated rollback for safe releases."
              // icon={<Shield className="w-6 h-6" />}
            />
          </div>
        </section>

        <hr className="border-teal-100 my-10" />

        {/* ARCHITECTURE SECTION */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-teal-800 text-center">Architecture Highlights</h2>
            

          {/* 💡 Responsive Grid: 1 column on mobile, 3 columns on desktop/large screens */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Data & AI Layer",
                desc: "Centralized event stream and model pipelines for real-time personalization.",
                points: ["Event bus (Kafka/Kinesis)", "Model registry & CI", "Feature serving"],
              },
              {
                title: "Platform & Infra",
                desc: "Kubernetes platform with Terraform IaC and multi-region failover.",
                points: ["Terraform + GitOps", "Autoscaler & failover", "Canary deployments"],
              },
              {
                title: "Frontend & UX",
                desc: "React SSR + edge rendering, accessible components, optimized images.",
                points: ["Headless CMS", "Image CDN", "Web Vitals monitoring"],
              },
            ].map((card, i) => (
              <div key={i} className="bg-white border border-teal-200 rounded-2xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-teal-700">{card.title}</h4>
                <p className="text-gray-700 text-sm mb-3">{card.desc}</p>
                <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
                  {card.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-teal-100 my-10" />

        {/* DASHBOARD VISUAL SECTION */}
        {/* 💡 Responsive Layout: Two-column grid on large screens, single column on mobile/tablet */}
        <section className="mb-16 grid gap-6 lg:grid-cols-2 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
              alt="merchandising dashboard"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-teal-700">
              Merchandising Dashboard
            </h3>
            <p className="text-gray-700 mb-4">
              Unified dashboard for performance, promotions, and analytics. Empower marketing teams to act independently with real-time insights.
            </p>
            {/* 💡 Responsive Stats: Two columns on small screens */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg text-center">
                <p className="text-xs text-gray-600">Active A/B Tests</p>
                <p className="text-xl font-bold text-teal-700">12</p>
              </div>
              <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg text-center">
                <p className="text-xs text-gray-600">Avg. Order Value</p>
                <p className="text-xl font-bold text-teal-700">$124.50</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-teal-100 my-10" />

        {/* TECH STACK SECTION */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-teal-800 text-center">Technology Stack</h2>
          {/* 💡 Responsive: Flex-wrap allows tags to flow onto new lines naturally on small screens */}
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "React",
              "Next.js",
              "Node.js",
              "GraphQL",
              "Postgres",
              "Redis",
              "Kubernetes",
              "Docker",
              "Terraform",
              "Kafka",
              "PyTorch",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-teal-50 border border-teal-200 text-sm text-teal-700 rounded-full font-medium whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <hr className="border-teal-100 my-10" />

        {/* TESTIMONIALS SECTION */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-teal-800 text-center">Customer Success</h2>
          {/* 💡 Responsive Grid: 1 column on mobile, 2 columns on tablet/desktop */}
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                quote:
                  "The migration was seamless — performance improved immediately, and our marketing team can now iterate promotions independently.",
                author: "VP Product, Retail Brand",
              },
              {
                quote:
                  "Operational overhead dropped significantly. The SRE automation saved hours during peak traffic events.",
                author: "Director of Engineering",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white border border-teal-200 p-6 rounded-2xl shadow-lg"
              >
                <p className="italic text-gray-700 mb-3 text-lg">“{t.quote}”</p>
                <p className="text-sm font-medium text-teal-700">— {t.author}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-teal-100 my-10" />

        {/* CTA / FOOTER */}
        <footer className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-semibold text-teal-700 mb-3">
            Ready to modernize your e-commerce platform?
          </h3>
          <p className="text-gray-700 mb-6">
            Schedule a free technical assessment and get a roadmap for your modernization.
          </p>
          {/* 💡 Responsive Buttons: Stack vertically (flex-col) on mobile, side-by-side on small screens (sm:flex-row) */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <button className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-700 transition duration-300">
              Request Assessment
            </button>
            <Link
              to="/projects" // Using Link for internal navigation
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-teal-300 text-teal-700 hover:bg-teal-100 transition duration-300"
            >
              View More Projects
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}