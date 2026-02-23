import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Heart, Sparkles, ArrowRight } from 'lucide-react';

const VisionMission: React.FC = () => {
  const visionPoints = [
    'Inclusive communities where women are supported',
    'Connected networks fostering growth and collaboration',
    'Compassionate environments for personal development',
    'Sustainable social change driven by collective action',
  ];

  const missionPoints = [
    'Bringing women together to connect, grow, and support one another',
    'Encouraging learning, creativity, and personal development',
    'Promoting mental well-being, happiness, and balanced lifestyles',
    'Supporting social work and community outreach initiatives',
    'Building meaningful networks, friendships, and collaborations',
    'Creating sustainable and positive change in society',
  ];

  const visionImage = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80';
  const missionImage = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80';

  return (
    <section id="vision-mission" className="section-padding bg-gradient-to-b from-white to-gray-50">
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
            <Eye className="w-5 h-5 text-accent-600" />
            <span className="text-accent-700 font-semibold">Vision & Mission</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Our Purpose</span>
            <br />
            <span className="text-gray-800">Driving Meaningful Change</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-500 to-gray-600 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -ml-24 -mb-24" />
              </div>

              {/* Image */}
              <div className="relative h-48 mb-6 overflow-hidden rounded-2xl">
                <img
                  src={visionImage}
                  alt="Our Vision"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600/50 to-transparent" />
              </div>

              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Eye className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                
                <p className="text-xl mb-8 text-white/90 leading-relaxed">
                  To create inclusive, connected, and compassionate communities where women are 
                  supported to grow, learn, and uplift one another, while actively engaging in 
                  social work and driving meaningful, sustainable social change.
                </p>

                <div className="space-y-4">
                  {visionPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Sparkles className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-1" />
                      <span className="text-white/95">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-500 to-gray-600 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-48 h-48 bg-white rounded-full -ml-24 -mt-24" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mb-32" />
              </div>

              {/* Image */}
              <div className="relative h-48 mb-6 overflow-hidden rounded-2xl">
                <img
                  src={missionImage}
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600/50 to-transparent" />
              </div>

              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                
                <p className="text-xl mb-8 text-white/90 leading-relaxed">
                  HUM MAKERZ FOUNDATION is committed to creating positive change through 
                  dedicated action and community engagement.
                </p>

                <div className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Heart className="w-5 h-5 text-pink-300 flex-shrink-0 mt-1" />
                      <span className="text-white/95">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 black-text">
              Be Part of Our Journey
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join us in our mission to create stronger, more inclusive communities where 
              everyone has the opportunity to thrive and make a positive impact.
            </p>
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join Our Mission</span>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
