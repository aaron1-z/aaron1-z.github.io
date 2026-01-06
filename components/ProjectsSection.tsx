'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { Code2, Loader2 } from 'lucide-react'

interface Repository {
  id: number
  name: string
  description: string
  url: string
  language: string | null
  stars: number
  forks: number
  created_at: string
  updated_at: string
}

export default function ProjectsSection() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('/api/github')
        if (!response.ok) throw new Error('Failed to fetch repositories')
        const data = await response.json()
        setRepos(data.repos)
      } catch (err) {
        setError('Failed to load projects')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500/50 to-purple-500" />
            <Code2 className="w-6 h-6 text-purple-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-500/50 to-purple-500" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold gradient-text mb-6 tracking-tight text-center">
            Projects
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-6" />
          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A curated selection of innovative projects spanning AI, blockchain, quantum computing, and full-stack development
          </motion.p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-32">
            <motion.div
              className="flex flex-col items-center gap-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Loader2 className="w-10 h-10 animate-spin text-purple-400" />
              <p className="text-gray-400 text-sm">Loading repositories...</p>
            </motion.div>
          </div>
        ) : error ? (
          <div className="text-center py-32">
            <div className="glass-effect-strong rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-red-400 text-lg">{error}</p>
              <p className="text-gray-400 text-sm mt-2">Please try again later</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {repos.map((repo, index) => (
              <ProjectCard key={repo.id} {...repo} index={index} />
            ))}
          </div>
        )}

        {!loading && !error && repos.length > 0 && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/aaron1-z?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 glass-effect-strong px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 hover:cosmic-glow group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="gradient-text font-semibold">Explore All Repositories</span>
              <Code2 className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform" />
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  )
}

