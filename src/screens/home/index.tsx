import { InputMask } from '@react-input/mask';

import { ButtonIcon } from '../../component/button.icon';
import { Card } from '../../component/card';
import { CategoriesPieChart } from '../../component/categorie-pie-chart';
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

export function Home() {
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
       />
       <InputMask
        component={Input}
        mask="dd/mm/aaaa"
        replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
        variant="dark"
        label="Fim"
        placeholder="dd/mm/aaaa"
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
       <CategoriesPieChart />
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
        <ButtonIcon />
       </ChartAction>
      </header>
      <ChartContent>
       <FinancialEvolutionBarChart />
      </ChartContent>
     </ChartContainer>
    </Section>
    <Aside>
     <header>
      <Title title="Transações" subtitle="Receita e Gastos por Períodos" />
      <SearchTransition>
       <Input variant="black" placeholder="Procurar Transações" />
       <ButtonIcon />
      </SearchTransition>
     </header>
     <TransactionGroup>
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
