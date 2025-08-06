"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Menu } from "lucide-react";
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
}

const routeList: RouteProps[] = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/careers", label: "Careers" }, // Added Careers
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
              <button className="cursor-pointer h-6 w-6 text-slate-600 hover:text-blue-600 transition-transform">
                <Menu />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white/95">
              <div className="flex flex-col justify-between h-full">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" onClick={handleMobileLinkClick}>
                      <Image src="/logo.png" alt="SyncNodeAI" width={32} height={32} />
                      <span>SyncNodeAI</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2">
                  <Link href="/" onClick={handleMobileLinkClick}>Home</Link>
                  <button onClick={() => setIsServicesOpen(!isServicesOpen)}>Services</button>
                  {isServicesOpen && servicesList.map((s) => (
                    <Link key={s.href} href={s.href} onClick={handleMobileLinkClick}>
                      {s.label}
                    </Link>
                  ))}
                  {routeList.map((r) => (
                    <Link key={r.href} href={r.href} onClick={handleMobileLinkClick}>
                      {r.label}
                    </Link>
                  ))}
                </div>
                <SheetFooter>
                  <Separator />
                </SheetFooter>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <div
            onMouseEnter={handleMouseEnterServices}
            onMouseLeave={handleMouseLeaveServices}
            className="relative"
          >
            <button className="hover:text-blue-600 flex items-center gap-1">
              Services
              <svg
                className={`w-4 h-4 ${isServicesOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  className="absolute top-full mt-2 w-64 bg-white shadow-xl rounded-md border border-blue-200/60"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {servicesList.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={handleDesktopServiceLinkClick}
                      className="block px-4 py-2 hover:bg-blue-50"
                    >
                      {service.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {routeList.map((r) => (
            <Link key={r.href} href={r.href} className="hover:text-blue-600">
              {r.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};
