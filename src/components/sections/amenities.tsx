'use client';

import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal, StaggerReveal, StaggerItem } from '@/components/ui/reveal';
import { Wifi, ShieldCheck, Car, Tv } from 'lucide-react';
import { motion } from 'framer-motion';

const amenities = [
  { icon: Wifi, name: 'High-Speed Wi-Fi' },
  { icon: ShieldCheck, name: '24/7 Security' },
  { icon: Car, name: 'Secure Parking' },
  { icon: Tv, name: 'DSTV' },
];

export default function Amenities() {
  return (
    <section id="amenities" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px] translate-x-1/3 translate-y-1/3" aria-hidden="true" />

      <div className="container-luxury relative">
        <Reveal>
          <SectionHeading
            eyebrow="Comforts"
            title="World-Class Amenities"
            subtitle="Indulge in a suite of amenities designed to cater to your every desire and ensure absolute comfort."
          />
        </Reveal>

        <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" stagger={0.1}>
          {amenities.map((amenity, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 md:p-10 text-center border border-border/40 rounded-sm bg-card/30 backdrop-blur-sm hover:border-accent/40 transition-colors duration-500"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="mx-auto w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center mb-5 group-hover:border-accent/60 group-hover:bg-accent/5 transition-all duration-500">
                  <amenity.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-medium text-foreground/90 tracking-wide">
                  {amenity.name}
                </h3>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
