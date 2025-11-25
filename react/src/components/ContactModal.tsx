

import React, { useEffect, useState } from "react";
import { X, Send } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    details: "",
  });

  // Disable background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    console.log("Form Submitted:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3">
      {/* Updated: Modal background gradient to teal-gray theme */}
      <div className="relative w-[90%] sm:w-[400px] bg-gradient-to-b from-teal-50 via-white to-gray-100 rounded-2xl p-6 shadow-xl animate-fadeInUp border border-teal-200">

        {/* Updated: Close Button to teal theme */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-teal-100 hover:bg-teal-200 rounded-full p-2 text-teal-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-semibold text-teal-900 mb-4 text-center">
          Contact Us
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3 text-sm">

          {/* Full Name */}
          <div>
            <label className="text-teal-800 text-xs font-medium">Full Name</label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="w-full h-10 rounded-md border border-gray-200 bg-white text-gray-800 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-teal-800 text-xs font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full h-10 rounded-md border border-gray-200 bg-white text-gray-800 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-teal-800 text-xs font-medium">Phone</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              className="w-full h-10 rounded-md border border-gray-200 bg-white text-gray-800 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>

          {/* Company */}
          <div>
            <label className="text-teal-800 text-xs font-medium">Company</label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter Company Name"
              className="w-full h-10 rounded-md border border-gray-200 bg-white text-gray-800 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>

          {/* Project Details */}
          <div>
            <label className="text-teal-800 text-xs font-medium">Project Details</label>
            <textarea
              name="details"
              rows={3}
              value={formData.details}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full rounded-md border border-gray-200 bg-white text-gray-800 px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>

          {/* Submit Button to teal theme */}
          <button
            type="submit"
            className="w-full h-10 rounded-md bg-gradient-to-r from-teal-500 to-teal-600 text-white flex justify-center items-center gap-2 font-semibold hover:from-teal-600 hover:to-teal-700 shadow-md transition"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;