import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faLeetcode, faHackerrank } from "@fortawesome/free-brands-svg-icons";

const AchievementsCerts = () => {
  const codingAchievements = [
    {
      platform: "LeetCode",
      description:
        "Solved 110 problems mainly in Python and Java, focusing on Arrays, Strings, and Math problems.",
      icon: faLeetcode,
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
      link: "https://leetcode.com/u/q39zWx3FfR/",
    },
    {
      platform: "HackerRank",
      description: (
        <div className="flex flex-col">
          <span>
            Java: Bronze Level 2{" "}
            <FontAwesomeIcon icon={faStar} className="text-[#ffb69c]" />
            <FontAwesomeIcon icon={faStar} className="text-[#ffb69c]" />
          </span>
          <span>
            Python: Silver Level 3
            <FontAwesomeIcon icon={faStar} className="text-[#b3bdbf]" />
            <FontAwesomeIcon icon={faStar} className="text-[#b3bdbf]" />
            <FontAwesomeIcon icon={faStar} className="text-[#b3bdbf]" />
          </span>
        </div>
      ),
      icon: faHackerrank,
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      link: "https://www.hackerrank.com/profile/r_sukirti777",
    },
  ];

  const certifications = [
    {
      title: "Frontend Web Developer Certification",
      issuer: "Infosys Springboard",
      year: 2025,
    },
    {
      title: "Data Science Foundation Certification",
      issuer: "Infosys Springboard",
      year: 2025,
    },
    {
      title: "Pragati: Path to Future – Cohort 5",
      issuer: "Infosys Springboard",
      year: 2025,
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      year: 2024,
    },
    {
      title: "Oracle Cloud Infrastructure Generative AI Professional",
      issuer: "Oracle",
      year: 2024,
    },
    {
      title: "Data Fundamentals",
      issuer: "IBM SkillsBuild",
      year: 2024,
    },
    {
      title: "Project Management Fundamentals",
      issuer: "IBM SkillsBuild",
      year: 2024,
    },
    {
      title: "Explore Emerging Technologies",
      issuer: "IBM SkillsBuild",
      year: 2024,
    },
    {
      title: "Programming in Java",
      issuer: "NPTEL - IIT Kharagpur",
      year: 2024,
    },

    // add more certifications here
  ];

  return (
    <section id="achievementsCerts" className="py-12 px-6 scroll-mt-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-16">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Achievements & <span className="text-pink-600">Certifications</span>
          </h2>
        </div>

        {/* Coding Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {codingAchievements.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-start gap-4 p-6 rounded-2xl shadow-md border-2 border-transparent ${item.bgColor} hover:border-gray-500 hover:shadow-xl transition-all duration-300 cursor-pointer`}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className={`text-4xl ${item.textColor} mt-1`}
              />
              <div>
                <h3 className="font-bold text-lg">{item.platform}</h3>
                <p className="text-gray-700 mt-1 text-lg">{item.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-200"
            >
              <div>
                <h4 className="font-semibold text-gray-800">{cert.title}</h4>
                <p className="text-gray-600 text-lg">
                  {cert.issuer} - {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsCerts;
