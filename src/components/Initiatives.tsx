import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TreePine, 
  Bike, 
  Scissors, 
  Package, 
  HeartPulse, 
  Users,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { handleRegisterActivities, handleViewCalendar } from '../utils/buttonHandlers';

const Initiatives: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);

  const activities = [
    {
      icon: TreePine,
      title: 'Plantation Drive',
      description: 'Join us in our mission to create a greener, more sustainable environment through community tree planting initiatives.',
      color: 'from-green-500 to-emerald-600',
      duration: 'Half Day',
      frequency: 'Monthly',
      location: 'Various Locations',
      participants: '50+',
      image: '🌳',
      imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      features: ['Environmental Impact', 'Community Building', 'Hands-on Learning'],
    },
    {
      icon: Bike,
      title: "Women's Bullet Riding Camp",
      description: 'Empowering women through adventure and skill-building in our exclusive motorcycle riding training camp.',
      color: 'from-blue-500 to-indigo-600',
      duration: '2 Days',
      frequency: 'Quarterly',
      location: 'Training Ground',
      participants: '20-30',
      image: '🏍️',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      features: ['Skill Development', 'Confidence Building', 'Adventure Sports'],
    },
    {
      icon: Scissors,
      title: 'Macramé Free Workshop',
      description: 'Discover the art of macramé in our creative workshop designed to express your artistic side.',
      color: 'from-pink-500 to-rose-600',
      duration: '3 Hours',
      frequency: 'Weekly',
      location: 'Community Center',
      participants: '15-20',
      image: '🧶',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      features: ['Creative Expression', 'Skill Learning', 'Relaxation'],
    },
    {
      icon: Package,
      title: 'Free Pottery Workshop',
      description: 'Shape your creativity in our hands-on pottery workshop where you can craft beautiful ceramic pieces.',
      color: 'from-orange-500 to-red-600',
      duration: '4 Hours',
      frequency: 'Bi-weekly',
      location: 'Art Studio',
      participants: '12-15',
      image: '🏺',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      features: ['Artistic Skills', 'Mindfulness', 'Take-home Creations'],
    },
    {
      icon: Bike,
      title: "Women's Cycling Activity",
      description: 'Promoting health, fitness, and environmental awareness through group cycling activities for women.',
      color: 'from-teal-500 to-cyan-600',
      duration: '2 Hours',
      frequency: 'Weekends',
      location: 'City Parks',
      participants: '25-35',
      image: '🚴‍♀️',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      features: ['Fitness', 'Social Connection', 'Exploration'],
    },
    {
      icon: HeartPulse,
      title: 'CPR Workshop',
      description: 'Learn life-saving skills in our comprehensive CPR and first aid training workshop.',
      color: 'from-red-500 to-pink-600',
      duration: '6 Hours',
      frequency: 'Monthly',
      location: 'Training Center',
      participants: '30-40',
      image: '🚑',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      features: ['Life Skills', 'Emergency Preparedness', 'Certification'],
    },
  ];

  return (
    <section id="initiatives" className="section-padding bg-gradient-to-b from-gray-50 to-white">
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
            <Users className="w-5 h-5 text-primary-600" />
            <span className="text-primary-700 font-semibold">Flagship Initiatives</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-800">A Joyful Space Where</span>
            <br />
            <span className="text-gray-800">Women Connect, Unwind, and Grow</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover our range of engaging activities designed to foster connection, 
            creativity, and personal growth in a supportive community environment.
          </motion.p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedActivity(selectedActivity === index ? null : index)}
            >
              <div className="h-full bg-gray-300 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer">
                {/* Activity Header */}
                <div className={`h-2 bg-gradient-to-r ${activity.color}`} />
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.imageUrl}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Emoji Overlay */}
                  <div className="absolute top-4 right-4 text-4xl bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    {activity.image}
                  </div>
                </div>
                
                <div className="p-8">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${activity.color} rounded-2xl flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <activity.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {activity.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {activity.description}
                  </p>

                  {/* Activity Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-primary-500" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-primary-500" />
                      <span>{activity.frequency}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-primary-500" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Users className="w-4 h-4 text-primary-500" />
                      <span>{activity.participants} participants</span>
                    </div>
                  </div>

                  {/* Features (Expandable) */}
                  {selectedActivity === index && (
                    <motion.div
                      className="mb-6 space-y-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      {activity.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <Sparkles className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {/* Action Button */}
                  <motion.button
                    className={`flex items-center space-x-2 font-semibold transition-colors duration-300 ${
                      selectedActivity === index ? 'text-primary-600' : 'text-primary-500 hover:text-primary-600'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <span>{selectedActivity === index ? 'Show Less' : 'Learn More'}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                      selectedActivity === index ? 'rotate-90' : ''
                    }`} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Section */}
        <motion.div
          className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-3xl p-12 text-white text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Activities?
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Become part of our vibrant community and participate in activities that 
            inspire growth, creativity, and meaningful connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRegisterActivities}
            >
              Register for Activities
            </motion.button>
            <motion.button
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-primary-300 hover:bg-primary-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewCalendar}
            >
              View Calendar
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Initiatives;
