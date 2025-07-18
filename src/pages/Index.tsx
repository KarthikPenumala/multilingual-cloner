import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LanguageTranslator from "@/components/LanguageTranslator";
import VoiceCloner from "@/components/VoiceCloner";
import FloatingSidebar from "@/components/FloatingSidebar";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <Hero />
      <LanguageTranslator />
      <VoiceCloner />
      <Features />
      <Pricing />
      <Footer />
      <FloatingSidebar />
    </div>
  );
};

export default Index;
