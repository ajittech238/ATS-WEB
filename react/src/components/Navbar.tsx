import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Bell, ChevronDown, Menu } from "lucide-react";
import { io, Socket } from "socket.io-client";
import React from "react";

const SOCKET_URL = "http://localhost:5000";

interface AppEntry {
  name: string;
  job: string;
  email?: string;
  phone?: string;
  time: string;
}

const getInitialApplications = (): AppEntry[] => {
  try {
    const saved = localStorage.getItem("ats_applications");
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error("Error loading data from Local Storage", e);
    return [];
  }
};

const initialApplications: AppEntry[] = getInitialApplications();
const initialCount = 0;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [alertMsg, setAlertMsg] = useState<string | null>(null);

  const [applications, setApplications] =
    useState<AppEntry[]>(initialApplications);
  const [count, setCount] = useState(initialCount);

  const closeAllDropdowns = useCallback(() => setOpenDropdown(null), []);

  useEffect(() => {
    localStorage.setItem("ats_applications", JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    const socket: Socket = io(SOCKET_URL, { transports: ["websocket"] });

    socket.on("new-application", (data: any) => {
      if (!data?.latest) return;

      setCount((prev) => prev + 1);

      const a = data.latest;
      const entry: AppEntry = {
        name: a.name,
        job: a.jobTitle,
        email: a.email,
        phone: a.phone,
        time: new Date(a.time).toLocaleString(),
      };

      setApplications((prev) => [entry, ...prev]);
      setAlertMsg(`New Application: ${entry.name} applied for ${entry.job}`);
      setTimeout(() => setAlertMsg(null), 5000);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const closeOnOutsideClick = (e: MouseEvent) => {
      if (
        notifOpen &&
        !(e.target as HTMLElement).closest(".notification-dropdown-container")
      ) {
        setNotifOpen(false);
      }
      if (
        openDropdown &&
        !(e.target as HTMLElement).closest(".desktop-dropdown-container")
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", closeOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
    };
  }, [notifOpen, openDropdown]);

  return (
    <>
                 
      {alertMsg && (
        <div className="fixed top-0 left-0 right-0 bg-green-600 text-white py-2 text-center text-sm z-[9999]">
                              {alertMsg}               
        </div>
      )}
                 
      <div
        className={`fixed left-0 right-0 z-50 transition-all duration-300 shadow-md ${
          alertMsg ? "top-8" : "top-0"
        }`}
      >
                       
        <div
          className={`bg-gray-800 text-white w-full border-b border-gray-700`}
        >
                             
          <div className="w-full px-3 sm:px-4 py-0">
                                   
            <div className="flex justify-between items-center text-[0.65rem] sm:text-xs">
                                         
              <div className="flex items-center gap-2 sm:gap-3 justify-between sm:justify-start">
                                               
                <div className="hidden sm:flex items-center gap-3">
                                                     
                  <div className="flex items-center gap-1.5">
                                                           
                    <Mail className="w-3 h-3 flex-shrink-0" />                 
                                         
                    <a
                      href="mailto:info@atsglobaltech.in"
                      className="hover:text-orange-300 transition"
                    >
                                                                 
                      info@atsglobaltech.in                                    
                         
                    </a>
                                                       
                  </div>
                                                 
                </div>
                                               
                <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                                                     
                  <a
                    href="mailto:info@atsglobaltech.in"
                    className="hover:text-orange-300 transition flex items-center sm:hidden"
                  >
                                                           
                    <Mail className="w-3.5 h-3.5 flex-shrink-0" />             
                                         
                  </a>
                                                     
                  <a
                    href="https://wa.me/919929825003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-300 transition hidden lg:block"
                  >
                                                           
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                                                                 
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                             
                    </svg>
                                                       
                  </a>
                                                     
                  <a
                    href="tel:+919929825003"
                    className="hover:text-orange-300 transition flex items-center gap-1 whitespace-nowrap"
                  >
                                                           
                    <Phone className="w-3.5 h-3.5 flex-shrink-0" />             
                                             
                    <span className="hidden sm:block">+91 9929825003</span>     
                                                 
                  </a>
                                                 
                </div>
                                           
              </div>
                                         
              <div className="flex items-center justify-end flex-shrink-0">
                                               
                <div className="relative pl-3 border-l border-gray-700 flex-shrink-0 notification-dropdown-container">
                                                     
                  <button
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();

                      setNotifOpen((prev) => {
                        const newState = !prev;
                        if (newState) setCount(0);
                        return newState;
                      });
                    }}
                    className="p-1 rounded-full hover:bg-gray-700 transition"
                  >
                                                           
                    <Bell className="w-5 h-5 text-white" />                     
                                 
                  </button>
                                                     
                  {count > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 w-4 h-4 rounded-full text-white flex items-center justify-center text-xs font-bold">
                                                                  {count}       
                                                     
                    </span>
                  )}
                                                     
                  {notifOpen && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="absolute right-0 mt-2 w-64 xs:w-72 bg-white text-gray-800 shadow-xl border border-gray-200 rounded-lg py-1 z-[60] max-h-80 overflow-y-auto"
                    >
                                                                 
                      <div className="p-3 font-semibold border-b text-sm sticky top-0 bg-white z-10">
                                                                        New
                        Applications                                            
                      </div>
                                                                 
                      {applications.length === 0 && (
                        <div className="p-3 text-center text-gray-500 text-sm">
                                                                              No
                          applications yet                                      
                                   
                        </div>
                      )}
                                                                 
                      {applications.map((a, i) => (
                        <div
                          key={i}
                          className="p-3 border-b border-gray-100 hover:bg-orange-50 transition cursor-pointer"
                        >
                                                                             
                          <div className="font-bold text-sm">{a.name}</div>     
                                                                       
                          <div className="text-xs text-orange-600">{a.job}</div>
                                                                             
                          {a.email && (
                            <div className="text-xs text-gray-600">
                              📧 {a.email}
                            </div>
                          )}
                                                                             
                          {a.phone && (
                            <div className="text-xs text-gray-600">
                              📞 {a.phone}
                            </div>
                          )}
                                                                             
                          <div className="text-xs text-gray-400 mt-1">
                                                                               
                                {a.time}                                       
                                       
                          </div>
                                                                         
                        </div>
                      ))}
                                                             
                    </div>
                  )}
                                                 
                </div>
                                           
              </div>
                                     
            </div>
                               
          </div>
                         
        </div>
                       
        <nav className={`bg-white w-full border-b border-orange-200`}>
                             
          <div className="w-full px-3 sm:px-4">
                                   
            <div className="flex justify-between items-center h-16 sm:h-20">
                                         
              <div className="flex items-center flex-shrink-0">
                                               
                <Link to="/" className="flex items-center gap-2 sm:gap-6">
                                                     
                  <img
                    src="/atslogo7.jpg"
                    alt="ATS Logo"
                    className="w-10 h-10 sm:w-14 sm:h-14 object-contain flex-shrink-0"
                  />
                                                     
                  <div className="flex flex-col ml-2">
                                                           
                    <span className="text-sm sm:text-xl lg:text-2xl font-extrabold text-gray-800 font-serif whitespace-nowrap text-center">
                                                                  ATS GLOBAL
                      TECH                                        
                    </span>
                                                           
                    <span className="text-[0.5rem] sm:text-[0.6rem] lg:text-xs text-gray-600 text-center font-medium tracking-wide font-serif whitespace-nowrap">
                                                                  THE FUTURE
                      WITH NEXT GEN-AI                                        
                    </span>
                                                       
                  </div>
                                                 
                </Link>
                                           
              </div>
                                         
              <button
                className="lg:hidden p-1 flex-shrink-0"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                                               
                <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />       
                                   
              </button>
                                         
              <div className="hidden lg:flex items-center space-x-2">
                                               
                <NavLink
                  to="/"
                  label="Home"
                  active
                  onClick={closeAllDropdowns}
                />
                                               
                <NavLink
                  to="/about"
                  label="About"
                  onClick={closeAllDropdowns}
                />
                                               
                <DropdownMenu
                  label="Services"
                  menuName="services"
                  isOpen={openDropdown === "services"}
                  setOpenDropdown={setOpenDropdown}
                  onClose={closeAllDropdowns}
                  items={[
                    ["Web Development", "/services"],
                    ["Solution", "/services/mobile"],
                    ["Industries", "/services/industries"],
                  ]}
                />
                                               
                <NavLink
                  to="/products"
                  label="Products"
                  onClick={closeAllDropdowns}
                />
                                               
                <DropdownMenu
                  label="Work"
                  menuName="work"
                  isOpen={openDropdown === "work"}
                  setOpenDropdown={setOpenDropdown}
                  onClose={closeAllDropdowns}
                  items={[
                    ["Projects", "/work/projects"],
                    ["Portfolio", "/work/portfolio"],
                    ["Case-studies", "/work/case-studies"],
                  ]}
                />
                                               
                <NavLink
                  to="/testimonials"
                  label="Testimonials"
                  onClick={closeAllDropdowns}
                />
                                               
                <NavLink
                  to="/lets-create"
                  label=" Let’s Create"
                  onClick={closeAllDropdowns}
                />
                                               
                <NavLink
                  to="/blogs"
                  label="Blogs"
                  onClick={closeAllDropdowns}
                />
                                               
                <NavLink
                  to="/careers"
                  label="Careers"
                  onClick={closeAllDropdowns}
                />
                                               
                <Link
                  to="/contact"
                  onClick={closeAllDropdowns}
                  className="px-3 py-1 bg-teal-700 text-white rounded-lg text-xs transition hover:bg-teal-600 ml-2 whitespace-nowrap"
                >
                                                      Get in touch              
                                   
                </Link>
                                           
              </div>
                                     
            </div>
                                   
            {mobileOpen && (
              <div className="lg:hidden py-3 space-y-2 border-t">
                                               
                <MobileLink
                  to="/"
                  label="Home"
                  onClick={() => setMobileOpen(false)}
                />
                                               
                <MobileLink
                  to="/about"
                  label="About"
                  onClick={() => setMobileOpen(false)}
                />
                                               
                <MobileDropdown
                  title="Services"
                  items={[
                    ["Web Development", "/services"],
                    ["Solution", "/services/mobile"],
                    ["Industries", "/services/industries"],
                  ]}
                  onItemClick={() => setMobileOpen(false)}
                />
                                               
                <MobileLink
                  to="/products"
                  label="Products"
                  onClick={() => setMobileOpen(false)}
                />
                                               
                <MobileDropdown
                  title="Work"
                  items={[
                    ["Projects", "/work/projects"],
                    ["Portfolio", "/work/portfolio"],
                    ["Case-studies", "/work/case-studies"],
                  ]}
                  onItemClick={() => setMobileOpen(false)}
                />
                                               
                <MobileLink
                  to="/testimonials"
                  label="Testimonials"
                  onClick={() => setMobileOpen(false)}
                />
                                               
                <MobileLink
                  to="/lets-create"
                  label=" Let’s Create"
                  onClick={() => setMobileOpen(false)}
                />
                                               
                <MobileLink
                  to="/blogs"
                  label="Blogs"
                  onClick={() => setMobileOpen(false)}
                />
                                               
                <MobileLink
                  to="/careers"
                  label="Careers"
                  onClick={() => setMobileOpen(false)}
                />
                                               
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-4 py-2 bg-teal-600 text-white rounded-lg text-sm mt-3 hover:bg-teal-500 transition"
                >
                                                      Get in touch              
                                   
                </Link>
                                           
              </div>
            )}
                               
          </div>
                         
        </nav>
                   
      </div>
             
    </>
  );
}

function NavLink({
  label,
  to,
  active = false,
  onClick,
}: {
  label: string;
  to: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-xs xl:text-sm font-medium px-2 py-1.5 xl:px-3 xl:py-2 rounded-md transition ${
        active
          ? "text-orange-600 bg-orange-50"
          : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
      }`}
    >
                  {label}       
    </Link>
  );
}

function DropdownMenu({
  label,
  items,
  isOpen,
  menuName,
  setOpenDropdown,
  onClose,
}: {
  label: string;
  items: [string, string][];
  isOpen: boolean;
  menuName: string;
  setOpenDropdown: (name: string | null) => void;
  onClose: () => void;
}) {
  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenDropdown(isOpen ? null : menuName);
  };

  return (
    <div className="relative desktop-dropdown-container">
                 
      <button
        onClick={handleToggle}
        className="flex items-center gap-1 text-xs xl:text-sm font-medium text-gray-700 hover:text-orange-600 px-2 py-1.5 xl:px-3 xl:py-2 rounded-md hover:bg-orange-50 transition"
      >
                        {label}
                       
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
                   
      </button>
                 
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-xl border border-gray-200 rounded-lg py-1 z-50 max-h-96 overflow-y-auto">
                             
          {items.map(([text, link]) => (
            <Link
              key={text}
              to={link}
              onClick={onClose}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
            >
                                          {text}                       
            </Link>
          ))}
                         
        </div>
      )}
             
    </div>
  );
}

function MobileLink({
  label,
  to,
  onClick,
}: {
  label: string;
  to: string;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 rounded-md"
    >
                  {label}       
    </Link>
  );
}

function MobileDropdown({
  title,
  items,
  onItemClick,
}: {
  title: string;
  items: [string, string][];
  onItemClick: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
                 
      <button
        className="w-full flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 rounded-md"
        onClick={() => setOpen(!open)}
      >
                        {title}
                       
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
                   
      </button>
                 
      {open && (
        <div className="pl-6 mt-1 space-y-1 bg-gray-50 rounded-md">
                             
          {items.map(([label, link]) => (
            <Link
              key={label}
              to={link}
              onClick={() => {
                setOpen(false);
                onItemClick();
              }}
              className="block px-3 py-1 text-sm text-gray-600 hover:text-orange-600 hover:bg-white rounded-md transition"
            >
                                          {label}                       
            </Link>
          ))}
                         
        </div>
      )}
             
    </div>
  );
}
