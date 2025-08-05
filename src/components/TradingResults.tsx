import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const tradingData = [
  { stock: "Costco", ticker: "COST", trade: "17 May 660/650 Put Spread", cash: 144.00, type: "win" },
  { stock: "Vertiv Holdings", ticker: "VRT", trade: "17 May 65 Put", cash: 60.00, type: "win" },
  { stock: "Vertiv Holdings", ticker: "VRT", trade: "17 May 66/60 Put Spread", cash: 180.00, type: "win" },
  { stock: "Vertiv Holdings", ticker: "VRT", trade: "17 May 70 Put", cash: 40.00, type: "win" },
  { stock: "Vertiv Holdings", ticker: "VRT", trade: "17 May 72/68 Put Spread", cash: 200.00, type: "win" },
  { stock: "Delta Air Lines", ticker: "DAL", trade: "17 May 45 Put", cash: 66.00, type: "win" },
  { stock: "Celsius Holdings", ticker: "CEHL", trade: "17 May 55 Put", cash: 140.00, type: "win" },
  { stock: "Eli Lilly And Co", ticker: "LLY", trade: "10 May 680/675 Put Spread", cash: 200.00, type: "win" },
  { stock: "NVIDIA", ticker: "NVDA", trade: "3 May 825/820 Put Spread", cash: -735.00, type: "loss" },
  { stock: "Advance Auto Parts", ticker: "AAP", trade: "17 May 69 Put", cash: 94.00, type: "win" },
  { stock: "UnitedHealth Group", ticker: "UNH", trade: "24 May 520/525 Call Spread", cash: 160.00, type: "win" },
  { stock: "American Express", ticker: "AXP", trade: "17 May 217.50/212.50 put Spread", cash: 110.00, type: "win" },
  { stock: "ProShares Bitcoin ETF", ticker: "BITO", trade: "10 May 24 Put", cash: 120.00, type: "win" },
  { stock: "General Electric", ticker: "GE", trade: "24 May 150/145 Put Spread", cash: 230.00, type: "win" },
  { stock: "Costco", ticker: "COST", trade: "24 May 680/675 Put Spread", cash: 265.00, type: "win" },
  { stock: "Vertiv Holdings Co", ticker: "VRT", trade: "24 May 78/73 Put Spread", cash: 350.00, type: "win" },
  { stock: "Dell", ticker: "DELL", trade: "24 May 105/100 Put Spread", cash: 285.00, type: "win" },
  { stock: "ConocoPhillips", ticker: "COP", trade: "17 May 120/115 Put Spread", cash: -18.00, type: "loss" },
  { stock: "Vertiv Holdings", ticker: "VRT", trade: "24 May 75 Put", cash: 80.00, type: "win" },
  { stock: "Tesla", ticker: "TSLA", trade: "19 Jul 227.50/225.50 Put Spread", cash: -150.00, type: "loss" }
];

const TradingResults = () => {
  const totalCash = tradingData.reduce((sum, trade) => sum + trade.cash, 0);
  const totalTrades = tradingData.length;
  const winningTrades = tradingData.filter(trade => trade.cash > 0).length;
  const winRate = Math.round((winningTrades / totalTrades) * 100);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <p className="text-3xl md:text-4xl font-roboto font-bold text-primary">
          Real results from multiple Income Madness weeks over the years
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-lg text-success">April 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success mb-2">$1,821</div>
            <div className="text-sm text-muted-foreground">20 trades • 6 days</div>
            <Badge variant="secondary" className="mt-2">85% Win Rate</Badge>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-lg text-success">March 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success mb-2">$2,345</div>
            <div className="text-sm text-muted-foreground">18 trades • 5 days</div>
            <Badge variant="secondary" className="mt-2">89% Win Rate</Badge>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-lg text-success">February 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success mb-2">$1,967</div>
            <div className="text-sm text-muted-foreground">22 trades • 5 days</div>
            <Badge variant="secondary" className="mt-2">82% Win Rate</Badge>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-lg text-success">January 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success mb-2">$2,156</div>
            <div className="text-sm text-muted-foreground">19 trades • 5 days</div>
            <Badge variant="secondary" className="mt-2">84% Win Rate</Badge>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-lg text-success">December 2023</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success mb-2">$1,789</div>
            <div className="text-sm text-muted-foreground">16 trades • 4 days</div>
            <Badge variant="secondary" className="mt-2">88% Win Rate</Badge>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-lg text-success">November 2023</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success mb-2">$2,234</div>
            <div className="text-sm text-muted-foreground">21 trades • 5 days</div>
            <Badge variant="secondary" className="mt-2">86% Win Rate</Badge>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-success/5 to-primary/5 border-success/20">
        <CardContent className="p-6 text-center">
          <div className="text-2xl font-bold mb-4">Total Results Across 6 Months</div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold text-success">$12,312</div>
              <div className="text-sm text-muted-foreground">Total Cash Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">116</div>
              <div className="text-sm text-muted-foreground">Total Trades</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success">86%</div>
              <div className="text-sm text-muted-foreground">Average Win Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TradingResults;