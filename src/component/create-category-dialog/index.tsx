import { useCallback, useState } from 'react';

import { Button } from '../button';
import { Dialog } from '../dialog';
import { Input } from '../input';
import { Title } from '../title';
import { Container } from './styles';

export function CreateCategoryDialog() {
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
   trigger={<Button>Nova Categoria</Button>}
  >
   <Container>
    <Title
     title="Nova Vategoria"
     subtitle="Crie uma nova Categoria para suas transções"
    />

    <form>
     <div>
      <Input label="Nome" placeholder="Nome da categoria..." />
      <Input label="Cor" type="color" />
     </div>

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
