'use client'

import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import Image from 'next/image'

interface Book {
  title: string
  subtitle?: string
  description: string
  coverImage: string
}

const books: Book[] = [
  {
    title: 'Exogenesis Vortex',
    description: 'Kaenova, a bio-engineered fugitive spliced with the code of godlike Architects who sculpt reality itself, escapes her creators\' tyranny only to find herself hunted across the stars. Haunted by visions of a shattered glass planet, Eidolon, she allies with Thalia—a memory thief haunted by her brother\'s ghost—and Jyran—a soldier who witnessed his world erased—to uncover the Vortex, a sentient cosmic storm offering power at a apocalyptic cost. To destroy the Architects, Kaenova must merge with the Vortex\'s chaos, but its hunger for destruction rivals her thirst for freedom. As reality fractures and her own DNA threatens to reboot the universe, Kaenova faces an impossible choice: become the Architects\' perfect weapon or burn existence to ashes in a rebellion that could birth something new—or end everything.',
    coverImage: '/book-covers/exogenesis-vortex.jpg',
  },
  {
    title: 'Musings of Enlightened Generation',
    description: 'Step into a realm where introspection meets innovation, and ancient wisdom intertwines with modern insight. These musings offer a glimpse into the collective psyche of an enlightened generation, individuals adept at navigating life\'s complexities with a blend of profound wisdom and unbridled curiosity. Here, we embark on an exploration of the human experience, delving into the depths of existential contemplation and soaring to the heights of creative expression. We ponder the very fabric of reality, contemplating the essence of existence and the intricate connections that bind us all.',
    coverImage: '/book-covers/musings-enlightened-generation.jpg',
  },
  {
    title: 'Morphic Chronicles',
    subtitle: 'The Singularity Convergence',
    description: 'A spellbinding saga that explores the frontiers of human consciousness, inviting readers on a thought-provoking quest to uncover the ultimate truth of existence. Prepare to be transported to a world where reality is a tapestry of memories, and the boundaries of the mind are as limitless as the cosmos itself.',
    coverImage: '/book-covers/morphic-chronicles.jpg',
  },
  {
    title: 'Chronergy Nexus',
    subtitle: 'The Trifold Temporal Paradigm',
    description: 'In the vast expanse of cosmic exploration, a profound reimagining of the universe\'s origins and evolution beckons our intellectual curiosity. Within these pages unfolds a quest that transcends conventional boundaries, delving into the intricate interplay of time and energy that influences the very essence of existence. Anchored in Einstein\'s groundbreaking theory of relativity, this journey reveals a tapestry of revelations woven by the symphonic dynamics of fundamental forces. Central to this exploration is "The Trifold Temporal Paradigm," intricately weaving Forward Time, Backward Time, and Cyclic Time into a symphony of distinct patterns. Beyond theoretical discourse, this expedition illuminates the enigmatic genesis of the universe, its complex evolution, and the harmonious rhythm that echoes throughout cosmic epochs.',
    coverImage: '/book-covers/chronergy-nexus.jpg',
  },
  {
    title: 'Quantum Reunion',
    subtitle: 'The 2096 Tale',
    description: 'A thrilling and thought-provoking ebook that immerses readers in a world of extraordinary technological wonders, deep philosophical questions, and the indomitable spirit of exploration. It invites you to ponder the possibilities of a future where science and humanity intertwine, where friendships are tested, and where the quest for knowledge transcends the boundaries of time and space.',
    coverImage: '/book-covers/quantum-reunion.jpg',
  },
]

function BookCard({ book, index }: { book: Book; index: number }) {
  return (
    <motion.div
      className="glass-effect-strong rounded-2xl overflow-hidden transition-all duration-300 relative group hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className="relative w-full aspect-[2/3] overflow-hidden bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-pink-900/10">
        <Image
          src={book.coverImage}
          alt={`${book.title}${book.subtitle ? ` - ${book.subtitle}` : ''} cover`}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3}
          unoptimized
        />
      </div>

      <div className="p-6 relative z-10 flex-1 flex flex-col">
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20">
              <BookOpen className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold gradient-text">{book.title}</h3>
          </div>
          {book.subtitle && (
            <p className="text-sm text-purple-400/80 ml-11 italic">{book.subtitle}</p>
          )}
        </div>
        
        <p className="text-gray-300 leading-relaxed text-sm line-clamp-4 mb-4 flex-1">
          {book.description}
        </p>

        <div className="pt-4 border-t border-white/5 group-hover:border-purple-500/20 transition-colors">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="text-purple-400">Author:</span>
            <span>Aditya Singh</span>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-pink-500/0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        initial={false}
      />

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0 blur-xl" />
      </div>
    </motion.div>
  )
}

export default function BooksSection() {
  return (
    <section id="books" className="py-24 px-4 relative">
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
            <BookOpen className="w-6 h-6 text-purple-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-500/50 to-purple-500" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold gradient-text mb-6 tracking-tight text-center">
            Published Works
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-6" />
          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A collection of thought-provoking works exploring consciousness, quantum physics, temporal dynamics, and the frontiers of human understanding
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <BookCard key={book.title} book={book} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

