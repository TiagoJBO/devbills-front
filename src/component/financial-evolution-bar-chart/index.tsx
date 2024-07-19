import { ResponsiveBar } from '@nivo/bar';
import dayjs from 'dayjs';
import ptBRlocale from 'dayjs/locale/pt-br';
import { useMemo } from 'react';

import { theme } from '../../styles/theme';
import { formactCurrency } from '../../utils/format-currenncy';

dayjs.locale(ptBRlocale);

const apiData = [
 {
  _id: {
   yaer: 2024,
   month: '1',
  },
  balance: 68900,
  incomes: 76343,
  expenses: 48399,
 },
 {
  _id: {
   yaer: 2024,
   month: '2',
  },
  balance: 68900,
  incomes: 76343,
  expenses: 48399,
 },
 {
  _id: {
   yaer: 2024,
   month: '3',
  },
  balance: 68900,
  incomes: 76343,
  expenses: 48399,
 },
 {
  _id: {
   yaer: 2024,
   month: '4',
  },
  balance: 68900,
  incomes: 76343,
  expenses: 48399,
 },
];

type ChartData = {
 month: string,
 Saldo: number,
 Receitas: number,
 Gastos: number,
};

export function FinancialEvolutionBarChart() {
 const data = useMemo<ChartData[]>(() => {
  const chartData: ChartData[] = apiData.map((item) => ({
   month: dayjs(`${item._id}-${item._id.month}-01`).format('MMM'),
   Saldo: item.balance,
   Receitas: item.incomes,
   Gastos: item.expenses,
  }));

  return chartData;
 }, []);

 return (
  <ResponsiveBar
   data={data}
   keys={['Saldo', 'Receitas', 'Gastos']}
   colors={[theme.colors.info, theme.colors.primary, theme.colors.error]}
   indexBy={'month'}
   groupMode="grouped"
   enableLabel={false}
   enableGridY={false}
   padding={0.2}
   axisLeft={{
    tickSize: 0,
    format: formactCurrency,
   }}
   margin={{ left: 80, bottom: 28 }}
   theme={{
    text: {
     fontFamily: 'Lexend',
     fontSize: 10,
    },
    axis: {
     ticks: {
      text: {
       fill: theme.colors.white,
      },
     },
    },
    tooltip: {
     container: {
      backgroundColor: theme.colors.black,
      padding: 16,
      color: theme.colors.white,
      fontFamily: 'Lexends',
      fontSize: 12,
      borderRadius: 4,
     },
    },
   }}
   valueFormat={formactCurrency}
  />
 );
}
