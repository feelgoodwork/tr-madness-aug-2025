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
        <h2 className="text-3xl md:text-4xl font-bold">
          April 2024 Income Madness Results
        </h2>
        <div className="text-4xl md:text-6xl font-bold text-success">
          ${totalCash.toLocaleString()}
        </div>
        <div className="text-xl text-muted-foreground">
          {totalTrades} Trades, {winningTrades} Wins in 6 Days
        </div>
        <Badge variant="secondary" className="text-lg px-4 py-2">
          {winRate}% Win Rate
        </Badge>
      </div>

      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-center">Trade Details</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/50">
                <tr>
                  <th className="text-left p-4 font-semibold">Stock</th>
                  <th className="text-left p-4 font-semibold">Ticker</th>
                  <th className="text-left p-4 font-semibold">Trade Detail</th>
                  <th className="text-right p-4 font-semibold">Cash</th>
                </tr>
              </thead>
              <tbody>
                {tradingData.map((trade, index) => (
                  <tr key={index} className="border-b border-border hover:bg-secondary/20 transition-colors">
                    <td className="p-4">{trade.stock}</td>
                    <td className="p-4 font-mono text-accent">{trade.ticker}</td>
                    <td className="p-4 text-sm">{trade.trade}</td>
                    <td className={`p-4 text-right font-bold ${
                      trade.cash > 0 ? 'text-success' : 'text-loss'
                    }`}>
                      ${trade.cash > 0 ? '+' : ''}${trade.cash.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-secondary/50">
                <tr>
                  <td colSpan={3} className="p-4 font-bold text-right">TOTAL CASH COLLECTED</td>
                  <td className="p-4 text-right font-bold text-success text-lg">
                    ${totalCash.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TradingResults;