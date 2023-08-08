import { Professor } from "@/src/@types/professor";
import Lista from "@/src/components/Lista/Lista";
import { useIndex } from "@/src/hooks/pages/useIndex";
import { Box } from "@mui/material";

export default function Home() {
  const { listaProfessores } = useIndex()
  
  return (
    // <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista professores={listaProfessores}></Lista>
    // </Box>
  )
}
