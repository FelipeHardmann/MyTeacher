import { Professor } from "@/src/@types/professor";
import Lista from "@/src/components/Lista/Lista";
import { useIndex } from "@/src/hooks/pages/useIndex";
import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField, Alert } from "@mui/material";

export default function Home() {
  const { 
    listaProfessores, 
    nome, 
    setNome, 
    email,
    setEmail,
    professorSelecionado,
    setProfessorSelecionado,
    marcarAula,
    mensagem,
    setMensagem 
  } = useIndex()
  
  return (
    <div>
      <Lista 
        professores={listaProfessores}
        onSelect={(professor) => setProfessorSelecionado(professor)}
      ></Lista>
    
      <Dialog onClose={() => setProfessorSelecionado(null)} open={professorSelecionado != null} fullWidth PaperProps={{sx: {p: 5}}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              label='Digite o Nome'
              type='text'
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label='Digite o Email'
              type='email'
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{mt: 5}}>
          <Button onClick={() => setProfessorSelecionado(null)}>
            Cancelar
          </Button>
          <Button onClick={() => marcarAula()}>
            Marcar
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        open={mensagem === 'Cadastrado com sucesso'} 
        autoHideDuration={2500} 
        onClose={() => setMensagem('')}
      >
          <Alert 
            severity="success" 
            onClose={() => setMensagem('')}
            >
              {mensagem}
          </Alert>  
      </Snackbar>
    
      <Snackbar
        open={mensagem === 'Houveram erros de validação'}
        autoHideDuration={2500}
        onClose={() => setMensagem('')}
      >
          <Alert
            severity="error"
            onClose={() => setMensagem('')}
          >
            {mensagem}
          </Alert>
      </Snackbar>
    
      <Snackbar
        open={mensagem === 'Preencha os dados corretamente'}
        autoHideDuration={2500}
        onClose={() => setMensagem('')}
      >
          <Alert
            severity="warning"
            onClose={() => setMensagem('')}
          >
              {mensagem}
          </Alert>
      </Snackbar>

    </div>
  )
}

      //   message={mensagem} 
      //   open={mensagem.length > 0} 
      //   autoHideDuration={2500}
      //   onClose={() => setMensagem('')}
      // />