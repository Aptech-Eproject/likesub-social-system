import ServicesPricingCardModern from "@/components/client/client-panel/ServicePricingCardsModern";
import Benefits from "@/components/client/landing-page/Benefits";
import Clients from "@/components/client/landing-page/Clients";
import Faq from "@/components/client/landing-page/Faq";
import Feedback from "@/components/client/landing-page/Feedback";
import Hero from "@/components/client/landing-page/Hero";
import Services from "@/components/client/landing-page/Services";
import Footer from "@/layouts/client/landing-page/Footer";
import Header from "@/layouts/client/landing-page/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Faq />
      <Feedback />
      <ServicesPricingCardModern />
      <Clients />
      <Footer />
    </div>
  );
}
