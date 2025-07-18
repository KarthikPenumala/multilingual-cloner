import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-background border-b border-border py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold font-inter text-foreground">MyVoiceAI</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('translate')}
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            Translator
          </button>
          <button 
            onClick={() => scrollToSection('clone')}
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            Cloner
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            Pricing
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;