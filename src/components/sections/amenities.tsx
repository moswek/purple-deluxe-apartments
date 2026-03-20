import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi, ShieldCheck, Car, Tv } from 'lucide-react';

const amenities = [
  { icon: Wifi, name: 'High-Speed Wi-Fi' },
  { icon: ShieldCheck, name: '24/7 Security' },
  { icon: Car, name: 'Secure Parking' },
  { icon: Tv, name: 'DSTV' },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="World-Class Amenities"
          subtitle="Indulge in a suite of amenities designed to cater to your every desire and ensure absolute comfort."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {amenities.map((amenity, index) => (
            <Card key={index} className="text-center p-6 lg:p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 rounded-2xl glass-card">
              <CardContent className="p-0 flex flex-col items-center justify-center gap-4">
                <div className="bg-primary/10 text-primary rounded-full p-4">
                  <amenity.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{amenity.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
