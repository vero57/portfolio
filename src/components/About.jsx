import { FaHtml5, FaCss3, FaJava, FaReact, FaLaravel, FaPhp, FaPython, FaGit, FaGithub} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

import '../styles/About.css';
function About() {
  return (
    <section id="about">
        <div className="wrapper">
            <h3>About</h3>
            <p>Halo semuanya perkenalkan nama saya adalah Yosua Gerrard Ferdinand, saya berasal dari Cibinong Kabupaten Bogor, Jawa Barat</p>

            <p>Saat ini saya berada di tingkat 12 di SMKN 1 Cibinong dan saya berasal dari jurusan SIJA (Sistem Informasi Jaringan Dan Aplikasi). Saya berumur 17 tahun di tahun 2024, hobby saya adalah programming dan juga senang mengulik tentang teknologi. Bahasa pemogramman yang palin saya suka adalah JavaScript dan LUA, dan juga saat ini saya sedang mempelajari bahasa pemogramman Java, LUA. Untuk framework dan library, saya sangat senang dengan framework JS, Laravel, dan untuk library saya tentu memilih React JS.  </p>

            <p>Udah lah ya segini aja soalnya ini niatnya bukan portfolio serius, tungguin aja ya buat next project gw</p>

            <h4>Programming Language and Tools</h4>
            <div className="skills">
                <FaHtml5 /> <FaCss3 /> <IoLogoJavascript />
                <FaJava /> <FaReact /> <RiTailwindCssFill /> <FaLaravel /> <FaPhp /> <FaPython /> <FaGit /> <FaGithub />
            </div>
        </div>
    </section>
  )
}

export default About
