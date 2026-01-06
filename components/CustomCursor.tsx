'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.3 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseDown = () => setIsHovering(true)
    const handleMouseUp = () => setIsHovering(false)

    const handleLinkEnter = () => setIsHovering(true)
    const handleLinkLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    const links = document.querySelectorAll('a, button, [role="button"]')
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkEnter)
      link.addEventListener('mouseleave', handleLinkLeave)
    })

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkEnter)
        link.removeEventListener('mouseleave', handleLinkLeave)
      })
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            width: isHovering ? '28px' : '20px',
            height: isHovering ? '28px' : '20px',
            translateX: '-50%',
            translateY: '-50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)',
            filter: 'blur(3px)',
          }}
          animate={{
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            width: isHovering ? '6px' : '4px',
            height: isHovering ? '6px' : '4px',
            translateX: '-50%',
            translateY: '-50%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(139, 92, 246, 0.7) 60%, rgba(59, 130, 246, 0.4) 100%)',
            boxShadow: '0 0 8px rgba(139, 92, 246, 0.6), 0 0 16px rgba(59, 130, 246, 0.3), 0 0 24px rgba(236, 72, 153, 0.2)',
          }}
          animate={{
            opacity: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {isHovering && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              width: '2px',
              height: '2px',
              translateX: '-50%',
              translateY: '-50%',
              background: 'rgba(255, 255, 255, 0.9)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            width: '3px',
            height: '3px',
            translateX: '-50%',
            translateY: '-50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 80%)',
            filter: 'blur(1px)',
          }}
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{ 
            opacity: [0.5, 0, 0],
            scale: [0.8, 1.5, 2],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.5, 1],
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            width: '2px',
            height: '2px',
            translateX: '-50%',
            translateY: '-50%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 80%)',
            filter: 'blur(1.5px)',
          }}
          initial={{ opacity: 0.4, scale: 0.6 }}
          animate={{ 
            opacity: [0.4, 0, 0],
            scale: [0.6, 2, 3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.15,
            times: [0, 0.4, 1],
          }}
        />
      </motion.div>
    </>
  )
}

