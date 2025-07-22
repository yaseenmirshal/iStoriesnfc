'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMobileAlt,
  FaHeadphonesAlt,
  FaWrench,
  FaShareAlt,
  FaAddressBook,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function IstoriesNfcCard() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSaveContact = () => {
    const link = document.createElement('a');
    link.href = '/iStories Mobile.vcf';
    link.download = 'iStories.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleVisitStore = () => {
    window.open('https://www.google.com/maps/place/Perumanna,+Kerala/@11.2433838,75.8731577,15z/data=!3m1!4b1!4m6!3m5!1s0x3ba65b18381787f5:0x679a5d58496deaeb!8m2!3d11.2451434!4d75.8849448!16s%2Fg%2F11h03ghgnj?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: 'iStories NFC',
      text: 'Check out iStories NFC Premium Reseller!',
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Optionally handle error
      }
    } else {
      // Fallback: copy link to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (err) {
        alert('Unable to share.');
      }
    }
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

      <div className="flex flex-col items-center w-full mt-4 mb-8" data-aos="fade-up">
        <div className="flex justify-center gap-3 flex-wrap w-full">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-5 py-2 rounded-lg font-medium bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
            aria-label="Share"
          >
            <FaShareAlt className="text-base" />
            Share
          </button>

          <button
            onClick={handleSaveContact}
            className="flex items-center gap-2 px-5 py-2 rounded-lg font-medium bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
          >
            <FaAddressBook className="text-base" />
            Save Contact
          </button>
        </div>

        <button
          onClick={handleVisitStore}
          className="flex items-center gap-2 mt-4 px-5 py-2 rounded-lg font-medium bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
        >
          <FaMapMarkerAlt className="text-base" />
          Visit Our Store
        </button>
      </div>

      {/* Services */}
      <section className="grid grid-cols-1 gap-5 text-center max-w-md mx-auto" data-aos="fade-up">

        <h1 className='text-2xl font-bold'>SERVICES</h1>
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


      {/* Footer */}
      <footer className="text-center text-base text-black font-semibold mt-10 flex flex-col items-center gap-2" data-aos="fade-up">
        <hr className="w-1/3 border-gray-200 mb-2" />
<a href='https://www.instagram.com/the.brandlee/'>
          <p>
            Powered by <span className="text-black font-bold tracking-wide">Brandlee</span>
          </p>
        </a>
      </footer>
    </main>
  );
}
