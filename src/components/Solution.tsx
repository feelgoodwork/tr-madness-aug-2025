import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, TrendingUp, Shield } from 'lucide-react';

const Solution = () => {
  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-success" />,
      title: "Proven Income Strategy",
      description: "Our systematic approach generated $1,821 in just 6 days with an 85% win rate."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-success" />,
      title: "Consistent Results",
      description: "17 winning trades out of 20 total trades using our time-tested methodology."
    },
    {
      icon: <Shield className="w-6 h-6 text-success" />,
      title: "Risk Management",
      description: "Built-in risk controls and position sizing to protect your capital while maximizing profits."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-success" />,
      title: "No Guesswork",
      description: "Receive exact trade setups, entry points, and exit strategies - just follow the plan."
    }
  ];

  const features = [
    "Weekly income-generating trade setups",
    "Real-time trade alerts and notifications",
    "Detailed risk management guidelines",
    "Live trading room access",
    "Educational resources and training",
    "24/7 community support"
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="default" className="text-sm px-4 py-2 success-gradient">
          THE TRADERS RESERVE SOLUTION
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold">
          Finally, A Trading System That Actually Works
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Stop gambling with your money. Join thousands of traders who've discovered the secret 
          to consistent income generation in any market condition.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="border-success/20 hover:border-success/50 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-success/10 p-2 rounded-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-success/5 to-primary/5 border-success/20">
        <CardHeader>
          <CardTitle className="text-center text-2xl">What You Get With Traders Reserve</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-6">
            <div className="space-y-4">
              <div className="text-3xl font-bold text-success">
                Limited Time: 50% Off
              </div>
              <div className="text-lg">
                <span className="text-muted-foreground line-through">$297/month</span>
                <span className="text-2xl font-bold text-success ml-4">$147/month</span>
              </div>
              <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                Join Traders Reserve Now
              </Button>
              <div className="text-sm text-muted-foreground">
                30-day money-back guarantee • Cancel anytime
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Solution;