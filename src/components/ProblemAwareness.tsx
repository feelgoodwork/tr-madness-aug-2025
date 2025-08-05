import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingDown, Clock, Target, DollarSign } from 'lucide-react';

const ProblemAwareness = () => {
  const problems = [
    {
      icon: <TrendingDown className="w-8 h-8 text-loss" />,
      title: "Losing Money Consistently",
      description: "85% of retail traders lose money because they lack proven strategies and proper risk management."
    },
    {
      icon: <Clock className="w-8 h-8 text-warning" />,
      title: "Wasting Time on Research",
      description: "Spending hours analyzing charts and news only to make emotional decisions that destroy your portfolio."
    },
    {
      icon: <Target className="w-8 h-8 text-muted-foreground" />,
      title: "No Clear Strategy",
      description: "Trading without a systematic approach leads to inconsistent results and endless frustration."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-success" />,
      title: "Missing Income Opportunities",
      description: "While you struggle, professional traders are consistently generating income from the same markets."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="destructive" className="text-sm px-4 py-2">
          TRADING REALITY CHECK
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold">
          Are You Tired of These Trading Problems?
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          If you're struggling with inconsistent results, emotional decisions, and watching your account 
          shrink while others profit, you're not alone. Here's what's really holding you back:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {problems.map((problem, index) => (
          <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-card border border-border/50 rounded-lg p-6 text-center">
        <h3 className="text-2xl font-bold mb-4 text-loss">
          The Painful Truth: Most Traders Fail
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-loss">85%</div>
            <div className="text-sm text-muted-foreground">Lose Money</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-warning">$15K</div>
            <div className="text-sm text-muted-foreground">Average Loss</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-muted-foreground">2 Years</div>
            <div className="text-sm text-muted-foreground">Before Quitting</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemAwareness;