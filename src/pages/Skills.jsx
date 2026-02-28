import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faGear,
  faGlobe,
  faChartLine,
  faHexagonNodes,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "Java", "Python"],
      icon: faCode,
      iconType: "fa",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-500",
      textColor: "text-pink-800",
    },
    {
      title: "Frontend Technologies",
      skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      icon: faGlobe,
      iconType: "fa",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-500",
      textColor: "text-pink-800",
    },
    {
      title: "Backend and Databases",
      skills: ["Node.js", "MySQL", "MongoDB", "Firebase"],
      icon: faDatabase,
      iconType: "fa",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-500",
      textColor: "text-pink-800",
    },
    {
      title: "Data Science",
      skills: [
        "Pandas",
        "NumPy",
        "Data Cleaning & Preprocessing",
        "Exploratory Data Analysis (EDA)",
        "Statistical Analysis",
        "Data Visualization (Matplotlib, Plotly)",
      ],
      icon: faChartLine,
      iconType: "fa",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-500",
      textColor: "text-pink-800",
    },
    {
      title: "Artificial Intelligence and Machine learning",
      skills: [
        "Scikit-learn",
        "Supervised Learning",
        "Model Evaluation",
        "Generative AI",
        "Prompt Engineering",
      ],
      icon: faHexagonNodes,
      iconType: "fa",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-500",
      textColor: "text-pink-800",
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Streamlit",
        "Jupyter Notebook",
        "Google Colab",
        "Kaggle",
        "VS Code",
      ],
      icon: faGear,
      iconType: "fa",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-500",
      textColor: "text-pink-800",
    },
  ];

  const SkillCard = ({ category }) => (
    <div
      className={`${category.bgColor} p-6 rounded-3xl border-2 ${category.borderColor} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
    >
      <div className="flex items-center gap-3 mb-4">
        <FontAwesomeIcon
          icon={category.icon}
          className="text-3xl text-pink-500"
        />
        <h3 className={`font-bold text-lg ${category.textColor}`}>
          {category.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, sIndex) => (
          <span
            key={sIndex}
            className="bg-white px-3 py-1 rounded-full font-medium text-base text-gray-600 border border-gray-100 shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="flex items-center justify-center bg-pink-100 px-6 py-10 scroll-mt-8"
    >
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl p-10 md:p-16 border border-pink-50">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Technical <span className="text-pink-600">Skills</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
