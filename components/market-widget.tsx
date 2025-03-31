"use client"

import { useEffect, useState } from "react"
import { ArrowUp, ArrowDown, TrendingUp } from "lucide-react"

interface CryptoData {
  id: string
  name: string
  symbol: string
  price: number
  change24h: number
  volume24h: number
  marketCap: number
}

// Simulated crypto data
const initialData: CryptoData[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: 51432.78,
    change24h: 2.34,
    volume24h: 32456789012,
    marketCap: 987654321098,
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: 2876.45,
    change24h: -1.23,
    volume24h: 18765432109,
    marketCap: 345678901234,
  },
  {
    id: "binancecoin",
    name: "Binance Coin",
    symbol: "BNB",
    price: 412.67,
    change24h: 0.87,
    volume24h: 2345678901,
    marketCap: 67890123456,
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    price: 98.76,
    change24h: 5.43,
    volume24h: 3456789012,
    marketCap: 34567890123,
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    price: 0.54,
    change24h: -2.11,
    volume24h: 1234567890,
    marketCap: 17890123456,
  },
]

export default function MarketWidget() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>(initialData)
  const [loading, setLoading] = useState(false)

  // Simulate data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoData((prevData) =>
        prevData.map((crypto) => ({
          ...crypto,
          price: crypto.price * (1 + (Math.random() * 0.01 - 0.005)),
          change24h: crypto.change24h + (Math.random() * 0.4 - 0.2),
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Format large numbers
  const formatNumber = (num: number): string => {
    if (num >= 1e12) return (num / 1e12).toFixed(2) + "T"
    if (num >= 1e9) return (num / 1e9).toFixed(2) + "B"
    if (num >= 1e6) return (num / 1e6).toFixed(2) + "M"
    if (num >= 1e3) return (num / 1e3).toFixed(2) + "K"
    return num.toFixed(2)
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border border-border/40 bg-gradient-to-br from-secondary/50 to-secondary/30">
      <div className="p-4 border-b border-border/40 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp size={18} className="text-amber-500" />
          <h3 className="font-semibold">Marché Crypto</h3>
        </div>
        <button
          className="text-xs text-amber-500 hover:text-amber-400 transition-colors"
          onClick={() => setLoading(true)}
        >
          Actualiser
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-muted-foreground">
              <th className="p-4 text-left">Crypto</th>
              <th className="p-4 text-right">Prix</th>
              <th className="p-4 text-right">24h</th>
              <th className="p-4 text-right hidden md:table-cell">Volume (24h)</th>
              <th className="p-4 text-right hidden md:table-cell">Cap. Marché</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((crypto) => (
              <tr key={crypto.id} className="border-t border-border/20 hover:bg-amber-500/5 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-semibold text-xs">
                      {crypto.symbol.substring(0, 2)}
                    </div>
                    <div>
                      <div className="font-medium">{crypto.name}</div>
                      <div className="text-xs text-muted-foreground">{crypto.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-right font-medium">
                  ${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td
                  className={`p-4 text-right ${
                    crypto.change24h > 0 ? "text-green-500" : crypto.change24h < 0 ? "text-red-500" : ""
                  }`}
                >
                  <div className="flex items-center justify-end gap-1">
                    {crypto.change24h > 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                    {Math.abs(crypto.change24h).toFixed(2)}%
                  </div>
                </td>
                <td className="p-4 text-right hidden md:table-cell text-muted-foreground">
                  ${formatNumber(crypto.volume24h)}
                </td>
                <td className="p-4 text-right hidden md:table-cell text-muted-foreground">
                  ${formatNumber(crypto.marketCap)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-3 border-t border-border/40 text-center">
        <a
          href="https://cryptobubbles.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-amber-500 hover:text-amber-400 transition-colors"
        >
          Voir plus de cryptomonnaies →
        </a>
      </div>
    </div>
  )
}

