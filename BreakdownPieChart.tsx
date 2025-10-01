import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartData {
  name: string;
  value: number;
}

interface BreakdownPieChartProps {
  data: ChartData[];
  title: string;
}

const COLORS = ['#14b8a6', '#0891b2', '#f97316', '#ef4444']; // Teal, Cyan, Orange, Red

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-2 bg-white border rounded-md shadow-md">
                <p className="font-bold">{`${payload[0].name}`}</p>
                <p className="text-sm">{`$${payload[0].value.toFixed(2)}`}</p>
            </div>
        );
    }
    return null;
};

const BreakdownPieChart: React.FC<BreakdownPieChartProps> = ({ data, title }) => {
  const chartData = data.filter(d => d.value > 0);

  if (chartData.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center">
        <h3 className="text-lg font-semibold mb-4 text-teal-700">{title}</h3>
        <p className="text-gray-500">Not enough data to display chart.</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
        <h3 className="text-lg font-semibold mb-2 text-center text-teal-700">{title}</h3>
        <ResponsiveContainer width="100%" height={300}>
        <PieChart>
            <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
            >
            {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
        </PieChart>
        </ResponsiveContainer>
    </div>
  );
};

export default BreakdownPieChart;
