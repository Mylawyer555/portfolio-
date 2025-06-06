import { useState } from 'react'
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/sammyLogo.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <nav className="flex items-center justify-between py-6 px-4 md:px-8">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="mx-2" width={100} height={33} />
        </a>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6 text-lg">
        <a href="#about" className=" hover:text-cyan-300 transition">About</a>
        <a href="#projects" className=" hover:text-cyan-300 transition">Projects</a>
        <a href="#experience" className=" hover:text-cyan-300 transition">Experience</a>
        <a href="#contact" className=" hover:text-cyan-300 transition">Contact</a>

        <a href="https://www.linkedin.com/in/samuel-abel-8112a7163/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl  hover:text-cyan-300" />
        </a>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden z-50">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl text-gray-200"/>
          ) : (
            <FaBars className="text-2xl text-gray-200"/>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-slate-900 shadow-md flex flex-col items-center gap-6 py-6 z-40 md:hidden"
          >
            <a href="#about" className=" hover:text-cyan-300" onClick={toggleMenu}>About</a>
            <a href="#projects" className=" hover:text-cyan-300" onClick={toggleMenu}>Projects</a>
            <a href="#experience" className=" hover:text-cyan-300" onClick={toggleMenu}>Experience</a>
            <a href="#contact" className=" hover:text-cyan-300" onClick={toggleMenu}>Contact</a>
            <div className="flex gap-4">
              
              <a href="https://www.linkedin.com/in/samuel-abel-8112a7163/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl  hover:text-cyan-300" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
