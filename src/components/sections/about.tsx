import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
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
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="A New Standard of Luxury" 
          subtitle="Discover Kampala's finest fully-serviced B&B experience, where luxury meets the comfort of home."
        />
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Born from a vision to redefine luxury stays in Kampala, Purple Deluxe Apartments offers an exceptional alternative to traditional hotels. We provide premium <strong>furnished apartments</strong> that combine the best of both worlds.
            </p>
            <ul className="space-y-3 my-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Check className="w-4 h-4"/>
                  </div>
                  <span className="font-medium text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <p>
              Nestled in the serene neighborhood of Kyanja, our furnished apartments provide a tranquil escape from the city&apos;s hustle while keeping you connected to its vibrant heart. Each of our B&amp;B units is designed to be your personal sanctuary, offering a seamless blend of elegance and practicality for a truly memorable stay.
            </p>
          </div>
          <div>
            <Card className="overflow-hidden shadow-2xl rounded-2xl border-0">
              <CardContent className="p-0">
                <Image
                  src={images.about.url}
                  alt={images.about.alt}
                  width={images.about.width}
                  height={images.about.height}
                  className="object-cover w-full h-full"
                  data-ai-hint={images.about.hint}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
