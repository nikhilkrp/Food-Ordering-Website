import React from 'react'

const About = () => {
  return (
       <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-red-500 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">🍕 About Us</h1>
        <p className="mt-2">Good food, delivered with love ❤️</p>
      </header>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Welcome to Foodie
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At <strong>Foodie</strong>, we believe food is more than just a meal –
          it’s an experience. We started our journey in 2020 with a simple idea:
          to bring delicious, fresh, and affordable meals straight to your
          doorstep. Whether you're craving a cheesy pizza, spicy biryani, or a
          healthy salad, we’ve got you covered.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">🍴 Fresh Ingredients</h3>
              <p className="text-gray-600">
                We use only fresh, locally sourced ingredients to prepare every
                meal with care.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">🚚 Fast Delivery</h3>
              <p className="text-gray-600">
                Hot and tasty meals delivered right to your doorstep in record
                time.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">💳 Easy Payment</h3>
              <p className="text-gray-600">
                Multiple secure payment options – pay online or cash on delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.8PhlHAFjs5cZzDXBGWmumQHaE8?pid=Api&P=0&h=180"
              alt="Founder"
              className="w-32 h-32 mx-auto rounded-full shadow"
            />
            <h3 className="mt-4 font-semibold">Rahul Sharma</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div>
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.12yAPxq5dfCQGvYvQzzHMgHaE8?pid=Api&P=0&h=180"
              alt="Chef"
              className="w-32 h-32 mx-auto rounded-full shadow"
            />
            <h3 className="mt-4 font-semibold">Priya Verma</h3>
            <p className="text-gray-600">Head Chef</p>
          </div>
          <div>
            <img
              src="https://d22e6o9mp4t2lx.cloudfront.net/cms/Screenshot_2024_04_05_130256_473f8428ec.png"
              alt="Manager"
              className="w-32 h-32 mx-auto rounded-full shadow"
            />
            <h3 className="mt-4 font-semibold">Aman Gupta</h3>
            <p className="text-gray-600">Operations Manager</p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center p-6 mt-10">
        <p>© 2025 Foodie. All rights reserved.</p>
      </footer>
    </div>
   
  )
}

export default About

