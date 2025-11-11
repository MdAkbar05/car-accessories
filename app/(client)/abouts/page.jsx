export const metadata = {
  title: "About Us",
  description:
    "Learn about our mission to provide quality car parts and exceptional customer service.",
};

export default function AboutsPage() {
  return (
    <div className="min-h-screen bg-white py-2">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Our Company</h1>
          <p className="text-xl text-blue-100">
            Your trusted partner for premium car parts and accessories
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2015, our company started with a simple mission: to
                provide high-quality car parts and accessories at competitive
                prices. What began as a small garage operation has grown into a
                trusted e-commerce platform serving thousands of customers
                worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We believe in integrity, quality, and customer satisfaction.
                Every product in our catalog is carefully selected and tested to
                ensure it meets our rigorous standards. Our dedicated team works
                tirelessly to deliver exceptional service and support.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be a leader in the automotive parts
                industry, and we're committed to continuing our growth while
                maintaining the values that made us successful.
              </p>
            </div>
            <div className="bg-linear-to-br from-blue-100 to-blue-50 rounded-lg p-8 text-center h-96 flex items-center justify-center">
              <div>
                <div className="text-7xl mb-4">🚗</div>
                <p className="text-gray-600">Premium Car Parts & Accessories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To deliver superior automotive parts and accessories that
                empower our customers to maintain and enhance their vehicles.
                We're committed to providing exceptional value, reliability, and
                customer service.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-600">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To become the most trusted and innovative automotive parts
                retailer globally, known for quality products, competitive
                pricing, and unparalleled customer support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Quality */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Quality
              </h3>
              <p className="text-gray-600">
                Every product meets strict quality standards and comes with our
                guarantee.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Integrity
              </h3>
              <p className="text-gray-600">
                We operate with transparency and honesty in all business
                dealings.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously improve our services and embrace new
                technologies.
              </p>
            </div>

            {/* Customer Focus */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Customer Focus
              </h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="bg-linear-to-b from-blue-400 to-blue-600 h-48 flex items-center justify-center text-5xl">
                👨‍💼
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  John Smith
                </h3>
                <p className="text-blue-600 font-medium">Founder & CEO</p>
                <p className="text-gray-600 text-sm mt-2">
                  Visionary leader with 20+ years in the automotive industry.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="bg-linear-to-b from-green-400 to-green-600 h-48 flex items-center justify-center text-5xl">
                👩‍💼
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  Sarah Johnson
                </h3>
                <p className="text-green-600 font-medium">Operations Manager</p>
                <p className="text-gray-600 text-sm mt-2">
                  Expert at streamlining operations and ensuring excellence.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="bg-linear-to-b from-purple-400 to-purple-600 h-48 flex items-center justify-center text-5xl">
                👨‍💻
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  Mike Chen
                </h3>
                <p className="text-purple-600 font-medium">Tech Lead</p>
                <p className="text-gray-600 text-sm mt-2">
                  Innovative technologist driving our digital transformation.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="bg-linear-to-b from-orange-400 to-orange-600 h-48 flex items-center justify-center text-5xl">
                👩‍🔧
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  Emily Davis
                </h3>
                <p className="text-orange-600 font-medium">
                  Quality Assurance Lead
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Dedicated to maintaining our high-quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-linear-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <p className="text-blue-100">Happy Customers</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100K+</div>
              <p className="text-blue-100">Products Sold</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">9+</div>
              <p className="text-blue-100">Years in Business</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Ready to Shop?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Browse our extensive collection of premium car parts and
            accessories.
          </p>
          <a
            href="/products"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Shop Now →
          </a>
        </div>
      </section>
    </div>
  );
}
