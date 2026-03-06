import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <Skills />
                <Education />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App
