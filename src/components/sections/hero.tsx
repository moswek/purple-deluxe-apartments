'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, ChevronDown, Phone } from 'lucide-react';
import images from '@/app/lib/placeholder-images.json';
import { MagneticButton } from '@/components/ui/magnetic-button';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src={images.hero.url}
          alt={images.hero.alt}
          fill
          className="object-cover"
          data-ai-hint={images.hero.hint}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      <div className="container-luxury relative z-10 w-full pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-xs tracking-[0.4em] uppercase text-accent font-medium mb-6">
              Luxury Serviced Apartments in Kampala
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] text-white"
          >
            Purple Deluxe{' '}
            <span className="text-gradient-gold">Apartments</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg md:text-xl max-w-xl text-white/70 font-light leading-relaxed"
          >
            Experience royal indulgence. Your exclusive sanctuary in the heart of Kampala, where elegance meets the warmth of home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <MagneticButton
              href="tel:+256780876369"
              className="inline-flex items-center gap-3 px-9 py-4 bg-accent text-accent-foreground text-base font-medium rounded-full shadow-2xl shadow-accent/30 hover:bg-accent/90 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              Call to Book
            </MagneticButton>

            <Link
              href="#suites"
              className="inline-flex items-center gap-3 px-9 py-4 text-base font-medium text-white/90 border border-white/25 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
            >
              <Eye className="w-4 h-4" />
              View Suites
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link href="#about" className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors group">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
