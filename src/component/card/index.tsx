import {
 ArrowCircleDownLeft,
 ArrowCircleUpRight,
 CurrencyCircleDollar,
 CurrencyDollar,
} from '@phosphor-icons/react';

import { formactCurrency } from '../../utils/format-currenncy';
import { Container } from './styles';
type CardProps = {
 variant?: 'balance' | 'incomes' | 'expenses',
 title: string,
 amount: number,
};

const iconsMaap = {
 balance: <CurrencyCircleDollar />,
 incomes: <ArrowCircleUpRight />,
 expenses: <ArrowCircleDownLeft />,
};

export function Card({ variant = 'balance', title, amount }: CardProps) {
 return (
  <Container $variant={variant}>
   {iconsMaap[variant]}
   <CurrencyDollar />
   <span>{title}</span>
   <strong>{formactCurrency(amount)}</strong>
  </Container>
 );
}
