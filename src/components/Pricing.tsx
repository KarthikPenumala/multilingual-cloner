import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-inter text-foreground mb-4">
          Pricing & Limits
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Start for free on Lovable.dev with generous usage limits
        </p>

        <Card className="rounded-2xl border-border shadow-lg max-w-md mx-auto">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold font-inter text-foreground">
              Free Plan
            </CardTitle>
            <div className="text-3xl font-bold text-foreground mt-2">
              $0<span className="text-lg font-normal text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-foreground" />
                <span className="text-foreground">Up to 10 requests per day</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-foreground" />
                <span className="text-foreground">Voice translation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-foreground" />
                <span className="text-foreground">Voice cloning</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-foreground" />
                <span className="text-foreground">6 languages supported</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-foreground" />
                <span className="text-foreground">No signup required</span>
              </div>
            </div>

            <div className="pt-6">
              <Button 
                variant="outline" 
                className="w-full rounded-xl"
                onClick={() => window.open('https://lovable.dev/pricing', '_blank')}
              >
                Need More? Upgrade Plan
              </Button>
            </div>
          </CardContent>
        </Card>

        <p className="text-sm text-muted-foreground mt-8">
          Powered by Lovable.dev - Build and deploy AI apps instantly
        </p>
      </div>
    </section>
  );
};

export default Pricing;