import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Code, Users, MapPin, Calendar } from 'lucide-react';
import content from '../data/content.json';

const Resume = () => {
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

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center mb-12"
      >
        <motion.h1 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
          Professional Experience
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
          6+ years of transforming software quality through innovative testing strategies, 
          automation, and collaborative leadership.
        </motion.p>
      </motion.section>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Experience */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Briefcase className="h-6 w-6 mr-2 text-blue-600" />
              Work Experience
            </motion.h2>
            <div className="space-y-8">
              {content.experience.map((job, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{job.position}</h3>
                      <p className="text-lg text-blue-600 font-medium">{job.company}</p>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {job.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-blue-600" />
              Education
            </motion.h2>
            {content.education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-lg text-blue-600 font-medium">{edu.school}</p>
                <p className="text-gray-600">{edu.period}</p>
                <p className="text-gray-700 mt-2">{edu.details}</p>
              </motion.div>
            ))}
          </motion.section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Skills */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Code className="h-6 w-6 mr-2 text-blue-600" />
              Technical Skills
            </motion.h2>
            <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="space-y-4">
                {content.skills.technical.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-blue-50 px-3 py-2 rounded-lg text-blue-800 text-sm font-medium"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Soft Skills */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 mr-2 text-blue-600" />
              Soft Skills
            </motion.h2>
            <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="space-y-4">
                {content.skills.soft.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-emerald-50 px-3 py-2 rounded-lg text-emerald-800 text-sm font-medium"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-blue-600" />
              Certifications
            </motion.h2>
            <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="space-y-3">
                {content.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-3 bg-yellow-50 rounded-lg"
                  >
                    <Award className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                    <span className="text-yellow-800 font-medium text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Download Resume */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-4">Download Resume</h3>
              <p className="mb-6 text-blue-100">Get a PDF copy of my complete resume</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Download PDF
              </motion.button>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Resume;