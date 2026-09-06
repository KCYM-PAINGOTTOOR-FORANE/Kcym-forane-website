import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function ConnectSection() {
  const { contact, links } = siteConfig;

  return (
    <section
      id="connect"
      className="relative flex w-full flex-col overflow-hidden bg-paper text-ink md:flex-row border-t border-line"
    >
      <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16 xl:p-24">
        <div>
          <h2 className="font-headline text-4xl font-bold leading-tight text-ink md:text-5xl">
            Connect With Us
          </h2>
          <div className="my-6 h-1 w-20 bg-accent" />
          <p className="mb-12 text-lg text-ink-muted">
            Have questions or want to get involved? Reach out through any of these channels.
          </p>
        </div>

        <div className="flex flex-col gap-6 text-base text-ink font-medium">
          {/* 1. Email */}
          <div className="flex items-center gap-4 hover:text-accent transition-colors">
            <Mail className="size-6 text-accent shrink-0" />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>

          {/* 2. Instagram */}
          <div className="flex items-center gap-4 hover:text-accent transition-colors">
            <Instagram className="size-6 text-accent shrink-0" />
            <a href={links.instagram} target="_blank" rel="noopener noreferrer">
              {contact.instagramHandle}
            </a>
          </div>

          {/* 3. Phone */}
          <div className="flex items-center gap-4 hover:text-accent transition-colors">
            <Phone className="size-6 text-accent shrink-0" />
            <a href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}>{contact.phone}</a>
          </div>

          {/* 4. Office Location */}
          <div className="flex items-center gap-4 hover:text-accent transition-colors">
            <MapPin className="size-6 text-accent shrink-0" />
            <span>{contact.address}</span>
          </div>
        </div>
      </div>

      <div
        className="relative min-h-[400px] w-full bg-cover bg-center md:min-h-full md:w-1/2 lg:w-2/5"
        style={{
          backgroundImage: "url('/connect_kcym.jpg')",
        }}
      >
        {/* Subtle gradients to blend only the edges of the image into the background */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paper to-transparent opacity-60" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-paper to-transparent opacity-60" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-paper to-transparent opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-paper to-transparent opacity-60" />
      </div>
    </section>
  );
}
