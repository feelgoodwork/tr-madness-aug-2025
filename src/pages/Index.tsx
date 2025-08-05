import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight, MapPin, Calendar, Clock } from 'lucide-react';
import Countdown from '@/components/Countdown';
import TradingResults from '@/components/TradingResults';
import TeamSection from '@/components/TeamSection';
import ProblemAwareness from '@/components/ProblemAwareness';
import Solution from '@/components/Solution';
import IncludedFeatures from '@/components/IncludedFeatures';

const Index = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Set countdown to 3 days from now
  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-muted/30 pt-16 pb-24">
        <div className="container mx-auto px-4 text-center">
          {/* Logo/Brand Area */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-success/10 rounded-full mb-4">
              <div className="text-success text-2xl font-bold">TR</div>
            </div>
            <h4 className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              Income Madness Week
            </h4>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            Can We Make <span className="text-success">$2,500</span>
            <br />
            Trading Options
            <br />
            in Just <span className="text-success">5 Days?</span>
          </h1>
          
          {/* Subheadline */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl mb-4 font-medium">
              Attend the Only Live Trading Event Where You Can
            </p>
            <p className="text-xl md:text-2xl text-success font-semibold mb-4">
              <em>Leave With More Money</em>, Not Just More Notes.
            </p>
            <p className="text-lg text-success font-medium">
              PLUS a game plan to keep going!
            </p>
          </div>

          {/* Event Details Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-success mb-3">
                  <MapPin className="w-6 h-6 mx-auto" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Virtual Event</h3>
                <p className="text-sm text-muted-foreground">Trade from anywhere</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-success mb-3">
                  <Calendar className="w-6 h-6 mx-auto" />
                </div>
                <h3 className="font-semibold text-lg mb-2">August 11-15</h3>
                <p className="text-sm text-muted-foreground">5 days of live trading</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-success mb-3">
                  <Clock className="w-6 h-6 mx-auto" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Daily Sessions</h3>
                <p className="text-sm text-muted-foreground">Live trade execution</p>
              </CardContent>
            </Card>
          </div>

          {/* Availability Notice */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-6">🎯 Live and Virtual Tickets Available Now</p>
            
            {/* Main CTA */}
            <Button variant="cta" size="lg" className="text-xl px-12 py-6 mb-4 shadow-xl">
              SECURE MY SEAT NOW
            </Button>
            
            <p className="text-sm text-muted-foreground underline cursor-pointer hover:text-foreground transition-colors">
              Or join from home as a virtual attendee
            </p>
          </div>

          {/* Urgency Message */}
          <div className="inline-flex items-center bg-warning/10 text-warning-foreground px-4 py-2 rounded-full text-sm font-medium">
            👉 LIMITED SEATING ~ ONLY 40 REMAIN!
          </div>
        </div>
      </section>

      {/* Profit Highlights Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How You Will Profit During The Income Madness Week Event
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-12">
            <div>
              <h3 className="text-lg font-semibold mb-2">Get Daily, Weekly and Monthly Income</h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Master Simple Tactics Using 1- to 30-Day Trades</h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Keep Your Trading Time to a Minimum</h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Goal $2,500 to $5,000 Income from the Event</h3>
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

      {/* Video Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              This Is Your Best Chance to Trade Live and Leave With More Money Than You Came With
            </h2>
          </div>
          
          <Card className="max-w-4xl mx-auto overflow-hidden border-success/20 shadow-xl">
            <CardContent className="p-0">
              {!isVideoPlaying ? (
                <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-success/5 flex items-center justify-center cursor-pointer group"
                     onClick={() => setIsVideoPlaying(true)}>
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Watch: How I Made $1,821 in 6 Days</h3>
                    <p className="text-lg text-muted-foreground">See the exact trades and strategy revealed</p>
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
      </section>

      {/* Problem Awareness Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <ProblemAwareness />
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <Solution />
        </div>
      </section>

      {/* Included Features Section */}
      <section className="py-32">
        <IncludedFeatures />
      </section>

      {/* Team Section */}
      <section className="py-32 bg-muted/20">
        <TeamSection />
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Pricing */}
            <div className="mb-12">
              <p className="text-sm text-muted-foreground mb-4">Regular Price: $297</p>
              <div className="text-5xl md:text-6xl font-bold text-success mb-4">$197</div>
              <p className="text-lg text-muted-foreground mb-2">Early Registration Price</p>
              <p className="text-sm text-destructive font-medium">PRICING EXPIRES JULY 31st MIDNIGHT ET</p>
            </div>

            {/* Final CTA */}
            <div className="space-y-4">
              <Button variant="cta" size="lg" className="text-xl px-12 py-6 shadow-xl">
                CLICK HERE TO RESERVE YOUR TICKET
              </Button>
              <p className="text-sm text-muted-foreground underline cursor-pointer hover:text-foreground transition-colors">
                Or join from home as a virtual attendee
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;