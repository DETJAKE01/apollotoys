import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto1(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://copagloja.vteximg.com.br/arquivos/ids/163180-1000-1000/Mockup-UNO.png?v=637927056147830000"/>
                <Card.Body>
                <Card.Title>UNO</Card.Title>
                <Card.Text>
                <h2>R$: 16,00</h2>
                </Card.Text>
                <Card.Text>
                É fácil começar... é impossível parar! Livre-se depressa de suas cartas combinando cores e números, só não se esqueça de gritar UNO!
                </Card.Text>
                <Card.Text>
                    Disponivel: 80
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto1