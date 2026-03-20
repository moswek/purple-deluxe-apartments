'use client';

import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Reveal, StaggerReveal, StaggerItem } from '@/components/ui/reveal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Phone } from 'lucide-react';
import images from '@/app/lib/placeholder-images.json';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { motion } from 'framer-motion';

const suites = [
  {
    name: 'The Royal Sovereign',
    description: 'A suite designed for kings and queens, offering panoramic city views and unparalleled luxury.',
    images: images.suites.royalSovereign,
    tag: 'Signature',
  },
  {
    name: 'The Golden Crest',
    description: 'Bathed in warm, golden hues, this suite is a haven of comfort and opulent design.',
    images: images.suites.goldenCrest,
    tag: 'Popular',
  },
  {
    name: 'The Amethyst Dream',
    description: 'Immerse yourself in the calming embrace of amethyst tones in this spacious and serene retreat.',
    images: images.suites.amethystDream,
    tag: 'Exclusive',
  },
];

function SuiteImageCarousel({
  images,
  name,
}: {
  images: { url: string; hint: string }[];
  name: string;
}) {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className="w-full"
    >
      <CarouselContent>
        {images.map((image, imgIndex) => (
          <CarouselItem key={imgIndex}>
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={image.url}
                alt={`${name} view ${imgIndex + 1}`}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                data-ai-hint={image.hint}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default function Suites() {
  return (
    <section id="suites" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

      <div className="container-luxury relative">
        <Reveal>
          <SectionHeading
            eyebrow="Accommodations"
            title="Our Exquisite Suites"
            subtitle="Each suite is a masterpiece of design, offering a unique narrative of luxury and comfort."
          />
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.15}>
          {suites.map((suite, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-sm overflow-hidden"
              >
                <div className="relative">
                  <SuiteImageCarousel images={suite.images} name={suite.name} />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-medium bg-accent/90 text-accent-foreground rounded-sm">
                      {suite.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    {suite.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {suite.description}
                  </p>
                  <MagneticButton
                    href="tel:+256780876369"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium bg-muted/80 text-foreground rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Call to Book
                  </MagneticButton>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
