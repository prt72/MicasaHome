"use client"

import Link from "next/link"

export default function WhyChooseUs({ reasons }) {
  // If reasons isn't passed as prop, provide default
  const defaultReasons = [
    "Post Hospitalisation care / Penjagaan Selepas Hospital",
    "Family is at work or overseas / Keluarga Bekerja atau Di Luar Negara",
    "24hrs qualified Nurses / Jururawat Berkelayakan 24 Jam",
    "Nurse calling system / Sistem Panggilan Jururawat",
    "Fully Furnished room / Bilik Perabot Lengkap",
    "Fully with Air Conditioner / Penghawa Dingin",
    "Wifi & Astro Services",
    "Chronic care assistance / Bantuan Penjagaan Kronik"
  ]

  const reasonsList = reasons || defaultReasons

  return (
    <div className="font-sans">

      {/* ================= WHY CHOOSE US & CONTACT ================= */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT: Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-blue-200 mb-8">
              Kami komited untuk memberikan penjagaan terbaik untuk orang tersayang anda.
            </p>
            <ul className="space-y-4">
              {reasonsList.map((reason, index) => (
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

          {/* RIGHT: Contact Form */}
          <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-2 text-center">Get In Touch</h3>
            <p className="text-center text-gray-500 mb-6 text-sm">
              Your path to quality life starts here.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const phoneNumber = "60164523533"
                const message = "Hi Micasa Home, I am interested in your services."
                window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-50" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-50" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-50" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-50" />
              <textarea rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-50"></textarea>
              <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition duration-300">
                SUBMIT ENQUIRY
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="bg-blue-700 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                We offer senior citizens curated services aimed at providing comfortable and hassle-free living.
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 md:w-1/2 justify-center md:justify-end">
              <div className="flex items-center gap-3 border-r border-white/30 pr-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-sm uppercase tracking-wide opacity-80">Call Us Now</p>
                  <p className="text-xl font-bold">016-560 0317</p>
                </div>
              </div>
              <Link href="/ContactUs" className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                Contact Now
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 pt-12 pb-8 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Address */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Address</h3>
              <p className="text-gray-600">No 65, Jalan Sin Lok, Taman Sin Lok,<br />30100 IPOH, Perak Malaysia.</p>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Navigation</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
                <li><Link href="/AboutUs" className="hover:text-blue-600 transition">About Us</Link></li>
                <li><Link href="/Services" className="hover:text-blue-600 transition">Services</Link></li>
                <li><Link href="/Facilities" className="hover:text-blue-600 transition">Facilities</Link></li>
                <li><Link href="/Gallery" className="hover:text-blue-600 transition">Gallery</Link></li>
                <li><Link href="/ContactUs" className="hover:text-blue-600 transition">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Phone & Email</h3>
              <p className="text-gray-600">05-506 3112 / 016-560 0317</p>
              <p className="text-gray-600">info@micasahome.com</p>
            </div>

            {/* Column 4: Social Media */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Social Media</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition">IG</a>
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition">FB</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
