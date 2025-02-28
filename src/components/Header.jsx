import '../styles/Header.css';
import profilepic from '../assets/yosuaa.jpg'
import { FaInstagram, FaGithub, FaDiscord} from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

function Header() {
  return (
    <header>
        <div className="header-jumbotron">
        <p></p>
        <img src= {profilepic}/>
            <h3>Yosua Gerrard Ferdinand</h3>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'I am a Frontend developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'I am a Student',
                1000,
                'I am a Beginner',
                1000,
                'I am still learning',
                1000
              ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block', fontFamily: 'arial' ,color: 'white' }}
                repeat={Infinity}
            />

            <p></p>
            <div className="socialMedia">
                <a href="https://www.instagram.com/yosuagerrard_/"><FaInstagram /></a>
                <a href="https://github.com/vero57"><FaGithub /></a>
                <a href="https://discordapp.com/users/639259643532541962"><FaDiscord /></a>
            </div>
        </div>
    </header>
  )
}

export default Header