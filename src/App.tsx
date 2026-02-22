import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen selection:bg-potrancas-gold selection:text-potrancas-black"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <FAQ />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
