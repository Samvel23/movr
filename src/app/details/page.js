"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/nav-bar";
import { useLanguage } from "../context/LanguageContext";

export default function TruckDetails() {
  const { lang } = useLanguage();
  const truckSpecs = {
    model: "FAW J6",
    vichak: lang === "eng" ? "New" : lang === "ru" ? "Новый" : "Նոր",
    engine:
      lang === "eng"
        ? "6.5 meter long, 2.4 meter wide"
        : lang === "ru"
        ? "6,5 метровая длина, 2,4 метровая ширина"
        : "6,5 մետր երկարություն, 2,4 մետր լայնություն",
    payload:
      lang === "eng"
        ? "Up to 15 tons"
        : lang === "ru"
        ? "До 15 тонн"
        : "Մինչև 15 տոննա",
    fuelEfficiency:
      lang === "eng" ? "20 meter" : lang === "ru" ? "20 метров" : "20 մետր",
    transmission:
      lang === "eng"
        ? "Manual, 12-speed"
        : lang === "ru"
        ? "Механическая, 12-ступенчатая"
        : "Մեխանիկական, 12-աստիճան",
    features: [
      lang === "eng"
        ? "Air Suspension"
        : lang === "ru"
        ? "Пневматическая подвеска"
        : "Օդային կասեցում",
      lang === "eng"
        ? "LED Headlights"
        : lang === "ru"
        ? "Светодиодные фары"
        : "LED լուսարձակներ",
      lang === "eng"
        ? "Advanced Braking System"
        : lang === "ru"
        ? "Усовершенствованная тормозная система"
        : "Ընդլայնված արգելակման համակարգ",
    ],
  };

  return (
    <div style={{ backgroundColor: "#E5E7EB" }}>
      <div
        className="min-vh-100"
        style={{ backgroundColor: "#E5E7EB", color: "#1F2937" }}
      >
        <Navbar />

        {/* Truck Details Section */}
        <main className="container py-5">
          <h1 className="text-center mb-5" style={{ color: "#6B7280" }}>
            {lang === "eng"
              ? "Specifications"
              : lang === "ru"
              ? "Характеристики"
              : "Տվյալներ"}
          </h1>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow" style={{ borderColor: "#F97316" }}>
                <div
                  className="card-header text-center"
                  style={{ backgroundColor: "#6B7280", color: "#FFFFFF" }}
                >
                  <h2 className="mb-0">{truckSpecs.model}</h2>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                      <strong>
                        {lang === "eng"
                          ? "Truck condition:"
                          : lang === "ru"
                          ? "Состояние грузовика:"
                          : "Բեռնատարի վիճակը:"}
                      </strong>{" "}
                      <span>{truckSpecs.vichak}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <strong>
                        {lang === "eng"
                          ? "Car body dimensions:"
                          : lang === "ru"
                          ? "Размеры кузова автомобиля:"
                          : "Մեքենայի թափքի չափերը(կուզով):"}
                      </strong>{" "}
                      <span>{truckSpecs.engine}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <strong>
                        {lang === "eng"
                          ? "Payload Capacity:"
                          : lang === "ru"
                          ? "Грузоподъемность:"
                          : "Բեռնատարողություն:"}
                      </strong>{" "}
                      <span>{truckSpecs.payload}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <strong>
                        {lang === "eng"
                          ? "Arrow length"
                          : lang === "ru"
                          ? "Длина стрелы"
                          : "Սլաքի երկարությունը(ստրելա)"}
                      </strong>{" "}
                      <span>{truckSpecs.fuelEfficiency}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <strong>
                        {lang === "eng"
                          ? "Transmission:"
                          : lang === "ru"
                          ? "Передача:"
                          : "Փոխանցում:"}
                      </strong>{" "}
                      <span>{truckSpecs.transmission}</span>
                    </li>
                    <li className="list-group-item">
                      <strong>
                        {lang === "eng"
                          ? "Key Features:"
                          : lang === "ru"
                          ? "Основные характеристики:"
                          : "Հիմնական հատկանիշները:"}
                      </strong>
                      <ul className="mt-2">
                        {truckSpecs.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
      </div>
      <footer className="bg-gray-500 text-white text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-0">© 2025 MOVR. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
