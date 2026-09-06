import { Cross, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCVZYTvIplMtqBvP05EgQDQsEi0Dl-pK7c8FjyP9lzlc5l1pJBITDckMwSQ_o0imt7v8e_MSohMq4qJLg6AmnyamF7j3AayYZOCNSldTdZdFKda0G338DaTrM_zlXxKpKZqoGk1mbPBAzBWry64VPa_1-gfXSMIOcJRTOZuhWd87Vq5TGORZ8eZp-XRJ1tPIWIZ_wEIldY_wVIYgyLDKwUAl1qsbRb8xpDMyegYqbiaFcO1oJGODtoDgs48xFgWP7B6YDE';

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-line bg-surface-raised px-6 py-6 md:px-12">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 md:flex-row">
        {/* Left Side: Logo & Copyright */}
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-4 text-center md:text-left">
          <Image
            src={LOGO_URL}
            alt="KCYM Logo"
            width={32}
            height={32}
            className="h-8 w-auto grayscale opacity-80"
          />
          <p className="flex items-center gap-1.5 text-xs text-ink-muted font-medium">
            <Cross className="size-3" />© {new Date().getFullYear()} KCYM Paingottoor Forane.
          </p>
        </div>

        {/* Right Side: Links & Social */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/#about"
            className="text-xs font-semibold text-ink-muted hover:text-accent transition-colors uppercase tracking-wider"
          >
            About
          </Link>
          <Link
            href="/#activities"
            className="text-xs font-semibold text-ink-muted hover:text-accent transition-colors uppercase tracking-wider"
          >
            Activities
          </Link>

          <div className="h-4 w-px bg-line hidden sm:block" />

          <a
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="text-xs font-medium text-ink-muted hover:text-accent transition-colors"
          >
            {siteConfig.contact.phone}
          </a>

          <div className="h-4 w-px bg-line hidden sm:block" />

          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            className="text-ink-muted hover:text-accent transition-colors"
          >
            <Instagram className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
