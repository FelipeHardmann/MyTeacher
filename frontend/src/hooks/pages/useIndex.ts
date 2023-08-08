import { Professor } from "@/src/@types/professor";
import { ApiService } from "@/src/services/apiServices";
import { useEffect, useState } from "react";

export function useIndex(){
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([])
    
    useEffect(() => {
        ApiService.get('/professores').then((resposta) => {
            setListaProfessores(resposta.data)
        })
    }, [])
    
    return {
        listaProfessores
    }
}