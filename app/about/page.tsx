'use client'

import { motion } from 'framer-motion'
import StarsBackground from '@/components/StarsBackground'
import { User, Book, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen relative pt-20">
      <StarsBackground />
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500/50 to-purple-500" />
              <User className="w-6 h-6 text-purple-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-500/50 to-purple-500" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4 tracking-tight">
              About
            </h1>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              className="glass-effect-strong rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold gradient-text mb-4 flex items-center gap-3">
                <User className="w-6 h-6" />
                Profile
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm Aditya Singh, a Developer, Researcher, and Published Author passionate about 
                exploring the intersection of technology and innovation. I enjoy learning new 
                technologies and experimenting with their practical applications across various 
                domains including AI, blockchain, quantum computing, and full-stack development.
              </p>
            </motion.div>

            <motion.div
              className="glass-effect-strong rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold gradient-text mb-4 flex items-center gap-3">
                <Book className="w-6 h-6" />
                Research & Publications
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a researcher, I've contributed to several publications and continue to explore 
                innovative solutions to complex problems. My work spans multiple disciplines, 
                reflecting my interdisciplinary approach to technology and research.
              </p>
              <div className="space-y-2 text-gray-400">
                <p>• Published Author in peer-reviewed journals</p>
                <p>• Active researcher in quantum computing and AI</p>
                <p>• Contributor to open-source projects</p>
              </div>
            </motion.div>

            <motion.div
              className="glass-effect-strong rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold gradient-text mb-4 flex items-center gap-3">
                <Award className="w-6 h-6" />
                Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-purple-400">Development</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Full-Stack Development</li>
                    <li>• Blockchain & Web3</li>
                    <li>• AI/ML Applications</li>
                    <li>• Quantum Computing</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-blue-400">Research</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Quantum Algorithms</li>
                    <li>• Machine Learning</li>
                    <li>• Distributed Systems</li>
                    <li>• Academic Publishing</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
