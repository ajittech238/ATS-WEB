

// import React, { useState } from "react";
// import { Phone, Mail, MapPin, Send } from "lucide-react";

// const ContactSection: React.FC = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     company: "",
//     details: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Thanks for reaching out! We'll get back to you soon.");
//   };

//   return (
//     <section
//       className="py-24 bg-white"
//       style={{ fontFamily: "Times New Roman, serif" }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT COLUMN */}
//           <div data-aos="fade-right">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
//               Let's Start Building Something Amazing Together
//             </h2>

//             <p
//               className="text-xl text-gray-600 mb-6 leading-relaxed"
//               data-aos="fade-right"
//               data-aos-delay="100"
//             >
//               Ready to transform your business with cutting-edge technology?
//               Connect with our experts and turn your vision into reality.
//             </p>

//             {/* ⭐ EXTRA PREMIUM CONTENT */}
//             <p
//               className="text-lg text-gray-700 mb-10 leading-relaxed"
//               data-aos="fade-right"
//               data-aos-delay="200"
//             >
//               We follow a **transparent, client-first** approach — from idea validation
//               to complete development. You’ll receive structured project planning,
//               fast communication, and consistent progress updates so your experience
//               stays smooth, clear, and fully reliable throughout the journey.
//             </p>

//             {/* CONTACT DETAILS */}
//             <div className="space-y-7">
//               {[
//                 {
//                   icon: <Phone className="h-6 w-6 text-teal-600" />,
//                   title: "Call Us",
//                   info: "+91 820 917 5003",
//                 },
//                 {
//                   icon: <Mail className="h-6 w-6 text-teal-600" />,
//                   title: "Email Us",
//                   info: "info@atsglobaltech.in",
//                 },
//                 {
//                   icon: <MapPin className="h-6 w-6 text-teal-600" />,
//                   title: "Visit Us",
//                   info: "Capital City Road, Jaipur (302021)",
//                 },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center space-x-4"
//                   data-aos="fade-up"
//                   data-aos-delay={idx * 120}
//                 >
//                   <div className="p-3 rounded-full bg-teal-50 shadow-sm">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900 text-lg">
//                       {item.title}
//                     </p>
//                     <p className="text-gray-700">{item.info}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT COLUMN – FORM */}
//           <div
//             className="rounded-2xl shadow-xl border border-gray-100 bg-white"
//             data-aos="fade-left"
//           >
//             <div className="p-6 text-center">
//               <h3 className="font-semibold text-2xl mb-2 text-gray-900">
//                 Get Free Consultation
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Fill out the form and our team will contact you within 24 hours.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="p-6 pt-0 space-y-6">

//               {/* NAME FIELDS */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {[
//                   {
//                     name: "firstName",
//                     label: "First Name",
//                     placeholder: "Your good name...",
//                   },
//                   {
//                     name: "lastName",
//                     label: "Last Name",
//                     placeholder: "Last name",
//                   },
//                 ].map((field) => (
//                   <div key={field.name}>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       {field.label}
//                     </label>
//                     <input
//                       name={field.name}
//                       value={formData[field.name as keyof typeof formData]}
//                       onChange={handleChange}
//                       placeholder={field.placeholder}
//                       className="h-11 w-full rounded-md border border-gray-300 bg-gray-50 
//                       px-3 py-2 text-gray-900 focus:ring-2 focus:ring-teal-500 outline-none"
//                     />
//                   </div>
//                 ))}
//               </div>

//               {/* OTHER FIELDS */}
//               {[
//                 {
//                   name: "email",
//                   type: "email",
//                   label: "Email",
//                   placeholder: "email@example.com",
//                 },
//                 {
//                   name: "phone",
//                   type: "tel",
//                   label: "Phone",
//                   placeholder: "+91 999 999 9999",
//                 },
//                 {
//                   name: "company",
//                   type: "text",
//                   label: "Company",
//                   placeholder: "Your company name",
//                 },
//               ].map((field) => (
//                 <div key={field.name}>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     {field.label}
//                   </label>
//                   <input
//                     type={field.type}
//                     name={field.name}
//                     value={formData[field.name as keyof typeof formData]}
//                     onChange={handleChange}
//                     placeholder={field.placeholder}
//                     className="h-11 w-full rounded-md border border-gray-300 bg-gray-50 
//                     px-3 py-2 text-gray-900 focus:ring-2 focus:ring-teal-500 outline-none"
//                   />
//                 </div>
//               ))}

//               {/* TEXTAREA */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Project Details
//                 </label>
//                 <textarea
//                   name="details"
//                   value={formData.details}
//                   onChange={handleChange}
//                   placeholder="Tell us about your project..."
//                   rows={4}
//                   className="w-full rounded-md border border-gray-300 bg-gray-50 
//                   px-3 py-2 text-gray-900 focus:ring-2 focus:ring-teal-500 outline-none"
//                 />
//               </div>

//               {/* BUTTON */}
//               <button
//                 type="submit"
//                 className="inline-flex items-center justify-center gap-3 w-full 
//                 h-12 px-6 rounded-md font-medium text-white text-lg
//                 bg-gradient-to-r from-cyan-500 to-teal-600
//                 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
//               >
//                 <Send className="h-5 w-5" />
//                 Send Message
//               </button>

//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;





import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";

// Define the shape of the form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  details: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  details: "",
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  // Status can be 'idle', 'submitting', 'success', or 'error'
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent submission if already submitting
    if (submitStatus === 'submitting') return;

    setSubmitStatus('submitting');
    console.log("Form Submitted:", formData);

    // --- Placeholder for actual API submission (Simulate 1.5s delay) ---
    setTimeout(() => {
      // Assuming successful submission for demo purposes
      const isSuccess = true; 

      if (isSuccess) {
        setSubmitStatus('success');
        setFormData(initialFormData); // Clear form on success
      } else {
        setSubmitStatus('error');
      }

      // Clear the success/error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
    // -------------------------------------------------------------------
  };

  const isSubmitting = submitStatus === 'submitting';

  return (
    // Use responsive padding for vertical spacing
    <section
      className="py-16 sm:py-20 lg:py-24 bg-white"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN: Text, Contact Details, and Map */}
          <div data-aos="fade-right">
            {/* Responsive Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Start Building Something Amazing Together
            </h2>

            {/* Main Paragraph - Responsive Text Size */}
            <p
              className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Ready to transform your business with cutting-edge technology?
              Connect with our experts and turn your vision into reality.
            </p>

            {/* Extra Premium Content - Responsive Text Size */}
            <p
              className="text-base sm:text-lg text-gray-700 mb-10 leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              We follow a **transparent, client-first** approach — from idea validation
              to complete development. You’ll receive structured project planning,
              fast communication, and consistent progress updates so your experience
              stays smooth, clear, and fully reliable throughout the journey.
            </p>

            {/* CONTACT DETAILS */}
            <div className="space-y-7">
              {[
                {
                  icon: <Phone className="h-6 w-6 text-teal-600" />,
                  title: "Call Us",
                  info: "+91 820 917 5003",
                  link: "tel:+918209175003"
                },
                {
                  icon: <Mail className="h-6 w-6 text-teal-600" />,
                  title: "Email Us",
                  info: "info@atsglobaltech.in",
                  link: "mailto:info@atsglobaltech.in"
                },
                {
                  icon: <MapPin className="h-6 w-6 text-teal-600" />,
                  title: "Visit Us",
                  info: "Capital City Road, Jaipur (302021)",
                  // Map link scrolls to the map element
                  link: "#map-location" 
                },
              ].map((item, idx) => (
                <a 
                  key={idx}
                  href={item.link}
                  className="flex items-center space-x-4 group"
                  data-aos="fade-up"
                  data-aos-delay={idx * 120}
                >
                  <div className="p-3 rounded-full bg-teal-50 shadow-sm group-hover:bg-teal-100 transition duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg group-hover:text-teal-700">
                      {item.title}
                    </p>
                    <p className="text-gray-700">{item.info}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* MAP EMBED: h-64 for mobile, lg:h-96 for desktop */}
            {/* <div 
              id="map-location"
              className="w-full h-64 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mt-12 border border-gray-200"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <iframe
                // Using Hawa Mahal as a placeholder location for the map
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.115797371583!2d75.8118086!3d26.9001399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db421d09e599b%3A0x6b8026b9f441548e!2sHawa%20Mahal%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1700684128549!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div> */}
          </div>

          {/* RIGHT COLUMN – FORM CARD */}
          <div
            // Added sticky positioning for desktop view to keep form visible
            className="rounded-2xl shadow-2xl border border-gray-100 bg-white p-6 sm:p-8 lg:p-10 lg:sticky lg:top-8 self-start"
            data-aos="fade-left"
          >
            <div className="text-center mb-6">
              <h3 className="font-semibold text-2xl mb-2 text-gray-900">
                Get Free Consultation
              </h3>
              <p className="text-sm text-gray-600">
                Fill out the form and our team will contact you within 24 hours.
              </p>
            </div>

            {/* SUCCESS/ERROR MESSAGE BOX (Replaces alert()) */}
            {submitStatus === 'success' && (
                <div className="mb-4 p-4 rounded-lg bg-teal-50 border border-teal-300 flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-teal-600" />
                    <span className="text-teal-800 font-medium">
                        Thank you! Your message has been sent successfully. We will be in touch shortly.
                    </span>
                </div>
            )}
            {submitStatus === 'error' && (
                <div className="mb-4 p-4 rounded-lg bg-red-50 border border-red-300 flex items-center gap-3">
                    <Mail className="h-6 w-6 text-red-600" />
                    <span className="text-red-800 font-medium">
                        Oops! Something went wrong. Please try sending the message again.
                    </span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME FIELDS - Responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "firstName",
                    label: "First Name",
                    placeholder: "Your good name...",
                  },
                  {
                    name: "lastName",
                    label: "Last Name",
                    placeholder: "Last name",
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      value={formData[field.name as keyof FormData]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      // Use rounded-lg for consistency, focus ring for accessibility
                      className="h-11 w-full rounded-lg border border-gray-300 bg-gray-50 
                      px-3 py-2 text-gray-900 focus:ring-2 focus:ring-teal-500 outline-none transition duration-150"
                    />
                  </div>
                ))}
              </div>

              {/* OTHER FIELDS */}
              {[
                {
                  name: "email",
                  type: "email",
                  label: "Email",
                  placeholder: "email@example.com",
                  required: true,
                },
                {
                  name: "phone",
                  type: "tel",
                  label: "Phone",
                  placeholder: "+91 999 999 9999 (Optional)",
                  required: false,
                },
                {
                  name: "company",
                  type: "text",
                  label: "Company",
                  placeholder: "Your company name (Optional)",
                  required: false,
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof FormData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="h-11 w-full rounded-lg border border-gray-300 bg-gray-50 
                    px-3 py-2 text-gray-900 focus:ring-2 focus:ring-teal-500 outline-none transition duration-150"
                  />
                </div>
              ))}

              {/* TEXTAREA */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Details
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us about your project or query..."
                  rows={4}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 
                  px-3 py-2 text-gray-900 focus:ring-2 focus:ring-teal-500 outline-none transition duration-150"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center gap-3 w-full 
                h-12 px-6 rounded-lg font-medium text-white text-lg
                bg-gradient-to-r from-cyan-500 to-teal-600
                transition-all duration-300 shadow-md ${isSubmitting 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:scale-[1.02] hover:shadow-xl'}`
                }
              >
                {isSubmitting ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Submitting...
                    </>
                ) : (
                    <>
                        <Send className="h-5 w-5" />
                        Send Message
                    </>
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;