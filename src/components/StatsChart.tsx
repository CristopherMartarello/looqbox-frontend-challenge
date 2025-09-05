import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
} from 'recharts';
import type { PokemonStat, PokemonType } from '../types/pokemon';
import { POKEMON_TYPE_COLORS } from '../constants/pokemon';

interface PokemonStatsChartProps {
  stats: PokemonStat[];
  types: PokemonType[];
}

const PokemonStatsChart = ({ stats, types }: PokemonStatsChartProps) => {
  const data = stats.map((stat) => ({
    stat: stat.stat.name.toUpperCase(),
    value: stat.base_stat,
  }));

  return (
    <RadarChart outerRadius={100} width={500} height={300} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="stat" />
      <Radar
        name="Base Stats"
        dataKey="value"
        stroke={POKEMON_TYPE_COLORS[types[0].type.name] || '#8884d8'}
        fill={POKEMON_TYPE_COLORS[types[0].type.name] || '#8884d8'}
        fillOpacity={0.7}
      />
      <Tooltip />
    </RadarChart>
  );
};

export default PokemonStatsChart;
