

// import React, { useState, ChangeEvent, FormEvent } from "react";
// import {
//   MapPin,
//   Heart,
//   Coffee,
//   GraduationCap,
//   Gift,
//   X,
// } from "lucide-react";

// // ---------------- JOB TYPES ----------------
// interface Job {
//   title: string;
//   image: string;
//   description: string;
//   tags: string[];
//   location: string;
// }

// // ---------------- FORM TYPES (TECHNICAL MODAL) ----------------
// interface ApplyFormData {
//   name: string;
//   email: string;
//   phone: string;
//   experience: string;
//   resume: File | null;
//   image: File | null;
//   message: string;
// }

// // ---------------- NON-TECH FORM TYPES ----------------
// interface NonTechFormData {
//   fullName: string;
//   email: string;
//   phone: string;
//   category: string;
//   experience: string;
//   resume: File | null;
//   image: File | null;
//   message: string;
// }

// // ---------------- MODAL PROPS ----------------
// interface ApplyModalProps {
//   job: Job;
//   onClose: () => void;
// }

// const API_BASE_URL = "http://localhost:5000";

// // ---------------- JOB DATA ----------------
// const jobs: Job[] = [
//   {
//     title: "Senior Full Stack Developer",
//     image:
//       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000",
//     description:
//       "Lead the development of scalable web applications and mentor junior developers.",
//     tags: ["React", "Node.js", "TypeScript", "AWS"],
//     location: "Jaipur, Rajasthan",
//   },
//   {
//     title: "DevOps Engineer",
//     image:
//       "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
//     description:
//       "Design and maintain CI/CD pipelines and cloud infrastructure.",
//     tags: ["Docker", "Kubernetes", "AWS", "Terraform"],
//     location: "Remote",
//   },
//   {
//     title: "UI/UX Designer",
//     image:
//       "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
//     description:
//       "Create intuitive and beautiful user experiences for our products. Focus on accessibility and modern design trends.",
//     tags: ["Figma", "Adobe XD", "Prototyping", "User Research", "Accessibility"],
//     location: "Jaipur, Rajasthan",
//   },
//   {
//     title: "Data Scientist",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
//     description: "Analyze complex data sets and build predictive models.",
//     tags: ["Python", "Machine Learning", "SQL", "TensorFlow"],
//     location: "Jaipur, Rajasthan",
//   },
//   {
//     title: "Product Manager",
//     image:
//       "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
//     description: "Drive product vision and strategy for our key initiatives.",
//     tags: ["Agile", "Leadership", "Analytics", "Strategy"],
//     location: "Jaipur, Rajasthan",
//   },
//   {
//     title: "Cybersecurity Specialist",
//     image:
//       "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
//     description:
//       "Protect our systems and ensure compliance with security standards.",
//     tags: ["Penetration Testing", "CISSP", "Network Security"],
//     location: "Jaipur, Rajasthan",
//   },
// ];

// // ---------------- TECHNICAL APPLY MODAL (JO CARDS SE OPEN HOTA HAI) ----------------
// const ApplyModal: React.FC<ApplyModalProps> = ({ job, onClose }) => {
//   const [form, setForm] = useState<ApplyFormData>({
//     name: "",
//     email: "",
//     phone: "",
//     experience: "",
//     resume: null,
//     image: null,
//     message: "",
//   });

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const target = e.target as HTMLInputElement;
//     const { name, value, files } = target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: files && files.length > 0 ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", form.name);
//     formData.append("email", form.email);
//     formData.append("phone", form.phone);
//     formData.append("experience", form.experience);
//     formData.append("message", form.message);
//     formData.append("jobTitle", job.title);

//     if (form.resume) formData.append("resume", form.resume);
//     if (form.image) formData.append("image", form.image);

//     const res = await fetch(`${API_BASE_URL}/api/apply`, {
//       method: "POST",
//       body: formData,
//     });

//     const data = await res.json();

//     if (data.success) {
//       alert("Application Submitted Successfully!");
//       onClose();
//     } else {
//       alert(data.message || "Error submitting application");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-teal-600 transition"
//         >
//           <X size={24} />
//         </button>

//         <h2 className="text-2xl font-bold text-teal-700 mb-4 border-b pb-2">
//           Apply for {job.title}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 rounded-lg p-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 rounded-lg p-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 rounded-lg p-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
//           />
//           <input
//             type="text"
//             name="experience"
//             placeholder="Years of Experience"
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg p-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
//           />

//           <div className="flex flex-col sm:flex-row gap-3">
//             <div className="flex-1">
//               <label className="text-sm text-gray-700 block mb-1">
//                 Upload Resume (PDF/DOC) <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="file"
//                 name="resume"
//                 accept=".pdf,.doc,.docx"
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded-lg p-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition"
//               />
//             </div>
//             <div className="flex-1">
//               <label className="text-sm text-gray-700 block mb-1">
//                 Upload Image (Optional)
//               </label>
//               <input
//                 type="file"
//                 name="image"
//                 accept="image/*"
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg p-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition"
//               />
//             </div>
//           </div>

//           <textarea
//             name="message"
//             rows={3}
//             placeholder="Why do you want to join us? (Cover Letter)"
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg p-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
//           />

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition shadow-lg"
//           >
//             Submit Application
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// // ---------------- NON-TECH / OTHER FORM (RIGHT SIDE) ----------------
// const NonTechForm: React.FC = () => {
//   const [form, setForm] = useState<NonTechFormData>({
//     fullName: "",
//     email: "",
//     phone: "",
//     category: "",
//     experience: "",
//     resume: null,
//     image: null,
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const target = e.target as HTMLInputElement;
//     const { name, value } = target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, files } = e.target;
//     if (!files || files.length === 0) return;
//     setForm((prev) => ({
//       ...prev,
//       [name]: files[0],
//     }));
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess(null);
//     setError(null);

//     try {
//       const formData = new FormData();
//       formData.append("fullName", form.fullName);
//       formData.append("email", form.email);
//       formData.append("phone", form.phone);
//       formData.append("category", form.category);
//       formData.append("experience", form.experience);
//       formData.append("message", form.message);

//       if (form.resume) formData.append("resume", form.resume);
//       if (form.image) formData.append("image", form.image);

//       const res = await fetch(`${API_BASE_URL}/api/nontech-apply`, {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();

//       if (!res.ok || !data.success) {
//         throw new Error(data.message || "Something went wrong");
//       }

//       setSuccess(data.message || "Application submitted successfully!");
//       setForm({
//         fullName: "",
//         email: "",
//         phone: "",
//         category: "",
//         experience: "",
//         resume: null,
//         image: null,
//         message: "",
//       });
//     } catch (err: any) {
//       setError(err.message || "Unable to submit application");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 h-fit lg:sticky lg:top-10">
//       <h2 className="text-2xl font-bold text-teal-700 mb-4">
//         Apply for Non-Technical / Other Roles
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Full Name"
//           value={form.fullName}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-3 border rounded-lg"
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={form.email}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-3 border rounded-lg"
//         />

//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone Number"
//           value={form.phone}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-3 border rounded-lg"
//         />

//         <select
//           name="category"
//           value={form.category}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-3 border rounded-lg"
//         >
//           <option value="">Select Category</option>
//           <option value="Non-Technical">Non-Technical</option>
//           <option value="Support">Support</option>
//           <option value="HR / Management">HR / Management</option>
//           <option value="Other">Other</option>
//         </select>

//         <input
//           type="text"
//           name="experience"
//           placeholder="Years of Experience"
//           value={form.experience}
//           onChange={handleChange}
//           className="w-full px-4 py-3 border rounded-lg"
//         />

//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-gray-700 text-sm mb-1">
//               Resume (PDF/DOC)
//             </label>
//             <input
//               type="file"
//               name="resume"
//               accept=".pdf,.doc,.docx"
//               onChange={handleFileChange}
//               required
//               className="w-full border rounded-lg px-3 py-2"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 text-sm mb-1">
//               Image (Optional)
//             </label>
//             <input
//               type="file"
//               name="image"
//               accept="image/*"
//               onChange={handleFileChange}
//               className="w-full border rounded-lg px-3 py-2"
//             />
//           </div>
//         </div>

//         <textarea
//           name="message"
//           placeholder="Why do you want to join us?"
//           rows={4}
//           value={form.message}
//           onChange={handleChange}
//           className="w-full px-4 py-3 border rounded-lg"
//         ></textarea>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 disabled:opacity-70"
//         >
//           {loading ? "Submitting..." : "Submit Application"}
//         </button>

//         {success && (
//           <p className="text-sm text-green-600 mt-2 text-center">{success}</p>
//         )}
//         {error && (
//           <p className="text-sm text-red-600 mt-2 text-center">{error}</p>
//         )}
//       </form>
//     </div>
//   );
// };

// // ---------------- MAIN COMPONENT ----------------
// const Careers: React.FC = () => {
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

//   return (
//     <div className="font-serif">
//       {/* HERO + NON-TECH FORM SECTION */}
//       <section className="relative pt-20 pb-12 bg-gradient-to-br from-teal-50 via-white to-cyan-100 text-gray-900 overflow-hidden">
//         {/* Background Orbs */}
//         <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
//         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

//         <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* LEFT CONTENT */}
//           <div className="text-left">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//               Join Our{" "}
//               <span className="bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent">
//                 Amazing Team
//               </span>
//             </h1>
//             <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-12">
//               Be part of a team that's shaping the digital future. Explore our
//               open positions and grow your career with{" "}
//               <span className="text-teal-600 font-semibold">
//                 ATS GLOBAL TECH
//               </span>.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-white shadow-lg rounded-2xl p-6 border border-teal-100 hover:shadow-xl transition">
//                 <h3 className="text-xl font-semibold text-teal-600 mb-2">
//                   🚀 Innovative Projects
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   Work on tech solutions that challenge your creativity.
//                 </p>
//               </div>

//               <div className="bg-white shadow-lg rounded-2xl p-6 border border-teal-100 hover:shadow-xl transition">
//                 <h3 className="text-xl font-semibold text-teal-600 mb-2">
//                   🌍 Global Culture
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   Collaborate with diverse teams across the globe.
//                 </p>
//               </div>

//               <div className="bg-white shadow-lg rounded-2xl p-6 border border-teal-100 hover:shadow-xl transition">
//                 <h3 className="text-xl font-semibold text-teal-600 mb-2">
//                   💼 Career Growth
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   Learn & grow with mentorship and learning programs.
//                 </p>
//               </div>

//               <div className="bg-white shadow-lg rounded-2xl p-6 border border-teal-100 hover:shadow-xl transition">
//                 <h3 className="text-xl font-semibold text-teal-600 mb-2">
//                   🤝 Friendly Team
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   Work with a supportive and passionate team.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT NON TECH FORM */}
//           <NonTechForm />
//         </div>
//       </section>

//       {/* JOBS SECTION */}
//       <section className="py-16 bg-white text-gray-900">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {jobs.map((job) => (
//             <div
//               key={job.title}
//               className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:border-teal-300 transition overflow-hidden flex flex-col h-full"
//             >
//               <img
//                 src={job.image}
//                 alt={job.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6 flex flex-col flex-grow">
//                 <h3 className="text-xl font-semibold text-teal-700 mb-2">
//                   {job.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-3 flex-grow">
//                   {job.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-3 mt-auto">
//                   {job.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="text-xs px-2 py-1 bg-teal-100 text-teal-700 rounded-full font-medium"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <p className="text-sm text-gray-600 flex items-center gap-1 mb-4 border-t pt-3">
//                   <MapPin className="h-4 w-4 text-black" /> {job.location}
//                 </p>

//                 <button
//                   onClick={() => setSelectedJob(job)}
//                   className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition"
//                 >
//                   Apply Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* BENEFITS SECTION */}
//       <section className="py-16 bg-teal-50">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">
//             What We Offer You
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <div className="flex flex-col items-center p-4">
//               <Heart className="h-8 w-8 text-black mb-2" />
//               <p className="text-sm font-medium text-gray-800">
//                 Health & Wellness
//               </p>
//             </div>
//             <div className="flex flex-col items-center p-4">
//               <Coffee className="h-8 w-8 text-black mb-2" />
//               <p className="text-sm font-medium text-gray-800">
//                 Flexible Hours
//               </p>
//             </div>
//             <div className="flex flex-col items-center p-4">
//               <GraduationCap className="h-8 w-8 text-black mb-2" />
//               <p className="text-sm font-medium text-gray-800">
//                 Learning Budget
//               </p>
//             </div>
//             <div className="flex flex-col items-center p-4">
//               <Gift className="h-8 w-8 text-black mb-2" />
//               <p className="text-sm font-medium text-gray-800">
//                 Performance Bonus
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* TECHNICAL APPLY MODAL */}
//       {selectedJob && (
//         <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
//       )}
//     </div>
//   );
// };

// export default Careers;


import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  MapPin,
  Heart,
  Coffee,
  GraduationCap,
  Gift,
  X,
  Loader2,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

// The base URL for API calls (kept for reference, but functionality won't work in this static environment)
const API_BASE_URL = "http://localhost:5000";

// ---------------- JOB TYPES ----------------
interface Job {
  title: string;
  image: string;
  description: string;
  tags: string[];
  location: string;
}

// ---------------- FORM TYPES (TECHNICAL MODAL) ----------------
interface ApplyFormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  resume: File | null;
  image: File | null;
  message: string;
}

// ---------------- NON-TECH FORM TYPES ----------------
interface NonTechFormData {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  experience: string;
  resume: File | null;
  image: File | null;
  message: string;
}

// ---------------- MODAL PROPS ----------------
interface ApplyModalProps {
  job: Job;
  onClose: () => void;
}

// ---------------- JOB DATA ----------------
// Placeholder images are used for demonstration and responsiveness testing.
const jobs: Job[] = [
  {
    title: "Senior Full Stack Developer",
    image:
      "https://placehold.co/600x400/0f766e/ffffff?text=Full+Stack",
    description:
      "Lead the development of scalable web applications and mentor junior developers, focusing on modern React and Node.js solutions.",
    tags: ["React", "Node.js", "TypeScript", "AWS"],
    location: "Jaipur, Rajasthan",
  },
  {
    title: "DevOps Engineer",
    image:
      "https://placehold.co/600x400/0f766e/ffffff?text=DevOps+Pipeline",
    description:
      "Design and maintain CI/CD pipelines and robust cloud infrastructure using containerization and automation tools.",
    tags: ["Docker", "Kubernetes", "AWS", "Terraform"],
    location: "Remote",
  },
  {
    title: "UI/UX Designer",
    image:
      "https://placehold.co/600x400/0f766e/ffffff?text=UI%2FUX+Design",
    description:
      "Create intuitive and beautiful user experiences for our products. Focus on accessibility and modern design trends.",
    tags: ["Figma", "Adobe XD", "Prototyping", "User Research", "Accessibility"],
    location: "Jaipur, Rajasthan",
  },
  {
    title: "Data Scientist",
    image:
      "https://placehold.co/600x400/0f766e/ffffff?text=Data+Science",
    description: "Analyze complex data sets and build predictive models using advanced statistical methods and ML frameworks.",
    tags: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    location: "Jaipur, Rajasthan",
  },
  {
    title: "Product Manager",
    image:
      "https://placehold.co/600x400/0f766e/ffffff?text=Product+Strategy",
    description: "Drive product vision and strategy for our key initiatives, working closely with engineering and marketing teams.",
    tags: ["Agile", "Leadership", "Analytics", "Strategy"],
    location: "Jaipur, Rajasthan",
  },
  {
    title: "Cybersecurity Specialist",
    image:
      "https://placehold.co/600x400/0f766e/ffffff?text=Security+Specialist",
    description:
      "Protect our systems, conduct vulnerability assessments, and ensure compliance with all security standards.",
    tags: ["Penetration Testing", "CISSP", "Network Security"],
    location: "Jaipur, Rajasthan",
  },
];

/**
 * Custom alert/message display component (replaces browser alert())
 */
const CustomAlert: React.FC<{ type: 'success' | 'error', message: string }> = ({ type, message }) => {
    const isSuccess = type === 'success';
    const Icon = isSuccess ? CheckCircle : AlertTriangle;
    const bgColor = isSuccess ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700';
    
    return (
        <div className={`mt-4 p-4 border rounded-xl flex items-center shadow-md ${bgColor}`} role="alert">
            <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
            <p className="text-sm font-medium">{message}</p>
        </div>
    );
};

// ---------------- TECHNICAL APPLY MODAL ----------------
const ApplyModal: React.FC<ApplyModalProps> = ({ job, onClose }) => {
  const [form, setForm] = useState<ApplyFormData>({
    name: "",
    email: "",
    phone: "",
    experience: "",
    resume: null,
    image: null,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [message, setMessage] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, files } = target;

    setForm((prev) => ({
      ...prev,
      [name]: files && files.length > 0 ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setMessage('');

    // --- Placeholder API call logic (since we cannot run a real backend) ---
    // In a real app, you would send formData here.
    try {
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
        
        const success = Math.random() > 0.1; // 90% chance of success
        
        if (success) {
            setStatus('success');
            setMessage(`Thank you, ${form.name}! Your application for ${job.title} has been received.`);
            setForm({ // Reset form fields except files (which should be handled by a proper form reset, but manual reset here)
                name: "",
                email: "",
                phone: "",
                experience: "",
                resume: null,
                image: null,
                message: "",
            });
            // Clear files from input elements manually if needed, but not strictly necessary in React if state controls value.
        } else {
            setStatus('error');
            setMessage("Application submission failed. Please check your inputs and try again.");
        }
    } catch (err) {
        setStatus('error');
        setMessage("A server error occurred during submission.");
    } finally {
        setLoading(false);
    }
    // ------------------------------------------------------------------------
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-start justify-center z-50 p-4 sm:p-8 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mt-10 mb-10 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-teal-600 transition p-1 rounded-full bg-gray-50 hover:bg-teal-50"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-teal-700 mb-6 border-b pb-3">
          Apply for <span className="text-cyan-600">{job.title}</span>
        </h2>
        <p className="text-sm text-gray-500 mb-4">Location: {job.location}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (e.g., +91 98765 43210)"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
          />
          <input
            type="text"
            name="experience"
            placeholder="Years of Experience (e.g., 5)"
            value={form.experience}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
          />

          {/* Responsive File Uploads */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Upload Resume (PDF/DOC) <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl p-2 text-sm file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition cursor-pointer"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Upload Image (Optional)
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-2 text-sm file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition cursor-pointer"
              />
            </div>
          </div>

          <textarea
            name="message"
            rows={4}
            placeholder="Why do you want to join us? (Cover Letter)"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-600 transition shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" /> Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </button>
        </form>
        
        {status && <CustomAlert type={status} message={message} />}

        <p className="mt-4 text-xs text-center text-gray-500">
            Note: This is a placeholder submission and will not be sent to a server.
        </p>
      </div>
    </div>
  );
};

// ---------------- NON-TECH / OTHER FORM (RIGHT SIDE) ----------------
const NonTechForm: React.FC = () => {
  const [form, setForm] = useState<NonTechFormData>({
    fullName: "",
    email: "",
    phone: "",
    category: "",
    experience: "",
    resume: null,
    image: null,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [message, setMessage] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (!files || files.length === 0) return;
    setForm((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setMessage('');

    // --- Placeholder API call logic (since we cannot run a real backend) ---
    // In a real app, you would send formData here.
    try {
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
        
        const success = Math.random() > 0.1; // 90% chance of success
        
        if (success) {
            setStatus('success');
            setMessage(`Thank you, ${form.fullName}! Your application for ${form.category || 'Other Role'} has been received.`);
            setForm({ // Reset form fields
                fullName: "",
                email: "",
                phone: "",
                category: "",
                experience: "",
                resume: null,
                image: null,
                message: "",
            });
        } else {
            setStatus('error');
            setMessage("Application submission failed. Please try again.");
        }
    } catch (err: any) {
        setStatus('error');
        setMessage("A server error occurred during submission.");
    } finally {
        setLoading(false);
    }
    // ------------------------------------------------------------------------
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 h-fit lg:sticky lg:top-10">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">
        Apply for <span className="text-cyan-600">Other Roles</span>
      </h2>
      <p className="text-gray-500 text-sm mb-6">
          If your expertise doesn't fit a specific technical role, tell us about yourself here.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl appearance-none bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
        >
          <option value="" disabled>Select Category *</option>
          <option value="Non-Technical">Non-Technical</option>
          <option value="Support">Support</option>
          <option value="HR / Management">HR / Management</option>
          <option value="Marketing / Sales">Marketing / Sales</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          name="experience"
          placeholder="Years of Relevant Experience (e.g., 2)"
          value={form.experience}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
        />

        {/* Improved Responsive File Inputs: Stack on mobile, side-by-side on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1 font-medium">
              Resume (PDF/DOC) <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm file:mr-3 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1 font-medium">
              Image (Optional)
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm file:mr-3 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 transition cursor-pointer"
            />
          </div>
        </div>

        <textarea
          name="message"
          placeholder="Tell us why you want to join ATS GLOBAL TECH"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-600 transition shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" /> Submitting...
            </>
          ) : (
            "Submit Non-Technical Application"
          )}
        </button>

        {status && <CustomAlert type={status} message={message} />}
      </form>
    </div>
  );
};

// ---------------- MAIN COMPONENT ----------------
const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    // Updated to use font-sans (Inter) for a modern, responsive look
    <div className="min-h-screen font-sans bg-gray-50">
      {/* HERO + NON-TECH FORM SECTION */}
      <section className="relative pt-20 pb-12 bg-gradient-to-br from-teal-50 via-white to-cyan-100 text-gray-900 overflow-hidden">
        {/* Background Orbs (Visual flair) */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT CONTENT */}
          <div className="text-left py-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Join Our{" "}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent">
                Amazing Team
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-10">
              Be part of a team that's shaping the digital future. Explore our
              open positions and grow your career with{" "}
              <span className="text-teal-600 font-bold">
                ATS GLOBAL TECH
              </span>.
            </p>

            {/* Value Propositions - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white shadow-lg rounded-2xl p-6 border border-teal-100 hover:shadow-xl transition transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  🚀 Innovative Projects
                </h3>
                <p className="text-gray-600 text-sm">
                  Work on tech solutions that challenge your creativity and impact millions of users.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-6 border border-teal-100 hover:shadow-xl transition transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  🌍 Global Culture
                </h3>
                <p className="text-gray-600 text-sm">
                  Collaborate with diverse and supportive teams across the globe, promoting inclusion.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-6 border border-teal-100 hover:shadow-xl transition transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  💼 Career Growth
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn & grow with structured mentorship, clear career paths, and generous learning budgets.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-6 border border-teal-100 hover:shadow-xl transition transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  🤝 Friendly Team
                </h3>
                <p className="text-gray-600 text-sm">
                  Enjoy a supportive, passionate, and collaborative work environment where your voice is heard.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT NON TECH FORM - Sticks to top on desktop, flows naturally on mobile */}
          <NonTechForm />
        </div>
      </section>

      {/* JOBS SECTION */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center text-teal-700 mb-12">
                Technical Openings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {jobs.map((job) => (
                <div
                  key={job.title}
                  className="bg-white border border-gray-200 rounded-xl shadow-xl hover:shadow-2xl hover:border-teal-400 transition transform hover:-translate-y-1 overflow-hidden flex flex-col h-full"
                >
                  <img
                    src={job.image}
                    alt={job.title}
                    // Responsive image height for visual consistency
                    className="w-full h-48 object-cover object-center" 
                    // Fallback for placeholder images
                    onError={(e) => {
                      e.currentTarget.onerror = null; 
                      e.currentTarget.src = `https://placehold.co/600x400/0f766e/ffffff?text=${encodeURIComponent(job.title)}`;
                    }}
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-teal-700 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full font-medium border border-cyan-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-gray-600 flex items-center gap-2 mb-4 pt-3 border-t border-gray-100">
                      <MapPin className="h-4 w-4 text-teal-500" /> {job.location}
                    </p>

                    <button
                      onClick={() => setSelectedJob(job)}
                      className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-xl font-bold hover:from-teal-600 hover:to-cyan-600 transition shadow-md hover:shadow-lg"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">
            What We Offer You
          </h2>
          {/* Responsive benefits grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <Heart className="h-8 w-8 text-rose-500 mb-3" />
              <p className="text-base font-semibold text-gray-800">
                Health & Wellness
              </p>
              <p className="text-xs text-gray-500 mt-1">Comprehensive coverage.</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <Coffee className="h-8 w-8 text-yellow-600 mb-3" />
              <p className="text-base font-semibold text-gray-800">
                Flexible Hours
              </p>
              <p className="text-xs text-gray-500 mt-1">Work-life balance focus.</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <GraduationCap className="h-8 w-8 text-blue-500 mb-3" />
              <p className="text-base font-semibold text-gray-800">
                Learning Budget
              </p>
              <p className="text-xs text-gray-500 mt-1">Invest in your skills.</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <Gift className="h-8 w-8 text-purple-600 mb-3" />
              <p className="text-base font-semibold text-gray-800">
                Performance Bonus
              </p>
              <p className="text-xs text-gray-500 mt-1">Rewarding your success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL APPLY MODAL (conditionally rendered) */}
      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default Careers;