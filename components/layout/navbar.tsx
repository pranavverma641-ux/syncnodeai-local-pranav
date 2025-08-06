"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  Menu,
  ChevronDown,
  ChevronRight,
  Home,
  Users,
  Mail,
  Briefcase,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface RouteProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const routeList: RouteProps[] = [
  { href: "/about", label: "About Us", icon: <Users className="w-4 h-4" /> },
  { href: "/contact", label: "Contact Us", icon: <Mail className="w-4 h-4" /> },
  {
    href: "/careers",
    label: "Careers",
    icon: <Briefcase className="w-4 h-4" />,
  },
];

const servicesList = [
  { label: "AI & ML", href: "/services/ai-ml" },
  { label: "Cloud Solutions", href: "/services/cloud-solutions" },
  { label: "Data Engineering", href: "/services/data-engineering" },
  { label: "Analytics & BI", href: "/services/analytics-bi" },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout | null>(null);
  const [scrolled, setScrolled] = React.useState(false);

  const handleMouseEnterServices = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    const id = setTimeout(() => setIsServicesOpen(false), 150);
    setTimeoutId(id);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileLinkClick = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const handleDesktopServiceLinkClick = () => setIsServicesOpen(false);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md border-b border-blue-200/60"
          : "bg-gradient-to-r from-blue-50/95 via-cyan-50/95 to-slate-100/95"
      }`}
      style={{
        height: scrolled ? "50px" : "80px",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between text-slate-700 h-full">
        {/* Logo with shrink effect */}
        <Link href="/" className="flex items-center">
          <div
            className="transition-all duration-300"
            style={{
              transform: scrolled ? "scale(0.8)" : "scale(1)",
              transformOrigin: "left center",
            }}
          >
            <Image
              src="/logo1.png"
              alt="SyncNodeAI"
              width={scrolled ? 210 : 220}
              height={scrolled ? 205 : 215}
              className="transition-all duration-300"
            />
          </div>
        </Link>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 rounded-lg transition-all duration-200"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-80 bg-gradient-to-r from-blue-100 via-cyan-50 to-blue-50 border-blue-200/40 p-0"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <SheetHeader className="p-6 border-b border-blue-200/40 text-white">
                  <SheetTitle className="text-left">
                    <Link
                      href="/"
                      onClick={handleMobileLinkClick}
                      className="flex items-center space-x-3 group"
                    >
                      <Image
                        src="/logo1.png"
                        alt="SyncNodeAI"
                        width={200}
                        height={48}
                        className="rounded"
                      />
                      {/* <span className="text-xl text-gray-800 font-bold tracking-wide">
                        Sync<span className="text-[#2368AB]">NodeAI</span>
                      </span> */}
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                {/* Navigation Menu */}
                <div className="flex-1 p-6 space-y-1 overflow-y-auto">
                  {/* Home Link */}
                  <motion.div
                    variants={mobileMenuVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      href="/"
                      onClick={handleMobileLinkClick}
                      className="flex items-center space-x-3 p-3 rounded-lg text-slate-700 hover:text-blue-700 transition-all duration-200 group"
                    >
                      <Home className="w-5 h-5 text-blue-500 group-hover:text-blue-600" />
                      <span className="font-medium">Home</span>
                    </Link>
                  </motion.div>

                  {/* Services Dropdown */}
                  <motion.div
                    variants={mobileMenuVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                  >
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full flex items-center justify-between p-3 rounded-lg text-slate-700 hover:text-blue-700 transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="font-medium">Services</span>
                      </div>
                      {isServicesOpen ? (
                        <ChevronDown className="w-4 h-4 text-blue-500 transition-transform" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          className="ml-8 mt-2 space-y-1"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {servicesList.map((service, index) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={handleMobileLinkClick}
                              className="block p-3 rounded-lg text-slate-600 hover:text-blue-700 transition-all duration-200 hover:translate-x-1"
                            >
                              <span className="text-sm font-medium">
                                {service.label}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Other Navigation Links */}
                  {routeList.map((route, index) => (
                    <motion.div
                      key={route.href}
                      variants={mobileMenuVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Link
                        href={route.href}
                        onClick={handleMobileLinkClick}
                        className="flex items-center space-x-3 p-3 rounded-lg text-slate-700 hover:text-blue-700 transition-all duration-200 group"
                      >
                        <div className="text-blue-500 group-hover:text-blue-600 transition-colors">
                          {route.icon}
                        </div>
                        <span className="font-medium">{route.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link
            href="/"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>
          <div
            onMouseEnter={handleMouseEnterServices}
            onMouseLeave={handleMouseLeaveServices}
            className="relative"
          >
            <button className="hover:text-blue-600 flex items-center gap-1 transition-colors duration-200">
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  className="absolute top-full mt-2 w-64 bg-white shadow-xl rounded-lg border border-blue-200/60 overflow-hidden"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.2 }}
                >
                  {servicesList.map((service, index) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={handleDesktopServiceLinkClick}
                      className="block px-4 py-3 hover:bg-blue-50 transition-colors duration-200 border-b border-blue-50 last:border-b-0"
                    >
                      <span className="font-medium text-slate-700 hover:text-blue-700">
                        {service.label}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {routeList.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};
