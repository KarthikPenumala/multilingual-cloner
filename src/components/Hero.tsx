import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToTranslate = () => {
    const element = document.getElementById('translate');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold font-inter text-foreground mb-6 leading-tight">
          Multilingual Voice Translator & Cloner
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your voice into any language or clone it with AI-powered technology. 
          Free, unlimited, and no signup required.
        </p>
        <Button 
          onClick={scrollToTranslate}
          size="lg" 
          className="text-lg px-8 py-6 rounded-2xl font-medium"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;