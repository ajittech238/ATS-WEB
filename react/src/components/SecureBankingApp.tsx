
// import React from "react";

// // THEME CHANGE: FeatureCard uses Teal colors now
// const FeatureCard = ({
//   title,
//   desc,
//   img,
// }: {
//   title: string;
//   desc: string;
//   img: string;
// }) => (
//   <div className="bg-white border border-teal-200 rounded-xl overflow-hidden hover:shadow-teal-300/40 transition">
//     <img src={img} alt={title} className="w-full h-44 object-cover" />
//     <div className="p-6">
//       <h4 className="text-lg font-semibold text-teal-700 mb-2">{title}</h4>
//       <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
//     </div>
//   </div>
// );

// export default function SecureBankingApp() {
//   return (
//     // THEME CHANGE: Background gradient and font family changed to Teal/Cyan and serif
//     <main className="bg-gradient-to-b from-teal-50 via-white to-cyan-100 text-gray-900 min-h-screen py-32 px-4 font-serif">
//       <div className="max-w-7xl mx-auto">

//         {/* HERO */}
//         <section className="grid gap-10 lg:grid-cols-2 items-center mb-20">
//           <div>
//             {/* THEME CHANGE: Tag background and text color */}
//             <span className="text-sm bg-teal-100 text-teal-700 px-4 py-1 rounded-full font-medium">
//               Mobile Banking · Secure
//             </span>

//             {/* THEME CHANGE: Heading color */}
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-teal-800">
//               Secure Banking Mobile App
//             </h1>

//             <p className="text-lg text-gray-700 max-w-xl leading-relaxed mb-8">
//               Designed for modern customers, this secure mobile banking solution
//               offers instant fund transfers, biometric login, card controls,
//               transaction insights, and 24/7 fraud detection — all powered by
//               robust cloud security.
//             </p>

//             {/* THEME CHANGE: Primary button gradient color and hover shadow */}
//             <button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-teal-400/40 transition">
//               Download App
//             </button>
//           </div>

//           <img
//             src="https://images.pexels.com/photos/4386328/pexels-photo-4386328.jpeg?auto=compress&cs=tinysrgb&w=1400"
//             alt="Banking App"
//             className="rounded-2xl shadow-lg w-full h-80 object-cover"
//           />
//         </section>

//         {/* STATS */}
//         <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-20">
//           {[
//             { label: "Transactions Secured", value: "45M+" },
//             { label: "Fraud Reduction", value: "82%" },
//             { label: "Active Users", value: "7.2M+" },
//             { label: "CSAT Rating", value: "4.8 / 5" },
//           ].map((stat) => (
//             <div key={stat.label}>
//               {/* THEME CHANGE: Stat value color */}
//               <p className="text-3xl font-bold text-teal-600">{stat.value}</p>
//               <p className="text-xs text-gray-600">{stat.label}</p>
//             </div>
//           ))}
//         </section>

//         {/* FEATURES */}
//         <section className="mb-20">
//           {/* THEME CHANGE: Heading color */}
//           <h2 className="text-2xl font-semibold mb-8 text-teal-700">
//             Key Features
//           </h2>

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {/* FeatureCard component automatically uses Teal colors */}
//             <FeatureCard
//               title="Biometric Authentication"
//               desc="Face & fingerprint login ensures secure, fast access."
//               img="https://images.unsplash.com/photo-1587731556938-38755b4803a6?auto=format&fit=crop&q=60&w=1000"
//             />
//             <FeatureCard
//               title="Instant Payments"
//               desc="UPI, NEFT, and QR-based transactions with real-time alerts."
//               img="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1200"
//             />
//             <FeatureCard
//               title="Fraud Protection"
//               desc="AI-driven detection flags suspicious activity instantly."
//               img="https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1200"
//             />
//           </div>
//         </section>

//         {/* TECH STACK */}
//         <section className="mb-20">
//           {/* THEME CHANGE: Heading color */}
//           <h2 className="text-2xl font-semibold mb-5 text-teal-700">
//             Technology
//           </h2>
//           <div className="flex gap-3 flex-wrap">
//             {[
//               "React Native",
//               "Node.js",
//               "PostgreSQL",
//               "AWS",
//               "OAuth2.0",
//               "JWT",
//               "Microservices",
//               "Kotlin",
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

//         {/* CTA */}
//         <section 
//           // THEME CHANGE: CTA background, border, and shadow
//           className="p-10 bg-teal-50 border border-teal-200 rounded-2xl text-center shadow-md"
//         >
//           {/* THEME CHANGE: Heading color */}
//           <h3 className="text-2xl font-semibold mb-3 text-teal-800">
//             Secure Your Banking Experience
//           </h3>
//           <p className="text-gray-700 mb-6 max-w-xl mx-auto">
//             Banking made simple — fast, protected, and accessible anywhere.
//           </p>
//           {/* THEME CHANGE: Button gradient color and hover shadow */}
//           <button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-teal-400/40 transition">
//             Get Started Today
//           </button>
//         </section>
//       </div>
//     </main>
//   );
// }


import React from "react";
import { Zap, Shield, TrendingUp } from 'lucide-react';

// FeatureCard component uses Teal colors now
const FeatureCard = ({
  title,
  desc,
  img,
  Icon,
}: {
  title: string;
  desc: string;
  img: string;
  Icon: React.ElementType;
}) => (
  <div className="bg-white border border-teal-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-teal-300/40 transition duration-300 transform hover:-translate-y-1">
    <div className="relative w-full h-44">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover" 
        // Placeholder for bad image URLs
        onError={(e) => {
          e.currentTarget.onerror = null; 
          e.currentTarget.src = "https://placehold.co/600x400/80CBC4/1E88E5?text=Feature+Image";
        }}
      />
      <div className="absolute top-0 right-0 m-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-teal-600">
        <Icon className="w-6 h-6" />
      </div>
    </div>
    <div className="p-6">
      <h4 className="text-xl font-bold text-teal-800 mb-2">{title}</h4>
      <p className="text-gray-700 text-base leading-relaxed">{desc}</p>
    </div>
  </div>
);

// Renaming to App for standard single-file structure
export default function App() {
  return (
    // THEME: Background gradient and font family changed to Teal/Cyan and serif
    <main className="bg-gradient-to-b from-teal-50 via-white to-cyan-100 text-gray-900 min-h-screen py-16 md:py-32 px-4 font-serif antialiased">
      <div className="max-w-7xl mx-auto">

        {/* HERO Section */}
        <section className="grid gap-12 lg:grid-cols-2 items-center mb-24">
          <div className="lg:pr-8">
            {/* Tag */}
            <span className="text-sm bg-teal-100 text-teal-700 px-4 py-1 rounded-full font-medium shadow-sm inline-block mb-4">
              Mobile Banking · Secure · Fast
            </span>

            {/* Heading is responsive: 4xl on mobile, 6xl on desktop */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-teal-900">
              Your Finances, Always Protected & Accessible
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed mb-10">
              Designed for modern customers, this secure mobile banking solution
              offers instant fund transfers, biometric login, card controls,
              transaction insights, and 24/7 fraud detection — all powered by
              robust cloud security.
            </p>

            {/* Primary button is responsive and visually striking */}
            <button 
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:shadow-teal-400/40 transition duration-300 transform hover:scale-105"
            >
              Download App Now
            </button>
          </div>

          {/* Hero Image - Responsive height control */}
          <img
            src="https://images.pexels.com/photos/4386328/pexels-photo-4386328.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Banking App Interface"
            className="rounded-3xl shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover transition duration-500"
            onError={(e) => {
              e.currentTarget.onerror = null; 
              e.currentTarget.src = "https://placehold.co/1400x900/50C2C7/ffffff?text=Secure+Banking+App";
            }}
          />
        </section>

        {/* STATS Section - Adapts from 2 to 4 columns */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mb-24 p-6 bg-white rounded-2xl shadow-inner">
          {[
            { label: "Transactions Secured", value: "45M+" },
            { label: "Fraud Reduction", value: "82%" },
            { label: "Active Users", value: "7.2M+" },
            { label: "CSAT Rating", value: "4.8 / 5" },
          ].map((stat) => (
            <div key={stat.label} className="border-r last:border-r-0 border-teal-100 px-2">
              <p className="text-4xl font-extrabold text-teal-600 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* FEATURES Section - Adapts from 1 to 2 to 3 columns */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-teal-800">
            Advanced Features for Peace of Mind
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Biometric Authentication"
              desc="Face ID & fingerprint login ensures ultra-secure, fast access without relying on complex passwords."
              img="https://images.unsplash.com/photo-1587731556938-38755b4803a6?auto=format&fit=crop&q=60&w=1000"
              Icon={Shield}
            />
            <FeatureCard
              title="Instant Payments"
              desc="Seamless UPI, NEFT, and QR-based transactions with real-time notifications and zero latency."
              img="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1200"
              Icon={Zap}
            />
            <FeatureCard
              title="AI Fraud Protection"
              desc="Our AI engine constantly monitors transactions, flagging suspicious activity instantly to protect your assets."
              img="https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1200"
              Icon={TrendingUp}
            />
          </div>
        </section>

        {/* TECH STACK Section - Responsive flex layout */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-6 text-teal-800 text-center">
            Built on a Modern & Secure Stack
          </h2>
          <div className="flex gap-3 justify-center flex-wrap max-w-4xl mx-auto">
            {[
              "React Native (Mobile)",
              "Node.js (Backend)",
              "PostgreSQL (Database)",
              "AWS Cloud Infrastructure",
              "OAuth2.0 (Authorization)",
              "JWT (Authentication)",
              "Microservices Architecture",
              "Kotlin (Android Native)",
            ].map((t) => (
              <span
                key={t}
                // THEME: Tech tag background, border, and text color
                className="px-4 py-2 bg-teal-50 border border-teal-300 rounded-full text-sm font-semibold text-teal-700 shadow-sm whitespace-nowrap"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* CTA Section - Responsive padding and centering */}
        <section 
          className="p-8 sm:p-12 bg-white border-2 border-teal-300 rounded-3xl text-center shadow-2xl shadow-teal-200/50"
        >
          {/* Heading color */}
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-teal-900">
            Secure Your Banking Experience Today
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience banking made simple — fast, protected, and accessible anywhere. Download the app in seconds.
          </p>
          {/* Button gradient color and hover shadow */}
          <button 
            className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:shadow-teal-400/50 transition duration-300 transform hover:scale-105"
          >
            Get Started Now
          </button>
        </section>
      </div>
    </main>
  );
}