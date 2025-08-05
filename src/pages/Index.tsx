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

const Index = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Set countdown to 3 days from now
  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background via-background to-muted/20 pt-12 pb-20">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          {/* Tagline */}
          <div className="mb-8">
            <p className="text-lg text-muted-foreground">
              Join the next Income Madness Week Trade with us daily for a week
            </p>
          </div>

          {/* Main Headline - keeping exact copy */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
            Can We Make <span className="text-success">$2,500</span>
            <br />
            Trading Options
            <br />
            in Just <span className="text-success">5 Days?</span>
          </h1>
          
          {/* Subheadline - keeping exact copy */}
          <div className="mb-12 max-w-4xl mx-auto space-y-3">
            <p className="text-xl md:text-2xl font-medium text-foreground">
              Attend the Only Live Trading Event Where You Can
            </p>
            <p className="text-xl md:text-2xl font-medium">
              <span className="text-success italic">Leave With More Money</span>, Not Just More Notes.
            </p>
            <p className="text-lg font-medium text-success">
              PLUS a game plan to keep going!
            </p>
          </div>

          {/* Event Details Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
              <div className="text-success mb-4">
                <MapPin className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Virtual Event</h3>
              <p className="text-sm text-muted-foreground">Trade from anywhere</p>
            </div>

            <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
              <div className="text-success mb-4">
                <Calendar className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-2">August 11-15</h3>
              <p className="text-sm text-muted-foreground">5 days of live trading</p>
            </div>

            <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
              <div className="text-success mb-4">
                <Clock className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Daily Sessions</h3>
              <p className="text-sm text-muted-foreground">Noon ET</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-6 mb-8">
            <Button className="bg-success hover:bg-success/90 text-white text-lg px-12 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              SECURE MY SEAT NOW
            </Button>
            
            <p className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              <u>Or join from home as a virtual attendee</u>
            </p>
          </div>

          {/* Urgency Message */}
          <div className="inline-flex items-center bg-amber-50 text-amber-800 px-6 py-3 rounded-full text-sm font-medium border border-amber-200">
            👉 LIMITED SEATING ~ ONLY 40 REMAIN!
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground">
            How You Will Profit During The Income Madness Week Event
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Get Daily, Weekly and Monthly Income</h3>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Master Simple Tactics Using 1- to 30-Day Trades</h3>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Keep Your Trading Time to a Minimum</h3>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Goal $2,500 to $5,000 Income from the Event</h3>
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

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              This Is Your Best Chance to Trade Live and Leave With More Money Than You Came With
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
          
          {/* Countdown Section */}
          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold mb-8 text-foreground">
              The Next Income Madness Week Begins In:
            </h3>
            
            <Countdown targetDate={countdownDate} />
            
            <div className="mt-8 space-y-4">
              <Button className="bg-primary hover:bg-primary/90 text-white text-lg px-12 py-4 rounded-lg font-semibold">
                Join Income Madness Week →
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Over $100K made in Madness Weeks over ten years
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <Solution />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <IncludedFeatures />
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/20">
        <TeamSection />
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="space-y-8">
            {/* Pricing */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Regular Price: $297</p>
              <div className="text-6xl md:text-7xl font-bold text-success mb-2">$197</div>
              <p className="text-lg text-muted-foreground mb-1">Early Registration Price</p>
              <p className="text-sm text-destructive font-medium">PRICING EXPIRES JULY 31st MIDNIGHT ET</p>
            </div>

            {/* Final CTA */}
            <div className="space-y-4">
              <Button className="bg-success hover:bg-success/90 text-white text-xl px-12 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                CLICK HERE TO RESERVE YOUR TICKET
              </Button>
              <p className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                <u>Or join from home as a virtual attendee</u>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
