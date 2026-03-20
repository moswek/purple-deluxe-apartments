import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import images from '@/app/lib/placeholder-images.json';

export default function Location() {
  return (
    <section id="location" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Discover Kampala from Our Doorstep"
          subtitle="Perfectly positioned in Kyanja, our serene location offers both tranquility and convenient access to the vibrant life of Uganda's capital."
        />
        <Card className="overflow-hidden shadow-2xl rounded-2xl border-0 bg-card/60 backdrop-blur-xl">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3">
                <Image
                  src={images.location.url}
                  alt={images.location.alt}
                  width={images.location.width}
                  height={images.location.height}
                  className="object-cover w-full h-full min-h-[400px]"
                  data-ai-hint={images.location.hint}
                />
              </div>
              <div className="md:col-span-2 bg-secondary/80 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  Your Gateway to Adventure
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Whether you seek bustling markets, historic sites, or chic cafes, the best of Kampala is just moments away.
                </p>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-primary">Acacia Mall:</span>
                    <span className="text-muted-foreground">15 min drive</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <span className="font-semibold text-primary">Uganda Museum:</span>
                     <span className="text-muted-foreground">20 min drive</span>
                  </div>
                   <div className="flex items-center gap-3">
                     <span className="font-semibold text-primary">Kasubi Tombs:</span>
                     <span className="text-muted-foreground">25 min drive</span>
                  </div>
                </div>
                <Button asChild className="mt-8" size="lg">
                  <a href="https://www.google.com/maps/search/?api=1&query=Purple+Deluxe+Apartments+Kyanja+Kampala" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
