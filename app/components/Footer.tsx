import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../cdtrc.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={logo} alt="CDTRC Logo" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">CDTRC</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Empowering those who shape the future of children through professional training, research, and capacity building.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-[var(--sea-blue-light)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-[var(--sea-blue-light)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm hover:text-[var(--sea-blue-light)] transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-[var(--sea-blue-light)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-[var(--sea-blue-light)]" />
                <span className="text-sm">Sendafa Beke, Ethiopia</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[var(--sea-blue-light)]" />
                <span className="text-sm">+251116677997</span>
                <span className="text-sm">+251996004242</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[var(--sea-blue-light)]" />
                <span className="text-sm">contact@cdtrc.org</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--sea-blue)] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--sea-blue)] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--sea-blue)] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--sea-blue)] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} CDTRC. All rights reserved. | Child Development Training & Research Center
          </p>
        </div>
      </div>
    </footer>
  );
}