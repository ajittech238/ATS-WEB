


// // // // // import { useEffect, useState } from "react";
// // // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // // // // import Navbar from "./components/Navbar";
// // // // // import Footer from "./components/Footer";
// // // // // import HeroSection from "./components/HeroSection";
// // // // // import ProvenTrackRecord from "./components/ProvenTrackRecord";
// // // // // import TechnologyServices from "./components/TechnologyServices";
// // // // // import TechnologyStack from "./components/TechnologyStack";
// // // // // import FeaturedSuccessStories from "./components/FeaturedSuccessStories";
// // // // // import ClientTestimonials from "./components/ClientTestimonials";
// // // // // import WhyChooseUs from "./components/WhyChooseUs";
// // // // // import InnovationJourney from "./components/InnovationJourney";
// // // // // import ContactSection from "./components/ContactSection";
// // // // // import CallToAction from "./components/CallToAction";

// // // // // import About from "./components/About";
// // // // // import ServicesSection from "./components/ServicesSection";
// // // // // import Solution from "./components/Solution";
// // // // // import Industries from "./components/Industries";
// // // // // import Products from "./components/Products";
// // // // // import Projects from "./components/Projects";
// // // // // import Portfolio from "./components/Portfolio";
// // // // // import CaseStudies from "./components/CaseStudies";
// // // // // import Testimonials from "./components/Testimonials";
// // // // // import Blog from "./components/Blog";
// // // // // import Careers from "./components/Careers";
// // // // // import Contact from "./components/Contact";

// // // // // import ContactModal from "./components/ContactModal";
// // // // // import TeamMembers from "./components/TeamMembers";
// // // // // import AadarshProfile from "./components/AadarshProfile";
// // // // // import Profile from "./components/Profile";
// // // // // import RajSinghShekhawatProfile from "./components/RajSinghShekhawatProfile";

// // // // // import AiPage from "./components/AiPage";
// // // // // import SecureBankingApp from "./components/SecureBankingApp";
// // // // // import EnterpriseCloudMigration from "./components/EnterpriseCloudMigration";
// // // // // import HealthcareAnalyticsPlatform from "./components/HealthcareAnalyticsPlatform";
// // // // // import FinTechMobileBankingApp from "./components/FinTechMobileBankingApp";
// // // // // import SaaSAnalyticsDashboard from "./components/SaaSAnalyticsDashboard";
// // // // // import TravelBookingPlatform from "./components/TravelBookingPlatform";
// // // // // import AIChatAssistant from "./components/AIChatAssistant";

// // // // // import PrivacyPolicy from "./components/PrivacyPolicy";
// // // // // import TermsOfService from "./components/TermsOfService";

// // // // // import "aos/dist/aos.css";
// // // // // import AOS from "aos";

// // // // // function App() {
// // // // //   const [openModal, setOpenModal] = useState(false);

// // // // //   // 🚀 Show Contact Modal only once per page refresh
// // // // //   useEffect(() => {
// // // // //     const modalShown = localStorage.getItem("modalShown");
// // // // //     if (!modalShown) {
// // // // //       const timer = setTimeout(() => {
// // // // //         setOpenModal(true);
// // // // //         localStorage.setItem("modalShown", "true");
// // // // //       }, 5000);

// // // // //       return () => clearTimeout(timer);
// // // // //     }
// // // // //   }, []);

// // // // //   // 🚀 Manual modal open from HeroSection button
// // // // //   useEffect(() => {
// // // // //     const handleOpenModal = () => setOpenModal(true);
// // // // //     window.addEventListener("openContactModal", handleOpenModal);

// // // // //     return () =>
// // // // //       window.removeEventListener("openContactModal", handleOpenModal);
// // // // //   }, []);

// // // // //   // 🚀 Initialize AOS Animations globally
// // // // //   useEffect(() => {
// // // // //     AOS.init({
// // // // //       duration: 900,
// // // // //       once: true,
// // // // //     });
// // // // //   }, []);

// // // // //   return (
// // // // //     <Router>
// // // // //       <div className="min-h-screen flex flex-col bg-white text-gray-900">
// // // // //         <Navbar />

// // // // //         <main className="flex-grow">
// // // // //           <Routes>
// // // // //             <Route
// // // // //               path="/"
// // // // //               element={
// // // // //                 <>
// // // // //                   <HeroSection />
// // // // //                   <ProvenTrackRecord />
// // // // //                   <TechnologyServices />
// // // // //                   <TechnologyStack />
// // // // //                   <FeaturedSuccessStories />
// // // // //                   <ClientTestimonials />
// // // // //                   <WhyChooseUs />
// // // // //                   <InnovationJourney />
// // // // //                   <ContactSection />
// // // // //                   <CallToAction />
// // // // //                 </>
// // // // //               }
// // // // //             />

// // // // //             {/* FULL ROUTES */}
// // // // //             <Route path="/about" element={<About />} />
// // // // //             <Route path="/team-members" element={<TeamMembers />} />
// // // // //             <Route path="/team-members2" element={<AadarshProfile />} />
// // // // //             <Route path="/team-members3" element={<Profile />} />
// // // // //             <Route path="/team-members4" element={<RajSinghShekhawatProfile />} />

// // // // //             <Route path="/services" element={<ServicesSection />} />
// // // // //             <Route path="/services/mobile" element={<Solution />} />
// // // // //             <Route path="/services/industries" element={<Industries />} />

// // // // //             <Route path="/products" element={<Products />} />

// // // // //             <Route path="/work/projects" element={<Projects />} />
// // // // //             <Route path="/work/portfolio" element={<Portfolio />} />
// // // // //             <Route path="/work/case-studies" element={<CaseStudies />} />

// // // // //             <Route path="/testimonials" element={<Testimonials />} />
// // // // //             <Route path="/blogs" element={<Blog />} />
// // // // //             <Route path="/careers" element={<Careers />} />
// // // // //             <Route path="/contact" element={<Contact />} />

// // // // //             <Route path="/ai-page" element={<AiPage />} />
// // // // //             <Route path="/secure-page" element={<SecureBankingApp />} />
// // // // //             <Route path="/cloud-page" element={<EnterpriseCloudMigration />} />
// // // // //             <Route path="/health-page" element={<HealthcareAnalyticsPlatform />} />
// // // // //             <Route path="/fintech-page" element={<FinTechMobileBankingApp />} />
// // // // //             <Route path="/saas-page" element={<SaaSAnalyticsDashboard />} />
// // // // //             <Route path="/travel-page" element={<TravelBookingPlatform />} />
// // // // //             <Route path="/aichat-page" element={<AIChatAssistant />} />

// // // // //             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
// // // // //             <Route path="/terms-of-service" element={<TermsOfService />} />
// // // // //           </Routes>
// // // // //         </main>

// // // // //         <Footer />

// // // // //         {/* Contact Modal */}
// // // // //         <ContactModal
// // // // //           isOpen={openModal}
// // // // //           onClose={() => setOpenModal(false)}
// // // // //         />
// // // // //       </div>
// // // // //     </Router>
// // // // //   );
// // // // // }

// // // // // export default App;






// // // // // import React, { useEffect, useState } from "react";
// // // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // // // // // Components
// // // // // import Navbar from "./components/Navbar";
// // // // // import Footer from "./components/Footer";
// // // // // import HeroSection from "./components/HeroSection";
// // // // // import ProvenTrackRecord from "./components/ProvenTrackRecord";
// // // // // import TechnologyServices from "./components/TechnologyServices";
// // // // // import TechnologyStack from "./components/TechnologyStack";
// // // // // import FeaturedSuccessStories from "./components/FeaturedSuccessStories";
// // // // // import ClientTestimonials from "./components/ClientTestimonials";
// // // // // import WhyChooseUs from "./components/WhyChooseUs";
// // // // // import InnovationJourney from "./components/InnovationJourney";
// // // // // import ContactSection from "./components/ContactSection";
// // // // // import CallToAction from "./components/CallToAction";

// // // // // import About from "./components/About";
// // // // // import ServicesSection from "./components/ServicesSection";
// // // // // import Solution from "./components/Solution";
// // // // // import Industries from "./components/Industries";
// // // // // import Products from "./components/Products";
// // // // // import Projects from "./components/Projects";
// // // // // import Portfolio from "./components/Portfolio";
// // // // // import CaseStudies from "./components/CaseStudies";
// // // // // import Testimonials from "./components/Testimonials";
// // // // // import Blog from "./components/Blog";
// // // // // import Careers from "./components/Careers";
// // // // // import Contact from "./components/Contact";

// // // // // import ContactModal from "./components/ContactModal";
// // // // // import TeamMembers from "./components/TeamMembers";
// // // // // import AadarshProfile from "./components/AadarshProfile";
// // // // // import Profile from "./components/Profile";
// // // // // import RajSinghShekhawatProfile from "./components/RajSinghShekhawatProfile";

// // // // // import AiPage from "./components/AiPage";
// // // // // import SecureBankingApp from "./components/SecureBankingApp";
// // // // // import EnterpriseCloudMigration from "./components/EnterpriseCloudMigration";
// // // // // import HealthcareAnalyticsPlatform from "./components/HealthcareAnalyticsPlatform";
// // // // // import FinTechMobileBankingApp from "./components/FinTechMobileBankingApp";
// // // // // import SaaSAnalyticsDashboard from "./components/SaaSAnalyticsDashboard";
// // // // // import TravelBookingPlatform from "./components/TravelBookingPlatform";
// // // // // import AIChatAssistant from "./components/AIChatAssistant";

// // // // // import PrivacyPolicy from "./components/PrivacyPolicy";
// // // // // import TermsOfService from "./components/TermsOfService";

// // // // // import "aos/dist/aos.css";
// // // // // import AOS from "aos";

// // // // // // Define the shape of the custom event detail (if any)
// // // // // interface CustomEventDetail {
// // // // //   // If your custom event sends data, define it here
// // // // // }

// // // // // const App: React.FC = () => {
// // // // //   const [openModal, setOpenModal] = useState(false);

// // // // //   // 🚀 Show Contact Modal only once per page refresh
// // // // //   useEffect(() => {
// // // // //     const modalShown = localStorage.getItem("modalShown");
// // // // //     if (!modalShown) {
// // // // //       const timer = setTimeout(() => {
// // // // //         setOpenModal(true);
// // // // //         localStorage.setItem("modalShown", "true");
// // // // //       }, 5000);

// // // // //       return () => clearTimeout(timer);
// // // // //     }
// // // // //   }, []);

// // // // //   // 🚀 Manual modal open from HeroSection button
// // // // //   useEffect(() => {
// // // // //     // Correctly handle the custom event type
// // // // //     const handleOpenModal = () => setOpenModal(true);
// // // // //     window.addEventListener("openContactModal", handleOpenModal);

// // // // //     return () =>
// // // // //       window.removeEventListener("openContactModal", handleOpenModal);
// // // // //   }, []);

// // // // //   // 🚀 Initialize AOS Animations globally
// // // // //   useEffect(() => {
// // // // //     AOS.init({
// // // // //       duration: 900,
// // // // //       once: true,
// // // // //     });
// // // // //   }, []);

// // // // //   return (
// // // // //     <Router>
// // // // //       {/* ⭐ FINAL FIX: Added w-screen and overflow-x-hidden here to prevent content from spilling out on the right side. */}
// // // // //       <div className="relative w-screen overflow-x-hidden min-h-screen flex flex-col bg-white text-gray-900">
        
// // // // //         {/* Navbar is fixed at the top */}
// // // // //         <Navbar />

// // // // //         {/* ⭐ FIX: Added pt-[128px] to main to push content down below the fixed Navbar (Top Bar: h-8, Main Nav: h-20 => total 112px) */}
// // // // //         <main className="flex-grow pt-[128px]">
// // // // //           <Routes>
// // // // //             <Route
// // // // //               path="/"
// // // // //               element={
// // // // //                 <>
// // // // //                   <HeroSection />
// // // // //                   <ProvenTrackRecord />
// // // // //                   <TechnologyServices />
// // // // //                   <TechnologyStack />
// // // // //                   <FeaturedSuccessStories />
// // // // //                   <ClientTestimonials />
// // // // //                   <WhyChooseUs />
// // // // //                   <InnovationJourney />
// // // // //                   <ContactSection />
// // // // //                   <CallToAction />
// // // // //                 </>
// // // // //               }
// // // // //             />

// // // // //             {/* FULL ROUTES */}
// // // // //             <Route path="/about" element={<About />} />
// // // // //             <Route path="/team-members" element={<TeamMembers />} />
// // // // //             <Route path="/team-members2" element={<AadarshProfile />} />
// // // // //             <Route path="/team-members3" element={<Profile />} />
// // // // //             <Route path="/team-members4" element={<RajSinghShekhawatProfile />} />

// // // // //             <Route path="/services" element={<ServicesSection />} />
// // // // //             <Route path="/services/mobile" element={<Solution />} />
// // // // //             <Route path="/services/industries" element={<Industries />} />

// // // // //             <Route path="/products" element={<Products />} />

// // // // //             <Route path="/work/projects" element={<Projects />} />
// // // // //             <Route path="/work/portfolio" element={<Portfolio />} />
// // // // //             <Route path="/work/case-studies" element={<CaseStudies />} />

// // // // //             <Route path="/testimonials" element={<Testimonials />} />
// // // // //             <Route path="/blogs" element={<Blog />} />
// // // // //             <Route path="/careers" element={<Careers />} />
// // // // //             <Route path="/contact" element={<Contact />} />

// // // // //             <Route path="/ai-page" element={<AiPage />} />
// // // // //             <Route path="/secure-page" element={<SecureBankingApp />} />
// // // // //             <Route path="/cloud-page" element={<EnterpriseCloudMigration />} />
// // // // //             <Route path="/health-page" element={<HealthcareAnalyticsPlatform />} />
// // // // //             <Route path="/fintech-page" element={<FinTechMobileBankingApp />} />
// // // // //             <Route path="/saas-page" element={<SaaSAnalyticsDashboard />} />
// // // // //             <Route path="/travel-page" element={<TravelBookingPlatform />} />
// // // // //             <Route path="/aichat-page" element={<AIChatAssistant />} />

// // // // //             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
// // // // //             <Route path="/terms-of-service" element={<TermsOfService />} />
// // // // //           </Routes>
// // // // //         </main>

// // // // //         <Footer />

// // // // //         {/* Contact Modal */}
// // // // //         <ContactModal
// // // // //           isOpen={openModal}
// // // // //           onClose={() => setOpenModal(false)}
// // // // //         />
// // // // //       </div>
// // // // //     </Router>
// // // // //   );
// // // // // }

// // // // // export default App;



// // // // import React, { useEffect, useState } from "react";
// // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // // // // Components
// // // // import Navbar from "./components/Navbar";
// // // // import Footer from "./components/Footer";
// // // // import HeroSection from "./components/HeroSection";
// // // // import ProvenTrackRecord from "./components/ProvenTrackRecord";
// // // // import TechnologyServices from "./components/TechnologyServices";
// // // // import TechnologyStack from "./components/TechnologyStack";
// // // // import FeaturedSuccessStories from "./components/FeaturedSuccessStories";
// // // // import ClientTestimonials from "./components/ClientTestimonials";
// // // // import WhyChooseUs from "./components/WhyChooseUs";
// // // // import InnovationJourney from "./components/InnovationJourney";
// // // // import ContactSection from "./components/ContactSection";
// // // // import CallToAction from "./components/CallToAction";

// // // // import About from "./components/About";
// // // // import ServicesSection from "./components/ServicesSection";
// // // // import Solution from "./components/Solution";
// // // // import Industries from "./components/Industries";
// // // // import Products from "./components/Products";
// // // // import Projects from "./components/Projects";
// // // // import Portfolio from "./components/Portfolio";
// // // // import CaseStudies from "./components/CaseStudies";
// // // // import Testimonials from "./components/Testimonials";
// // // // import Blog from "./components/Blog";
// // // // import Careers from "./components/Careers";
// // // // import Contact from "./components/Contact";

// // // // import ContactModal from "./components/ContactModal";
// // // // import TeamMembers from "./components/TeamMembers";
// // // // import AadarshProfile from "./components/AadarshProfile";
// // // // import Profile from "./components/Profile";
// // // // import RajSinghShekhawatProfile from "./components/RajSinghShekhawatProfile";

// // // // import AiPage from "./components/AiPage";
// // // // import SecureBankingApp from "./components/SecureBankingApp";
// // // // import EnterpriseCloudMigration from "./components/EnterpriseCloudMigration";
// // // // import HealthcareAnalyticsPlatform from "./components/HealthcareAnalyticsPlatform";
// // // // import FinTechMobileBankingApp from "./components/FinTechMobileBankingApp";
// // // // import SaaSAnalyticsDashboard from "./components/SaaSAnalyticsDashboard";
// // // // // import TravelBookingPlatform from "./components/TravelBookingPlatform";
// // // // import AIChatAssistant from "./components/AIChatAssistant";

// // // // import PrivacyPolicy from "./components/PrivacyPolicy";
// // // // import TermsOfService from "./components/TermsOfService";

// // // // import "aos/dist/aos.css";
// // // // import AOS from "aos";
// // // // import SocialBar from "./components/SocialBar";

// // // // // Define the shape of the custom event detail (if any)
// // // // interface CustomEventDetail {
// // // //   // If your custom event sends data, define it here
// // // // }

// // // // const App: React.FC = () => {
// // // //   const [openModal, setOpenModal] = useState(false);

// // // //   // 🚀 Show Contact Modal only once per page refresh
// // // //   useEffect(() => {
// // // //     const modalShown = localStorage.getItem("modalShown");
// // // //     if (!modalShown) {
// // // //       const timer = setTimeout(() => {
// // // //         setOpenModal(true);
// // // //         localStorage.setItem("modalShown", "true");
// // // //       }, 5000);

// // // //       return () => clearTimeout(timer);
// // // //     }
// // // //   }, []);

// // // //   // 🚀 Manual modal open from HeroSection button
// // // //   useEffect(() => {
// // // //     // Correctly handle the custom event type
// // // //     const handleOpenModal = () => setOpenModal(true);
// // // //     window.addEventListener("openContactModal", handleOpenModal);

// // // //     return () =>
// // // //       window.removeEventListener("openContactModal", handleOpenModal);
// // // //   }, []);

// // // //   // 🚀 Initialize AOS Animations globally
// // // //   useEffect(() => {
// // // //     AOS.init({
// // // //       duration: 900,
// // // //       once: true,
// // // //     });
// // // //   }, []);

// // // //   return (
// // // //     <Router>
// // // //       {/* ⭐ FINAL FIX: Added w-screen and overflow-x-hidden here to prevent horizontal scrolling. */}
// // // //       <div className="relative w-screen overflow-x-hidden min-h-screen flex flex-col bg-white text-gray-900">
        
// // // //         {/* Navbar is fixed at the top */}
// // // //         <Navbar />

// // // //         {/* ⭐ FIX: Added pt-[128px] to main to push content down below the fixed Navbar. */}
// // // //         <main className="flex-grow pt-[128px]">
// // // //           <Routes>
// // // //             <SocialBar/>
// // // //             <Route
// // // //               path="/"
// // // //               element={
// // // //                 <>
// // // //                   <HeroSection />
// // // //                   <ProvenTrackRecord />
// // // //                   <TechnologyServices />
// // // //                   <TechnologyStack />
// // // //                   <FeaturedSuccessStories />
// // // //                   <ClientTestimonials />
// // // //                   <WhyChooseUs />
// // // //                   <InnovationJourney />
// // // //                   <ContactSection />
// // // //                   <CallToAction />
// // // //                 </>
// // // //               }
// // // //             />

// // // //             {/* FULL ROUTES */}
// // // //             <Route path="/about" element={<About />} />
// // // //             <Route path="/team-members" element={<TeamMembers />} />
// // // //             <Route path="/team-members2" element={<AadarshProfile />} />
// // // //             <Route path="/team-members3" element={<Profile />} />
// // // //             <Route path="/team-members4" element={<RajSinghShekhawatProfile />} />

// // // //             <Route path="/services" element={<ServicesSection />} />
// // // //             <Route path="/services/mobile" element={<Solution />} />
// // // //             <Route path="/services/industries" element={<Industries />} />

// // // //             <Route path="/products" element={<Products />} />

// // // //             <Route path="/work/projects" element={<Projects />} />
// // // //             <Route path="/work/portfolio" element={<Portfolio />} />
// // // //             <Route path="/work/case-studies" element={<CaseStudies />} />

// // // //             <Route path="/testimonials" element={<Testimonials />} />
// // // //             <Route path="/blogs" element={<Blog />} />
// // // //             <Route path="/careers" element={<Careers />} />
// // // //             <Route path="/contact" element={<Contact />} />

// // // //             <Route path="/ai-page" element={<AiPage />} />
// // // //             <Route path="/secure-page" element={<SecureBankingApp />} />
// // // //             <Route path="/cloud-page" element={<EnterpriseCloudMigration />} />
// // // //             <Route path="/health-page" element={<HealthcareAnalyticsPlatform />} />
// // // //             <Route path="/fintech-page" element={<FinTechMobileBankingApp />} />
// // // //             <Route path="/saas-page" element={<SaaSAnalyticsDashboard />} />
// // // //             {/* <Route path="/travel-page" element={<TravelBookingPlatform />} /> */}
// // // //             <Route path="/aichat-page" element={<AIChatAssistant />} />

// // // //             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
// // // //             <Route path="/terms-of-service" element={<TermsOfService />} />
// // // //           </Routes>
// // // //         </main>

// // // //         <Footer />

// // // //         {/* Contact Modal */}
// // // //         <ContactModal
// // // //           isOpen={openModal}
// // // //           onClose={() => setOpenModal(false)}
// // // //         />
// // // //       </div>
// // // //     </Router>
// // // //   );
// // // // }

// // // // export default App;



// // // import React, { useEffect, useState } from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // // // Components
// // // import Navbar from "./components/Navbar";
// // // import Footer from "./components/Footer";
// // // import HeroSection from "./components/HeroSection";
// // // import ProvenTrackRecord from "./components/ProvenTrackRecord";
// // // import TechnologyServices from "./components/TechnologyServices";
// // // import TechnologyStack from "./components/TechnologyStack";
// // // import FeaturedSuccessStories from "./components/FeaturedSuccessStories";
// // // import ClientTestimonials from "./components/ClientTestimonials";
// // // import WhyChooseUs from "./components/WhyChooseUs";
// // // import InnovationJourney from "./components/InnovationJourney";
// // // import ContactSection from "./components/ContactSection";
// // // import CallToAction from "./components/CallToAction";

// // // import About from "./components/About";
// // // import ServicesSection from "./components/ServicesSection";
// // // import Solution from "./components/Solution";
// // // import Industries from "./components/Industries";
// // // import Products from "./components/Products";
// // // import Projects from "./components/Projects";
// // // import Portfolio from "./components/Portfolio";
// // // import CaseStudies from "./components/CaseStudies";
// // // import Testimonials from "./components/Testimonials";
// // // import Blog from "./components/Blog";
// // // import Careers from "./components/Careers";
// // // import Contact from "./components/Contact";

// // // import ContactModal from "./components/ContactModal";
// // // import TeamMembers from "./components/TeamMembers";
// // // import AadarshProfile from "./components/AadarshProfile";
// // // import Profile from "./components/Profile";
// // // import RajSinghShekhawatProfile from "./components/RajSinghShekhawatProfile";

// // // import AiPage from "./components/AiPage";
// // // import SecureBankingApp from "./components/SecureBankingApp";
// // // import EnterpriseCloudMigration from "./components/EnterpriseCloudMigration";
// // // import HealthcareAnalyticsPlatform from "./components/HealthcareAnalyticsPlatform";
// // // import FinTechMobileBankingApp from "./components/FinTechMobileBankingApp";
// // // import SaaSAnalyticsDashboard from "./components/SaaSAnalyticsDashboard";
// // // // import TravelBookingPlatform from "./components/TravelBookingPlatform";
// // // import AIChatAssistant from "./components/AIChatAssistant";

// // // import PrivacyPolicy from "./components/PrivacyPolicy";
// // // import TermsOfService from "./components/TermsOfService";

// // // import "aos/dist/aos.css";
// // // import AOS from "aos";
// // // import SocialBar from "./components/SocialBar";

// // // const App: React.FC = () => {
// // //   const [openModal, setOpenModal] = useState(false);

// // //   // Show Contact Modal once
// // //   useEffect(() => {
// // //     const modalShown = localStorage.getItem("modalShown");
// // //     if (!modalShown) {
// // //       const timer = setTimeout(() => {
// // //         setOpenModal(true);
// // //         localStorage.setItem("modalShown", "true");
// // //       }, 5000);

// // //       return () => clearTimeout(timer);
// // //     }
// // //   }, []);

// // //   // Listen for Custom Event
// // //   useEffect(() => {
// // //     const handleOpenModal = () => setOpenModal(true);
// // //     window.addEventListener("openContactModal", handleOpenModal);

// // //     return () => window.removeEventListener("openContactModal", handleOpenModal);
// // //   }, []);

// // //   // Initialize AOS
// // //   useEffect(() => {
// // //     AOS.init({
// // //       duration: 900,
// // //       once: true,
// // //     });
// // //   }, []);

// // //   return (
// // //     <Router>
// // //       <div className="relative w-screen overflow-x-hidden min-h-screen flex flex-col bg-white text-gray-900">

// // //         {/* ⭐ Global Social Bar → Always Visible */}
// // //         <SocialBar />

// // //         {/* Navbar */}
// // //         <Navbar />

// // //         <main className="flex-grow pt-[128px]">
// // //           <Routes>
// // //             <Route
// // //               path="/"
// // //               element={
// // //                 <>
// // //                   <HeroSection />
// // //                   <ProvenTrackRecord />
// // //                   <TechnologyServices />
// // //                   <TechnologyStack />
// // //                   <FeaturedSuccessStories />
// // //                   <ClientTestimonials />
// // //                   <WhyChooseUs />
// // //                   <InnovationJourney />
// // //                   <ContactSection />
// // //                   <CallToAction />
// // //                 </>
// // //               }
// // //             />

// // //             {/* FULL ROUTES */}
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/team-members" element={<TeamMembers />} />
// // //             <Route path="/team-members2" element={<AadarshProfile />} />
// // //             <Route path="/team-members3" element={<Profile />} />
// // //             <Route path="/team-members4" element={<RajSinghShekhawatProfile />} />

// // //             <Route path="/services" element={<ServicesSection />} />
// // //             <Route path="/services/mobile" element={<Solution />} />
// // //             <Route path="/services/industries" element={<Industries />} />

// // //             <Route path="/products" element={<Products />} />

// // //             <Route path="/work/projects" element={<Projects />} />
// // //             <Route path="/work/portfolio" element={<Portfolio />} />
// // //             <Route path="/work/case-studies" element={<CaseStudies />} />

// // //             <Route path="/testimonials" element={<Testimonials />} />
// // //             <Route path="/blogs" element={<Blog />} />
// // //             <Route path="/careers" element={<Careers />} />
// // //             <Route path="/contact" element={<Contact />} />

// // //             <Route path="/ai-page" element={<AiPage />} />
// // //             <Route path="/secure-page" element={<SecureBankingApp />} />
// // //             <Route path="/cloud-page" element={<EnterpriseCloudMigration />} />
// // //             <Route path="/health-page" element={<HealthcareAnalyticsPlatform />} />
// // //             <Route path="/fintech-page" element={<FinTechMobileBankingApp />} />
// // //             <Route path="/saas-page" element={<SaaSAnalyticsDashboard />} />
// // //             {/* <Route path="/travel-page" element={<TravelBookingPlatform />} /> */}
// // //             <Route path="/aichat-page" element={<AIChatAssistant />} />

// // //             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
// // //             <Route path="/terms-of-service" element={<TermsOfService />} />
// // //           </Routes>
// // //         </main>

// // //         {/* Footer */}
// // //         <Footer />

// // //         {/* Contact Modal */}
// // //         <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
// // //       </div>
// // //     </Router>
// // //   );
// // // };

// // // export default App;


// // import React, { useEffect, useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import AOS from "aos";
// // import "aos/dist/aos.css";

// // // =======================================================
// // // 1. Component Imports
// // // =======================================================

// // // Layout and Global
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";
// // import SocialBar from "./components/SocialBar";
// // import ContactModal from "./components/ContactModal"; // Your Modal

// // // Home Page Sections
// // import HeroSection from "./components/HeroSection";
// // import ProvenTrackRecord from "./components/ProvenTrackRecord";
// // import TechnologyServices from "./components/TechnologyServices";
// // import TechnologyStack from "./components/TechnologyStack";
// // import FeaturedSuccessStories from "./components/FeaturedSuccessStories";
// // import ClientTestimonials from "./components/ClientTestimonials";
// // import WhyChooseUs from "./components/WhyChooseUs";
// // import InnovationJourney from "./components/InnovationJourney";
// // import ContactSection from "./components/ContactSection";
// // import CallToAction from "./components/CallToAction";

// // // Full Pages
// // import About from "./components/About";
// // import ServicesSection from "./components/ServicesSection";
// // import Solution from "./components/Solution";
// // import Industries from "./components/Industries";
// // import Products from "./components/Products";
// // import Projects from "./components/Projects";
// // import Portfolio from "./components/Portfolio";
// // import CaseStudies from "./components/CaseStudies";
// // import Testimonials from "./components/Testimonials";
// // import Blog from "./components/Blog";
// // import Careers from "./components/Careers";
// // import Contact from "./components/Contact";

// // // Team Profiles
// // import TeamMembers from "./components/TeamMembers";
// // import AadarshProfile from "./components/AadarshProfile";
// // import Profile from "./components/Profile";
// // import RajSinghShekhawatProfile from "./components/RajSinghShekhawatProfile";

// // // Case Study/Specific Pages
// // import AiPage from "./components/AiPage";
// // import SecureBankingApp from "./components/SecureBankingApp";
// // import EnterpriseCloudMigration from "./components/EnterpriseCloudMigration";
// // import HealthcareAnalyticsPlatform from "./components/HealthcareAnalyticsPlatform";
// // import FinTechMobileBankingApp from "./components/FinTechMobileBankingApp";
// // import SaaSAnalyticsDashboard from "./components/SaaSAnalyticsDashboard";
// // import AIChatAssistant from "./components/AIChatAssistant";

// // // Legal Pages
// // import PrivacyPolicy from "./components/PrivacyPolicy";
// // import TermsOfService from "./components/TermsOfService";
// // import LetsCreate from "./components/LetsCreate";
// // // import ContactFloater from "./components/ContactFloater";


// // // =======================================================
// // // 2. Main App Component
// // // =======================================================

// // const App: React.FC = () => {
// //   const [openModal, setOpenModal] = useState(false);

// //   // --- Effect 1: Initialize AOS (Animations) ---
// //   useEffect(() => {
// //     AOS.init({
// //       duration: 900,
// //       once: true,
// //     });
// //     // Ensure AOS recalculates positions after component render
// //     AOS.refresh(); 
// //   }, []);

// //   // --- Effect 2: Show Contact Modal Once after 5 seconds ---
// //   useEffect(() => {
// //     const modalShown = localStorage.getItem("modalShown");
    
// //     // Check if the modal has NOT been shown before
// //     if (!modalShown) {
// //       const timer = setTimeout(() => {
// //         setOpenModal(true);
// //         // Set the flag in localStorage so it doesn't appear again
// //         localStorage.setItem("modalShown", "true");
// //       }, 5000); 

// //       // Cleanup function to clear the timeout if component unmounts
// //       return () => clearTimeout(timer); 
// //     }
// //   }, []); 

// //   // --- Effect 3: Listen for Custom Event to Open Modal (e.g., from a button click) ---
// //   useEffect(() => {
// //     const handleOpenModal = () => setOpenModal(true);
// //     window.addEventListener("openContactModal", handleOpenModal);

// //     // Cleanup function to remove event listener
// //     return () => window.removeEventListener("openContactModal", handleOpenModal);
// //   }, []);

// //   return (
// //     <Router>
// //       <div className="relative w-screen overflow-x-hidden min-h-screen flex flex-col bg-white text-gray-900">

// //         {/* Global Components */}
// //         <SocialBar />
// //         {/* <ContactFloater phoneNumber="9929825003" /> */}
// //         <Navbar />

// //         {/* Main Content Area */}
// //         {/* pt-[128px] compensates for the fixed Navbar (Top Bar: 4px + Main Bar: 80px + space) */}
// //         <main className="flex-grow pt-[128px]">
// //           <Routes>
            
// //             {/* ⭐ Home Page Route (Bundles all sections) */}
// //             <Route
// //               path="/"
// //               element={
// //                 <>
// //                   <HeroSection />
// //                   <ProvenTrackRecord />
// //                   <TechnologyServices />
// //                   <TechnologyStack />
// //                   <FeaturedSuccessStories />
// //                   <ClientTestimonials />
// //                   <WhyChooseUs />
// //                   <InnovationJourney />
// //                   <ContactSection />
// //                   <CallToAction />
// //                 </>
// //               }
// //             />

// //             {/* General Pages */}
// //             <Route path="/about" element={<About />} />
// //             <Route path="/services" element={<ServicesSection />} />
// //             <Route path="/products" element={<Products />} />
// //             <Route path="/testimonials" element={<Testimonials />} />
// //             <Route path="/blogs" element={<Blog />} />
// //             <Route path="/careers" element={<Careers />} />
// //             <Route path="/contact" element={<Contact />} />
            
// //             {/* Secondary/Nested Routes */}
// //             <Route path="/services/mobile" element={<Solution />} />
// //             <Route path="/services/industries" element={<Industries />} />
// //             <Route path="/work/projects" element={<Projects />} />
// //             <Route path="/work/portfolio" element={<Portfolio />} />
// //             <Route path="/work/case-studies" element={<CaseStudies />} />
// //              <Route path="/lets-create" element={<LetsCreate />} />

// //             {/* Team/Profile Routes */}
// //             <Route path="/team-members" element={<TeamMembers />} />
// //             <Route path="/team-members2" element={<AadarshProfile />} />
// //             <Route path="/team-members3" element={<Profile />} />
// //             <Route path="/team-members4" element={<RajSinghShekhawatProfile />} />

// //             {/* Case Study/Specific Solution Routes */}
// //             <Route path="/ai-page" element={<AiPage />} />
// //             <Route path="/secure-page" element={<SecureBankingApp />} />
// //             <Route path="/cloud-page" element={<EnterpriseCloudMigration />} />
// //             <Route path="/health-page" element={<HealthcareAnalyticsPlatform />} />
// //             <Route path="/fintech-page" element={<FinTechMobileBankingApp />} />
// //             <Route path="/saas-page" element={<SaaSAnalyticsDashboard />} />
// //             <Route path="/aichat-page" element={<AIChatAssistant />} />


// //             {/* Legal Routes */}
// //             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
// //             <Route path="/terms-of-service" element={<TermsOfService />} />
// //           </Routes>
// //         </main>

// //         {/* Footer */}
// //         <Footer />

// //         {/* Contact Modal (Global and Controlled by state) */}
// //         <ContactModal 
// //           isOpen={openModal} 
// //           onClose={() => setOpenModal(false)} 
// //         />
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;

// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // =======================================================
// // 1. Component Imports
// // =======================================================

// // Layout and Global
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import SocialBar from "./components/SocialBar";
// import ContactModal from "./components/ContactModal"; // Popup Modal

// // Home Page Sections
// import HeroSection from "./components/HeroSection";
// import ProvenTrackRecord from "./components/ProvenTrackRecord";
// import TechnologyServices from "./components/TechnologyServices";
// import TechnologyStack from "./components/TechnologyStack";
// import FeaturedSuccessStories from "./components/FeaturedSuccessStories";
// import ClientTestimonials from "./components/ClientTestimonials";
// import WhyChooseUs from "./components/WhyChooseUs";
// import InnovationJourney from "./components/InnovationJourney";
// import ContactSection from "./components/ContactSection";
// import CallToAction from "./components/CallToAction";

// // Full Pages
// import About from "./components/About";
// import ServicesSection from "./components/ServicesSection";
// import Solution from "./components/Solution";
// import Industries from "./components/Industries";
// import Products from "./components/Products";
// import Projects from "./components/Projects";
// import Portfolio from "./components/Portfolio";
// import CaseStudies from "./components/CaseStudies";
// import Testimonials from "./components/Testimonials";
// import Blog from "./components/Blog";
// import Careers from "./components/Careers";
// import Contact from "./components/Contact";

// // Team Profiles
// import TeamMembers from "./components/TeamMembers";
// import AadarshProfile from "./components/AadarshProfile";
// import Profile from "./components/Profile";
// import RajSinghShekhawatProfile from "./components/RajSinghShekhawatProfile";

// // Case Study/Specific Pages
// import AiPage from "./components/AiPage";
// import SecureBankingApp from "./components/SecureBankingApp";
// import EnterpriseCloudMigration from "./components/EnterpriseCloudMigration";
// import HealthcareAnalyticsPlatform from "./components/HealthcareAnalyticsPlatform";
// import FinTechMobileBankingApp from "./components/FinTechMobileBankingApp";
// import SaaSAnalyticsDashboard from "./components/SaaSAnalyticsDashboard";
// import AIChatAssistant from "./components/AIChatAssistant";

// // Legal Pages
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import TermsOfService from "./components/TermsOfService";
// import LetsCreate from "./components/LetsCreate";

// // =======================================================
// // 2. Main App Component
// // =======================================================

// const App: React.FC = () => {
//   const [openModal, setOpenModal] = useState(false);

//   // Initialize AOS animations
//   useEffect(() => {
//     AOS.init({
//       duration: 900,
//       once: true,
//     });
//     AOS.refresh();
//   }, []);

//   // ⭐ Auto-open Contact Modal after 3 seconds (ONLY ONE TIME)
//   useEffect(() => {
//     const modalShown = localStorage.getItem("modalShown");

//     if (!modalShown) {
//       const timer = setTimeout(() => {
//         setOpenModal(true);
//         localStorage.setItem("modalShown", "true");
//       }, 3000); // 3-second delay

//       return () => clearTimeout(timer);
//     }
//   }, []);

//   // Listen for custom event to open modal manually
//   useEffect(() => {
//     const handleOpenModal = () => setOpenModal(true);
//     window.addEventListener("openContactModal", handleOpenModal);

//     return () => window.removeEventListener("openContactModal", handleOpenModal);
//   }, []);

//   return (
//     <Router>
//       <div className="relative w-screen overflow-x-hidden min-h-screen flex flex-col bg-white text-gray-900">

//         {/* Global Components */}
//         <SocialBar />
//         <Navbar />

//         {/* Main Content */}
//         <main className="flex-grow pt-[128px]">
//           <Routes>

//             {/* Home Page */}
//             <Route
//               path="/"
//               element={
//                 <>
//                   <HeroSection />
//                   <ProvenTrackRecord />
//                   <TechnologyServices />
//                   <TechnologyStack />
//                   <FeaturedSuccessStories />
//                   <ClientTestimonials />
//                   <WhyChooseUs />
//                   <InnovationJourney />
//                   <ContactSection />
//                   <CallToAction />
//                 </>
//               }
//             />

//             {/* General Pages */}
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<ServicesSection />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/testimonials" element={<Testimonials />} />
//             <Route path="/blogs" element={<Blog />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/contact" element={<Contact />} />

//             {/* Sub Routes */}
//             <Route path="/services/mobile" element={<Solution />} />
//             <Route path="/services/industries" element={<Industries />} />
//             <Route path="/work/projects" element={<Projects />} />
//             <Route path="/work/portfolio" element={<Portfolio />} />
//             <Route path="/work/case-studies" element={<CaseStudies />} />

//             {/* Let's Create Form Page */}
//             <Route path="/lets-create" element={<LetsCreate />} />

//             {/* Team Profile Routes */}
//             <Route path="/team-members" element={<TeamMembers />} />
//             <Route path="/team-members2" element={<AadarshProfile />} />
//             <Route path="/team-members3" element={<Profile />} />
//             <Route path="/team-members4" element={<RajSinghShekhawatProfile />} />

//             {/* Case Study Pages */}
//             <Route path="/ai-page" element={<AiPage />} />
//             <Route path="/secure-page" element={<SecureBankingApp />} />
//             <Route path="/cloud-page" element={<EnterpriseCloudMigration />} />
//             <Route path="/health-page" element={<HealthcareAnalyticsPlatform />} />
//             <Route path="/fintech-page" element={<FinTechMobileBankingApp />} />
//             <Route path="/saas-page" element={<SaaSAnalyticsDashboard />} />
//             <Route path="/aichat-page" element={<AIChatAssistant />} />

//             {/* Legal */}
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/terms-of-service" element={<TermsOfService />} />

//           </Routes>
//         </main>

//         {/* Footer */}
//         <Footer />

//         {/* Auto Contact Popup Modal */}
//         <ContactModal 
//           isOpen={openModal} 
//           onClose={() => setOpenModal(false)} 
//         />
//       </div>
//     </Router>
//   );
// };

// export default App;



import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// =======================================================
// Component Imports
// =======================================================
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialBar from "./components/SocialBar";
import ContactModal from "./components/ContactModal";

import HeroSection from "./components/HeroSection";
import ProvenTrackRecord from "./components/ProvenTrackRecord";
import TechnologyServices from "./components/TechnologyServices";
import TechnologyStack from "./components/TechnologyStack";
import FeaturedSuccessStories from "./components/FeaturedSuccessStories";
import ClientTestimonials from "./components/ClientTestimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import InnovationJourney from "./components/InnovationJourney";
import ContactSection from "./components/ContactSection";
import CallToAction from "./components/CallToAction";

import About from "./components/About";
import ServicesSection from "./components/ServicesSection";
import Solution from "./components/Solution";
import Industries from "./components/Industries";
import Products from "./components/Products";
import Projects from "./components/Projects";
import Portfolio from "./components/Portfolio";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Careers from "./components/Careers";
import Contact from "./components/Contact";

import TeamMembers from "./components/TeamMembers";
import AadarshProfile from "./components/AadarshProfile";
import Profile from "./components/Profile";
import RajSinghShekhawatProfile from "./components/RajSinghShekhawatProfile";

import AiPage from "./components/AiPage";
import SecureBankingApp from "./components/SecureBankingApp";
import EnterpriseCloudMigration from "./components/EnterpriseCloudMigration";
import HealthcareAnalyticsPlatform from "./components/HealthcareAnalyticsPlatform";
import FinTechMobileBankingApp from "./components/FinTechMobileBankingApp";
import SaaSAnalyticsDashboard from "./components/SaaSAnalyticsDashboard";
import AIChatAssistant from "./components/AIChatAssistant";

import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import LetsCreate from "./components/LetsCreate";

// =======================================================
// Main App Component
// =======================================================

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  // ⭐ Initialize animations
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    AOS.refresh();
  }, []);

  // ⭐ Auto-open Contact Popup every time after 3 seconds
  useEffect(() => {
    localStorage.removeItem("modalShown"); // always remove (popup always shows)

    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // ⭐ Listen for custom event "openContactModal"
  useEffect(() => {
    const handleOpenModal = () => setOpenModal(true);
    window.addEventListener("openContactModal", handleOpenModal);

    return () => window.removeEventListener("openContactModal", handleOpenModal);
  }, []);

  return (
    <Router>
      <div className="relative w-screen overflow-x-hidden min-h-screen flex flex-col bg-white text-gray-900">

        <SocialBar />
        <Navbar />

        <main className="flex-grow pt-[128px]">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ProvenTrackRecord />
                  <TechnologyServices />
                  <TechnologyStack />
                  <FeaturedSuccessStories />
                  <ClientTestimonials />
                  <WhyChooseUs />
                  <InnovationJourney />
                  <ContactSection />
                  <CallToAction />
                </>
              }
            />

            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/products" element={<Products />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/services/mobile" element={<Solution />} />
            <Route path="/services/industries" element={<Industries />} />
            <Route path="/work/projects" element={<Projects />} />
            <Route path="/work/portfolio" element={<Portfolio />} />
            <Route path="/work/case-studies" element={<CaseStudies />} />

            <Route path="/lets-create" element={<LetsCreate />} />

            <Route path="/team-members" element={<TeamMembers />} />
            <Route path="/team-members2" element={<AadarshProfile />} />
            <Route path="/team-members3" element={<Profile />} />
            <Route path="/team-members4" element={<RajSinghShekhawatProfile />} />

            <Route path="/ai-page" element={<AiPage />} />
            <Route path="/secure-page" element={<SecureBankingApp />} />
            <Route path="/cloud-page" element={<EnterpriseCloudMigration />} />
            <Route path="/health-page" element={<HealthcareAnalyticsPlatform />} />
            <Route path="/fintech-page" element={<FinTechMobileBankingApp />} />
            <Route path="/saas-page" element={<SaaSAnalyticsDashboard />} />
            <Route path="/aichat-page" element={<AIChatAssistant />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>

        <Footer />

        {/* ⭐ Popup Modal */}
        <ContactModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
      </div>
    </Router>
  );
};

export default App;
