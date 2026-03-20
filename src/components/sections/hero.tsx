'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Eye, ChevronDown, Phone } from 'lucide-react';
import images from '@/app/lib/placeholder-images.json';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      </div>

      <div className="relative z-10 p-4 text-white h-full flex flex-col justify-center items-center">
        <div className="flex-grow flex flex-col justify-center items-center max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            Purple Deluxe Apartments
          </h1>
          <p
            className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white/90"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            Experience Royal Indulgence. Your exclusive sanctuary in the heart of Kampala.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="tel:+256780876369">
                <Phone className="h-5 w-5 mr-2" />
                Call to Book
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">
              <Link href="#suites">
                <Eye className="h-5 w-5 mr-2" />
                View Suites
              </Link>
            </Button>
          </div>
        </div>
        
        <Link href="#about" className="absolute bottom-10 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
          <span className="sr-only">Scroll down</span>
        </Link>
      </div>
    </section>
  );
}
