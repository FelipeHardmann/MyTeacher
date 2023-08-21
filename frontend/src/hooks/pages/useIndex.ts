import { Professor } from "@/src/@types/professor";
import { ApiService } from "@/src/services/apiServices";
import { useEffect, useState } from "react";

export function useIndex(){
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([])
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [professorSelecionado, setProfessorSelecionado] = useState<Professor | null>(null)
    const [mensagem, setMensagem] = useState('')
    
    useEffect(() => {
        ApiService.get('/professores').then((resposta) => {
            setListaProfessores(resposta.data)
        })
    }, [])

    useEffect(() => {
        limparForm()
    }, [professorSelecionado])
    
    function marcarAula(){
        if(professorSelecionado !== null){
            if(validarDadosAula()){
                ApiService.post('/professores/'+ professorSelecionado.id +'/aulas', {
                    nome,
                    email
                }).then(() => {
                    setProfessorSelecionado(null)
                    setMensagem('Cadastrado com sucesso')
                }).catch((error) => {
                    setMensagem(error.response?.data.message)
                })
            }else{
                setMensagem('Preencha os dados corretamente')
            }
        }
    }

    function validarDadosAula(){
        return nome.length > 0 && email.length > 0
    }

    function limparForm(){
        setNome('')
        setEmail('')
    }

    return {
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
    }
}