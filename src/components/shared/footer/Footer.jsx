import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: "Discover", links: ["Home", "Apps", "Games", "Tools"] },
    { title: "Community", links: ["Contribute", "Support", "Blog", "Forums"] },
    { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
    {
      title: "Legal",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Cookie Policy",
        "Licenses",
      ],
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaDiscord, href: "#" },
    { icon: FaFacebook, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaYoutube, href: "#" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-purple-500/30">
                A
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                AppHub
              </span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
              Your one-stop destination for discovering, downloading, and
              sharing amazing applications. Built with love by the community.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {quickLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-gray-900 mb-5">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <FaHeart className="text-pink-500 animate-pulse" />
              <span className="text-sm sm:text-base">
                Made with love by Rahin Haque
              </span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              © {currentYear} AppHub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
