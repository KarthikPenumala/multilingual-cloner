import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Infinity, Zap, UserCheck } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Infinity,
      title: "Unlimited Free Usage",
      description: "No limits on translations or voice cloning. Use as much as you need, completely free."
    },
    {
      icon: Zap,
      title: "High-Quality AI Voices",
      description: "State-of-the-art AI technology delivers natural, human-like voice synthesis."
    },
    {
      icon: UserCheck,
      title: "No Signup Required",
      description: "Start using immediately. No registration, no personal information needed."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-inter text-foreground mb-4">
            Why Choose MyVoiceAI?
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience the future of voice technology with our powerful features
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="rounded-2xl border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold font-inter text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;