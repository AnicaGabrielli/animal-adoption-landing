import Hero from '@/components/Hero';
import AnimalsSection from '@/components/AnimalsSection';
import EventsSection from '@/components/EventsSection';
import VolunteersSection from '@/components/VolunteersSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AnimalsSection />
      <EventsSection />
      <VolunteersSection />
      <Footer />
    </main>
  );
}