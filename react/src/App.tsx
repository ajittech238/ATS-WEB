

// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // =======================================================
// // Component Imports
// // =======================================================
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import SocialBar from "./components/SocialBar";
// import ContactModal from "./components/ContactModal";

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

// import TeamMembers from "./components/TeamMembers";
// import AadarshProfile from "./components/AadarshProfile";
// import Profile from "./components/Profile";
// import RajSinghShekhawatProfile from "./components/RajSinghShekhawatProfile";

// import AiPage from "./components/AiPage";
// import SecureBankingApp from "./components/SecureBankingApp";
// import EnterpriseCloudMigration from "./components/EnterpriseCloudMigration";
// import HealthcareAnalyticsPlatform from "./components/HealthcareAnalyticsPlatform";
// import FinTechMobileBankingApp from "./components/FinTechMobileBankingApp";
// import SaaSAnalyticsDashboard from "./components/SaaSAnalyticsDashboard";
// import AIChatAssistant from "./components/AIChatAssistant";

// import PrivacyPolicy from "./components/PrivacyPolicy";
// import TermsOfService from "./components/TermsOfService";
// import LetsCreate from "./components/LetsCreate";

// // =======================================================
// // Main App Component
// // =======================================================

// const App: React.FC = () => {
//   const [openModal, setOpenModal] = useState(false);

//   // ⭐ Initialize animations
//   useEffect(() => {
//     AOS.init({ duration: 900, once: true });
//     AOS.refresh();
//   }, []);

//   // ⭐ Auto-open Contact Popup every time after 3 seconds
//   useEffect(() => {
//     localStorage.removeItem("modalShown"); // always remove (popup always shows)

//     const timer = setTimeout(() => {
//       setOpenModal(true);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   // ⭐ Listen for custom event "openContactModal"
//   useEffect(() => {
//     const handleOpenModal = () => setOpenModal(true);
//     window.addEventListener("openContactModal", handleOpenModal);

//     return () => window.removeEventListener("openContactModal", handleOpenModal);
//   }, []);

//   return (
//     <Router>
//       <div className="relative w-screen overflow-x-hidden min-h-screen flex flex-col bg-white text-gray-900">

//         <SocialBar />
//         <Navbar />

//         <main className="flex-grow pt-[128px]">
//           <Routes>
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

//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<ServicesSection />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/testimonials" element={<Testimonials />} />
//             <Route path="/blogs" element={<Blog />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/contact" element={<Contact />} />

//             <Route path="/services/mobile" element={<Solution />} />
//             <Route path="/services/industries" element={<Industries />} />
//             <Route path="/work/projects" element={<Projects />} />
//             <Route path="/work/portfolio" element={<Portfolio />} />
//             <Route path="/work/case-studies" element={<CaseStudies />} />

//             <Route path="/lets-create" element={<LetsCreate />} />

//             <Route path="/team-members" element={<TeamMembers />} />
//             <Route path="/team-members2" element={<AadarshProfile />} />
//             <Route path="/team-members3" element={<Profile />} />
//             <Route path="/team-members4" element={<RajSinghShekhawatProfile />} />

//             <Route path="/ai-page" element={<AiPage />} />
//             <Route path="/secure-page" element={<SecureBankingApp />} />
//             <Route path="/cloud-page" element={<EnterpriseCloudMigration />} />
//             <Route path="/health-page" element={<HealthcareAnalyticsPlatform />} />
//             <Route path="/fintech-page" element={<FinTechMobileBankingApp />} />
//             <Route path="/saas-page" element={<SaaSAnalyticsDashboard />} />
//             <Route path="/aichat-page" element={<AIChatAssistant />} />

//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/terms-of-service" element={<TermsOfService />} />
//           </Routes>
//         </main>

//         <Footer />

//         {/* ⭐ Popup Modal */}
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
// 🎯 CHANGED: useLocation को import किया गया है
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; 
import AOS from "aos";
import "aos/dist/aos.css";

// =======================================================
// Component Imports
// =======================================================
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialBar from "./components/SocialBar";
import ContactModal from "./components/ContactModal";

// Home Page Components
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

// Route Components
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
import LetsCreate from "./components/LetsCreate";

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


// =======================================================
// ⭐ NEW COMPONENT: SCROLL TO TOP LOGIC
// =======================================================

const ScrollToTop = () => {
    // useLocation हुक हर बार URL बदलने पर एक नया 'location' ऑब्जेक्ट देता है।
    const { pathname } = useLocation();

    // useEffect हर बार 'pathname' (यानी URL) बदलने पर चलेगा।
    useEffect(() => {
        // यह पेज को टॉप (0, 0) पर स्क्रॉल कर देगा।
        window.scrollTo(0, 0);
    }, [pathname]);

    // यह कॉम्पोनेंट कुछ भी रेंडर नहीं करता है, यह केवल साइड इफेक्ट (स्क्रॉलिंग) के लिए है।
    return null;
};


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
            {/* 🎯 ADDED: ScrollToTop कॉम्पोनेंट को Router के अंदर, लेकिन Routes के बाहर रखा गया है */}
            <ScrollToTop />
            
            <div className="relative w-screen overflow-x-hidden min-h-screen flex flex-col bg-white text-gray-900">

                <SocialBar />
                <Navbar />

                {/* Navbar Fix: pt-[128px] is used to push content below fixed Navbar */}
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