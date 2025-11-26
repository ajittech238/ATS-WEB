

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Facebook,
//   Twitter,
//   Linkedin,
//   Mail,
//   Phone,
//   MapPin,
//   Instagram,
//   Github,
//   ArrowUp,
// } from "lucide-react";
// import Logo from "../assets/ats-logo.png";

// const Footer: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [msgColor, setMsgColor] = useState("");

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const validateEmail = (email: string) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const handleSubscribe = () => {
//     if (!email) {
//       setMsgColor("text-red-500");
//       setMessage("Please enter your email.");
//       return;
//     }

//     if (!validateEmail(email)) {
//       setMsgColor("text-red-500");
//       setMessage("Invalid email, please try again.");
//       return;
//     }

//     setMsgColor("text-green-500");
//     setMessage("Subscribed successfully!");
//     setEmail("");
//   };

//   return (
//     <footer
//       className="bg-[#0F1B2E] text-white relative"
//       style={{ fontFamily: "Times New Roman, serif" }}
//     >
//       <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">

//         {/* GRID - 4 Columns */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

//           {/* BRAND + SOCIAL */}
//           <div>
//             <div className="flex flex-col items-start mb-4">
//               <img
//                 src={Logo}
//                 alt="Logo"
//                 className="w-20 h-20 object-contain mb-2"
//               />

//               <h1 className="font-bold text-2xl leading-tight">
//                 ATS GLOBAL TECH
//               </h1>
//             </div>

//             <p className="text-gray-300 mb-6 leading-relaxed">
//               Empowering businesses with modern digital transformation and
//               advanced software engineering.
//             </p>

//             <div className="flex space-x-4">
//               <a href="https://www.facebook.com/profile.php?id=61574788298611">
//                 <Facebook className="h-7 w-7 text-gray-400 hover:text-orange-400 transition cursor-pointer" />
//               </a>
//               <a href="https://twitter.com">
//                 <Twitter className="h-7 w-7 text-gray-400 hover:text-orange-400 transition cursor-pointer" />
//               </a>
//               <a href="https://www.linkedin.com/in/sudo-techlabs-8b6708375">
//                 <Linkedin className="h-7 w-7 text-gray-400 hover:text-orange-400 transition cursor-pointer" />
//               </a>
//               <a href="https://instagram.com">
//                 <Instagram className="h-7 w-7 text-gray-400 hover:text-orange-400 transition cursor-pointer" />
//               </a>
//               <a href="https://github.com">
//                 <Github className="h-7 w-7 text-gray-400 hover:text-orange-400 transition cursor-pointer" />
//               </a>
//             </div>
//           </div>

//           {/* QUICK LINKS */}
//           <div>
//             <h3 className="font-bold text-lg mb-6 text-orange-400">Quick Links</h3>
//             <ul className="space-y-3">
//               {[
//                 { name: "Home", href: "/" }, // Home link added for completeness
//                 { name: "About Us", href: "/about" },
//                 { name: "Services", href: "/services" },
//                 { name: "Projects", href: "/projects" },
//                 { name: "Industries", href: "/industries" },
//                 { name: "Case Studies", href: "/case-studies" },
//                 { name: "Portfolio", href: "/portfolio" },
//                 { name: "Careers", href: "/careers" },
//                 { name: "Contact", href: "/contact" },
//               ].map((item) => (
//                 <li key={item.name}>
//                   <Link className="text-gray-300 hover:text-orange-400" to={item.href}>
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* OUR SERVICES */}
//           <div>
//             <h3 className="font-bold text-lg mb-6 text-orange-400">Our Services</h3>
//             <ul className="space-y-3 text-gray-300">
//               <li>Custom Software Development</li>
//               <li>Mobile App Development</li>
//               <li>Web App Development</li>
//               <li>Cloud & DevOps Solutions</li>
//               <li>UI / UX Design</li>
//               <li>AI & Automation</li>
//               <li>Cybersecurity Solutions</li>
//             </ul>
//           </div>

//           {/* CONTACT INFO */}
//           <div>
//             <h3 className="font-bold text-lg mb-6 text-orange-400">Contact Info</h3>

//             <div className="space-y-5">
//               <div className="flex items-start gap-3">
//                 <Mail className="h-5 w-5 text-orange-400 mt-1" />
//                 <div>
//                   <div className="text-gray-300">info@atsglobaltech.in</div>
//                   <div className="text-gray-400 text-sm">General Support</div>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <Phone className="h-5 w-5 text-orange-400 mt-1" />
//                 <div>
//                   <div className="text-gray-300">+91 9929825003</div>
//                   <div className="text-gray-400 text-sm">24/7 Support</div>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <MapPin className="h-5 w-5 text-orange-400 mt-1" />
//                 <div>
//                   <div className="text-gray-300">
//                     Codercom Building, Ajmer Road, Jaipur (302021)
//                   </div>
//                   <div className="text-gray-400 text-sm">Rajasthan, India</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* NEWSLETTER */}
//         <div className="border-t border-gray-700 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             
//             <div className="mb-4 md:mb-0">
//               <h3 className="font-bold text-lg mb-2 text-orange-400">
//                 Stay Updated
//               </h3>
//               <p className="text-gray-300">
//                 Subscribe for insights, updates, and innovation tips.
//               </p>
//             </div>

//             <div className="flex space-x-2">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
//               />
//               <button
//                 onClick={handleSubscribe}
//                 className="bg-teal-600 px-6 py-2 rounded-lg text-white hover:bg-orange-700 transition"
//               >
//                 Subscribe
//               </button>
//             </div>
//           </div>

//           {/* SUCCESS / ERROR MESSAGE */}
//           {message && (
//             <p className={`mt-3 text-sm ${msgColor}`}>{message}</p>
//           )}
//         </div>

//         {/* 🚀 PRIVACY & TERMS SECTION - NEWLY ADDED */}
//         <div className="border-t border-gray-700 mt-8 pt-6">
//             <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-8 text-sm">
//                 <Link 
//                     to="/privacy-policy" 
//                     className="text-gray-400 hover:text-orange-400 transition text-center md:text-left"
//                 >
//                     Privacy Policy
//                 </Link>
//                 <Link 
//                     to="/terms-of-service" 
//                     className="text-gray-400 hover:text-orange-400 transition text-center md:text-left"
//                 >
//                     Terms of Service
//                 </Link>
//             </div>
//         </div>


//         {/* COPYRIGHT */}
//         <div className="mt-8 pt-4 text-center"> 
//           <p className="text-gray-400">
//             © 2025 ATS GLOBAL TECH — All Rights Reserved
//           </p>
//         </div>
//       </div>

//       {/* Scroll-To-Top Button */}
// {/*       <button
//         onClick={scrollToTop}
//         className="
//           absolute 
//           bottom-10 right-30 
//           bg-teal-500 hover:bg-teal-600
//           text-white w-12 h-12 rounded-full 
//           flex items-center justify-center 
//           shadow-lg transition
//         "
//       >
//         <ArrowUp className="h-6 w-6" />
//       </button> */}
//     </footer>
//   );
// };

// export default Footer;


import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Github,
  ArrowUp,
} from "lucide-react";

// Placeholder for the logo image since local assets cannot be loaded here. 
// Updated placeholder to simulate a white logo (White text on dark background)
// const LogoPlaceholder = "https://placehold.co/80x80/1A2434/FFFFFF?text=ATS"; 

// Helper function to validate email structure
const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Define the component using React.FC (Functional Component) for TypeScript typing
const Footer: React.FC = () => {
  // Explicitly typing state variables
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [msgColor, setMsgColor] = useState<string>("");
  const [showScroll, setShowScroll] = useState<boolean>(false);

  // --- Scroll Logic for ArrowUp Button ---
  const checkScrollTop = useCallback(() => {
    // Check if window is defined (for environments like SSR)
    if (typeof window === 'undefined') return;

    // Show button if scroll is past 400px
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }, [showScroll]);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", checkScrollTop);
      return () => {
        window.removeEventListener("scroll", checkScrollTop);
      };
    }
  }, [checkScrollTop]);
  // ----------------------------------------

  // Typed change handler for the input field
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Clear previous message
    setMessage("");

    if (!email) {
      setMsgColor("text-red-500");
      setMessage("Please enter your email.");
      return;
    }

    if (!validateEmail(email)) {
      setMsgColor("text-red-500");
      setMessage("Invalid email, please try again.");
      return;
    }

    // Simulate successful subscription logic (e.g., API call)
    setMsgColor("text-green-500");
    setMessage("Subscribed successfully! Thank you.");
    setEmail(""); // Clear the input field
  };

  return (
    <footer
      className="bg-[#0F1B2E] text-white relative"
      // Using Times New Roman as requested in the original file
      style={{ fontFamily: "Times New Roman, serif" }} 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">

        {/* GRID - 1 column on mobile, 2 columns on tablet, 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-12">

          {/* 1. BRAND + SOCIAL */}
          <div>
            <div className="flex flex-col items-start mb-4">
              <img
                src="/ats-logo.png"
                alt="ATS Logo"
                className="w-16 h-16 object-contain mb-2 " // Border changed to white
              />

              <h1 className="font-bold text-xl sm:text-2xl leading-tight text-white"> {/* Color changed to white */}
                ATS GLOBAL TECH
              </h1>
            </div>

            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Empowering businesses with modern digital transformation and
              advanced software engineering.
            </p>

            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61574788298611" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-orange-400 transition cursor-pointer" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6 text-gray-400 hover:text-orange-400 transition cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/sudo-techlabs-8b6708375" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-orange-400 transition cursor-pointer" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-orange-400 transition cursor-pointer" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-gray-400 hover:text-orange-400 transition cursor-pointer" />
              </a>
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2">Quick Links</h3> {/* Color changed to white */}
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Projects", href: "/projects" },
                { name: "Industries", href: "/industries" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link className="text-gray-300 hover:text-orange-400 transition" to={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. OUR SERVICES */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2">Our Services</h3> {/* Color changed to white */}
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Custom Software Development</li>
              <li>Mobile App Development</li>
              <li>Web App Development</li>
              <li>Cloud & DevOps Solutions</li>
              <li>UI / UX Design</li>
              <li>AI & Automation</li>
              <li>Cybersecurity Solutions</li>
            </ul>
          </div>

          {/* 4. CONTACT INFO */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2">Contact Info</h3> {/* Color changed to white */}

            <div className="space-y-5 text-sm">
              
              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-white mt-1 flex-shrink-0" /> {/* Icon color changed to white */}
                <div>
                  <div className="text-gray-300 leading-snug">info@atsglobaltech.in</div>
                  <div className="text-gray-400 text-xs">General Support</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-white mt-1 flex-shrink-0" /> {/* Icon color changed to white */}
                <div>
                  <div className="text-gray-300 leading-snug">+91 9929825003</div>
                  <div className="text-gray-400 text-xs">24/7 Support</div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-white mt-1 flex-shrink-0" /> {/* Icon color changed to white */}
                <div>
                  <div className="text-gray-300 leading-snug">
                    ATS building, 4/98, Ajmer Rd, Purani Chungi, Vidhyut Nagar, Jaipur
                  </div>
                  <div className="text-gray-400 text-xs">Rajasthan, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            
            <div className="mb-4 md:mb-0">
              <h3 className="font-bold text-lg mb-2 text-white"> {/* Color changed to white */}
                Stay Updated
              </h3>
              <p className="text-gray-300 text-sm">
                Subscribe for insights, updates, and innovation tips.
              </p>
            </div>

            {/* Responsive Input/Button Container */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white w-full sm:w-64 focus:border-orange-400 focus:outline-none"
              />
              <button
                onClick={handleSubscribe}
                className="bg-teal-600 px-6 py-2 rounded-lg text-white hover:bg-orange-600 transition w-full sm:w-auto font-medium"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* SUCCESS / ERROR MESSAGE */}
          {message && (
            <p className={`mt-3 text-sm text-center md:text-left ${msgColor}`}>{message}</p>
          )}
        </div>

        {/* PRIVACY & TERMS SECTION */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-8 text-sm">
            <Link 
              to="/privacy-policy" 
              className="text-gray-400 hover:text-orange-400 transition text-center md:text-left"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-gray-400 hover:text-orange-400 transition text-center md:text-left"
            >
              Terms of Service
            </Link>
          </div>
        </div>


        {/* COPYRIGHT */}
        <div className="mt-8 pt-4 text-center"> 
          <p className="text-gray-400 text-sm">
            © 2025 ATS GLOBAL TECH — All Rights Reserved
          </p>
        </div>
      </div>

      {/* Scroll-To-Top Button (Fixed and only visible after scrolling) */}
     
    </footer>
  );
};

export default Footer;