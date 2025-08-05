import { Card, CardContent } from '@/components/ui/card';
import liveWebinarsImage from '@/assets/live-trading-webinars.jpg';
import emailAlertsImage from '@/assets/email-sms-alerts.jpg';
import membersWebsiteImage from '@/assets/private-members-website.jpg';

const FeaturesSection = () => {
  const features = [
    {
      title: "4 Live Trading Webinars",
      description: "Each day during the Income Madness workshop, you'll get 2 to 3 trade recommendations with complete details so you can immediately place trades with us. We'll trade live each day at 12:00pm Eastern Time. Live trading sessions run about 30 minutes.",
      image: liveWebinarsImage,
      additionalInfo: "We'll trade live each day at 12:00pm Eastern Time. Live trading sessions run about 30 minutes."
    },
    {
      title: "Email and SMS Text Alerts",
      description: "Trade alerts are sent by email, SMS/text message, so you will NEVER miss a trade if you can't make one of our live trading sessions.",
      image: emailAlertsImage,
      additionalInfo: "Many of our trades will be closed before we meet for our next live trading session, so you'll get instant alerts when it's time to close a trade."
    },
    {
      title: "TR Live Trading Site",
      description: "Your Income Madness Week event also includes our new Traders Reserve LIVE community member's website, where you can:",
      image: membersWebsiteImage,
      bulletPoints: [
        "Get your trade alerts",
        "Watch Trading Session replays", 
        "Get help from the Madness community",
        "Get answers to common questions"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground mb-4">
            Here's Everything You Get When You Reserve Your
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground italic">
            Income Madness Week
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
            Seat
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Feature Image */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* Feature Title */}
                <h3 className="text-xl font-bold mb-4 text-card-foreground">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bullet Points for Private Members Website */}
                {feature.bulletPoints && (
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                    {feature.bulletPoints.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                )}

                {/* Additional Info */}
                {feature.additionalInfo && (
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.additionalInfo}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-success">
            Save $100 When You Reserve Your Income Madness Seat Today!
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;