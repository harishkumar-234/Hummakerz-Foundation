import React from 'react';
import { motion } from 'framer-motion';
import {
  // Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Building,
  Award,
  Users
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Focus Areas', href: '#focus-areas' },
    { name: 'Our Vision', href: '#vision-mission' },
    { name: 'Initiatives', href: '#initiatives' },
    { name: 'Contribute', href: '#contribute' },
    { name: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: '80G Certificate', href: '#' },
    { name: 'Annual Reports', href: '#' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <img
                src="/Logo 2.png"
                alt="Hum Makerz Logo"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold">Hum Makerz</h3>
                <p className="text-gray-400">Foundation</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              A purpose-driven Section 8 foundation dedicated to building stronger, happier,
              and more connected communities where women thrive and positive change flourishes.
            </p>

            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 98765 43210</p>
                  <p className="text-gray-300">+91 87654 32109</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@hummakerz.org</p>
                  <p className="text-gray-300">support@hummakerz.org</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Community Center</p>
                  <p className="text-gray-300">Bangalore, Karnataka 560001</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Legal & Trust */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Legal & Trust</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Building className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">Section 8 Company</span>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">80G Tax Exemption</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">Community-driven</span>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {legalLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Donation Reminder */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Your Support Fuels Women's Growth
          </h3>
          <p className="text-xl mb-6 text-white/90">
            Community connection, and meaningful social change.
          </p>
          <motion.button
            className="bg-white text-gray-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Donate Now
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="text-gray-400 text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p>© 2026 Hum Makerz Foundation. All Rights Reserved.</p>
              <p className="text-sm mt-1">Registered under Section 8 of the Companies Act, 2013.</p>
            </motion.div>

            <motion.button
              onClick={scrollToTop}
              className="bg-primary-600 hover:bg-primary-700 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
