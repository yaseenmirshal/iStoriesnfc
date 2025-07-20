'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaInstagram,
  // FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMobileAlt,
  FaHeadphonesAlt,
  FaWrench,

} from 'react-icons/fa';

export default function IstoriesNfcCard() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSaveContact = () => {
    const link = document.createElement('a');
    link.href = '/iStories.vcf';
    link.download = 'iStories.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleVisitStore = () => {
    alert('Redirecting to store (placeholder)');
  };

  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/i_stories_official/" },
    { icon: FaWhatsapp, url: "https://wa.me/918714111740" },
    { icon: FaPhone, url: "tel:+917356641740" },
    { icon: FaEnvelope, url: "mailto:istoriesofficial25@gmail.com" },
  ];

  return (
    <main className="min-h-screen bg-white text-black px-6 py-10 font-sans">
      {/* Header */}
      <section className="text-center mb-4" data-aos="zoom-in">
        <div className="w-50 h-50 flex items-center justify-center mx-auto bg-white">
          <img src="/istories logo white.png" alt="iStories" className="w-full h-full object-cover" />
        </div>
        {/* <h1 className="text-3xl font-semibold mt-4 tracking-wide uppercase">iStories</h1> */}
        <p className="text-md text-gray-700 -mt-2">Premium Reseller</p>
      </section>

      {/* Store Image Placeholder */}
      <section className="w-full h-56 bg-white rounded-xl mb-8 flex items-center justify-center border border-gray-200" data-aos="fade-up">
        <img src="/sistories shop.jpeg" alt="iStories" className="w-full h-full rounded-2xl object-cover" />
      </section>

      {/* Social Media Icons */}
      <section className="flex justify-center gap-4 mb-8" data-aos="fade-up">
        {socialLinks.map(({ icon: Icon, url }, i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition"
          >
            <Icon className="text-lg" />
          </a>
        ))}
      </section>


      {/* Services */}
      <section className="grid grid-cols-1 gap-5 text-center max-w-md mx-auto" data-aos="fade-up">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border-2 border-black text-black flex items-center justify-center">
            <FaMobileAlt />
          </div>
          <span className="text-left text-base font-medium">iPhones & Android Phones</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border-2 border-black text-black flex items-center justify-center">
            <FaMobileAlt />
          </div>
          <span className="text-left text-base font-medium">Fresh & Used Phones</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border-2 border-black text-black flex items-center justify-center">
            <FaHeadphonesAlt />
          </div>
          <span className="text-left text-base font-medium">Accessories</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border-2 border-black text-black flex items-center justify-center">
            <FaWrench />
          </div>
          <span className="text-left text-base font-medium">Repair & Service Support</span>
        </div>
      </section>

      {/* Buttons */}
      <div className="text-center mt-12 space-y-4" data-aos="fade-up">
        <button
          onClick={handleSaveContact}
          className="border-2 border-black text-black bg-white px-6 py-2 rounded-full hover:bg-black hover:text-white transition font-medium shadow-none"
        >
          Save Contact
        </button>
        <br />
        <button
          onClick={handleVisitStore}
          className="border-2 border-black text-black bg-white px-6 py-2 rounded-full hover:bg-black hover:text-white transition font-medium shadow-none"
        >
          Visit Our Store
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center text-base text-black font-semibold mt-20 flex flex-col items-center gap-2" data-aos="fade-up">
        <hr className="w-1/3 border-gray-200 mb-2" />
        <p>
          Powered by <span className="text-black font-bold tracking-wide">RanzomTech</span>
        </p>
      </footer>
    </main>
  );
}
