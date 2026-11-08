import Hero from "../components/home/Hero";
import {
  IntroSection, TopDestinations, TourPackagesTeaser, ServicesSection, BookingSteps, WhySriLanka, ExperiencesGrid, GuestMoments,
} from "../components/home/HomeSections";
import { CtaBanner, FAQAccordion, SectionHeader } from "../components/ui/Sections";
import { faqs } from "../data/faqs";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <TopDestinations />
      <TourPackagesTeaser />
      <ServicesSection />
      <BookingSteps />
      <WhySriLanka />
      <ExperiencesGrid />
      <GuestMoments />
      <section className="container-narrow mt-20 grid gap-10 lg:mt-28 lg:grid-cols-[1fr_1.4fr]" aria-labelledby="faq-heading">
        <SectionHeader
          eyebrow="Good to know"
          title={<span id="faq-heading">Planning a trip to Sri Lanka</span>}
          text="Quick answers to the questions travellers ask most often before they book."
        />
        <FAQAccordion items={faqs} />
      </section>
      <CtaBanner />
    </>
  );
}
