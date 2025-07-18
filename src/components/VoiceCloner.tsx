import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Play, Loader2 } from "lucide-react";

const VoiceCloner = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [customText, setCustomText] = useState<string>("");
  const [cloneLanguage, setCloneLanguage] = useState<string>("");
  const [isCloning, setIsCloning] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleClone = async () => {
    if (!selectedFile || !customText || !cloneLanguage) return;
    
    setIsCloning(true);
    // Simulate API call
    setTimeout(() => {
      setIsCloning(false);
      // Create a dummy audio URL for demo
      setAudioUrl("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYvEiOM2e/JeSoBJXfU9N2QQAojKEFxZ3");
    }, 3000);
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <section id="clone" className="py-20 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <Card className="rounded-2xl shadow-lg border-border">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold font-inter text-foreground">
              Voice Cloning
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Clone your voice and make it speak any text in multiple languages
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Upload Your Voice Sample
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
                  Custom Text to Speak
                </label>
                <Textarea
                  placeholder="Enter the text you want your cloned voice to speak..."
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="min-h-32 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Output Language
                </label>
                <Select onValueChange={setCloneLanguage}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select language for cloned voice" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="portuguese">Portuguese</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleClone}
                disabled={!selectedFile || !customText || !cloneLanguage || isCloning}
                className="w-full rounded-xl"
                size="lg"
              >
                {isCloning ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Cloning Voice...
                  </>
                ) : (
                  "Clone & Play"
                )}
              </Button>

              {audioUrl && (
                <div className="space-y-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Cloned Voice</span>
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

export default VoiceCloner;