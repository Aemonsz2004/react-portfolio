
import styles from './App.module.css'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/nav/Navbar'
import Projects from './components/projects/Projects'

function App() {


  return (
    <>
      <div className={styles.app}>
      <section id='navbar'>
        <Navbar />
      </section>
      <section id='hero'>
        <Hero />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='experience'>
        <Experience />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='footer'>
        <Footer />
      </section>
        
      </div>
    </>
  )
}

export default App
