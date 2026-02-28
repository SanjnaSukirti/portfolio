import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import { faChartColumn, faServer } from "@fortawesome/free-solid-svg-icons";

const internships = [
  {
    organization: "Elewayte & Wipro DICE ID",
    role: "Python Virtual Internship",
    duration: "June 2024 - July 2024",
    icon: faPython,
    description:
      "Strengthened Python fundamentals including loops, arrays, exception handling, OOP, and data structures.",
    highlights: [
      "Minor Project - Username & Password Verification System",
      "Major Project - HR Data Analysis and Visualization",
    ],
  },
  {
    organization: "IBM SkillsBuild",
    role: "Data Analytics Virtual Internship",
    duration: "December 2024",
    icon: faChartColumn,
    description:
      "Completed certification courses and earned official IBM SkillsBuild digital badges.",
    highlights: [
      "Data Fundamentals",
      "Explore Emerging Technologies",
      "Project Management Fundamentals",
    ],
  },
  {
    organization: "QSpiders Training Institute",
    role: "Web Development Intern",
    duration: "February 2025 - March 2025",
    icon: faReact,
    description:
      "Gained hands-on experience in modern web technologies like HTML, CSS, JavaScript, React, Tailwind CSS and Single Page Application development.",
    highlights: [
      "Built SPAs using React and Tailwind CSS",
      "Developed Medium & JioSaavn website clones",
      "Built a Music Player Application with Firebase backend",
    ],
  },
  {
    organization: "ServiceNow & AICTE",
    role: "System Administrator Virtual Internship",
    duration: "June 2025 - July 2025",
    icon: faServer,
    description:
      "Learned ServiceNow platform fundamentals in preparation for the CSA role.",
    highlights: [
      "Introduction to Agentic AI",
      "Basics of Flows & Automated Test Framework",
      "System Administration Fundamentals",
      "CSA Exam Preparation",
    ],
  },
];

const Internships = () => {
  return (
    <section id="internships" className="py-12 px-6 scroll-mt-8 bg-pink-100">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-16">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Internships
          </h2>
          <p className="text-gray-700 mt-2">
            Virtual internships and industry exposure that strengthened my
            technical foundation.
          </p>
        </div>

        {/* Internship Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-justify">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-pink-50/50 shadow-sm border-2 border-gray-300 hover:border-pink-500 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-3">
                
                <h3 className="font-bold text-xl text-gray-800">
                  {internship.organization}
                </h3>
                <FontAwesomeIcon
                  icon={internship.icon}
                  className="text-4xl text-gray-700"
                />
              </div>

              <p className="text-pink-600 font-semibold text-lg mt-1">
                {internship.role}
              </p>

              <p className="text-gray-600 text-base mt-1">
                {internship.duration}
              </p>

              <p className="text-gray-800 mt-3 text-base">
                {internship.description}
              </p>

              <ul className="list-disc list-outside pl-5 mt-3 text-gray-700 text-base space-y-1">
                {internship.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
