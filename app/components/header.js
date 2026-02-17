import Link from "next/link"

export default function Header() {
  return (
    // ===== MAIN HEADER WRAPPER =====
    <header className="bg-white shadow-md">

      {/* ===== TOP BAR (Logo + Social + Phone) ===== */}
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">

        {/* ===== LEFT SIDE: LOGO + COMPANY NAME ===== */}
        <div className="flex items-center gap-3">

          {/* Logo Image (Replace with your actual logo in /public folder) */}
          <img
            src="/logo.png"  // <-- put your logo inside public/logo.png
            alt="Micasa Home Logo"
            className="w-12 h-12 object-contain"
          />

          {/* Company Name + Tagline */}
          <div>
            <h1 className="text-2xl font-bold text-teal-600">
              Micasa Home
            </h1>
            <p className="text-sm text-gray-500">
              Home Health Care Specialist
            </p>
          </div>
        </div>

        {/* ===== RIGHT SIDE: SOCIAL ICONS + PHONE ===== */}
        <div className="flex items-center gap-6">

          {/* Social Media Icons */}
          <div className="flex gap-3">

            {/* Instagram Icon */}
            <a href="#" className="bg-blue-600 text-white p-2 rounded-full">
              IG
            </a>

            {/* Facebook Icon */}
            <a href="#" className="bg-blue-600 text-white p-2 rounded-full">
              FB
            </a>

          </div>

          {/* ===== PHONE NUMBER (Click To Call) ===== */}
            <a
            href="tel:+60164523533"   // Use country code, no spaces, no dash
            className="flex items-center gap-2 text-gray-700 font-medium hover:text-teal-600 transition"
            >
            📞 016-4523533
            </a>
        </div>
      </div>

      {/* ===== NAVIGATION MENU ===== */}
      <nav className="border-t">

        <div className="max-w-6xl mx-auto px-4">

          {/* Navigation Tabs */}
          <ul className="flex gap-8 py-4 text-gray-700 font-medium">

            {/* Each Link = One Tab */}
            <li>
              <Link href="/" className="hover:text-teal-600 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/AboutUs" className="hover:text-teal-600 transition">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/services" className="hover:text-teal-600 transition">
                Services
              </Link>
            </li>

            <li>
              <Link href="/gallery" className="hover:text-teal-600 transition">
                Gallery
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-teal-600 transition">
                Contact Us
              </Link>
            </li>

          </ul>

        </div>
      </nav>

    </header>
  )
}
