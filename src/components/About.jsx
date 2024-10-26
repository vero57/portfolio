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

            <p>Saat ini, saya adalah siswa kelas 12 di SMKN 1 Cibinong, berasal dari jurusan SIJA (Sistem Informasi Jaringan dan Aplikasi). Di tahun 2024, saya berumur 17 tahun, dan memiliki ketertarikan besar pada programming serta teknologi. Saya sangat menyukai bahasa pemrograman JavaScript dan LUA, dan saat ini sedang memperdalam Java dan JavaScript termasuk Frameworknya. Framework favorit saya termasuk JS dan Laravel, sementara untuk library, saya sangat menikmati menggunakan React JS. Di waktu luang, saya senang mengulik teknologi baru dan mengerjakan proyek pengembangan web pribadi.</p>

            <p>Pengalaman saya adalah membuat game Roblox menggunakan bahasa pemogramaan LUA dan software Roblox Studio. Lalu website yang saya pernah buat adalah Web portfolio, website untuk menonton film (Sejenis Netflix), website e-commerce, to-do list</p>

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