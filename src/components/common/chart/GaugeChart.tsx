import { useTheme } from '@emotion/react';
import { Cell, Pie, PieChart } from 'recharts';

interface INeedleRenderProps {
  value: number;
  data: { name: string; value: number; color: string }[];
  cx: number;
  cy: number;
  iR: number;
  oR: number;
  color: string;
}

interface IProps {
  width: number;
  height?: number;
}

export default function GaugeChart({ width, height }: IProps) {
  const theme = useTheme();

  const RADIAN = Math.PI / 180;
  const data = [
    { name: 'A', value: 75, color: theme.color.theme.negavite },
    { name: 'B', value: 25, color: theme.color.base.gray._c },
  ];
  const cx = 150;
  const cy = 200;
  const iR = 50;
  const oR = 100;
  const value = 50;

  const needle = ({ value, data, cx, cy, iR, oR, color }: INeedleRenderProps) => {
    let total = 0;
    data.forEach(v => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 4;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" key={x0} />,
      <path
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        stroke="#none"
        fill={color}
        key={y0}
      />,
    ];
  };

  return (
    <PieChart width={width} height={width * (2 / 3) || undefined}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill="#8884d8"
        stroke="none"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      {needle({ value, data, cx, cy, iR, oR, color: theme.color.base.black })}
    </PieChart>
  );
}
