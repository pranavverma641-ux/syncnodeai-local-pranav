"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";

const footerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const linkVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const socialIconVariants = {
  hover: {
    scale: 1.15,
    rotate: [0, -10, 10, 0],
    transition: { duration: 0.3 },
  },
};

export const FooterSection = () => {
  return (
    <motion.footer
      id="footer"
      className="w-full bg-gray-50 text-gray-700 pt-4 border-t border-[#2368AB]/50"
      variants={footerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto px-6 py-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-bold text-xl flex items-center mb-6 group"
            >
              <Image
                src="/logo1.png"
                alt="SyncNodeAI"
                width={160}
                height={80}
                className="w-36 sm:w-44 md:w-48 lg:w-56 xl:w-64 transition-transform duration-300"
                priority
              />
            </Link>
            <p className="mb-4 leading-relaxed max-w-md text-gray-600">
              Transforming businesses through innovative digital solutions. We
              specialize in Data, Analytics, AI, and Cloud Architecture to
              elevate your digital presence.
            </p>
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://x.com/SyncNodeAI"
                className="bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-all duration-300"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <BsTwitterX className="h-5 w-5 text-[#2368AB]" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/syncnodeai-pvt-ltd/"
                className="bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-all duration-300"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaLinkedin className="h-5 w-5 text-[#2368AB]" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/syncnodeai"
                className="bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-all duration-300"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaInstagram className="h-5 w-5 text-[#2368AB]" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[#2368AB] mb-4 text-lg">
              Quick Links
            </h3>
            <nav className="space-y-2">
              <motion.div variants={linkVariants} whileHover="hover">
                <Link
                  href="/about"
                  className="block hover:text-[#2368AB] transition-colors duration-200"
                >
                  About Us
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link
                  href="/contact"
                  className="block hover:text-[#2368AB] transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link
                  href="/careers"
                  className="block hover:text-[#2368AB] transition-colors duration-200"
                >
                  Careers
                </Link>
              </motion.div>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-[#2368AB] mb-4 text-lg">
              Services
            </h3>
            <nav className="space-y-2">
              <motion.div variants={linkVariants} whileHover="hover">
                <Link
                  href="/services/ai-ml"
                  className="block hover:text-[#2368AB] transition-colors duration-200"
                >
                  Sync AI
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link
                  href="/services/cloud-solutions"
                  className="block hover:text-[#2368AB] transition-colors duration-200"
                >
                  Sync Cloud
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link
                  href="/services/data-engineering"
                  className="block hover:text-[#2368AB] transition-colors duration-200"
                >
                  Sync Data
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link
                  href="/services/analytics-bi"
                  className="block hover:text-[#2368AB] transition-colors duration-200"
                >
                  Sync Analytics
                </Link>
              </motion.div>
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2368AB]/25 bg-gray-50 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-500">
              &copy; 2025 SyncNodeAI. All rights reserved.
            </p>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Designed and developed with ❤️ by{" "}
              <motion.span variants={linkVariants} whileHover="hover">
                <Link
                  href="/"
                  className="text-[#2368AB] hover:underline font-medium"
                >
                  SyncNodeAI
                </Link>
              </motion.span>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
