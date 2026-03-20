'use client';

import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Phone } from 'lucide-react';
import images from '@/app/lib/placeholder-images.json';

const suites = [
  {
    name: 'The Royal Sovereign',
    description: 'A suite designed for kings and queens, offering panoramic city views and unparalleled luxury.',
    images: images.suites.royalSovereign,
  },
  {
    name: 'The Golden Crest',
    description: 'Bathed in warm, golden hues, this suite is a haven of comfort and opulent design.',
    images: images.suites.goldenCrest,
  },
  {
    name: 'The Amethyst Dream',
    description: 'Immerse yourself in the calming embrace of amethyst tones in this spacious and serene retreat.',
    images: images.suites.amethystDream,
  },
];

function SuiteImageCarousel({
  images,
  name,
}: {
  images: { url: string; hint: string }[];
  name: string;
}) {
  const plugin = React.useRef(Autoplay({ delay: 4000 }));

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {images.map((image, imgIndex) => (
          <CarouselItem key={imgIndex}>
            <Image
              src={image.url}
              alt={`${name} view ${imgIndex + 1}`}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
              data-ai-hint={image.hint}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default function Suites() {
  return (
    <section id="suites" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Exquisite Suites"
          subtitle="Each suite is a masterpiece of design, offering a unique narrative of luxury and comfort."
        />
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {suites.map((suite, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="h-full flex flex-col transition-shadow duration-300 rounded-2xl border-0 overflow-hidden">
                  <CardHeader className="p-0 relative rounded-t-2xl overflow-hidden">
                    <SuiteImageCarousel images={suite.images} name={suite.name} />
                  </CardHeader>
                  <CardContent className="p-0 flex-grow flex flex-col">
                    <div className="p-6 flex-grow">
                      <CardTitle className="text-2xl mb-2 text-primary">{suite.name}</CardTitle>
                      <CardDescription className="text-base text-muted-foreground">{suite.description}</CardDescription>
                    </div>
                  </CardContent>
                  <CardFooter className="p-0 rounded-b-2xl">
                    <div className="p-6 pt-0 w-full">
                      <Button asChild className="w-full">
                        <a href="tel:+256780876369">
                          <Phone className="mr-2 h-4 w-4" />
                          Call to Book
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="sm:hidden absolute inset-x-0 top-1/3 -translate-y-1/2 flex items-center justify-between px-2">
            <CarouselPrevious className="static translate-y-0 w-10 h-10 bg-black/30 hover:bg-black/50 border-white/40 text-white" />
            <CarouselNext className="static translate-y-0 w-10 h-10 bg-black/30 hover:bg-black/50 border-white/40 text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
