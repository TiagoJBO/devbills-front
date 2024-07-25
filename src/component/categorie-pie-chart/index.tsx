import { ResponsivePie } from '@nivo/pie';
import { useMemo } from 'react';

import { theme } from '../../styles/theme';
import { formactCurrency } from '../../utils/format-currenncy';
import { Category } from '../../services/api-types';

const apiData = [
 {
  _id: '1',
  title: 'Alimentação',
  amount: 30000,
  color: '#ff33bb',
 },

 {
  _id: '2',
  title: 'Gasoline',
  amount: 20000,
  color: '#ff0000',
 },
 {
  _id: '3',
  title: 'Casa',
  amount: 6000,
  color: '#00ff00',
 },
];

export type CategoryProps={
    id?:string
    title:string 
    color:string 
}

type ChartData = {
 id: string,
 label: string,
 externalId: string,
 value: number,
 color: string,
};

type CategoriesPierChartProps={
    onClick:(category:Category)=>void
}
    export function CategoriesPieChart({onClick}:CategoriesPierChartProps) {
 const data = useMemo<ChartData[]>(() => {
  const chartData: ChartData[] = apiData.map((item) => ({
   id: item.title,
   label: item.title,
   externalId: item._id,
   value: item.amount,
   color: item.color,
  }));

  return chartData;
 }, []);

 return (
  <ResponsivePie
  onClick={({data})=>
     onClick({
 _id:data.externalId,
 title:data.id,
 color:data.color,

  })
}
   data={data}
   enableArcLabels={false}
   enableArcLinkLabels={false}
   colors={({ data }) => data.color}
   margin={{ top: 20 }}
   valueFormat={formactCurrency}
   theme={{
    text: {
     fontFamily: 'Lexend',
     fontSize: 10,
    },
    tooltip: {
     container: {
      backgroundColor: theme.colors.black,
      padding: 16,
      color: theme.colors.white,
      fontFamily: 'Lexend',
      fontSize: 12,
      borderRadius: 4,
     },
    },
   }}
   legends={[
    {
     anchor: 'top',
     direction: 'row',
     justify: false,
     translateX: 0,
     translateY: -20,
     itemWidth: 120,
     itemHeight: 16,
     itemTextColor: theme.colors.neutral,
     itemDirection: 'left-to-right',
     itemOpacity: 1,
     symbolShape: 'circle',
    },
   ]}
  />
 );
}
