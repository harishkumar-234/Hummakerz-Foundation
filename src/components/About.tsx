import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Lightbulb, HandHeart, Sparkles, ArrowRight } from 'lucide-react';
import { handleLearnMore, handleJoinCommunity } from '../utils/buttonHandlers';

const About: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Purpose-Driven',
      description: 'Dedicated to building stronger, happier, and more connected communities through meaningful initiatives.',
      color: 'from-pink-500 to-pink-600',
      delay: 0,
      image: '/Purpose-Driven.png',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Bringing people together to connect, grow, and support one another in a nurturing environment.',
      color: 'from-blue-500 to-blue-600',
      delay: 0.1,
      image: '/Community Focus.png',
    },
    {
      icon: Lightbulb,
      title: 'Learning & Creativity',
      description: 'Encouraging personal development, skill-building, and creative expression among community members.',
      color: 'from-yellow-500 to-yellow-600',
      delay: 0.2,
      image: '/Learning & Creativity.png',
    },
    {
      icon: HandHeart,
      title: 'Social Impact',
      description: 'Supporting social work and community outreach initiatives that drive positive change.',
      color: 'from-green-500 to-green-600',
      delay: 0.3,
      image: '/Social Impact.png',
    },
  ];

  const communityValues = [
    'Encouraging learning and creativity',
    'Supporting social work and community initiatives',
    'Building meaningful networks and new friendships',
    'Creating spaces where ideas turn into action',
    'Compassion turns into impact',
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-gray-50">
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
            className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-6 py-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Heart className="w-5 h-5 text-primary-600" />
            <span className="text-primary-700 font-semibold">About Us</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text text-primary-600">HUM MAKERZ FOUNDATION</span>
          </motion.h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="glass-card h-full hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Platform Section */}
        <motion.div
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                A Platform Where Ideas Turn Into Action
              </h3>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                HUM MAKERZ Foundation serves as a platform where compassion turns into impact
                and community members come together to create meaningful change.
              </p>
              <motion.button
                className="flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300"
                whileHover={{ x: 5 }}
                onClick={() => handleLearnMore('about')}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.div
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleJoinCommunity}
              >
                <span>Join Our Community</span>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {communityValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.2)' }}
                >
                  <Sparkles className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                  <span className="text-lg font-medium">{value}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-accent-100 rounded-full px-6 py-3 mb-6">
            <Users className="w-5 h-5 text-accent-600" />
            <span className="text-accent-700 font-semibold">Our Impact</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Creating Lasting Social Change
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Through our initiatives in community development, well-being, learning, and social outreach,
            we actively support women to grow, learn, and uplift one another — inspiring positive
            change in society.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
