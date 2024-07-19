import { InputMask } from '@react-input/mask';
import { useCallback, useState } from 'react';

import { Button } from '../button';
import { Dialog } from '../dialog';
import { Input } from '../input';
import { Title } from '../title';
import {
 Container,
 Content,
 CurrencyInput,
 InputGroup,
 RadioForm,
 RadioGroup,
} from './styles';

export function CreateTransactionDialog() {
 const [open, setOpen] = useState(false);
 const handleClose = useCallback(() => {
  setOpen(false);
 }, []);

 const onSubmit = useCallback(() => {
  handleClose();
 }, [handleClose]);

 return (
  <Dialog
   open={open}
   onOpenChange={setOpen}
   trigger={<Button>Nova Transação</Button>}
  >
   <Container>
    <Title
     title="Nova Transação"
     subtitle="crie uma nova transação para seu controle financeiro"
    />

    <form>
     <Content>
      <InputGroup>
       <label htmlFor="">Categoria</label>
       <select>
        <option value="null">Selecione um Categoria</option>
       </select>
      </InputGroup>
      <Input label="Nome" placeholder="Nome da Tansação..." />
      <InputGroup>
       <label htmlFor="">Valor</label>
       <CurrencyInput placeholder="R$ 0,00" format="currency" currency="BRL" />
      </InputGroup>

      <InputMask
       component={Input}
       mask="dd/mm/aaaa"
       replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
       label="Date"
       variant="black"
       placeholder="dd/mm/aaaa"
      />
      <RadioForm>
       <RadioGroup>
        <input type="radio" id="income" value="income" name="type" />
        <label htmlFor="income">Receita</label>
       </RadioGroup>
       <RadioGroup>
        <input type="radio" id="expense" value="income" name="type" />
        <label htmlFor="expense">Gasto</label>
       </RadioGroup>
      </RadioForm>
     </Content>
     <footer>
      <Button onClick={handleClose} variant="outline" type="button">
       Cancelar
      </Button>
      <Button onClick={onSubmit} type="button">
       Cadastrar
      </Button>
     </footer>
    </form>
   </Container>
  </Dialog>
 );
}