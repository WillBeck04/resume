"use client"
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaCode, FaLaptopCode, FaUserGraduate, FaProjectDiagram, FaAward, FaBriefcase, FaBars, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const [typing, setTyping] = useState('');
  const fullText = "Hi, my name is William Beck";
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    let typingTimeout: string | number | NodeJS.Timeout | undefined;
    if (typing.length < fullText.length) {
      typingTimeout = setTimeout(() => {
        setTyping(fullText.slice(0, typing.length + 1));
      }, 50);
    }
    return () => clearTimeout(typingTimeout);
  }, [typing]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Head>
        <title>William Beck's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <button href="#" className="text-xl font-semibold">William Beck</button>
          <div className="hidden md:flex space-x-4">
            <button href="#about" className="hover:underline">About</button>
            <button href="#projects" className="hover:underline">Projects</button>
            <button href="#contact" className="hover:underline">Contact</button>
          </div>
          <FaBars className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)} />
        </div>
        <div className={`absolute w-full bg-gray-800 md:hidden transition-all duration-300 ease-in ${isNavOpen ? 'top-16' : 'top-[-490px]'}`}>
          <button href="#about" className="block p-4 hover:bg-gray-700 transition-colors duration-300">About</button>
          <button href="#projects" className="block p-4 hover:bg-gray-700 transition-colors duration-300">Projects</button>
          <button href="#contact" className="block p-4 hover:bg-gray-700 transition-colors duration-300">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold">{typing}</h1>
        <Image src="/profile.jpg" alt="William Beck" width={128} height={128} className="rounded-full mt-4" />
        <p className="text-gray-300 mt-4">Aspiring FinTech Professional | Passionate about AI & Market Dynamics | Adept in Problem-Solving and Analytics</p>
      </header>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="mt-4">
              I am a computer science graduate with a strong interest in financial technology. My background in mathematics and computer science has given me a solid foundation to understand and innovate in the evolving landscape of finance and technology.
            </p>
            <p className="mt-4">
              I'm skilled in analytics, problem-solving, and programming. Currently, I'm learning more about blockchain technologies and their applications in finance.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src="/about.jpg" alt="About William Beck" width={300} height={300} className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-800 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Project 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <FaProjectDiagram className="mx-auto text-6xl" />
              <h3 className="text-xl font-bold mt-4">Visual Flow Project</h3>
              <p className="text-gray-300 mt-2">A project description here. This project showcases my skills in...</p>
              <button href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Project</button>
            </div>
            {/* Project 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <FaProjectDiagram className="mx-auto text-6xl" />
              <h3 className="text-xl font-bold mt-4">Beck Crypto Project</h3>
              <p className="text-gray-300 mt-2">An application that analyzes cryptocurrency trends to make investment decisions.</p>
              <button href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Project</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-gray-900 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
          <div className="flex justify-center mt-4">
            <button href="mailto:william@beck.com" className="text-gray-400 hover:text-white"><FaEnvelope className="text-4xl m-2" /></button>
            <button href="#" className="text-gray-400 hover:text-white"><FaLinkedin className="text-4xl m-2" /></button>
            <button href="#" className="text-gray-400 hover:text-white"><FaGithub className="text-4xl m-2" /></button>
          </div>
          <p className="text-gray-500 mt-4">© 2024 William Beck. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
