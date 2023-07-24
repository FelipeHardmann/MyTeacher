import { CabecalhoContainer, Logo } from "./Cabecalho.style"

const Cabecalho = () => {
    return (
        <CabecalhoContainer>
            <div>
                <Logo src="/images/myteacher.png"/>
            </div>

            <br />
            
            <p>Find a perfect teacher!!!</p>
        </CabecalhoContainer>
    )
}

export default Cabecalho
