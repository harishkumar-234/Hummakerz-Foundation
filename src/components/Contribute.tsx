import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  DollarSign, 
  Handshake, 
  Users, 
  CheckCircle, 
  Shield,
  TrendingUp,
  Award,
  Building,
  ArrowRight,
  QrCode
} from 'lucide-react';
import QRCode from './QRCode';
import { handleBankTransfer, handleAmountSelection } from '../utils/buttonHandlers';

const Contribute: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'donate' | 'partner' | 'volunteer'>('donate');
  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'online'>('bank');

  const bankDetails = {
    accountName: "HUM MAKERZ FOUNDATION",
    bankName: "State Bank of India",
    accountNumber: "1234567890123456",
    ifscCode: "SBIN0001234",
    branch: "Bangalore Main Branch",
    upiId: "hummakerz@ybl",
    phonePay: "9876543210@ybl",
    googlePay: "9876543210@okicici",
  };

  const impactAreas = [
    {
      icon: Heart,
      title: 'Women-focused Programs',
      description: 'Support community and well-being initiatives for women',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: Users,
      title: 'Learning & Creativity',
      description: 'Fund skill-development and creative learning sessions',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Shield,
      title: 'Mental Wellness',
      description: 'Enable mental health and happiness initiatives',
      color: 'from-purple-500 to-violet-600',
    },
    {
      icon: Handshake,
      title: 'Community Outreach',
      description: 'Support social work and community service activities',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: TrendingUp,
      title: 'Network Building',
      description: 'Facilitate connections and volunteer engagement',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      icon: Award,
      title: 'Program Expansion',
      description: 'Help us reach more communities with our programs',
      color: 'from-orange-500 to-red-600',
    },
  ];

  const donationAmounts = [
    { amount: '₹500', label: 'Support one workshop' },
    { amount: '₹1000', label: 'Fund community activity' },
    { amount: '₹2500', label: 'Sponsor skill development' },
    { amount: '₹5000', label: 'Enable program expansion' },
    { amount: 'Custom', label: 'Choose your amount' },
  ];

  return (
    <section id="contribute" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-accent-100 rounded-full px-6 py-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Heart className="w-5 h-5 text-accent-600" />
            <span className="text-accent-700 font-semibold">Contribute & Support</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-800">Your Contribution Makes</span>
            <br />
            <span className="text-gray-800">a Real Difference</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Every contribution, big or small, plays a vital role in building happiness, 
            connection, and lasting social impact in communities.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { id: 'donate', label: 'Donate', icon: DollarSign },
            { id: 'partner', label: 'Partner With Us', icon: Handshake },
            { id: 'volunteer', label: 'Join as Volunteer', icon: Users },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`flex items-center space-x-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                selectedTab === tab.id
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Impact Areas */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-300 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                How Your Support Helps
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {impactAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <area.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{area.title}</h4>
                      <p className="text-gray-600 text-sm">{area.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contribution Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
              {selectedTab === 'donate' && (
                <>
                  <h3 className="text-2xl font-bold mb-6">Make a Donation</h3>
                  
                  {/* Payment Method Selection */}
                  <div className="flex space-x-4 mb-6">
                    <motion.button
                      onClick={() => setPaymentMethod('bank')}
                      className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        paymentMethod === 'bank'
                          ? 'bg-white text-primary-600'
                          : 'bg-white/20 text-white border-2 border-white/30'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Building className="w-5 h-5" />
                      <span>Bank Transfer</span>
                    </motion.button>
                    <motion.button
                      onClick={() => setPaymentMethod('online')}
                      className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        paymentMethod === 'online'
                          ? 'bg-white text-primary-600'
                          : 'bg-white/20 text-white border-2 border-white/30'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <QrCode className="w-5 h-5" />
                      <span>Online Payment</span>
                    </motion.button>
                  </div>

                  {paymentMethod === 'bank' ? (
                    <div className="space-y-4">
                      <div className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl p-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <Building className="w-5 h-5" />
                          <span className="font-bold">Bank Transfer Details</span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-white/80">Account Name:</span>
                            <span className="font-semibold">{bankDetails.accountName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/80">Bank Name:</span>
                            <span className="font-semibold">{bankDetails.bankName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/80">Account Number:</span>
                            <span className="font-semibold">{bankDetails.accountNumber}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/80">IFSC Code:</span>
                            <span className="font-semibold">{bankDetails.ifscCode}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/80">Branch:</span>
                            <span className="font-semibold">{bankDetails.branch}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <QRCode 
                        value={bankDetails.upiId}
                        title="Scan to Pay via UPI"
                        description="Use any UPI app to scan"
                      />
                      <div className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl p-4">
                        <div className="text-center space-y-2">
                          <p className="text-sm text-white/80">Other UPI Options:</p>
                          <div className="space-y-1">
                            <p className="text-xs">PhonePe: {bankDetails.phonePay}</p>
                            <p className="text-xs">Google Pay: {bankDetails.googlePay}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4 mt-6">
                    {donationAmounts.map((option, index) => (
                      <motion.button
                        key={option.amount}
                        className="w-full bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl p-4 text-left hover:bg-white/30 transition-all duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAmountSelection(option.amount)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xl font-bold">{option.amount}</div>
                            <div className="text-sm text-white/80">{option.label}</div>
                          </div>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  <motion.button
                    className="w-full bg-white text-primary-600 rounded-xl p-4 font-bold mt-6 hover:bg-gray-100 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBankTransfer}
                  >
                    {paymentMethod === 'bank' ? 'Initiate Bank Transfer' : 'Proceed to Payment'}
                  </motion.button>
                </>
              )}

              {selectedTab === 'partner' && (
                <>
                  <h3 className="text-2xl font-bold mb-6">Partner With Us</h3>
                  <p className="mb-6 text-white/90">
                    We welcome CSR partnerships, institutional support, and collaborations 
                    aligned with our focus areas.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <Building className="w-5 h-5" />
                        <span className="font-semibold">CSR Partnerships</span>
                      </div>
                      <p className="text-sm text-white/80">Align your corporate social responsibility with our mission</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <Handshake className="w-5 h-5" />
                        <span className="font-semibold">Institutional Support</span>
                      </div>
                      <p className="text-sm text-white/80">Partner with us for long-term impact initiatives</p>
                    </div>
                  </div>
                  <motion.button
                    className="w-full bg-white text-primary-600 rounded-xl p-4 font-bold mt-6 hover:bg-gray-100 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Partnership Team
                  </motion.button>
                </>
              )}

              {selectedTab === 'volunteer' && (
                <>
                  <h3 className="text-2xl font-bold mb-6">Join as Volunteer</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>No Membership Fees</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>No Pressure</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>Positive vibes & new friendships</span>
                    </div>
                  </div>
                  <motion.button
                    className="w-full bg-white text-primary-600 rounded-xl p-4 font-bold hover:bg-gray-100 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Register as Volunteer
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Trust & Transparency Section */}
        <motion.div
          className="bg-gradient-to-r from-accent-100 to-primary-100 rounded-3xl p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Contribute With Confidence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Registered Section 8 Company',
                description: 'Legally recognized organization',
              },
              {
                icon: TrendingUp,
                title: 'Transparent Fund Utilization',
                description: 'Every rupee accounted for',
              },
              {
                icon: Heart,
                title: 'Multi-dimensional Impact',
                description: 'Social, environmental & spiritual',
              },
              {
                icon: Award,
                title: 'Tax Benefits (80G)',
                description: 'Eligible for tax exemption',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-8 h-8 text-primary-600" />
                </motion.div>
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contribute;
