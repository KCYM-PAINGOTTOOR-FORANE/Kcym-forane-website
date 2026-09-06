import { Section } from '@/components/layouts';

export function ActivitiesSection() {
  return (
    <Section id="activities" className="py-24 bg-surface-raised">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 max-w-5xl mx-auto">
        <div>
          <h2 className="font-headline text-4xl text-ink font-bold mb-6">Our Activities</h2>
          <div className="h-1 w-20 bg-accent" />
        </div>
        {/* View All Activities button is hidden for now */}
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center py-20 border border-line bg-surface rounded-xl shadow-sm">
          <p className="text-2xl font-headline text-ink italic">Coming soon...</p>
          <p className="mt-2 text-ink-muted">Stay tuned for updates on our upcoming activities.</p>
        </div>
      </div>
    </Section>
  );
}
