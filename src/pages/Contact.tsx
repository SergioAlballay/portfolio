import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, Linkedin, Github, MapPin, Send, Coffee } from 'lucide-react';
import content from '../data/content.json';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    alert('Thank you for your message! I\'ll get back to you soon.');
    reset();
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: content.personal.email,
      href: `mailto:${content.personal.email}`,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: content.personal.phone,
      href: `tel:${content.personal.phone}`,
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: content.personal.linkedin,
      href: `https://${content.personal.linkedin}`,
      color: 'text-blue-700 bg-blue-50'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: content.personal.github,
      href: `https://${content.personal.github}`,
      color: 'text-gray-700 bg-gray-50'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.h1 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
          {content.contact.title}
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
          {content.contact.subtitle}
        </motion.p>
        <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          <Coffee className="h-4 w-4 mr-2" />
          {content.contact.availability}
        </motion.div>
      </motion.section>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project, questions, or just say hi!"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </form>
          </motion.div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Contact Methods */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Other ways to reach me</h2>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.label === 'LinkedIn' || method.label === 'GitHub' ? '_blank' : undefined}
                  rel={method.label === 'LinkedIn' || method.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`p-3 rounded-lg ${method.color} mr-4`}>
                    <method.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{method.label}</h3>
                    <p className="text-gray-600">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-blue-600" />
              Location
            </h3>
            <p className="text-gray-700 mb-4">{content.personal.location}</p>
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/161401/san-francisco-california-golden-gate-bridge-suspension-bridge-161401.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="San Francisco skyline"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Fun Message */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-3">Let's grab coffee! ☕</h3>
            <p className="text-blue-100">
              I'm always excited to discuss new opportunities, share testing stories, 
              or just chat about the latest in quality engineering. Don't hesitate to reach out!
            </p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;