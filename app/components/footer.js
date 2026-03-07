import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white">
      
      {/* ===== FOOTER LINKS SECTION ===== */}
      <section className="py-12 border-t">
        <div className="max-w-6xl mx-auto px-3 grid md:grid-cols-3 gap-8">
          
          {/* Column 1: Address */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">Address</h3>
            <p className="text-gray-600 flex items-start gap-2">
              <i className="fas fa-map-marker-alt mt-1 text-teal-600"></i>
              <span>
                No 4, Laluan Tronoh Jaya 7, Desa Tronoh<br />
                Jaya, 31750, Tronoh, Perak
              </span>
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">Phone & Email</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-teal-600"></i>
                <a href="tel:+60164523533">016-4523533</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-teal-600"></i>
                <a href="mailto:micasamedicare@gmail.com">micasamedicare@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">Social Media</h3>
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div> */}
          </div>

        </div>
      </section>

      {/* ===== COPYRIGHT BAR ===== */}
      <div className="border-t py-6 text-center text-gray-500 text-sm">
        <p>Micasa Home Care Centre © {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}