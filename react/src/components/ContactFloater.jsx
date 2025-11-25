// import React from "react";
// import { Phone } from "lucide-react";

// // --- Custom WhatsApp SVG Component ---
// // No change needed for this, it's already a good representation
// const WhatsAppIcon = ({ className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     {/* WhatsApp Green Circle */}
//     <path fill="#25D366" stroke="none" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
//     {/* Chat Bubble Icon */}
//     <path 
//         fill="#FFFFFF" 
//         stroke="none" 
//         d="M17.83 14.86c-.84-1.39-1.99-1.35-2.61-.31a.57.57 0 0 1-.36.27c-.24 0-.48-.06-.71-.18l-.51-.25c-1.39-.68-2.67-1.38-3.79-2.5-1.12-1.12-1.82-2.4-2.5-3.79l-.25-.51c-.12-.23-.18-.47-.18-.71a.57.57 0 0 1 .27-.36c1.04-.62 1.08-1.77-.31-2.61C6.26 4.34 5.21 4 4.3 4h-.13a1 1 0 0 0-1 1c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10v-.13c0-.91-.34-1.96-1.04-2.67-1.39-.84-2.54-.8-3.16.31z"/>
//   </svg>
// );

// // --- Updated ContactFloater Component ---
// const ContactFloater = ({ phoneNumber = "YOUR_PHONE_NUMBER" }) => {
//   return (
//     <div className="
//       fixed bottom-4 right-4 z-50  /* Positioning at bottom-right with some offset */
//       flex flex-col gap-4       /* Similar gap as SocialBar */
//       bg-white shadow-xl       /* Matching background and shadow */
//       p-3 rounded-2xl          /* Matching padding and border-radius */
//       border border-gray-300   /* Matching border */
//     ">
      
//       {/* WhatsApp Icon */}
//       {/* <a
//         href={`https://wa.me/${phoneNumber}?text=Hello`} 
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-gray-700 hover:text-green-500 transition" 
//       >
//         <WhatsAppIcon className="h-7 w-7" />
//       </a> */}
//    <a
//   href={`https://wa.me/${phoneNumber}?text=Hello`}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="transition"
// >
//   <WhatsAppIcon className="h-10 w-10" />
// </a>


      
//       {/* Phone Call Icon */}
//       <a
//         href={`tel:${phoneNumber}`} 
//         className="text-gray-700 hover:text-red-500 transition" // Hover red for phone
//       >
//         <Phone className="h-7 w-7" /> {/* Matching icon size */}
//       </a>
//     </div>
//   );
// };

// export default ContactFloater;


import React from "react";
import { Phone } from "lucide-react";

const WhatsAppIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className={className}
  >
    <path
      fill="#25D366"
      d="M4 24C4 12.96 12.96 4 24 4s20 8.96 20 20-8.96 20-20 20S4 35.04 4 24z"
    />
    <path
      fill="#fff"
      d="M34.6 28.2c-.5-.2-3-1.5-3.5-1.7-.5-.2-.8-.2-1.1.2-.3.4-1.3 1.7-1.6 2-.3.3-.6.3-1 .1-.5-.2-2.1-.8-4-2.6-1.5-1.4-2.6-3.2-2.9-3.7-.3-.5-.1-.8.2-1.1.3-.3.5-.6.7-.9.2-.3.3-.5.5-.9.1-.3.1-.5 0-.7-.1-.2-1-2.4-1.4-3.3-.4-.9-.7-.8-1-.8h-.9c-.3 0-.9.1-1.3.6-.5.5-1.8 1.8-1.8 4.3s1.9 5 2.2 5.4c.3.4 3.7 5.6 9.1 7.7 1.3.5 2.3.8 3 .9 1.3.4 2.5.3 3.4.2 1.1-.2 3.3-1.4 3.8-2.8.5-1.4.5-2.6.3-2.8-.2-.3-.6-.4-1.1-.6z"
    />
  </svg>
);

const ContactFloater = ({ phoneNumber = "YOUR_PHONE_NUMBER" }) => {
  return (
    <div
      className="
      fixed bottom-4 right-4 z-50
      flex flex-col gap-4
      bg-white shadow-xl
      p-3 rounded-2xl
      border border-gray-300
    "
    >

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=Hello`}
        target="_blank"
        rel="noopener noreferrer"
        className="transition"
      >
        <WhatsAppIcon className="h-10 w-10" />
      </a>

      {/* Phone */}
      <a
        href={`tel:${phoneNumber}`}
        className="text-gray-700 hover:text-red-500 transition"
      >
        <Phone className="h-8 w-8" />
      </a>

    </div>
  );
};

export default ContactFloater;
