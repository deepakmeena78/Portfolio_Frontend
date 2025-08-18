import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, Linkedin, Github, Twitter, Instagram, Briefcase, CalendarCheck, Download, Send, CheckCircle, AlertTriangle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate API call and form submission
    try {
      // In a real application, you would make a fetch or API call here
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Simulate success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      // Simulate failure
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after a few seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: 'https://maps.google.com'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (234) 567-8900',
      link: 'tel:+12345678900'
    },
    {
      icon: Clock,
      title: 'Available',
      value: 'Mon - Fri, 9AM - 6PM PST',
      link: null
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/yourusername', color: '#0077B5' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/yourusername', color: '#333' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/yourusername', color: '#1DA1F2' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/yourusername', color: '#E4405F' }
  ];

  // Framer Motion variants for staggered entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Variants for input fields with animated borders
  const inputVariants = {
    rest: { borderColor: '#4B5563', borderWidth: '1px' },
    hover: { borderColor: '#6366F1', borderWidth: '2px' },
    focus: { borderColor: '#00ffff', borderWidth: '2px', boxShadow: '0 0 10px rgba(0,255,255,0.5)' }
  };

  return (
    <section id="contact" className="relative bg-gray-950 text-white py-16 md:py-24 font-inter overflow-hidden">
      {/* Unique glowing orb background animation */}
      <style>{`
        .glowing-orb {
          filter: blur(80px);
          animation: glow-animation 15s infinite ease-in-out;
        }

        .glowing-orb.one {
          background-color: #8a2be2;
          width: 250px;
          height: 250px;
          top: 5%;
          left: 5%;
          animation-delay: 0s;
        }

        .glowing-orb.two {
          background-color: #00ffff;
          width: 200px;
          height: 200px;
          top: 40%;
          left: 80%;
          animation-delay: 5s;
        }

        .glowing-orb.three {
          background-color: #8B5CF6;
          width: 300px;
          height: 300px;
          top: 70%;
          left: 20%;
          animation-delay: 10s;
        }

        @keyframes glow-animation {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.5; }
          25% { transform: scale(1.1) translate(50px, -20px); opacity: 0.7; }
          50% { transform: scale(0.9) translate(-50px, 30px); opacity: 0.6; }
          75% { transform: scale(1.2) translate(20px, 40px); opacity: 0.8; }
        }
      `}</style>
      <div className="absolute inset-0 z-0">
        <div className="glowing-orb one absolute rounded-full opacity-50"></div>
        <div className="glowing-orb two absolute rounded-full opacity-50"></div>
        <div className="glowing-orb three absolute rounded-full opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title and Subtitle with Animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8a2be2] to-[#00ffff] mb-4">
            Connect With Me
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>
        </motion.div>

        {/* Main Content Grid (Contact Info & Form) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
          
          {/* Contact Information Section with floating icons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center md:text-left mb-8">
              <h3 className="text-3xl font-bold text-gray-200 mb-4">Contact Details</h3>
              <p className="text-gray-400">Feel free to reach out through any of these channels.</p>
            </motion.div>
            
            {/* Contact Info List with animations */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start md:items-center space-x-4"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="flex-shrink-0 p-4 rounded-full bg-indigo-500 bg-opacity-10 text-indigo-400"
                    animate={{
                      y: [0, -5, 0, 5, 0],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <info.icon size={28} />
                  </motion.div>
                  <div>
                    <h6 className="text-lg font-semibold text-gray-300">{info.title}</h6>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-gray-400 text-sm hover:text-gray-200 transition-colors"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-400 text-sm">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links with hover effects */}
            <motion.div variants={itemVariants} className="mt-12">
              <h6 className="text-lg font-semibold text-gray-300 text-center md:text-left mb-4">Find Me Online</h6>
              <div className="flex gap-6 justify-center md:justify-start">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full text-white transition-transform duration-200"
                    style={{ backgroundColor: social.color }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Section with advanced animations */}
          <motion.div
            className="w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              variants={itemVariants} 
              className="bg-gray-900 rounded-3xl shadow-xl p-8 md:p-12"
            >
              <h3 className="text-3xl font-bold text-gray-200 mb-6 text-center md:text-left">Send Me a Message</h3>
              
              {/* Submission Status Message */}
              {submitStatus && (
                <motion.div
                  className={`flex items-center p-4 mb-6 rounded-xl text-white font-medium ${submitStatus === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle size={20} className="mr-3 flex-shrink-0" />
                  ) : (
                    <AlertTriangle size={20} className="mr-3 flex-shrink-0" />
                  )}
                  <span>
                    {submitStatus === 'success'
                      ? "Thank you! Your message has been sent successfully. I'll get back to you soon."
                      : "Oops! Something went wrong. Please try again later."
                    }
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-5 py-4 bg-gray-800 text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-5 py-4 bg-gray-800 text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-5 py-4 bg-gray-800 text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="sr-only">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="7"
                    className="w-full px-5 py-4 bg-gray-800 text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    className="w-full py-4 px-8 rounded-xl font-bold text-white transition-all transform focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                    style={{ background: 'linear-gradient(to right, #8a2be2, #00ffff)', boxShadow: '0 0 15px rgba(138, 43, 226, 0.5)' }}
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 255, 255, 0.8)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action Card */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gray-900 rounded-3xl shadow-xl p-8 md:p-12 text-center border border-gray-800">
            <h3 className="text-3xl font-bold text-gray-200 mb-4">Let's Work Together</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              I'm currently available for freelance work and full-time opportunities. 
              Whether you have a project in mind or just want to chat, I'd love to hear from you.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center justify-center py-3 px-6 rounded-xl font-bold text-gray-900 bg-gray-200 hover:bg-white transition-colors">
                <Briefcase size={20} className="mr-2" />
                View Resume
              </button>
              <button className="flex items-center justify-center py-3 px-6 rounded-xl font-bold text-white border border-gray-400 hover:bg-white hover:text-gray-900 transition-colors">
                <CalendarCheck size={20} className="mr-2" />
                Schedule a Call
              </button>
              <button className="flex items-center justify-center py-3 px-6 rounded-xl font-bold text-white border border-gray-400 hover:bg-white hover:text-gray-900 transition-colors">
                <Download size={20} className="mr-2" />
                Download CV
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;