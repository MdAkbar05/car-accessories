import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with our team. We're here to help!",
};

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-2">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-blue-100">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Address
            </h3>
            <p className="text-gray-600">
              123 Car Parts Avenue, Auto City, AC 12345
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-gray-600 text-sm">Mon–Fri, 9 AM–6 PM</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">✉️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">support@carparts.com</p>
            <p className="text-gray-600 text-sm">We reply within 24 hours</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md h-96 lg:h-auto flex items-center justify-center">
            {/* Map Placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m11!1m3!1d437.5909532566752!2d91.81239786399452!3d22.33739590841306!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1762840086248!5m2!1sen!2sbd"
              width="600"
              height="450"
              style={{ border: "0px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                What are your business hours?
              </h3>
              <p className="text-gray-600">
                We're open Monday to Friday, 9 AM to 6 PM. We're closed on
                weekends and holidays.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                How long does shipping take?
              </h3>
              <p className="text-gray-600">
                Standard shipping takes 5-7 business days. Express shipping is
                available for faster delivery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Do you offer returns?
              </h3>
              <p className="text-gray-600">
                Yes! We offer a 30-day return policy on all products. Contact
                our team for details.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Can I track my order?
              </h3>
              <p className="text-gray-600">
                Absolutely. You'll receive a tracking link via email once your
                order ships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
