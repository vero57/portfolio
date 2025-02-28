import { FaHtml5, FaCss3, FaJava, FaReact, FaLaravel, FaPhp, FaPython, FaGit, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDart, SiFlutter } from "react-icons/si"; // Import Dart and Flutter icons

import '../styles/About.css';
function About() {
  return (
    <section id="about">
        <div className="wrapper">
            <h3>About</h3>
            <p>My name is Yosua Gerrard Ferdinand, a student at SMKN 1 Cibinong with a strong passion for Game Development and Software Engineering. Thanks to the advancements in technology—especially YouTube—I have been able to learn programming independently and explore the world of software development.</p>
            <p>Currently, I am deepening my knowledge in JavaScript, Dart, Java, and PHP to continuously enhance my skills in this field. One of my proudest experiences was participating in the "40 Game Project" alongside other talented developers.</p>
            <p>I am always eager to learn, create, and contribute to innovative projects.</p>

            <h4>Programming Language and Tools</h4>
            <div className="skills">
                <FaHtml5 /> <FaCss3 /> <IoLogoJavascript />
                <FaJava /> <FaReact /> <RiTailwindCssFill /> <FaLaravel /> <FaPhp /> <FaPython /> <FaGit /> <FaGithub />
                <SiDart /> <SiFlutter />
            </div>
        </div>
    </section>
  )
}

export default About