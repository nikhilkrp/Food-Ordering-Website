import React, { useState } from "react";

export default function ContactUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-red-500 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">🍔 Contact Us</h1>
        <p className="mt-2">We’re here to help with your food orders!</p>
      </header>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Get in Touch</h2>
          <p>
            If you have any questions about your order, delivery, or our menu,
            feel free to reach us.
          </p>
          <div className="space-y-4">
            <p>
              <strong>📞 Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>✉️ Email:</strong> support@foodie.com
            </p>
            <p>
              <strong>📍 Address:</strong> 123 Food Street, Delhi, India
            </p>
            <p>
              <strong>🕑 Hours:</strong> Mon-Sun, 10 AM - 11 PM
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/" className="text-blue-500 hover:text-blue-700">
              Facebook
            </a>
            <a href="https://www.instagram.com/" className="text-blue-500 hover:text-blue-700">
              Instagram
            </a>
            <a href="https://x.com/?lang=en-in" className="text-blue-500 hover:text-blue-700">
              Twitter
            </a>
          </div>
          {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center p-6 mt-10">
        <p>© 2025 Food Cart. All rights reserved.</p>
      </footer>

        </div>
      </section>
       </div>
      );
}

