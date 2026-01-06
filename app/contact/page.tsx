'use client'

import { motion } from 'framer-motion'
import StarsBackground from '@/components/StarsBackground'
import { Mail, Github, Linkedin, ExternalLink, GraduationCap } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen relative pt-20">
      <StarsBackground />
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500/50 to-purple-500" />
              <Mail className="w-6 h-6 text-purple-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-500/50 to-purple-500" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4 tracking-tight">
              Contact
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.a
              href="mailto:adityakittu2773@gmail.com"
              className="glass-effect-strong rounded-2xl p-6 hover:border-purple-500/40 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold gradient-text">Email</h3>
              </div>
              <p className="text-gray-300 text-sm">adityakittu2773@gmail.com</p>
            </motion.a>

            <motion.a
              href="https://github.com/aaron1-z"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect-strong rounded-2xl p-6 hover:border-purple-500/40 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all">
                  <Github className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold gradient-text">GitHub</h3>
              </div>
              <p className="text-gray-300 text-sm">aaron1-z</p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/aditya-singh-1z"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect-strong rounded-2xl p-6 hover:border-purple-500/40 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all">
                  <Linkedin className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold gradient-text">LinkedIn</h3>
              </div>
              <p className="text-gray-300 text-sm">aditya-singh-1z</p>
            </motion.a>

            <motion.a
              href="https://scholar.google.com/citations?user=igxfu80AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect-strong rounded-2xl p-6 hover:border-purple-500/40 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold gradient-text">Scholar</h3>
              </div>
              <p className="text-gray-300 text-sm">Google Scholar</p>
            </motion.a>

            <motion.a
              href="https://x.com/aaron1_z"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect-strong rounded-2xl p-6 hover:border-purple-500/40 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all">
                  <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold gradient-text">X</h3>
              </div>
              <p className="text-gray-300 text-sm">@aaron1_z</p>
            </motion.a>

            <motion.a
              href="https://orcid.org/0000-0002-0961-5226"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect-strong rounded-2xl p-6 hover:border-purple-500/40 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all">
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold gradient-text">ORCID</h3>
              </div>
              <p className="text-gray-300 text-sm font-mono text-xs">0000-0002-0961-5226</p>
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  )
}
