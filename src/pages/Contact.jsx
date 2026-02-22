import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-6 scroll-mt-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-16">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact <span className="text-pink-600">Me</span>
          </h2>
          <p className="text-gray-600 mt-2"></p>
        </div>

        {/* Contact Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <a
            href="mailto:r.sukirti777@gmail.com"
            className="flex items-center gap-4 p-6 rounded-2xl bg-gray-200 hover:bg-pink-100 transition-shadow shadow-sm"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-pink-500 text-3xl"
            />
            <span className="text-gray-700 font-semibold text-lg">Email</span>
            <span className="text-gray-800 ml-auto text-lg">
              r.sukirti777@gmail.com
            </span>
          </a>

          {/* Phone */}
          <div className="flex items-center gap-4 p-6 rounded-2xl bg-gray-200 shadow-sm">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-pink-500 text-3xl"
            />
            <span className="text-gray-700 font-semibold text-lg">Phone</span>
            <span className="text-gray-800 ml-auto text-lg">
              +91 9943123996
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 p-6 rounded-2xl bg-gray-200 shadow-sm">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-pink-500 text-3xl"
            />
            <span className="text-gray-700 font-semibold text-lg">
              Location
            </span>
            <span className="text-gray-800 ml-auto text-lg">
              Chennai, India
            </span>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sanjna-sukirti-rukmangathan-909a47306/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-2xl bg-gray-200 hover:bg-pink-100 transition-shadow shadow-sm"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-pink-500 text-3xl"
            />
            <span className="text-gray-700 font-semibold text-lg">
              LinkedIn
            </span>
            <span className="text-gray-800 ml-auto text-lg">
              Sanjna Sukirti Rukmangathan
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/SanjnaSukirti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-2xl bg-gray-200 hover:bg-pink-100 transition-shadow shadow-sm"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-pink-500 text-3xl"
            />
            <span className="text-gray-700 font-semibold text-lg">GitHub</span>
            <span className="text-gray-800 ml-auto text-lg">SanjnaSukirti</span>
          </a>
        </div>
      </div>
      {/* Footer */}
      <div className="mt-15 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sanjna Sukirti. All rights reserved.
      </div>
    </section>
  );
};

export default Contact;
