import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { href: '#', icon: Facebook },
  { href: '#', icon: Instagram },
  { href: '#', icon: Twitter },
  { href: '#', icon: Linkedin },
];

const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '#suites', label: 'Suites' },
    { href: '#amenities', label: 'Amenities' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="https://i.imgur.com/VZUjDDF.png"
                alt="Purple Deluxe Apartments Logo"
                width={220}
                height={44}
              />
            </Link>
            <p className="text-sm max-w-xs text-primary-foreground/80">
              Your exclusive royal sanctuary in Kyanja, Kampala. Unforgettable luxury awaits.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <div className="text-sm space-y-3 text-primary-foreground/80">
              <p>Kyanja, Kampala, Uganda</p>
              <p>
                Email: <a href="mailto:reservations@purpledeluxeapartments.com" className="hover:text-white transition-colors">reservations@purpledeluxeapartments.com</a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+256780876369" className="hover:text-white transition-colors">
                  +256-780-PURPLE
                </a>
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Follow Us</h3>
            <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                    <Link key={index} href={social.href} className="text-primary-foreground/80 hover:text-white transition-colors">
                        <social.icon className="h-6 w-6" />
                        <span className="sr-only">{social.icon.displayName}</span>
                    </Link>
                ))}
            </div>
          </div>

        </div>
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Purple Deluxe Apartments. All Rights Reserved.</p>
          <p className="text-xs mt-4">
            Designed & Managed by{' '}
            <a
              href="https://digitaltalisman.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              <span className="inline-block bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-fuchsia-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-wave">
                Digital Talisman
              </span>
              <span className="inline-block"> 🇺🇬</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
