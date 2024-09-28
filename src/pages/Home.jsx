import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
function Home() {
  return (
    <>
        <Navbar />
        <Header />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
    </>
  )
}

export default Home