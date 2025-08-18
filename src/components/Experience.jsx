import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      duration: 'Jan 2023 - Present',
      location: 'San Francisco, CA',
      description: 'Leading development of enterprise web applications using modern technologies. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Led a team of 5 developers in building a customer portal that increased user engagement by 40%',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Optimized database queries improving application performance by 35%',
        'Introduced code review process improving code quality and reducing bugs by 25%'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
      logo: 'bi-building'
    },
    {
      id: 2,
      company: 'Digital Innovations Ltd.',
      position: 'Full Stack Developer',
      duration: 'Mar 2021 - Dec 2022',
      location: 'New York, NY',
      description: 'Developed and maintained multiple web applications for clients across various industries. Collaborated with design and product teams.',
      achievements: [
        'Built 8 client websites with 100% client satisfaction rate',
        'Reduced page load times by 45% through optimization techniques',
        'Implemented responsive design ensuring cross-device compatibility',
        'Developed reusable component library used across multiple projects'
      ],
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Firebase', 'Heroku'],
      logo: 'bi-laptop'
    },
    {
      id: 3,
      company: 'Startup Ventures',
      position: 'Frontend Developer',
      duration: 'Jun 2020 - Feb 2021',
      location: 'Austin, TX',
      description: 'Worked on early-stage startup products, focusing on user experience and rapid prototyping. Contributed to product strategy and user research.',
      achievements: [
        'Developed MVP for mobile app reaching 10,000+ users in 6 months',
        'Created design system improving development speed by 30%',
        'Conducted user testing sessions and implemented feedback',
        'Collaborated with founders on product roadmap and feature prioritization'
      ],
      technologies: ['React Native', 'Redux', 'Firebase', 'Figma', 'Jest'],
      logo: 'bi-rocket'
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Developer Associate',
      issuer: 'Amazon Web Services',
      date: 'December 2023',
      credentialId: 'AWS-123456789',
      logo: 'bi-cloud'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: 'October 2023',
      credentialId: 'MDB-987654321',
      logo: 'bi-database'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: 'August 2023',
      credentialId: 'META-456789123',
      logo: 'bi-braces-asterisk'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const timelineVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey in software development, showcasing growth, achievements, and contributions to various organizations.
          </p>
        </motion.div>

        {/* Work Experience Timeline */}
        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <div className="timeline-marker">
                <motion.div
                  className="timeline-dot"
                  variants={timelineVariants}
                  whileHover={{ scale: 1.2 }}
                >
                  <i className={`${job.logo} text-primary`}></i>
                </motion.div>
              </div>
              
              <div className="experience-content">
                <motion.div
                  className="card-custom p-4 h-100"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h4 className="h5 mb-1">{job.position}</h4>
                      <h5 className="h6 text-primary mb-1">{job.company}</h5>
                      <div className="text-muted small">
                        <i className="bi bi-calendar me-1"></i>
                        {job.duration}
                      </div>
                      <div className="text-muted small">
                        <i className="bi bi-geo-alt me-1"></i>
                        {job.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted mb-3">{job.description}</p>
                  
                  <div className="mb-3">
                    <h6 className="fw-semibold mb-2">Key Achievements:</h6>
                    <ul className="list-unstyled">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="mb-1">
                          <i className="bi bi-check-circle text-success me-2"></i>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h6 className="fw-semibold mb-2">Technologies:</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {job.technologies.map((tech) => (
                        <span key={tech} className="badge bg-light text-dark">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="row mt-5 justify-content-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="col-12">
            <motion.h3
              className="h3 text-center mb-5 gradient-text"
              variants={itemVariants}
            >
              Certifications & Achievements
            </motion.h3>
            
            <div className="row g-4 justify-content-center">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="col-lg-4 col-md-6 col-sm-8"
                  variants={itemVariants}
                >
                  <div className="card-custom p-4 text-center h-100">
                    <div className="certification-icon mb-3">
                      <i className={`${cert.logo} text-primary display-4`}></i>
                    </div>
                    <h4 className="h5 mb-2">{cert.name}</h4>
                    <p className="text-muted mb-2">{cert.issuer}</p>
                    <div className="text-primary small mb-2">{cert.date}</div>
                    <div className="text-muted small">ID: {cert.credentialId}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Growth Section */}
        <motion.div
          className="row mt-5 justify-content-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-12">
            <div className="card-custom p-5 bg-gradient-primary text-white text-center">
              <h3 className="h3 mb-3">Professional Growth</h3>
              <p className="mb-4">
                Over the years, I've continuously evolved my skills and expertise, 
                taking on increasingly complex challenges and leadership roles.
              </p>
              
              <div className="row g-4 justify-content-center">
                <div className="col-md-3 col-6">
                  <div className="growth-stat">
                    <div className="growth-number display-6 fw-bold">3+</div>
                    <div className="growth-label">Years Experience</div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="growth-stat">
                    <div className="growth-number display-6 fw-bold">25+</div>
                    <div className="growth-label">Projects Completed</div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="growth-stat">
                    <div className="growth-number display-6 fw-bold">15+</div>
                    <div className="growth-label">Technologies Mastered</div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="growth-stat">
                    <div className="growth-number display-6 fw-bold">100%</div>
                    <div className="growth-label">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button className="btn btn-custom btn-primary me-3">
            <i className="bi bi-download me-2"></i>
            Download Resume
          </button>
          <button className="btn btn-custom btn-outline">
            <i className="bi bi-linkedin me-2"></i>
            View LinkedIn
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
  