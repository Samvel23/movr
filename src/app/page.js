"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import faw from "./images/faw.jpg";
import Navbar from "./components/nav-bar";
import { useLanguage } from "./context/LanguageContext";
import Link from "next/link";

export default function Home() {
  const { lang } = useLanguage();
  return (
    <>
      <div
        className="min-vh-100"
        style={{ backgroundColor: "#E5E7EB", color: "#1F2937" }}
      >
        <Navbar />

        {/* Hero Section with Image */}
        <section
          className="py-5 text-center"
          style={{ backgroundColor: "#6B7280", color: "#FFFFFF" }}
        >
          <div className="container">
            <div className="d-flex justify-content-center">
              <Image
                src={faw}
                alt="FAW Truck"
                width={600}
                height={400}
                className="img-fluid rounded shadow"
                style={{ border: "3px solid #F97316" }}
              />
            </div>
          </div>
        </section>

        {/* Truck Details */}
        <main className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow" style={{ borderColor: "#F97316" }}>
                <div className="card-body">
                  <h3 className="card-title text-center mb-4">
                    {lang === "eng"
                      ? "FAW Truck Highlights"
                      : lang === "ru"
                      ? "Основные характеристики грузовика FAW"
                      : "FAW բեռնատարի հիմնական բնութագիրը"}
                  </h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      {lang === "eng"
                        ? "Engine: Manual, 12-speed"
                        : lang === "ru"
                        ? "Двигатель: Механическая, 12-ступенчатая"
                        : "Շարժիչ: Մեխանիկական, 12-աստիճան"}
                    </li>
                    <li className="list-group-item">
                      {lang === "eng"
                        ? "Payload Capacity: Up to 15 tons"
                        : lang === "ru"
                        ? "Грузоподъемность: До 15 тонн"
                        : "Բեռնատարողություն: Մինչև 15 տոննա"}
                    </li>
                    <li className="list-group-item">
                      {lang === "eng"
                        ? "Arrow length: 20 meter"
                        : lang === "ru"
                        ? "Длина стрелы: 20 метров"
                        : "Սլաքի երկարությունը(ստրելա): 20 մետր"}
                    </li>
                    <li className="list-group-item">
                      {lang === "eng"
                        ? "Durability: Built for tough terrains"
                        : lang === "ru"
                        ? "Прочность: создан для сложных условий местности"
                        : "Երկարակեցություն: կառուցված կոշտ տեղանքների համար"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Contact Us */}
        <section className="container py-5 text-center">
          <h3 className="mb-4">
            {lang === "eng"
              ? "Need More Info?"
              : lang === "ru"
              ? "Нужна дополнительная информация?"
              : "Լրացուցիչ տեղեկությունների կարիք կա?"}
          </h3>
          <p>
            {lang === "eng"
              ? "Contact us to learn more about MOVR and how can we help you."
              : lang === "ru"
              ? "Свяжитесь с нами, чтобы узнать больше о MOVR и о том, как мы можем вам помочь."
              : "Կապվեք մեզ հետ MOVR-ի մասին ավելին իմանալու և ինչպես մենք կարող ենք օգնել ձեզ:"}
          </p>
          <Link
            href="/contact"
            className="btn"
            style={{
              backgroundColor: "#F97316",
              borderColor: "#F97316",
              color: "#FFFFFF",
            }}
          >
            {lang === "eng"
              ? "Contact Us"
              : lang === "ru"
              ? "Свяжитесь с нами"
              : "Կապնվեք մեզ հետ"}
          </Link>
        </section>

        {/* Footer */}
        <footer className="bg-gray-500 text-white text-center py-3">
          <div className="container">
            <p className="mb-0">© 2025 MOVR. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
