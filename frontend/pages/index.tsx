import { Professor } from "@/src/@types/professor";
import Lista from "@/src/components/Lista/Lista";
import { useIndex } from "@/src/hooks/pages/useIndex";
import { Box, Button, Dialog, DialogActions, Grid, TextField } from "@mui/material";

export default function Home() {
  const { listaProfessores } = useIndex()
  
  return (
    <div>
      <Lista professores={listaProfessores}></Lista>
    
      <Dialog open={true} fullWidth PaperProps={{sx: {p: 5}}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              label='Digite o Nome'
              type='text'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label='Digite o Email'
              type='email'
              fullWidth
            />
          </Grid>
        </Grid>

        <DialogActions sx={{mt: 5}}>
          <Button>
            Cancelar
          </Button>
          <Button>
            Marcar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
