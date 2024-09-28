import { useState } from 'react';
import '../styles/Navbar.css';
import { FaBarsStaggered} from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io"
function Navbar() {
  const [statusTampil, setStatusTampil] = useState('');
  function tampilMenu() {
    if(statusTampil == ''){
        setStatusTampil('tampil');
    }else{
        setStatusTampil('');
    }
  }
  return (
    <nav>
        <div className="wrapper">
            <div className="logo">
                <a href="#">YOSUA</a>
            </div>
            <button onClick={tampilMenu}>
            {
                statusTampil == '' ? (<FaBarsStaggered />) : (<IoMdCloseCircle />)
            }

            </button>
            <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar