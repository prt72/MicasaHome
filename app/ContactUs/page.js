"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "60164523533";
    // Fixed: Removed spaces in URL
    const message = `Hi Micasa Home, my name is ${formData.name}. ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>

      {/* ===== MAP SECTION ===== */}
      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Find Us Here
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            {/* Fixed: Removed spaces in SRC URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.0795992702015!2d100.9749580747371!3d4.429181895545009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cadd862dd70111%3A0xcd39432dd94b00a8!2s4%2C%20Laluan%20Tronoh%20Jaya%207%2C%20Desa%20Tronoh%20Jaya%2C%2031750%20Tronoh%2C%20Perak!5e1!3m2!1sen!2smy!4v1772367329483!5m2!1sen!2smy"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full"
              allowFullScreen=""
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
}