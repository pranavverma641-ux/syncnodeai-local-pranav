"use client";

import React, { useState } from "react";
import { Building2, Mail, Phone, ExternalLink } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [isFormLoaded, setIsFormLoaded] = useState(false);

  const GOOGLE_FORM_LINK =
    "https://docs.google.com/forms/d/e/1FAIpQLSf4pF4HJ0Oup8PsKlFf6qO1C-O8ljNoAnzVxpagO3VPFErWLg/viewform";
  const GOOGLE_MAP_LINK =
    "https://share.google/5aNn85qaSmM5zxTMS";
  const PHONE_NUMBER = "+919769354688";
  const EMAIL_ADDRESS = "info@syncnodeai.com";

  const handleOpenForm = () => {
    window.open(GOOGLE_FORM_LINK, "_blank", "noopener,noreferrer");
  };

  const handleVisitUs = () => {
    window.open(GOOGLE_MAP_LINK, "_blank");
  };

  const handleCallUs = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleEmailUs = () => {
    window.location.href = `mailto:${EMAIL_ADDRESS}`;
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[42px] lg:text-[64px] font-bold text-[#2368AB] mb-4">
            Connect With Us
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Ready to elevate your technology? Whether you're looking for expert
            guidance, custom solutions, or a strategic partner — our team is
            here to help transform your digital presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {/* Visit Us */}
              <div
                onClick={handleVisitUs}
                className="cursor-pointer bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-5 h-5 text-[#2368AB]" />
                </div>
                <p className="text-slate-900 font-semibold text-sm">Visit Us</p>
                <p className="text-slate-500 text-xs">Ajmer, Rajasthan</p>
              </div>

              {/* Call Us */}
              <div
                onClick={handleCallUs}
                className="cursor-pointer bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-5 h-5 text-[#2368AB]" />
                </div>
                <p className="text-slate-900 font-semibold text-sm">Call Us</p>
                <p className="text-slate-500 text-xs">+91 97693 54688</p>
              </div>

              {/* Email Us */}
              <div
                onClick={handleEmailUs}
                className="cursor-pointer bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-5 h-5 text-[#2368AB]" />
                </div>
                <p className="text-slate-900 font-semibold text-sm">Email Us</p>
                <p className="text-slate-500 text-xs">{EMAIL_ADDRESS}</p>
              </div>
            </div>

            {/* Contact Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Get In Touch
                </h3>
                <p className="text-slate-600">
                  Send us a message and we'll respond within 24 hours
                </p>
              </div>

              {/* Contact Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={handleOpenForm}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Open Contact Form
                  <ExternalLink className="w-4 h-4" />
                </button>
                <p className="text-slate-500 text-sm mt-4">
                  Click the button to open the contact form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
