import { motion } from "framer-motion";
import Background from "./Background";

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      duration: "Jan 2023 - Present",
      location: "San Francisco, CA",
      description:
        "Leading development of enterprise web applications using modern technologies. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Led a team of 5 developers in building a customer portal that increased user engagement by 40%",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Optimized database queries improving application performance by 35%",
        "Introduced code review process improving code quality and reducing bugs by 25%",
      ],
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Docker",
        "Kubernetes",
      ],
      logo: "bi-building",
    },
    {
      id: 2,
      company: "Digital Innovations Ltd.",
      position: "Full Stack Developer",
      duration: "Mar 2021 - Dec 2022",
      location: "New York, NY",
      description:
        "Developed and maintained multiple web applications for clients across various industries. Collaborated with design and product teams.",
      achievements: [
        "Built 8 client websites with 100% client satisfaction rate",
        "Reduced page load times by 45% through optimization techniques",
        "Implemented responsive design ensuring cross-device compatibility",
        "Developed reusable component library used across multiple projects",
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Firebase", "Heroku"],
      logo: "bi-laptop",
    },
    {
      id: 3,
      company: "Startup Ventures",
      position: "Frontend Developer",
      duration: "Jun 2020 - Feb 2021",
      location: "Austin, TX",
      description:
        "Worked on early-stage startup products, focusing on user experience and rapid prototyping. Contributed to product strategy and user research.",
      achievements: [
        "Developed MVP for mobile app reaching 10,000+ users in 6 months",
        "Created design system improving development speed by 30%",
        "Conducted user testing sessions and implemented feedback",
        "Collaborated with founders on product roadmap and feature prioritization",
      ],
      technologies: ["React Native", "Redux", "Firebase", "Figma", "Jest"],
      logo: "bi-rocket",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      date: "December 2023",
      credentialId: "AWS-123456789",
      logo: "bi-cloud",
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "October 2023",
      credentialId: "MDB-987654321",
      logo: "bi-database",
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "August 2023",
      credentialId: "META-456789123",
      logo: "bi-braces-asterisk",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const timelineVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            My professional journey in software development, showcasing growth,
            achievements, and contributions.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:bg-gradient-to-b before:from-indigo-500 before:to-purple-600 before:-translate-x-1/2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              className={`mb-12 w-full md:w-1/2 px-4 relative ${
                index % 2 === 0 ? "md:left-0 md:pr-8" : "md:left-1/2 md:pl-8"
              }`}
              variants={itemVariants}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute top-2 left-1/2 transform -translate-x-1/2 md:top-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg text-white text-xl cursor-pointer"
                variants={timelineVariants}
                whileHover={{ scale: 1.3 }}
              >
                <i className={`${job.logo}`}></i>
              </motion.div>

              {/* Card */}
              <motion.div
                className="mt-6 md:mt-0 bg-gradient-to-br from-white via-gray-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-3xl shadow-2xl p-6 hover:-translate-y-5 hover:shadow-2xl hover:shadow-indigo-300/50 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Position & Company */}
                <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <h4 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                    <i className="bi bi-briefcase-fill text-indigo-500"></i>{" "}
                    {job.position}
                  </h4>
                  <h5 className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3 flex items-center gap-2">
                    <i className="bi bi-building text-indigo-500"></i>{" "}
                    {job.company}
                  </h5>
                </motion.div>

                {/* Duration & Location */}
                <motion.div
                  className="flex flex-col md:flex-row md:gap-6 mb-4"
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-1 md:mb-0">
                    <i className="bi bi-calendar-event-fill text-indigo-500"></i>{" "}
                    {job.duration}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <i className="bi bi-geo-alt-fill text-red-500"></i>{" "}
                    {job.location}
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <i className="bi bi-journal-text text-indigo-500"></i>{" "}
                  {job.description}
                </motion.p>

                {/* Achievements */}
                <motion.div
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-5 shadow-inner hover:shadow-lg transition-shadow duration-300"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h6 className="font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                    <i className="bi bi-trophy-fill text-yellow-400"></i> Key
                    Achievements:
                  </h6>
                  <ul className="list-disc list-inside space-y-2">
                    {job.achievements.map((ach, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors duration-300"
                      >
                        <i className="bi bi-check-circle-fill text-green-500"></i>{" "}
                        {ach}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 shadow-inner hover:shadow-lg transition-shadow duration-300"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <h6 className="font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                    <i className="bi bi-tools text-indigo-500"></i>{" "}
                    Technologies:
                  </h6>
                  <div className="flex flex-wrap gap-3">
                    {job.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 text-gray-900 dark:text-white rounded-2xl text-sm font-medium hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center gap-1"
                        whileHover={{ rotate: [0, 5, -5, 0], scale: 1.15 }}
                      >
                        <i className="bi bi-star-fill text-yellow-400"></i>{" "}
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mt-20 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600"
            variants={itemVariants}
          >
            Certifications & Achievements
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                className="w-full sm:w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:-translate-y-3 transition-transform duration-300"
                variants={itemVariants}
              >
                <div className="text-indigo-500 text-4xl mb-4">
                  <i className={`${cert.logo}`}></i>
                </div>
                <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
                  {cert.name}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-indigo-500 font-medium mb-1">{cert.date}</p>
                <p className="text-gray-400 text-sm">ID: {cert.credentialId}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Growth */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-10 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4">Professional Growth</h3>
          <p className="mb-8">
            Over the years, I've continuously evolved my skills and expertise,
            taking on increasingly complex challenges and leadership roles.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold mb-1">1.3+</div>
              <div>Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">10+</div>
              <div>Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">25+</div>
              <div>Technologies Mastered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">100%</div>
              <div>Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-12 text-center flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="/resume.pdf"
            download
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <i className="bi bi-download"></i> Download Resume
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-indigo-500 text-indigo-500 px-6 py-3 rounded-full font-semibold hover:bg-indigo-500 hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <i className="bi bi-linkedin"></i> View LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
