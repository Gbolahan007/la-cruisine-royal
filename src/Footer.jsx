import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Restaurant Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="mb-6 text-2xl font-bold">La Cruisine Royal</h3>
            <p className="mb-4 text-gray-400">Elevating culinary experiences since 2018.</p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Saveur Lounge. All rights reserved.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="mb-6 text-lg font-semibold text-gray-200">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <FaPhone className="mr-3 h-5 w-5 text-gray-300" />
                +234 8063480560
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 h-5 w-5 text-gray-300" />
                info@Lacruisineroyal.com
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-3 h-5 w-5 text-gray-300" />
                <span>
                  No 11 royal ave
                  <br />
                  Awolowo close, Yaba
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="mb-6 text-lg font-semibold text-gray-200">Opening Hours</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>11AM - 10PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>11AM - 12AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>11AM - 9PM</span>
              </li>
              <li className="mt-4 border-t border-gray-700 pt-4">
                <span className="text-amber-400">Happy Hour: 4PM - 6PM Daily</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="mb-6 text-lg font-semibold text-gray-200">Connect With Us</h4>
            <div className="mb-8 flex space-x-4">
              {/* Facebook */}
              <a
                href="#"
                className="rounded-full bg-gray-700 p-3 transition-colors duration-300 hover:bg-blue-600"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>
              {/* Twitter */}
              <a
                href="#"
                className="rounded-full bg-gray-700 p-3 transition-colors duration-300 hover:bg-sky-500"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="rounded-full bg-gray-700 p-3 transition-colors duration-300 hover:bg-pink-600"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
            <h4 className="mb-4 text-lg font-semibold text-gray-200">Subscribe</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l bg-gray-800 px-4 py-2 text-white outline-none"
              />
              <button className="rounded-r bg-amber-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-amber-600">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
