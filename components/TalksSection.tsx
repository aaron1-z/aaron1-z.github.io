'use client'

import { motion } from 'framer-motion'
import { Mic, Youtube } from 'lucide-react'

export default function TalksSection() {
  return (
    <section id="talks" className="py-24 px-4 relative">
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
            <Mic className="w-6 h-6 text-purple-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-500/50 to-purple-500" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold gradient-text mb-6 tracking-tight text-center">
            Talks
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-6" />
          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Invited talks on technology, research, and innovation
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="glass-effect-strong rounded-2xl p-6 md:p-8 overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                  <Youtube className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">Invited Talk</h3>
                  <p className="text-sm text-purple-400/80 mt-1">Live Talk</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I was invited to deliver a talk on technology, research, and innovation, covering key themes within my field of expertise. The session explored the intersection of emerging technologies and their practical, real-world applications.
              </p>
            </div>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/20">
              <iframe
                src="https://www.youtube.com/embed/g2bR5sw11l0?si=Tv31KsGfCKDmmjz4"
                title="Invited Talk - Aditya Singh"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

