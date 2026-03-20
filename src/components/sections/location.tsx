'use client';

import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal, StaggerReveal, StaggerItem } from '@/components/ui/reveal';
import { MapPin, ArrowRight } from 'lucide-react';
import images from '@/app/lib/placeholder-images.json';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { motion } from 'framer-motion';

const landmarks = [
  { name: 'Acacia Mall', distance: '15 min drive' },
  { name: 'Uganda Museum', distance: '20 min drive' },
  { name: 'Kasubi Tombs', distance: '25 min drive' },
];

export default function Location() {
  return (
    <section id="location" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-background/50" aria-hidden="true" />

      <div className="container-luxury relative">
        <Reveal>
          <SectionHeading
            eyebrow="Location"
            title="Discover Kampala from Our Doorstep"
            subtitle="Perfectly positioned in Kyanja, our serene location offers both tranquility and convenient access to the vibrant life of Uganda's capital."
          />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-0">
          <Reveal direction="left" delay={0.2} className="lg:col-span-7">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden rounded-sm lg:rounded-r-none">
              <Image
                src={images.location.url}
                alt={images.location.alt}
                width={images.location.width}
                height={images.location.height}
                className="object-cover w-full h-full"
                data-ai-hint={images.location.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-secondary/30 hidden lg:block" />
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.3} className="lg:col-span-5">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full bg-card/30 backdrop-blur-sm border border-border/30 rounded-sm lg:rounded-l-none lg:border-l-0">
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-5 leading-tight">
                Your Gateway to{' '}
                <span className="text-gradient-gold">Adventure</span>
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Whether you seek bustling markets, historic sites, or chic cafes, the best of Kampala is just moments away.
              </p>

              <StaggerReveal className="space-y-5 mb-10" stagger={0.1}>
                {landmarks.map((landmark, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center justify-between py-3 border-b border-border/30 last:border-0">
                      <span className="font-medium text-foreground/90">{landmark.name}</span>
                      <span className="text-sm text-muted-foreground">{landmark.distance}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerReveal>

              <MagneticButton
                href="https://www.google.com/maps/search/?api=1&query=Purple+Deluxe+Apartments+Kyanja+Kampala"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground text-sm font-medium rounded-full shadow-lg shadow-accent/20 hover:bg-accent/90 transition-colors duration-300"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
