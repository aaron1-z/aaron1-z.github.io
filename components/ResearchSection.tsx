'use client'

import { motion } from 'framer-motion'
import { FileText, ExternalLink, Calendar, Users } from 'lucide-react'

interface ResearchPaper {
  title: string
  publicationType: string
  date: string
  doi?: string
  contributors: string
  journal?: string
}

const papers: ResearchPaper[] = [
  {
    title: 'Advancing Machine Learning with Memristor-Based Nanodevices: Unlocking Energy-Efficient and Scalable Architectures',
    publicationType: 'Preprint',
    date: '2024-09-19',
    doi: '10.31219/osf.io/9uets',
    contributors: 'Emily Zhang, Yi, Aditya Singh',
  },
  {
    title: 'Hybrid Intelligent Systems for Non-linear Dynamical Systems',
    publicationType: 'Journal Article',
    date: '2023-06-14',
    doi: '10.59615/ijie.3.1.55',
    journal: 'International Journal of Innovation in Engineering',
    contributors: 'Aditya Singh',
  },
  {
    title: 'Theory of Extensive Relativity',
    publicationType: 'Journal Article',
    date: '2023-05-25',
    doi: '10.5281/ZENODO.7971724',
    journal: 'International Journal of Scientific Research and Engineering Development',
    contributors: 'Aditya Singh',
  },
  {
    title: 'The Three Clocks Theory',
    publicationType: 'Journal Article',
    date: '2023-01-10',
    doi: '10.5281/ZENODO.7521534',
    journal: 'International Journal of Scientific Research and Engineering Development',
    contributors: 'Aditya Singh',
  },
]

function PaperCard({ paper, index }: { paper: ResearchPaper; index: number }) {
  const doiUrl = paper.doi ? `https://doi.org/${paper.doi}` : null

  return (
    <motion.div
      className="glass-effect-strong rounded-2xl p-6 h-full transition-all duration-300 relative overflow-hidden group hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-pink-500/0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        initial={false}
      />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20">
              <FileText className="w-5 h-5 text-purple-400" />
            </div>
            <div className="flex-1">
              <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                {paper.publicationType}
              </span>
            </div>
          </div>
          {doiUrl && (
            <motion.a
              href={doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: 45, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
            </motion.a>
          )}
        </div>

        <h3 className="text-xl font-bold gradient-text mb-4 group-hover:text-purple-400 transition-colors">
          {paper.title}
        </h3>

        {paper.journal && (
          <p className="text-sm text-purple-400/80 mb-3 italic">{paper.journal}</p>
        )}

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span>{new Date(paper.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Users className="w-4 h-4 text-purple-400" />
            <span>{paper.contributors}</span>
          </div>
          {paper.doi && (
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FileText className="w-4 h-4 text-purple-400" />
              <span className="font-mono">DOI: {paper.doi}</span>
            </div>
          )}
        </div>

        {doiUrl && (
          <div className="pt-4 border-t border-white/5 group-hover:border-purple-500/20 transition-colors">
            <a
              href={doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              View Publication
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0 blur-xl" />
      </div>
    </motion.div>
  )
}

export default function ResearchSection() {
  return (
    <section id="research" className="py-24 px-4 relative">
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
            <FileText className="w-6 h-6 text-purple-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-500/50 to-purple-500" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold gradient-text mb-6 tracking-tight text-center">
            Research
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-6" />
          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Published research papers exploring machine learning, intelligent systems, and theoretical physics
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {papers.map((paper, index) => (
            <PaperCard key={paper.doi || paper.title} paper={paper} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://scholar.google.com/citations?user=igxfu80AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 glass-effect-strong px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 hover:cosmic-glow group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform" />
            <span className="gradient-text font-semibold">View Google Scholar Profile</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

