import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  BookOpen, 
  Brain, 
  HandHeart, 
  Network,
  ArrowRight,
  Sparkles,
  Target
} from 'lucide-react';
import { handleLearnMore, handleGetInvolved, handleSupportWork } from '../utils/buttonHandlers';

const FocusAreas: React.FC = () => {
  const focusAreas = [
    {
      icon: Heart,
      title: "Women's Growth & Well-Being",
      description: 'Empowering women to reach their full potential through targeted support programs and personal development initiatives.',
      color: 'from-pink-500 to-rose-600',
      features: ['Personal Development', 'Leadership Training', 'Wellness Programs'],
      delay: 0,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    {
      icon: Users,
      title: 'Community Building & Social Inclusion',
      description: 'Creating inclusive spaces where everyone feels valued, connected, and part of a supportive community.',
      color: 'from-blue-500 to-indigo-600',
      features: ['Community Events', 'Inclusion Programs', 'Network Building'],
      delay: 0.1,
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    {
      icon: BookOpen,
      title: 'Learning, Creativity & Skill Development',
      description: 'Providing opportunities for continuous learning, creative expression, and skill enhancement.',
      color: 'from-yellow-500 to-orange-600',
      features: ['Workshops', 'Creative Sessions', 'Skill Training'],
      delay: 0.2,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    {
      icon: Brain,
      title: 'Mental Health, Wellness & Happiness',
      description: 'Prioritizing mental well-being and creating awareness about the importance of mental health.',
      color: 'from-purple-500 to-violet-600',
      features: ['Counseling', 'Wellness Activities', 'Mental Health Awareness'],
      delay: 0.3,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    {
      icon: HandHeart,
      title: 'Social Work & Community Outreach',
      description: 'Engaging in meaningful social work and outreach programs that create tangible impact.',
      color: 'from-green-500 to-emerald-600',
      features: ['Outreach Programs', 'Social Initiatives', 'Community Service'],
      delay: 0.4,
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    {
      icon: Network,
      title: 'Networking & Relationship Building',
      description: 'Fostering meaningful connections and building strong professional and personal networks.',
      color: 'from-teal-500 to-cyan-600',
      features: ['Networking Events', 'Mentorship', 'Collaborative Projects'],
      delay: 0.5,
      image: 'https://images.unsplash.com/photo-1515378791036-0648a814d544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section id="focus-areas" className="section-padding bg-gradient-to-b from-gray-50 to-white">
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
            className="inline-flex items-center space-x-2 bg-secondary-100 rounded-full px-6 py-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Target className="w-5 h-5 text-secondary-600" />
            <span className="text-secondary-700 font-semibold">Our Focus Areas</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Creating Impact Through</span>
            <br />
            <span className="text-gray-800">Focused Initiatives</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            We concentrate our efforts on six key areas that drive meaningful change and 
            create lasting impact in communities.
          </motion.p>
        </motion.div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: area.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Card Header */}
                <motion.div
                  className={`h-2 bg-gradient-to-r ${area.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: area.delay + 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                />
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <div className="p-8">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <area.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {area.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: area.delay + 0.3 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Sparkles className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <motion.button
                    className="flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    onClick={() => handleLearnMore(area.title.toLowerCase().replace(/[^a-z0-9]/g, '-'))}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Join Us in Making a Difference
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Together, we can create stronger, more inclusive communities where everyone 
              has the opportunity to thrive and make a positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetInvolved}
              >
                Get Involved
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSupportWork}
              >
                Support Our Work
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FocusAreas;
