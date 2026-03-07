import Link from 'next/link';

export default function AboutUs() {
  // Placeholder for Why Choose Us reasons
  const reasons = [
    "Experienced and compassionate caregivers",
    "Personalized care plans for each resident",
    "Safe and comfortable home-like environment",
    "Affordable pricing without compromising quality",
    "24/7 support and assistance",
  ];

  return (
    <div>
      {/* ===== BANNER / HERO SECTION ===== */}
      <section 
        className="relative h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: 'url("/about-banner.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 text-white px-4 max-w-6xl w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-4">
            <Link href="/" className="hover:text-pink-300 transition">
              Home
            </Link>
            <span className="text-white">›</span>
            <span className="text-white">About Us</span>
          </nav>
        </div>
      </section>

      {/* ===== OUR PROFILE SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-[#0080a0]">About Us</h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div>
              <img 
                src="/COMING SOON.svg" 
                className="rounded-xl shadow-lg w-full object-cover h-80" 
              />
            </div>
            
            {/* Content */}
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Micasa Home Care Centre is dedicated to providing compassionate and reliable{' '}
                <span className="font-semibold text-black-600">
                  residential care, day care services, respite care, post-rehabilitation support, and post-operative care
                </span>{' '}
                in a safe, comfortable, and truly home-like environment.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe that care goes beyond assistance — it is about kindness, patience, and genuine human connection. Our experienced caregivers treat every individual with dignity, respect, and heartfelt attention, ensuring comfort and reassurance for all{' '}
                <span className="font-semibold text-black-600">residents</span>. Whether supporting long-term needs, offering short-term respite, or guiding recovery after hospitalization or surgery, we are committed to promoting well-being and peace of mind.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Micasa Home Care Centre, we proudly combine excellent service with affordable pricing, making quality care accessible to families who seek both professionalism and compassion.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                Micasa Home Care Centre — where every resident is cared for like family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className="py-16 px-4 bg-[#0080a0] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN */}
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
        </div> {/* 👈 This closes the grid div */}
      </section> {/* 👈 This closes the section */}
      </div>
  );
}