import { Button } from "@mui/material"
import { ListaStyled, ItemLista, Foto, Informacoes, Nome, Valor, Descricao } from "./Lista.style"

const Lista = () => {
    return(
        <ListaStyled>
            
            <ItemLista>
                <Foto src="https://github.com/FelipeHardmann.png"></Foto>
                <Informacoes>
                    <Nome>Felipe Hardmann</Nome>
                    <Valor>R$ 100,00</Valor>
                    <Descricao>Aulas de programação</Descricao>
                    <Button>Marcar Aula</Button>
                </Informacoes>
            </ItemLista>
            
        </ListaStyled>
    )
}

export default Lista