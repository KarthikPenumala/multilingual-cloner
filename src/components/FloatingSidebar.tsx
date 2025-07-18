import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Languages, Mic, ChevronUp, ChevronDown } from "lucide-react";

const FloatingSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Spanish", flag: "🇪🇸" },
    { code: "fr", name: "French", flag: "🇫🇷" },
    { code: "de", name: "German", flag: "🇩🇪" },
    { code: "hi", name: "Hindi", flag: "🇮🇳" },
    { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="bg-background border-border rounded-2xl shadow-lg p-4">
        <div className="space-y-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => scrollToSection('translate')}
            className="w-full flex items-center space-x-2 rounded-lg"
          >
            <Languages className="w-4 h-4" />
            <span>Translate</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => scrollToSection('clone')}
            className="w-full flex items-center space-x-2 rounded-lg"
          >
            <Mic className="w-4 h-4" />
            <span>Clone</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowLanguages(!showLanguages)}
            className="w-full flex items-center justify-between rounded-lg"
          >
            <span className="text-sm">Languages</span>
            {showLanguages ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>

          {showLanguages && (
            <div className="space-y-2 pt-2 border-t border-border">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="flex items-center space-x-2 text-sm py-1 px-2 hover:bg-muted rounded cursor-pointer"
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default FloatingSidebar;