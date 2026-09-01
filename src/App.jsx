import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import CustomOrder from './components/CustomOrder'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingZalo from './components/FloatingZalo'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <CustomOrder />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingZalo />
    </>
  )
}
