'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section } from '@/components/layouts';

export function HeroSection() {
  return (
    <Section className="border-b-2 border-gold/40 bg-ink p-0 md:p-0 xl:p-0 relative overflow-hidden">
      <div className="relative flex flex-col items-center justify-center min-h-[80vh] w-full p-8 md:p-12">
        {/* Full Background Image */}
        <Image
          src="/st_thomas_moore.png"
          alt="St. Thomas More"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark overlay to ensure text is readable over the background */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/40" />

        {/* Content (Logo and Text) placed between the center and right edge */}
        <div className="relative z-10 w-full max-w-[90rem] flex mt-12 md:mt-0 px-4 md:px-12">
          {/* Empty left half */}
          <div className="hidden md:block md:w-1/2" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: 'easeOut' }}
            className="w-full md:w-1/2 flex flex-row items-center justify-center gap-6 md:gap-8"
          >
            <Image
              src="/kcym%20logo.png"
              alt="KCYM Logo"
              width={160}
              height={160}
              className="object-contain shrink-0 drop-shadow-2xl w-24 h-24 md:w-40 md:h-40"
            />

            <div className="space-y-2 text-left flex flex-col justify-center">
              <h1 className="font-saira text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-bold leading-tight flex flex-col uppercase">
                <span className="text-red-500 drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">KCYM</span>
                <span className="text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">
                  Paingottoor
                </span>
                <span className="text-yellow-400 drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">
                  Forane
                </span>
              </h1>
              <p className="text-xl md:text-3xl text-white/90 font-body mt-2 md:mt-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold">
                Ignite & Unite
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
