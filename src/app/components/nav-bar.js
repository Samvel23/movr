"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaHome, FaTruck, FaEnvelope } from "react-icons/fa";
import logo from "../images/logo.png";
import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  // Load Bootstrap JS dynamically on mount
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const navLinks = [
    {
      href: "/",
      label: lang === "eng" ? "Home" : lang === "ru" ? "Главная" : "Գլխավոր Էջ",
      icon: <FaHome className="me-2" />,
    },
    {
      href: "/details",
      label:
        lang === "eng"
          ? "Truck Details"
          : lang === "ru"
          ? "Технические характеристики"
          : "Բեռնատարի տվյալներ",
      icon: <FaTruck className="me-2" />,
    },
    {
      href: "/contact",
      label:
        lang === "eng"
          ? "Contact Us"
          : lang === "ru"
          ? "Свяжитесь с нами"
          : "Կապնվեք մեզ հետ",
      icon: <FaEnvelope className="me-2" />,
    },
  ];

  const languages = [
    { code: "arm", label: "ARM" },
    { code: "eng", label: "ENG" },
    { code: "ru", label: "RU" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow-sm"
      style={{ backgroundColor: "#6B7280", borderBottom: "2px solid #F97316" }}
    >
      <div className="container">
        {/* Logo */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image
            src={logo}
            alt="FAW Logo"
            width={70}
            height={40}
            className="me-2"
          />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          ></span>
        </button>

        {/* Nav Links and Language Buttons */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <Link
                  href={link.href}
                  className={`nav-link px-3 py-2 d-flex align-items-center ${
                    pathname === link.href ? "active" : ""
                  }`}
                  style={{
                    color: "#FFFFFF",
                    transition: "all 0.3s ease",
                    borderBottom:
                      pathname === link.href ? "2px solid #F97316" : "none",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#F97316")}
                  onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
                >
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Language Buttons */}
            <li className="nav-item d-flex ms-3" style={{marginTop: "10px"}}>
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => setLang(language.code)}
                  className={`btn mx-1 py-1 px-2 ${
                    lang === language.code ? "active" : ""
                  }`}
                  style={{
                    backgroundColor:
                      lang === language.code ? "#F97316" : "#FFFFFF",
                    color: lang === language.code ? "#FFFFFF" : "#6B7280",
                    border: "1px solid #F97316",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (lang !== language.code) {
                      e.target.style.backgroundColor = "#F97316";
                      e.target.style.color = "#FFFFFF";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (lang !== language.code) {
                      e.target.style.backgroundColor = "#FFFFFF";
                      e.target.style.color = "#6B7280";
                    }
                  }}
                >
                  {language.label}
                </button>
              ))}
            </li>
          </ul>
        </div>
      </div>

      {/* Inline Styles for Hover Effects */}
      <style jsx>{`
        .nav-link:hover {
          color: #f97316 !important;
        }
        .nav-link.active {
          font-weight: bold;
          color: #f97316 !important;
        }
        .nav-link svg {
          transition: color 0.3s ease;
        }
        .nav-link:hover svg {
          color: #f97316 !important;
        }
        .nav-link.active svg {
          color: #f97316 !important;
        }
        .btn.active {
          box-shadow: 0 0 5px #f97316;
        }
      `}</style>
    </nav>
  );
}
