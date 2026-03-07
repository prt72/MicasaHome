"use client"

import Link from "next/link"

export default function Services() {
  const services = [
    { icon: "fa-house-chimney-user", title: "Penjagaan Warga Emas", titleEn: "Elderly Residential Care" },
    { icon: "fa-hand-holding-heart", title: "Penjagaan Harian / Sementara / Sepenuh Masa", titleEn: "Long Term / Respite / Day Care" },
    { icon: "fa-briefcase-medical", title: "Penjagaan Selepas Pembedahan", titleEn: "Post Operative Care" },
    { icon: "fa-person-running", title: "Fisioterapi", titleEn: "Physiotherapy" },
    { icon: "fa-bandage", title: "Penjagaan Luka", titleEn: "Wound Care" },
    { icon: "fa-solid fa-vial", title: "Penukaran Tiub Ryles serta Tiub Kencing", titleEn: "Ryles Tube & Urine Tube Change" },
    { icon: "fa-wheelchair", title: "Jual / Sewa Alatan Perubatan", titleEn: "Medical Equipment Sale / Rental" },
    { icon: "fa-truck-medical", title: "Khidmat Ambulans 24 Jam", titleEn: "24 Hours Ambulance Service" },
  ]


  const reasons = [
    "Post Hospitalisation care / Penjagaan Selepas Hospital",
    "Family is at work or overseas / Keluarga Bekerja atau Di Luar Negara",
    "Fully Furnished room / Bilik Perabot Lengkap",
    "Chronic care assistance / Bantuan Penjagaan Kronik",
  ]

  return (
    <div className="font-sans">

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Our Services</h2>
          <p className="text-center text-gray-600 mb-12">Perkhidmatan Kami</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">            
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group
                col-span-1 sm:col-span-1 lg:col-span-2
                ${index === 6 ? "lg:col-start-3" : ""}
              `}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center text-3xl group-hover:bg-[#0080a0]/10 group-hover:text-white transition-colors">
                  <i className={`fa-solid ${service.icon} text-[#2ac4f4] text-2xl`} />
                </div>
                <h3 className="font-bold text-lg mb-1 text-gray-800">{service.titleEn}</h3>
                <p className="text-sm text-gray-500">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT US SECTION ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img src="/COMING SOON.svg" alt="About Micasa Home" className="rounded-xl shadow-lg w-full object-cover h-80" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#0080a0]">About Us</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
            Micasa Home Care Centre is dedicated to providing compassionate and reliable{" "}
            <strong>
              residential care, day care services, respite care, post-rehabilitation support,
              and post-operative care
            </strong>{" "}
            in a safe, comfortable, and truly home-like environment.

            <br /><br />

            We believe that care goes beyond assistance — it is about kindness, patience,
            and genuine human connection. Our experienced caregivers treat every
            individual with dignity, respect, and heartfelt attention.
          </p>

            <Link href="/AboutUs" className="inline-block bg-[#c5467f] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#c5467f]/80 transition">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US & CONTACT FORM ================= */}
      <section className="py-16 px-4 bg-[#0080a0] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT: Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-blue-200 mb-8">
              Kami komited untuk memberikan penjagaan terbaik untuk orang tersayang anda.
            </p>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-100">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
