import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

function XIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
    </svg>
  );
}

const socialLinks = [
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: XIcon, label: 'X' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '#suites', label: 'Suites' },
  { href: '#amenities', label: 'Amenities' },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/30">
      <div className="container-luxury py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6" aria-label="Purple Deluxe Apartments Home">
              <Image
                src="https://i.imgur.com/VZUjDDF.png"
                alt="Purple Deluxe Apartments Logo"
                width={200}
                height={40}
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Your exclusive royal sanctuary in Kyanja, Kampala. Unforgettable luxury awaits.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-6">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Kyanja, Kampala, Uganda</p>
              <p>
                <a
                  href="mailto:reservations@purpledeluxeapartments.com"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  reservations@purpledeluxeapartments.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+256780876369"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  +256-780-PURPLE
                </a>
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-9 h-9 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground/60">
              &copy; {new Date().getFullYear()} Purple Deluxe Apartments. All Rights Reserved.
            </p>
            <p className="text-xs text-muted-foreground/60">
              Designed & Managed by{' '}
              <a
                href="https://digitaltalisman.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-block bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-fuchsia-500 bg-[length:200%_auto] animate-gradient-wave bg-clip-text text-transparent font-semibold">Digital Talisman</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
