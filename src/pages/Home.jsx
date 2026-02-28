import profile1 from "../assets/profile1.JPG"

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center px-6 pt-10 pb-12 scroll-mt-20"
    >
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          <div className="border-4 border-pink-200 w-72 h-72 md:w-80 md:h-80 flex items-center justify-center rounded-2xl overflow-hidden shadow-sm">
            <img src={profile1} alt="Profile" />
          </div>
        </div>

        {/* Text RIGHT */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi,</h1>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            I’m <span className="text-pink-600">Sanjna Sukirti R</span>
          </h1>

          <p className="text-lg md:text-xl font-medium text-gray-500 mb-4">
            Pursuing Bachelor of Engineering in Computer Science and Engineering{" "}
            at <span className="text-gray-800">Panimalar Engineering College</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
