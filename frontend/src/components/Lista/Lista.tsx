import { Button } from "@mui/material"
import { ListaStyled, ItemLista, Foto, Informacoes, Nome, Valor, Descricao, ListaVazia } from "./Lista.style"
import { Professor } from "@/src/@types/professor"
import { FormatadorService } from "@/src/services/FormatadorService"

interface ListaProfessores {
    professores: Professor[],
    onSelect: (professor: Professor) => void
}

const Lista = (props: ListaProfessores) => {
    return(
        <div>
            {props.professores.length > 0 ? (
                <ListaStyled>
                    {props.professores.map(professor => (
                    <ItemLista key={professor.id}>
                        <Foto src={professor.foto}></Foto>
                        <Informacoes>
                            <Nome>{professor.nome}</Nome>
                            <Valor>{FormatadorService.valorMonetario(professor.valor_hora)} por hora</Valor>
                            <br />
                            <Descricao>{FormatadorService.limitarTexto(professor.descricao, 200)}</Descricao>
                            <br />
                            <Button onClick={() => props.onSelect(professor)} sx={{width: '70%'}}>Marcar Aula com {professor.nome}</Button>
                        </Informacoes>
                    </ItemLista>
                    ))}
                </ListaStyled>
            ) : (
                <ListaVazia>Nenhum item encontrado</ListaVazia>
            )}
        </div>    
    )
}

export default Lista