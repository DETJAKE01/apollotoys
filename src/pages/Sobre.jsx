import ColorSchemesExample from "./ColorSchemesExample"
import Footer from './Footer'

function Sobre(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
            <h2>Sobre</h2>

            <p>
            Bem-vindo(a) à Apollo Toys, a sua porta de entrada para uma jornada emocionante no mundo dos jogos de tabuleiro! Somos uma empresa apaixonada por criar experiências inesquecíveis e momentos de diversão para pessoas de todas as idades. Se você está procurando uma forma envolvente e interativa de passar o tempo com amigos e família, você veio ao lugar certo.
            </p><br/><br/><br/><br/><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Sobre