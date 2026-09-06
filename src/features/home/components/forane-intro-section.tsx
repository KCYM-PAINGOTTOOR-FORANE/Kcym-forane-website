import Image from 'next/image';
import { Section } from '@/components/layouts';
import { cn } from '@/lib/utils';

const IMAGES = [
  '/forane%201.png',
  '/forane%202.png',
  '/forane%203.png',
  '/forane4.jpeg',
  '/forane5.png',
];

export function ForaneIntroSection() {
  return (
    <Section variant="surface" className="py-24 overflow-hidden">
      <div className="flex flex-col items-center gap-16 w-full max-w-6xl mx-auto">
        {/* Scattered images showcasing the forane linearly */}
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 sm:gap-8 w-full mt-8">
          {IMAGES.map((src, index) => {
            // Quirky rotations for each image in the line
            const rotations = ['-rotate-6', 'rotate-3', '-rotate-2', 'rotate-6', '-rotate-3'];
            const translateYs = [
              'translate-y-4',
              '-translate-y-4',
              'translate-y-8',
              '-translate-y-6',
              'translate-y-2',
            ];

            return (
              <div
                key={src}
                className={cn(
                  'relative h-40 w-40 sm:h-56 sm:w-56 border-[10px] sm:border-[12px] border-white bg-surface shadow-2xl transition-all duration-300',
                  'hover:rotate-0 hover:scale-110 hover:z-20 cursor-pointer shrink-0 z-10',
                  rotations[index % rotations.length],
                  translateYs[index % translateYs.length],
                )}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={src}
                    alt={`Forane youth activity ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Brief write up below */}
        <div className="max-w-5xl text-center flex flex-col items-center mt-12 bg-white/50 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-white/40">
          <h2 className="font-headline text-5xl text-ink font-bold mb-6 italic drop-shadow-sm transform -rotate-1">
            Our Forane
          </h2>
          <div className="h-1 w-24 bg-accent mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-ink-muted leading-relaxed font-body font-medium">
            KCYM Paingottur Forane is a vibrant expression of our regional heritage, where seven
            parishes come together as one family, united by faith, friendship, and a shared purpose.
            Like seven different engines powering the same journey, each parish brings its own
            identity, strength, traditions, and youthful spirit, yet all move together toward one
            goal — to celebrate and empower youth in the path of Christ. Rooted in our heritage and
            strengthened by our comraderie in Christ, we journey together as one community, carrying
            forward a faith that inspires, a fellowship that unites, and a youth that is ready to
            lead, serve, and make a difference.
          </p>
        </div>
      </div>
    </Section>
  );
}
