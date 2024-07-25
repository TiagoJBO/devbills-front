import { InputMask } from '@react-input/mask';

import { ButtonIcon } from '../../component/button.icon';
import { Card } from '../../component/card';
import {
 CategoriesPieChart,
 CategoryProps,
} from '../../component/categorie-pie-chart';
import { CreateCategoryDialog } from '../../component/create-category-dialog';
import { CreateTransactionDialog } from '../../component/create-transaction-dialog';
import { FinancialEvolutionBarChart } from '../../component/financial-evolution-bar-chart';
import { Input } from '../../component/input';
import { Logo } from '../../component/logo';
import { Title } from '../../component/title';
import { Transaction } from '../../component/transaction';
import {
 Header,
 Main,
 Section,
 Filter,
 InputGroup,
 Balance,
 ChartContainer,
 ChartContent,
 ChartAction,
 Aside,
 SearchTransition,
 TransactionGroup,
} from './styles';
import { useForm } from 'react-hook-form';
import { TransactionFilterData } from '../../validators/types';
import dayjs from 'dayjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { transactionsFilterSchema } from '../../validators/schemas';
import { useCallback, useEffect, useState } from 'react';
import { useFetchAPI } from '../../hooks/useFetchAPI';

export function Home() {
 const transactionsFilterForm = useForm<TransactionFilterData>({
  defaultValues: {
   title: '',
   categoryId: '',
   beginDate: dayjs().startOf('month').format('DD/MM/YYY'),
   endDate: dayjs().endOf('month').format('DD/MM/YYY'),
  },
  resolver: zodResolver(transactionsFilterSchema),
 });

 const { transactions, fetchTransactions } = useFetchAPI();

 useEffect(() => {
  fetchTransactions(transactionsFilterForm.getValues());
 }, [fetchTransactions, transactionsFilterForm]);

 const [selectedCategory, setSelectedCategory] = useState<CategoryProps | null>(
  null,
 );

 const hadleSelectCategory = useCallback(
  ({ id, title, color }: CategoryProps) => {
   setSelectedCategory({ id, title, color });
   transactionsFilterForm.setValue('categoryId', id);
  },
  [transactionsFilterForm],
 );

 const handleDeselectCategory = useCallback(() => {
  setSelectedCategory(null);
  transactionsFilterForm.setValue('categoryId', '');
 }, [transactionsFilterForm]);

 const onSubmitTransactions = useCallback(
  async (data: TransactionFilterData) => {
   await fetchTransactions(data);
  },
  [],
 );

 return (
  <>
   <Header>
    <Logo />

    <div>
     <CreateTransactionDialog />
     <CreateCategoryDialog />
    </div>
   </Header>
   <Main>
    <Section>
     <Filter>
      <Title title="Saldo" subtitle="Receitas e despesas no periodo" />
      <InputGroup>
       <InputMask
        component={Input}
        mask="dd/mm/aaaa"
        replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
        variant="dark"
        label="Inicio"
        placeholder="dd/mm/aaaa"
        aria-errormessage={
         transactionsFilterForm.formState.errors.beginDate?.message
        }
        {...transactionsFilterForm.register('beginDate')}
       />
       <InputMask
        component={Input}
        mask="dd/mm/aaaa"
        replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
        variant="dark"
        label="Fim"
        placeholder="dd/mm/aaaa"
        aria-errormessage={
         transactionsFilterForm.formState.errors.endDate?.message
        }
        {...transactionsFilterForm.register('endDate')}
       />
       <ButtonIcon />
      </InputGroup>
     </Filter>
     <Balance>
      <Card title="Saldo" amount={1000000} />
      <Card title="Saldo" amount={1000000} variant="incomes" />
      <Card title="Saldo" amount={1000000} variant="expenses" />
     </Balance>
     <ChartContainer>
      <header>
       <Title title="Gastos" subtitle="Despesas por Categoria no Período" />
      </header>
      <ChartContent>
       <CategoriesPieChart onClick={hadleSelectCategory} />
      </ChartContent>
     </ChartContainer>
     <ChartContainer>
      <header>
       <Title
        title="Evolução Financeira"
        subtitle="Saldo, Receita e Gastos no ano"
       />
       <ChartAction>
        <InputMask
         component={Input}
         mask="dd/mm/aaaa"
         replacement={{ a: /\d/ }}
         variant="black"
         label="Ano"
         placeholder="aaaa"
        />
        <ButtonIcon
         onClick={transactionsFilterForm.handleSubmit(onSubmitTransactions)}
        />
       </ChartAction>
      </header>
      <ChartContent>
       <FinancialEvolutionBarChart />
      </ChartContent>
     </ChartContainer>
    </Section>
    <Aside>
     <header>
      <Title
       title="Transações"
       subtitle="Receita e Gastos por Períodos"
       {...transactionsFilterForm.register('title')}
      />
      <SearchTransition>
       <Input variant="black" placeholder="Procurar Transações" />
       <ButtonIcon
        onClick={transactionsFilterForm.handleSubmit(onSubmitTransactions)}
       />
      </SearchTransition>
     </header>
     <TransactionGroup>
      {transactions.length &&
       transactions.map((item, index) => (
        <Transaction
         key={item._id}
         id={index + 1}
         amount={item.type === 'expense' ? item.amount * -1 : item.amount}
         date={dayjs(item.date).add(3, 'hours').format('DD/MM/YYYY')}
         category={{ title: item.category.title, color: item.category.color }}
         title={item.title}
         variant={item.type}
        />
       ))}

      <Transaction
       id={1}
       amount={20000}
       date="09/07/2024"
       category={{ title: 'Alimentação', color: '#ff33ff' }}
       title="Mercedo"
      />
      <Transaction
       id={1}
       amount={20000}
       date="09/07/2024"
       category={{ title: 'Alimentação', color: '#ff33ff' }}
       title="Mercedo"
      />
      <Transaction
       id={1}
       amount={20000}
       date="09/07/2024"
       category={{ title: 'Alimentação', color: '#ff33ff' }}
       title="Mercedo"
      />
      <Transaction
       id={1}
       amount={20000}
       date="09/07/2024"
       category={{ title: 'Alimentação', color: '#ff33ff' }}
       title="Mercedo"
      />
     </TransactionGroup>
    </Aside>
   </Main>
  </>
 );
}
