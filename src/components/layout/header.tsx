'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MagneticButton } from '@/components/ui/magnetic-button';

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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const logo = "https://i.imgur.com/VZUjDDF.png";

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury',
          isScrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 py-4'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container-luxury flex items-center justify-between">
          <Link href="/" className="relative z-50 flex items-center gap-3" aria-label="Purple Deluxe Apartments Home">
            <Image
              src={logo}
              alt="Purple Deluxe Apartments Logo"
              width={200}
              height={40}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full",
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton
              href="tel:+256780876369"
              className={cn(
                "inline-flex items-center gap-2.5 px-7 py-3 text-sm font-medium tracking-wide rounded-full transition-all duration-300",
                isScrolled
                  ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20"
                  : "bg-white/15 text-white border border-white/25 hover:bg-white/25 backdrop-blur-sm"
              )}
            >
              <Phone className="w-4 h-4" />
              Call to Book
            </MagneticButton>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden relative z-50 w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-full transition-colors",
              isScrolled ? "text-foreground" : "text-white",
              isMobileMenuOpen && "!text-foreground"
            )}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-current origin-center transition-colors"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              className="block w-5 h-[1.5px] bg-current"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-current origin-center transition-colors"
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block py-4 text-3xl font-display font-medium text-foreground/90 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8"
              >
                <a
                  href="tel:+256780876369"
                  onClick={closeMobileMenu}
                  className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-accent-foreground text-lg font-medium rounded-full shadow-lg shadow-accent/25"
                >
                  <Phone className="w-5 h-5" />
                  Call to Book
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
