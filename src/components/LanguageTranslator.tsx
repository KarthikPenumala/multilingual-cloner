import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Play, Loader2 } from "lucide-react";

const LanguageTranslator = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [targetLanguage, setTargetLanguage] = useState<string>("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleTranslate = async () => {
    if (!selectedFile || !targetLanguage) return;
    
    setIsTranslating(true);
    // Simulate API call
    setTimeout(() => {
      setIsTranslating(false);
      // Create a dummy audio URL for demo
      setAudioUrl("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYvEiOM2e/JeSoBJXfU9N2QQAojKEFxZ3");
    }, 2000);
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <section id="translate" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <Card className="rounded-2xl shadow-lg border-border">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold font-inter text-foreground">
              Language Translator
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Upload your audio and translate it to any language
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Upload Audio File
                </label>
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center space-x-2 rounded-xl"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Choose File</span>
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {selectedFile ? selectedFile.name : "No file selected"}
                  </span>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="audio/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Target Language
                </label>
                <Select onValueChange={setTargetLanguage}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select target language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hindi">English → Hindi</SelectItem>
                    <SelectItem value="spanish">English → Spanish</SelectItem>
                    <SelectItem value="french">English → French</SelectItem>
                    <SelectItem value="german">English → German</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleTranslate}
                disabled={!selectedFile || !targetLanguage || isTranslating}
                className="w-full rounded-xl"
                size="lg"
              >
                {isTranslating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Translating...
                  </>
                ) : (
                  "Translate & Play"
                )}
              </Button>

              {audioUrl && (
                <div className="space-y-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Translated Audio</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={playAudio}
                      className="flex items-center space-x-2 rounded-lg"
                    >
                      <Play className="w-4 h-4" />
                      <span>Play</span>
                    </Button>
                  </div>
                  <audio
                    ref={audioRef}
                    controls
                    className="w-full"
                    src={audioUrl}
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LanguageTranslator;