import Link from 'next/link';

export default function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img src="/about.jpg" alt="About Micasa Home" className="rounded-xl shadow-lg w-full object-cover h-80" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-teal-600">About Us</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            MICASA HOMEeeeeeeeeeee
          </p>
          {/* 
             👇 Quick Note: 
             Since this IS the AboutUs page, linking to "/AboutUs" just refreshes the page.
             You might want to change href="/" or remove the link if it's not needed. 
          */}
          <Link href="/AboutUs" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}