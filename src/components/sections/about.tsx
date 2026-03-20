import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal, StaggerReveal, StaggerItem } from '@/components/ui/reveal';
import { Check } from 'lucide-react';
import images from '@/app/lib/placeholder-images.json';

const features = [
  'Luxury Hotel Amenities',
  'Privacy and Comfort of Home',
  'Fully-Serviced B&B Experience',
  'Ideal for Short & Long-Term Stays'
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 ambient-gradient" aria-hidden="true" />

      <div className="container-luxury relative">
        <Reveal>
          <SectionHeading
            eyebrow="Our Legacy"
            title="A New Standard of Luxury"
            subtitle="Discover Kampala's finest fully-serviced B&B experience, where luxury meets the comfort of home."
          />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal direction="left" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src={images.about.url}
                    alt={images.about.alt}
                    width={images.about.width}
                    height={images.about.height}
                    className="object-cover w-full h-full"
                    data-ai-hint={images.about.hint}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent/30 rounded-sm" aria-hidden="true" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border border-primary/20 rounded-sm" aria-hidden="true" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.3}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-[55ch]">
                Born from a vision to redefine luxury stays in Kampala, Purple Deluxe Apartments offers an exceptional alternative to traditional hotels. We provide premium furnished apartments that combine the best of both worlds.
              </p>
            </Reveal>

            <StaggerReveal className="mt-10 space-y-5" stagger={0.08}>
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border border-accent/40 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-base font-medium text-foreground/90">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>

            <Reveal delay={0.5}>
              <p className="mt-10 text-base text-muted-foreground leading-relaxed max-w-[55ch]">
                Nestled in the serene neighborhood of Kyanja, our furnished apartments provide a tranquil escape from the city&apos;s hustle while keeping you connected to its vibrant heart. Each of our B&amp;B units is designed to be your personal sanctuary, offering a seamless blend of elegance and practicality for a truly memorable stay.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="mt-12 gold-accent-line max-w-[120px]" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
