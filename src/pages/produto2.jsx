import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto2(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://m.media-amazon.com/images/I/61OjsfvUVZL._AC_SX522_.jpg"/>
                <Card.Body>
                <Card.Title>Monopoly</Card.Title>
                <Card.Text>
                <h2>R$ 79,99</h2>
                </Card.Text>
                <Card.Text>
                Jogo perfeito para quem ama brinquedos e jogos de tabuleiro clássicos, no Monopoly os jogadores devem comprar, vender e trapacear para conquistar fortunas. Há um novo milionário na cidade! Para vencer, é preciso negociar imóveis, cobrar aluguel e construir um império. Monopoly é um jogo de tabuleiro que brinca com o mundo das finanças e investimentos e é ideal para adultos e crianças a partir de 8 anos. Para trazer ainda mais emoção ao jogo, as cartas Sorte e Cofre podem mudar o destino dos jogadores! Qual carta vai dar dinheiro e qual carta vai enviar o jogador para a cadeia? Inclui peças clássicas como pato de borracha, tiranossauro rex e pinguim. É uma excelente atividade para uma reunião de família. Apenas uma pessoa pode vencer!
                </Card.Text>
                <Card.Text>
                    Disponivel: 13
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto2