import { Professor } from "@/src/@types/professor";
import Lista from "@/src/components/Lista/Lista";
import { Box } from "@mui/material";

export default function Home() {
  const professores: Professor[] = [
    {
      id: 1,
      nome: 'Professor 1',
      descricao: 'Descrição do professor 1',
      valor_hora: 100,
      foto: 'https://github.com/FelipeHardmann.png'
    },
    {
      id: 2,
      nome: 'Professor 2',
      descricao: 'Descrição do professor 2',
      valor_hora: 100,
      foto: 'https://github.com/FelipeHardmann.png'
    },
    {
      id: 3,
      nome: 'Professor 3',
      descricao: 'Descrição do professor 3',
      valor_hora: 100,
      foto: 'https://github.com/FelipeHardmann.png'
    },
    {
      id: 4,
      nome: 'Professor 4',
      descricao: 'Descrição do professor 4',
      valor_hora: 100,
      foto: 'https://github.com/FelipeHardmann.png'
    }
  ] 
  
  return (
    // <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista professores={professores}></Lista>
    // </Box>
  )
}
