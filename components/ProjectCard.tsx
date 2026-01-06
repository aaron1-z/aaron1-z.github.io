'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Star, GitFork, Code2 } from 'lucide-react'

interface ProjectCardProps {
  name: string
  description: string
  url: string
  language: string | null
  stars: number
  forks: number
  index: number
}

export default function ProjectCard({
  name,
  description,
  url,
  language,
  stars,
  forks,
  index,
}: ProjectCardProps) {
  const languageColors: { [key: string]: string } = {
    TypeScript: 'bg-blue-500',
    JavaScript: 'bg-yellow-500',
    Python: 'bg-green-500',
    Java: 'bg-orange-500',
    'C++': 'bg-blue-600',
    PHP: 'bg-purple-500',
    Go: 'bg-cyan-500',
    Rust: 'bg-orange-600',
    Solidity: 'bg-gray-400',
    Dart: 'bg-blue-400',
    Motoko: 'bg-purple-400',
    'Jupyter Notebook': 'bg-orange-500',
    default: 'bg-purple-400',
  }

  const langColor = language ? languageColors[language] || languageColors.default : 'bg-purple-400'

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <div className="glass-effect-strong rounded-2xl p-6 h-full transition-all duration-300 relative overflow-hidden group-hover:border-purple-500/40 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-pink-500/0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          initial={false}
        />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="flex-shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm">
                <Code2 className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold gradient-text truncate">{name}</h3>
            </div>
            <motion.div
              className="flex-shrink-0"
              whileHover={{ rotate: 45, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
            </motion.div>
          </div>
          
          <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed text-sm">{description}</p>
          
          <div className="flex items-center justify-between pt-5 border-t border-white/5 group-hover:border-purple-500/20 transition-colors">
            <div className="flex items-center gap-4 flex-wrap">
              {language && (
                <span className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                  <span className={`w-2.5 h-2.5 rounded-full ${langColor} shadow-sm`}></span>
                  <span>{language}</span>
                </span>
              )}
              <span className="flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-yellow-400 transition-colors">
                <Star className="w-3.5 h-3.5 fill-yellow-400/30 group-hover:fill-yellow-400/60 transition-colors" />
                <span>{stars}</span>
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-blue-400 transition-colors">
                <GitFork className="w-3.5 h-3.5" />
                <span>{forks}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0 blur-xl" />
        </div>
      </div>
    </motion.a>
  )
}

