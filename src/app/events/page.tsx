import type { Metadata } from 'next';
import { Section } from '@/components/layouts';
import { siteConfig } from '@/config/site';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Events & Activities',
  description:
    'Explore the dynamic life of KCYM. From spiritual gatherings to social impact drives, join our community across all parishes in action and faith.',
  canonical: `${siteConfig.url}/events`,
});

export default function EventsPage() {
  return (
    <Section className="flex min-h-[50vh] flex-col items-center justify-center text-center py-32 border-b border-line">
      <h1 className="mb-md font-headline text-headline-xl text-ink">Events &amp; Activities</h1>
      <p className="max-w-2xl text-body-lg text-ink-muted">
        Stay tuned! Exciting events and activities are coming soon.
      </p>
    </Section>
  );
}
