import { Button } from "@mui/material"
import { ListaStyled, ItemLista, Foto, Informacoes, Nome, Valor, Descricao, ListaVazia } from "./Lista.style"
import { Professor } from "@/src/@types/professor"

interface ListaProfessores {
    professores: Professor[],
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
                            <Valor>R$ {professor.valor_hora} por hora</Valor>
                            <br />
                            <Descricao>{professor.descricao}</Descricao>
                            <br />
                            <Button sx={{width: '70%'}}>Marcar Aula com Felipe</Button>
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