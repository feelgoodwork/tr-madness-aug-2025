import { Card, CardContent } from '@/components/ui/card';
import { Monitor, MessageCircle, Globe } from 'lucide-react';

const IncludedFeatures = () => {
  const features = [
    {
      icon: Monitor,
      title: "Daily Live Trading at Noon ET",
      description: "Join us every day for live trading sessions where we execute real trades and share our strategy in real-time."
    },
    {
      icon: MessageCircle,
      title: "Real-time trade alerts via email, SMS and inside the TRLive Platform",
      description: "Never miss a trading opportunity with our comprehensive alert system that reaches you wherever you are."
    },
    {
      icon: Globe,
      title: "Live support from our team",
      description: "Get direct access to our expert trading team for guidance, questions, and support throughout the week."
    }
  ];

  return (
    <div className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-roboto font-bold mb-4 text-primary">
            All Income Madness Weeks Include:
          </h2>
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
                    <h4 className="text-xl font-helvetica font-bold text-primary mb-4">{feature.title}</h4>
                  </div>
                  
                  <p className="text-base text-secondary leading-relaxed">{feature.description}</p>
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