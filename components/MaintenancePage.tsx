'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function MaintenancePage() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [0, -20, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const glassVariants = {
    initial: { opacity: 0.5, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#f4f6f4] via-white to-[#e7ece8] flex items-center justify-center px-4 py-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glassy orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-[#e7ece8] to-[#d7dfda] rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2.5 }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-[#d7dfda] to-[#e7ece8] rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 3 }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-[#e7ece8] via-white to-[#d7dfda] rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isReady ? 'visible' : 'hidden'}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* Logo */}
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className="mb-8 flex justify-center"
        >
          <motion.div
            variants={glassVariants}
            initial="initial"
            animate="animate"
            className="p-6 rounded-3xl backdrop-blur-2xl bg-white/20 border border-white/40 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          >
            <Image
              src="/images/logo.svg"
              alt="WorkLoad HQ"
              width={80}
              height={80}
              className="w-20 h-20"
            />
          </motion.div>
        </motion.div>

        {/* Glassy card container */}
        <motion.div
          variants={glassVariants}
          initial="initial"
          animate="animate"
          className="p-8 md:p-12 rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-white/40 to-white/20 border border-white/50 shadow-2xl"
          style={{
            boxShadow:
              '0 8px 32px rgba(26, 36, 31, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.5)',
          }}
        >
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#1a241f] mb-4"
          >
            We're Polishing Our Craft
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#1a241f]/80 mb-8 leading-relaxed"
          >
            Our site is undergoing maintenance. We're making improvements to deliver you an even better experience. We'll be back soon!
          </motion.p>

          {/* Status indicator */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-gradient-to-r from-[#1a241f] to-[#d7dfda] rounded-full"
            />
            <span className="text-sm md:text-base text-[#1a241f]/70 font-medium">
              Maintenance in progress
            </span>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={itemVariants}
            className="space-y-3 mb-8 text-left"
          >
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/20 backdrop-blur-lg">
              <span className="text-[#1a241f] font-bold mt-0.5">•</span>
              <span className="text-sm text-[#1a241f]/80">
                Redesigning for better performance
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/20 backdrop-blur-lg">
              <span className="text-[#1a241f] font-bold mt-0.5">•</span>
              <span className="text-sm text-[#1a241f]/80">
                Enhanced features and functionality
              </span>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/20 backdrop-blur-lg">
              <span className="text-[#1a241f] font-bold mt-0.5">•</span>
              <span className="text-sm text-[#1a241f]/80">
                Polishing the visual experience
              </span>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div variants={itemVariants} className="space-y-3">
            <p className="text-sm text-[#1a241f]/70">
              Have questions? Reach out to us:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:workloadhq@gmail.com"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#1a241f] to-[#1a241f]/80 text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/234"
                className="inline-block px-8 py-3 rounded-full bg-white/20 backdrop-blur-lg border border-white/40 text-[#1a241f] font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative 3D elements */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-[#d7dfda] to-[#1a241f]/30"
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Prefers-reduced-motion support */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
