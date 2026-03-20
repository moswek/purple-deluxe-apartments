import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Suites from '@/components/sections/suites';
import Amenities from '@/components/sections/amenities';
import Location from '@/components/sections/location';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Suites />
      <Amenities />
      <Location />
    </>
  );
}
