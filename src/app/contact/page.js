"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Navbar from "../components/nav-bar";
import { useLanguage } from "../context/LanguageContext";
import { FaInstagram, FaWhatsapp, FaViber, FaPhone } from "react-icons/fa";

export default function ContactUs() {
  const { lang } = useLanguage();
  const handleCopyPhoneNumber = (text) => {
    navigator.clipboard.writeText(text);
    alert(
      lang === "eng"
        ? "Phone number copied"
        : lang === "ru"
        ? "Номер телефона скопирован"
        : "Հեռախոսահամարը պատճենված է"
    );
  };

  const contactLinks = [
    {
      platform: "Instagram",
      href: "https://www.instagram.com/movr_truck/",
      icon: <FaInstagram size={32} />,
    },
    {
      platform: "WhatsApp",
      href: "https://wa.me/37477608333",
      icon: <FaWhatsapp size={32} />,
    },
    {
      platform: "Viber",
      href: "viber://chat?number=+37477608333",
      icon: <FaViber size={32} />,
    },
    {
      platform: "Phone",
      icon: <FaPhone size={32} />,
      label: "+374 77 60 83 33",
    },
    {
      platform: "Phone1",
      icon: <FaPhone size={32} />,
      label: "+374 98 88 66 33",
    },
  ];

  return (
    <div style={{ backgroundColor: "#E5E7EB" }}>
      <Head>
        <title>
          {lang === "eng"
            ? "Contact Us - MOVR"
            : lang === "ru"
            ? "Свяжитесь с нами - MOVR"
            : "Կապնվեք մեզ հետ - MOVR"}
        </title>
        <meta
          name="description"
          content={
            lang === "eng"
              ? "Get in touch with MOVR"
              : lang === "ru"
              ? "Свяжитесь с MOVR"
              : "Կապ հաստատեք MOVR-ի հետ"
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="min-vh-100"
        style={{ backgroundColor: "#E5E7EB", color: "#1F2937" }}
      >
        <Navbar />

        {/* Contact Section */}
        <main className="container py-5">
          <h1 className="text-center mb-5" style={{ color: "#6B7280" }}>
            {lang === "eng"
              ? "Contact Us"
              : lang === "ru"
              ? "Свяжитесь с нами"
              : "Կապնվեք մեզ հետ"}
          </h1>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow" style={{ borderColor: "#F97316" }}>
                <div className="card-body text-center">
                  <h3 className="card-title mb-4">
                    {lang === "eng"
                      ? "Get in Touch"
                      : lang === "ru"
                      ? "Свяжитесь с нами"
                      : "Կապ մեզ հետ"}
                  </h3>
                  <p className="mb-5">
                    {lang === "eng"
                      ? "Have questions about MOVR or need assistance? Reach out to us!"
                      : lang === "ru"
                      ? "Есть вопросы о MOVR или нужна помощь? Свяжитесь с нами!"
                      : "Հարցեր ունե՞ք MOVR բեռնատարների մասին կամ օգնության կարիք ունեք: Դիմե՛ք մեզ:"}
                  </p>
                  <div className="d-flex justify-content-center flex-wrap gap-4">
                    {contactLinks.map((link) =>
                      link.platform == "Phone" ? (
                        <a
                          key={link.platform}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex flex-column align-items-center text-decoration-none contact-link"
                          style={{
                            color: "#6B7280",
                            transition: "all 0.3s ease",
                          }}
                          onClick={() =>
                            handleCopyPhoneNumber("+374 77 60 83 33")
                          }
                        >
                          <div
                            className="icon-wrapper"
                            style={{
                              backgroundColor: "#FFFFFF",
                              borderRadius: "50%",
                              padding: "10px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "60px",
                              height: "60px",
                              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                            }}
                          >
                            {link.icon}
                          </div>
                          <span
                            className="mt-2"
                            style={{ fontSize: "1rem", fontWeight: "500" }}
                          >
                            {link.label || link.platform}
                          </span>
                        </a>
                      ) : link.platform == "Phone1" ? (
                        <a
                          key={link.platform}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex flex-column align-items-center text-decoration-none contact-link"
                          style={{
                            color: "#6B7280",
                            transition: "all 0.3s ease",
                          }}
                          onClick={() =>
                            handleCopyPhoneNumber("+374 98 88 66 33")
                          }
                        >
                          <div
                            className="icon-wrapper"
                            style={{
                              backgroundColor: "#FFFFFF",
                              borderRadius: "50%",
                              padding: "10px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "60px",
                              height: "60px",
                              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                            }}
                          >
                            {link.icon}
                          </div>
                          <span
                            className="mt-2"
                            style={{ fontSize: "1rem", fontWeight: "500" }}
                          >
                            {link.label || link.platform}
                          </span>
                        </a>
                      ) : (
                        <a
                          key={link.platform}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex flex-column align-items-center text-decoration-none contact-link"
                          style={{
                            color: "#6B7280",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <div
                            className="icon-wrapper"
                            style={{
                              backgroundColor: "#FFFFFF",
                              borderRadius: "50%",
                              padding: "10px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "60px",
                              height: "60px",
                              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                            }}
                          >
                            {link.icon}
                          </div>
                          <span
                            className="mt-2"
                            style={{ fontSize: "1rem", fontWeight: "500" }}
                          >
                            {link.label || link.platform}
                          </span>
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
      </div>

      {/* Inline Styles for Hover Animations */}
      <style jsx>{`
        .contact-link:hover {
          color: #f97316 !important;
        }
        .contact-link:hover .icon-wrapper {
          transform: scale(1.1);
          background-color: #f97316 !important;
          color: #ffffff !important;
        }
        .contact-link:hover svg {
          color: #ffffff !important;
        }
        .icon-wrapper {
          transition: transform 0.3s ease, background-color 0.3s ease,
            color 0.3s ease;
        }
      `}</style>
      <footer className="bg-gray-500 text-white text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-0">© 2025 MOVR. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
