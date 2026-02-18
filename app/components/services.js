"use client"

import Link from "next/link"

export default function Services() {
  const services = [
    { icon: "fa-house-chimney-user", title: "Penjagaan Warga Emas", titleEn: "Elderly Residential Care" },
    { icon: "fa-hand-holding-heart", title: "Penjagaan Harian / Sementara / Sepenuh Masa", titleEn: "Long Term / Respite / Day Care" },
    { icon: "fa-briefcase-medical", title: "Penjagaan Selepas Pembedahan", titleEn: "Post Operative Care" },
    { icon: "fa-person-running", title: "Fisioterapi", titleEn: "Physiotherapy" },
    { icon: "fa-bandage", title: "Penjagaan Luka dan Penukaran Tiub", titleEn: "Wound Care & Tube Change" },
    { icon: "fa-wheelchair", title: "Jual / Sewa Alatan Perubatan", titleEn: "Medical Equipment Sale / Rental" },
    { icon: "fa-truck-medical", title: "Khidmat Ambulans 24 Jam", titleEn: "24 Hours Ambulance Service" },
    { icon: "fa-user-doctor", title: "Lawatan Doktor", titleEn: "Doctor Visits" }
  ]


  const reasons = [
    "Post Hospitalisation care / Penjagaan Selepas Hospital",
    "Family is at work or overseas / Keluarga Bekerja atau Di Luar Negara",
    "24hrs qualified Nurses / Jururawat Berkelayakan 24 Jam",
    "Nurse calling system / Sistem Panggilan Jururawat",
    "Fully Furnished room / Bilik Perabot Lengkap",
    "Fully with Air Conditioner / Penghawa Dingin",
    "Wifi & Astro Services",
    "Chronic care assistance / Bantuan Penjagaan Kronik"
  ]

  return (
    <div className="font-sans">

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Our Services</h2>
          <p className="text-center text-gray-600 mb-12">Perkhidmatan Kami</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center text-3xl group-hover:bg-[#0080a0]/10 group-hover:text-white transition-colors">
                  <i className={`fa-solid ${service.icon} text-[#0080a0] text-2xl`} />
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
            <img src="/about.jpg" alt="About Micasa Home" className="rounded-xl shadow-lg w-full object-cover h-80" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-teal-600">About Us</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
            Micasa Home Care is dedicated to providing compassionate and reliable{" "}
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
          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/60164523533?text=Hi%20Micasa%20Home,%20I%20am%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-shadow"
            aria-label="Chat with us on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-8 h-8 fill-current"
            >
              <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.887.75 5.703 2.177 8.182L.08 32l7.588-2.063a15.94 15.94 0 008.332 2.29h.006c8.835 0 16-7.164 16-16S24.84.396 16 .396zm0 29.07a13.86 13.86 0 01-7.055-1.93l-.506-.3-4.503 1.225 1.2-4.388-.33-.54A13.83 13.83 0 012.14 16.4c0-7.65 6.21-13.86 13.86-13.86 7.65 0 13.86 6.21 13.86 13.86 0 7.65-6.21 13.86-13.86 13.86zm7.72-10.38c-.422-.21-2.5-1.233-2.887-1.374-.386-.14-.668-.21-.95.21-.28.422-1.09 1.374-1.336 1.656-.246.28-.492.316-.914.105-.422-.21-1.78-.655-3.392-2.087-1.254-1.117-2.1-2.497-2.346-2.92-.246-.422-.026-.65.184-.86.19-.19.422-.492.633-.738.21-.246.28-.422.422-.703.14-.28.07-.527-.035-.738-.105-.21-.95-2.29-1.3-3.14-.343-.826-.692-.713-.95-.727l-.81-.014c-.28 0-.738.105-1.123.527-.386.422-1.477 1.444-1.477 3.52 0 2.076 1.512 4.08 1.723 4.36.21.28 2.98 4.547 7.223 6.37 1.01.435 1.797.695 2.41.89 1.012.32 1.933.275 2.662.167.812-.12 2.5-1.02 2.852-2.006.35-.984.35-1.828.246-2.006-.105-.176-.386-.28-.81-.492z" />
            </svg>
          </a>
        </div>
      </section>

    </div>
  )
}
