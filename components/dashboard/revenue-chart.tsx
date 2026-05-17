"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPkr, formatPkrCompact } from "@/lib/format-currency";

interface RevenueChartProps {
  data: { month: string; revenue: number; members?: number }[];
  title?: string;
}

export function RevenueChart({
  data,
  title = "Revenue Overview",
}: RevenueChartProps) {
  return (
    <Card className="border border-white/5 bg-charcoal-grey">
      <CardHeader>
        <CardTitle className="font-display text-base uppercase text-secondary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00f0ff" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#00f0ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-white/10" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#b9cacb" }} />
              <YAxis
                tick={{ fontSize: 12, fill: "#b9cacb" }}
                tickFormatter={(v) => formatPkrCompact(Number(v))}
              />
              <Tooltip
                formatter={(value) => [
                  formatPkr(Number(value), {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }),
                  "Revenue",
                ]}
                contentStyle={{
                  backgroundColor: "#121212",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "4px",
                  color: "#e5e2e1",
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#00f0ff"
                fill="url(#revenueGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
