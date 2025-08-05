import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight, MapPin, Calendar, Clock } from 'lucide-react';
import Countdown from '@/components/Countdown';
import TradingResults from '@/components/TradingResults';
import TeamSection from '@/components/TeamSection';
import Solution from '@/components/Solution';
import IncludedFeatures from '@/components/IncludedFeatures';
import FeaturesSection from '@/components/FeaturesSection';

const Index = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Set countdown to August 10th, 2025 midnight EST
  const countdownDate = new Date('2025-08-10T00:00:00-04:00'); // Aug 10th, 2025 midnight EST

  return (
    <div className="min-h-screen bg-background">
      {/* Top Announcement Bar */}
      <div className="bg-success py-2 overflow-hidden">
        <div className="animate-pulse">
          <div className="text-center">
            <span className="inline-block bg-success-foreground text-success px-4 py-1 rounded-full text-sm font-semibold">
              Madness Week Now Open!
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background via-background to-muted/20 pt-12 pb-20">
        <div className="container mx-auto px-6 text-center max-w-6xl">

          {/* Main Headline - keeping exact copy */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
            Can We Make <span className="text-success">$2,500</span>
            <br />
            Trading Options
            <br />
            in Just <span className="text-success">5 Days?</span>
          </h1>
          
          {/* Subheadline */}
          <div className="mb-12 max-w-4xl mx-auto space-y-3">
            <p className="text-xl md:text-2xl font-medium text-foreground">
              Join thousands of traders who've joined our INCOME MADNESS WEEK and done just that.
            </p>
          </div>

          {/* Event Details Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <div className="text-success mb-4">
                <MapPin className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Virtual Event</h3>
              <p className="text-sm text-muted-foreground">Trade from anywhere</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <div className="text-success mb-4">
                <Calendar className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">August 11-15</h3>
              <p className="text-sm text-muted-foreground">5 days of live trading</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <div className="text-success mb-4">
                <Clock className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Daily Sessions</h3>
              <p className="text-sm text-muted-foreground">Noon ET</p>
            </div>
          </div>

          {/* Register Button */}
          <div className="text-center mb-8">
            <Button 
              className="bg-success hover:bg-success/90 text-white text-lg px-12 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => window.open('https://tradersreserve.mysamcart.com/checkout/income-madness-week#samcart-slide-open-right', '_blank')}
            >
              REGISTER NOW
            </Button>
            <p className="text-sm text-muted-foreground mt-2">Income Madness Week Starts Monday Aug. 11</p>
          </div>
        </div>
      </section>

      {/* Video Section - Moved up */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
              Daily trading too much?<br />Try our Madness Week
            </h2>
          </div>
          
          <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl border-0">
            <CardContent className="p-0">
              {!isVideoPlaying ? (
                <div 
                  className="relative aspect-video bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center cursor-pointer group"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-105 transition-transform duration-300 shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Watch: How I Made $1,821 in 6 Days</h3>
                    <p className="text-lg text-muted-foreground">See the exact trades and strategy revealed</p>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-card flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-4 text-foreground">Video Coming Soon</div>
                    <p className="text-muted-foreground">This is where your trading strategy video would play</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Countdown Section */}
          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold mb-8 text-foreground">
              The Next Income Madness Week Begins In:
            </h3>
            
            <Countdown targetDate={countdownDate} />
            
            <div className="mt-8 space-y-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white text-lg px-12 py-4 rounded-lg font-semibold"
                onClick={() => window.open('https://tradersreserve.mysamcart.com/checkout/income-madness-week#samcart-slide-open-right', '_blank')}
              >
                Join Income Madness Week →
              </Button>
              <p className="text-sm text-muted-foreground">Income Madness Week Starts Monday Aug. 11</p>
              
              <p className="text-sm text-muted-foreground">
                Over $100K made in Madness Weeks over ten years
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <TradingResults />
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Team Section */}
      <section className="py-20 bg-muted/20">
        <TeamSection />
      </section>


      {/* Final CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="space-y-8">
            {/* Compelling Headline */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                It's like 'drive-thru options trading' with a 5-Star Experience.
              </h2>
            </div>

            {/* Pricing */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Regular Price: $297</p>
              <div className="text-6xl md:text-7xl font-bold text-success mb-2">$197</div>
              <p className="text-lg text-muted-foreground mb-1">One time non recurring price</p>
            </div>

            {/* Final CTA */}
            <div className="space-y-4">
              <Button 
                className="bg-success hover:bg-success/90 text-white text-xl px-12 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => window.open('https://tradersreserve.mysamcart.com/checkout/income-madness-week#samcart-slide-open-right', '_blank')}
              >
                REGISTER NOW
              </Button>
              <p className="text-sm text-muted-foreground">Income Madness Week Starts Monday Aug. 11</p>
            </div>
            
            {/* Bottom Countdown */}
            <div className="text-center mt-16">
              <h3 className="text-3xl font-bold mb-8 text-foreground">
                The Next Income Madness Week Begins In:
              </h3>
              
              <Countdown targetDate={countdownDate} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
