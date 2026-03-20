
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'Our Legacy' },
  { href: '#suites', label: 'Suites' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#location', label: 'Explore' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const defaultLogo = "https://i.imgur.com/VZUjDDF.png"; // Corrected White logo
  const scrolledLogo = "https://i.imgur.com/MxcLLQ7.png"; // Dark logo

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-header shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between md:grid md:grid-cols-3">
          <div className="md:justify-self-start">
             <Link href="/" className="flex items-center gap-3" aria-label="Purple Deluxe Apartments Home">
                <Image
                    src={isScrolled ? scrolledLogo : defaultLogo}
                    alt="Purple Deluxe Apartments Logo"
                    width={220}
                    height={44}
                    className="transition-opacity duration-300"
                    priority
                />
            </Link>
          </div>

          <nav className="hidden md:flex justify-self-center items-center space-x-2 bg-white/20 backdrop-blur-md p-1 rounded-full whitespace-nowrap">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors px-3 py-1.5 rounded-full",
                  isScrolled ? "text-foreground/80 hover:text-primary hover:bg-white/50" : "text-white/90 hover:bg-white/20"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex md:justify-self-end">
            <Button asChild>
              <a href="tel:+256780876369">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-primary" : "text-white hover:text-white/80 hover:bg-white/20")}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/90 backdrop-blur-xl">
                 <SheetHeader className="p-6 pt-0 text-left">
                    <SheetTitle className="sr-only">Main Menu</SheetTitle>
                 </SheetHeader>
                <div className="p-6 pt-0 h-full flex flex-col">
                  <Link href="/" className="flex items-center gap-2 mb-8" onClick={closeMobileMenu}>
                      <Image
                        src={scrolledLogo} 
                        alt="Purple Deluxe Apartments Logo"
                        width={220}
                        height={44}
                      />
                  </Link>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                        onClick={closeMobileMenu}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <Button asChild className="mt-auto" size="lg">
                    <a href="tel:+256780876369" onClick={closeMobileMenu}>
                       <Phone className="mr-2 h-5 w-5" />
                      Call to Book
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
