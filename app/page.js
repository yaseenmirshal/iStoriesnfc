'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaMobileAlt,
  FaHeadphonesAlt,
  FaWrench,
} from 'react-icons/fa';

export default function IstoriesNfcCard() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSaveContact = () => {
    alert('Contact saved (placeholder)');
  };

  const handleVisitStore = () => {
    alert('Redirecting to store (placeholder)');
  };

  return (
    <main className="min-h-screen bg-white text-black px-6 py-10 font-sans">
      {/* Header */}
      <section className="text-center mb-8" data-aos="zoom-in">
        <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center mx-auto shadow-lg">
        <img src="/istories logo.png" alt="iStories" className="w-full h-full rounded-full object-cover" />
        </div>
        <h1 className="text-3xl font-bold mt-4 tracking-wider uppercase">iStories</h1>
        <p className="text-sm text-gray-600 mt-1">Premium Reseller</p>
      </section>

      {/* Store Image Placeholder */}
      <section className="w-full h-60  bg-gray-200 rounded-xl mb-8 flex items-center justify-center" data-aos="fade-up">
        <img src="/sistories shop.jpeg" alt="iStories" className="w-full h-full rounded-2xl object-cover" />
      </section>

      {/* Social Media Icons */}
      <section className="flex justify-center gap-4 mb-8" data-aos="fade-up">
        {[FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin, FaTwitter].map((Icon, i) => (
          <div key={i} className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition">
            <Icon className="text-lg" />
          </div>
        ))}
      </section>

      {/* Services */}
      <section className="grid grid-cols-1 gap-6 text-center max-w-md mx-auto" data-aos="fade-up">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
            <FaMobileAlt />
          </div>
          <span className="text-left">iPhones & Android Phones</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
            <FaMobileAlt />
          </div>
          <span className="text-left">Fresh & Used Phones</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
            <FaHeadphonesAlt />
          </div>
          <span className="text-left">Accessories</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
            <FaWrench />
          </div>
          <span className="text-left">Repair & Service Support</span>
        </div>
      </section>

      {/* Buttons */}
      <div className="text-center mt-12 space-y-4" data-aos="fade-up">
        <button
          onClick={handleSaveContact}
          className="bg-black text-white px-6 py-2 rounded-full shadow-[inset_0_-3px_0_rgba(0,0,0,0.2)] hover:brightness-110 transition"
        >
          Save Contact
        </button>
        <br />
        <button
          onClick={handleVisitStore}
          className="bg-black text-white px-6 py-2 rounded-full shadow-[inset_0_-3px_0_rgba(0,0,0,0.2)] hover:brightness-110 transition"
        >
          Visit Our Store
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-16" data-aos="fade-up">
        <p>Powered by <span className="text-black font-semibold">RanzomTech</span></p>
      </footer>
    </main>
  );
}
