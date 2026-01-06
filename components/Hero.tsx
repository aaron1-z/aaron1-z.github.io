'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, GraduationCap } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [-50, 50, -50],
            y: [-50, 50, -50],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Profile Picture - Left Side */}
          <motion.div
            className="flex-shrink-0"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ zIndex: 0 }}
              />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 p-1 cosmic-glow" style={{ zIndex: 1 }}>
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0e27] relative">
                  <Image
                    src="/aaron.jpg"
                    alt="Aditya Singh"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                    sizes="192px"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight pb-2"
              style={{ lineHeight: '1.1' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Aditya Singh
            </motion.h1>

            <motion.div
              className="flex items-center justify-center md:justify-start gap-3 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent md:hidden" />
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Dev | Researcher | Published Author
              </motion.p>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent md:hidden" />
            </motion.div>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Exploring the cosmos of knowledge, one experiment at a time
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="https://github.com/aaron1-z"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect-strong rounded-full p-4 hover:scale-110 transition-all duration-300 hover:cosmic-glow group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/aditya-singh-1z"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect-strong rounded-full p-4 hover:scale-110 transition-all duration-300 hover:cosmic-glow group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
              </motion.a>
              <motion.a
                href="https://scholar.google.com/citations?user=igxfu80AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect-strong rounded-full p-4 hover:scale-110 transition-all duration-300 hover:cosmic-glow group"
                title="Google Scholar"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <GraduationCap className="w-6 h-6 group-hover:text-yellow-400 transition-colors" />
              </motion.a>
              <motion.a
                href="https://x.com/aaron1_z"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect-strong rounded-full p-4 hover:scale-110 transition-all duration-300 hover:cosmic-glow group"
                title="X (Twitter)"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://orcid.org/0000-0002-0961-5226"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect-strong rounded-full p-4 hover:scale-110 transition-all duration-300 hover:cosmic-glow group"
                title="ORCID"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
              <motion.a
                href="mailto:adityakittu2773@gmail.com"
                className="glass-effect-strong rounded-full p-4 hover:scale-110 transition-all duration-300 hover:cosmic-glow group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-6 h-6 group-hover:text-pink-400 transition-colors" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-purple-500/50 to-transparent" />
          <motion.div
            className="w-2 h-2 rounded-full bg-purple-400"
            animate={{
              boxShadow: [
                '0 0 10px rgba(139, 92, 246, 0.5)',
                '0 0 20px rgba(139, 92, 246, 0.8)',
                '0 0 10px rgba(139, 92, 246, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
