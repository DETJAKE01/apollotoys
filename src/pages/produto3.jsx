import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto3(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://m.media-amazon.com/images/I/51PCbc6pf7L._AC_SX522_.jpg"/>
                <Card.Body>
                <Card.Title>Cara a cara</Card.Title>
                <Card.Text>
                <h2>R$ 88,00</h2>
                </Card.Text>
                <Card.Text>
                É loira? É mulher? Tem olhos verdes? Faça quantas perguntas precisar para descobrir qual é a "cara" do seu adversário. Brinquedos Estrela é um fabricante líder de brinquedos. Vasta gama aos melhores preços. Inclui 2 tabuleiros plásticos, 48 molduras plásticas, 1 folha com 48 rostos, 1 folha com 24 cartas e 1 manual de instruções.
                </Card.Text>
                <Card.Text>
                    Disponivel: 20
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto3