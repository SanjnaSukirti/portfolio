const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center bg-pink-100 px-6 py-10 scroll-mt-8"
    >
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl p-10 md:p-16 border border-pink-50">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About <span className="text-pink-600">Me</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4 text-justify">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I'm <b>Sanjna Sukirti</b>, a dedicated Computer Science student
              with a passion for solving problems through code. My journey in
              tech began with a curiosity about how the web works, which evolved
              into a love for building clean, user-centric interfaces and
              finding meaningful patterns in data.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I enjoy bridging the gap between design and logic, with a strong focus on clarity, efficiency, and analytical problem solving.
              As a curious and lifelong learner, I continuously expand my knowledge through books, courses, and internships to grow as an efficient and impactful developer.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed italic border-t pt-4">
              I believe that technology should not only be powerful but also
              sustainable to the environment and accessible to everyone.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <a
              href="https://panimalar.ac.in/be-computer-science-and-engineering.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-50 p-6 rounded-2xl border-l-4 border-pink-500 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <h3 className="font-bold text-lg text-pink-800 mb-2">
                Education
              </h3>
              <p className="text-gray-700 leading-relaxed">
                3rd year, B.E., Computer Science
                <br />
                Panimalar Engineering College.
              </p>
            </a>

            <div className="bg-gray-100 p-6 rounded-2xl border-l-4 border-gray-500">
              <h3 className="font-bold text-lg text-gray-800 mb-2">My Focus</h3>
              <p className="text-gray-700 leading-relaxed">
                Full-stack development,
                <br />
                Data Analytics, and
                <br />
                Logical Problem Solving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
