import { Card, CardContent } from '@/components/ui/card';
import { Monitor, MessageCircle, Globe } from 'lucide-react';

const IncludedFeatures = () => {
  const features = [
    {
      icon: Monitor,
      title: "4 Live Trading Webinars",
      bullets: [
        "2-3 trade recommendations daily",
        "Complete trade details included",
        "Live sessions at 12:30pm ET",
        "30-minute focused sessions"
      ]
    },
    {
      icon: MessageCircle,
      title: "Email and SMS Text Alerts",
      bullets: [
        "Never miss a trade opportunity",
        "Instant alerts for trade entries",
        "Real-time exit notifications",
        "Works even if you miss live sessions"
      ]
    },
    {
      icon: Globe,
      title: "Traders Reserve Live Platform",
      bullets: [
        "Access to exclusive community",
        "Watch session replays anytime",
        "Get help from expert traders",
        "Common questions answered"
      ]
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Here's Everything You Get When You Reserve Your
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-success italic">
            Income Madness Week Seat
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-primary">{feature.title}</h4>
                  </div>
                  
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start">
                        <span className="text-success mr-2 mt-1">•</span>
                        <span className="text-sm text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IncludedFeatures;