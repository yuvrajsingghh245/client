export default function Home() {
    return (
      
<div className="px-6 py-12 max-w-5xl mx-auto text-center">
     
      {/* Intro Section */}
      <section className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Yuvraj Singh 👋</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to my personal portfolio! I’m a tech enthusiast and aspiring 
          <span className="font-semibold"> Software Developer</span> currently pursuing a 
          <span className="font-semibold"> Diploma in Computer Programming</span> at 
          Centennial College. I enjoy transforming ideas into practical applications, 
          solving real-world problems, and constantly learning new tools and technologies. 
        </p>
      </section>

      <hr className="my-10 border-gray-300" />

      {/* About Me Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Who I Am</h2>
        <p className="text-gray-600 leading-relaxed">
          I’m a curious learner with a strong interest in <span className="font-semibold">web development, 
          software engineering, and artificial intelligence</span>. Over time, I’ve gained 
          experience working on academic projects, group collaborations, and personal 
          experiments in coding. These experiences have helped me build technical skills 
          while also strengthening communication, teamwork, and adaptability.
        </p>
      </section>

      <hr className="my-10 border-gray-300" />

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Mission Statement</h2>
        <p className="text-gray-600 leading-relaxed">
          My mission is to grow as a versatile software professional who combines 
          <span className="font-semibold"> technical expertise, creativity, and problem-solving</span> 
          to deliver impactful solutions. I believe in teamwork, continuous learning, 
          and innovation — qualities that drive me to contribute positively to every 
          project I take on.
        </p>
      </section>

      <hr className="my-10 border-gray-300" />

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">What I Do</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Here are some of the areas I focus on and enjoy working with:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
          <li>💻 Web Development (HTML, CSS, JavaScript, React, Flask)</li>
          <li>⚙️ Backend Programming (Python, Java, C#)</li>
          <li>🗄️ Databases (MySQL, SQL Server, MongoDB)</li>
          <li>🤖 Exploring AI & Machine Learning</li>
          <li>🔐 Cybersecurity Fundamentals</li>
          <li>📱 Building User-Friendly Interfaces</li>
        </ul>
      </section>

      <hr className="my-10 border-gray-300" />

      {/* Vision Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Looking Ahead</h2>
        <p className="text-gray-600 leading-relaxed">
          I aspire to build a career in <span className="font-semibold">software development and AI</span>, 
          where I can contribute to meaningful projects that improve lives through technology. 
          My goal is to keep growing, experimenting, and developing solutions that are not 
          only functional but also impactful.
        </p>
      </section>
    </div>


  );
}


