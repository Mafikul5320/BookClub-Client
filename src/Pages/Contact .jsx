import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Get in Touch</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            We'd love to hear from you! Whether you have a question, suggestion, or just want to say hi, feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h3>
            <ul className="space-y-5 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-4">
                <MapPin className="text-blue-500" />
                <span>123 Book Street, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-blue-500" />
                <span>support@bookclub.com</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-blue-500" />
                <span>+880 1234-567890</span>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-3">Follow Us</h4>
              <div className="flex gap-5">
                <a href="#" className="text-blue-600 hover:text-blue-800 transition">
                  <Facebook />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600 transition">
                  <Twitter />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900 transition">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md grid gap-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Send a Message</h3>

            <input
              type="text"
              placeholder="Your Full Name"
              className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
