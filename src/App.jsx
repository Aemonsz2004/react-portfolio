
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
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App
