import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight } from 'lucide-react';
import Countdown from '@/components/Countdown';
import TradingResults from '@/components/TradingResults';
import TeamSection from '@/components/TeamSection';
import ProblemAwareness from '@/components/ProblemAwareness';
import Solution from '@/components/Solution';
import IncludedFeatures from '@/components/IncludedFeatures';
import heroImage from '@/assets/trading-hero-bg.jpg';

const Index = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Set countdown to 3 days from now
  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
          <Badge variant="destructive" className="mb-6 text-base px-4 py-2 animate-pulse">
            🔥 REGISTER NOW
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-roboto font-bold mb-6 leading-tight text-primary">
            How Fast Could You
            <br />
            <span className="text-success">Earn $2,500</span>
            <br />
            Trading Options?
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary mb-8 max-w-4xl mx-auto">
            <strong>The next Income Madness Week is Aug. 11-15</strong><br />
            Get in now and trade with us daily
          </p>

          {/* Video Section */}
          <div className="mb-8">
            <Card className="max-w-4xl mx-auto overflow-hidden border-success/20">
              <CardContent className="p-0">
                {!isVideoPlaying ? (
                  <div className="relative aspect-video bg-card flex items-center justify-center cursor-pointer group"
                       onClick={() => setIsVideoPlaying(true)}>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-success/20"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Play className="w-8 h-8 text-success-foreground ml-1" fill="currentColor" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Watch: How I Made $1,821 in 6 Days</h3>
                      <p className="text-muted-foreground">See the exact trades and strategy revealed</p>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-card flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-4">Video Coming Soon</div>
                      <p className="text-muted-foreground">This is where your trading strategy video would play</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Countdown */}
          <div className="mb-8">
            <h3 className="text-2xl font-helvetica font-bold mb-4 text-primary">The Next Income Madness Week Begins In:</h3>
            <Countdown targetDate={countdownDate} />
          </div>

          <div className="space-y-4">
            <Button variant="cta" size="lg" className="text-xl px-8 py-6">
              Join Income Madness Week
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            <div className="text-base text-secondary">
              Over $100K made in Madness Weeks over ten years
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <TradingResults />
        </div>
      </section>

      {/* Problem Awareness Section */}
      <section 
        className="py-32 px-6 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-white/98"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <ProblemAwareness />
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Solution />
        </div>
      </section>

      {/* Included Features Section */}
      <section 
        className="bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-white/98"></div>
        <div className="relative z-10">
      <IncludedFeatures />
      
      <TeamSection />
    </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-roboto font-bold mb-6 text-primary">
            Ready to Transform Your Trading Results?
          </h2>
          <p className="text-xl text-secondary mb-8">
            Don't wait another day to start generating consistent income. 
            The next Income Madness challenge starts soon.
          </p>
          
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-success mb-2">
                  Save $100 - Limited Time
                </div>
                <div className="text-lg">
                  <span className="text-secondary line-through">$297</span>
                  <span className="text-3xl font-bold text-success ml-4">$197</span>
                </div>
                <div className="text-base text-secondary mt-2">
                  One-time payment • No recurring charges
                </div>
              </div>
              
              <Button variant="cta" size="lg" className="text-xl px-8 py-6">
                Join Income Madness Week - Save $100
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;