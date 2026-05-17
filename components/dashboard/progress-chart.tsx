"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProgressChartProps {
  data: { week: string; workouts: number; calories?: number }[];
}

export function ProgressChart({ data }: ProgressChartProps) {
  return (
    <Card className="border border-white/5 bg-charcoal-grey">
      <CardHeader>
        <CardTitle className="font-display text-base uppercase text-secondary">
          Weekly Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[240px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-white/10" />
              <XAxis dataKey="week" tick={{ fontSize: 12, fill: "#b9cacb" }} />
              <YAxis tick={{ fontSize: 12, fill: "#b9cacb" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#121212",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "4px",
                  color: "#e5e2e1",
                }}
              />
              <Bar
                dataKey="workouts"
                fill="#00f0ff"
                radius={[4, 4, 0, 0]}
                name="Workouts"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
