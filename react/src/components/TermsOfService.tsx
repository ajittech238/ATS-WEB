// import React from "react";

// const TermsOfService: React.FC = () => {
//   return (
//     <div className="bg-gray-50 text-gray-800 min-h-screen pt-28 pb-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-orange-500 mb-4">
//             Terms of Service
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Please read these terms carefully before using our website or
//             services. These terms define your rights and responsibilities when
//             engaging with ATS GLOBAL TECH.
//           </p>
//         </div>

//         {/* ✅ Hero Image */}
//         <div className="flex justify-center mb-12">
//           <img
//             src="https://img.freepik.com/free-vector/hand-drawn-flat-design-terms-service-illustration_23-2149168095.jpg"
//             alt="Terms of Service Illustration"
//             className="w-full md:w-3/4 rounded-2xl shadow-lg"
//           />
//         </div>

//         {/* ✅ 3-Column Responsive Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Card 1 */}
//           <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
//             <h2 className="text-2xl font-semibold mb-3 text-orange-500">
//               1. Acceptance of Terms
//             </h2>
//             <p className="text-gray-600">
//               By accessing our website, you agree to abide by these Terms and
//               Conditions. If you disagree with any part, please do not use our
//               services.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
//             <h2 className="text-2xl font-semibold mb-3 text-orange-500">
//               2. Use of Services
//             </h2>
//             <p className="text-gray-600">
//               Our services are provided for lawful purposes only. You agree not
//               to misuse the website, attempt hacking, or engage in unauthorized
//               access to our systems or data.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
//             <h2 className="text-2xl font-semibold mb-3 text-orange-500">
//               3. Intellectual Property
//             </h2>
//             <p className="text-gray-600">
//               All logos, designs, content, and code on this site are the
//               property of{" "}
//               <span className="text-orange-600 font-medium">ATS GLOBAL TECH</span>.
//               Unauthorized use or reproduction is prohibited.
//             </p>
//           </div>

//           {/* Card 4 */}
//           <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
//             <h2 className="text-2xl font-semibold mb-3 text-orange-500">
//               4. Limitation of Liability
//             </h2>
//             <p className="text-gray-600">
//               ATS GLOBAL TECH shall not be liable for any direct, indirect, or
//               incidental damages arising out of the use or inability to use our
//               website or services.
//             </p>
//           </div>

//           {/* Card 5 */}
//           <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
//             <h2 className="text-2xl font-semibold mb-3 text-orange-500">
//               5. Governing Law
//             </h2>
//             <p className="text-gray-600">
//               These Terms are governed by the laws of India. Any disputes will
//               be resolved in the courts of{" "}
//               <span className="text-orange-600 font-medium">New Delhi, India</span>.
//             </p>
//           </div>

//           {/* Card 6 */}
//           <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
//             <h2 className="text-2xl font-semibold mb-3 text-orange-500">
//               6. Contact Us
//             </h2>
//             <p className="text-gray-600">
//               If you have any questions about these Terms, contact us at{" "}
//               <span className="text-orange-600">info@atsglobaltech.in</span>.
//             </p>
//           </div>
//         </div>

//         {/* ✅ Call-to-Action Button */}
//         <div className="text-center mt-16">
//           {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300">
//             Back to Home
//           </button> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsOfService;




import React from "react";
import { motion } from "framer-motion";

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen pt-28 pb-16 px-6 font-roman">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-orange-500 mb-4"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Please read these terms carefully before using our website or services. These terms define your
            rights and responsibilities when engaging with ATS GLOBAL TECH.
          </motion.p>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center mb-12">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
            alt="Terms of Service Illustration"
            className="w-full md:w-3/4 rounded-2xl shadow-lg"
          />
        </div>

        {/* Alternating Layout Sections */}
        <div className="space-y-20">
          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-md" />
            <div>
              <h2 className="text-3xl font-semibold text-orange-500 mb-4">Usage Agreement</h2>
              <p className="text-gray-600 leading-relaxed">
                By using our website, you acknowledge that you have read and understood our Terms of Service
                and agree to comply with all applicable rules, policies, and guidelines.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-orange-500 mb-4">User Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed">
                Users must ensure that all interactions with our platform remain lawful. You must not engage
                in hacking, unauthorized access, spreading malware, or any form of harmful activity.
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-md" />
          </div>

          {/* Section 3 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-md" />
            <div>
              <h2 className="text-3xl font-semibold text-orange-500 mb-4">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All website content including graphics, code, and branding belongs solely to ATS GLOBAL TECH.
                Reproduction or commercial usage without permission is strictly prohibited.
              </p>
            </div>
          </div>
        </div>

        {/* Card Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...
            [
              {
                title: "Limitation of Liability",
                text: "ATS GLOBAL TECH is not responsible for indirect, incidental, or consequential damages arising from service use."
              },
              {
                title: "Governing Law",
                text: "All disputes are governed by Indian law and handled within the jurisdiction of New Delhi courts."
              },
              {
                title: "Termination Rights",
                text: "We may suspend or terminate access if users violate the Terms or engage in prohibited activities."
              },
              {
                title: "Account Responsibilities",
                text: "Users are responsible for keeping their login credentials confidential and securing their accounts."
              },
              {
                title: "Third‑Party Links",
                text: "We may provide third‑party links; however, we are not responsible for external website content."
              },
              {
                title: "Contact Information",
                text: "For any queries, reach us at info@atsglobaltech.in. We respond within 24–48 business hours."
              }
            ]
          ].flat().map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-3 text-orange-500">{item.title}</h2>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {/* CTA Removed */}
      </div>
    </div>
  );
};

export default TermsOfService;
