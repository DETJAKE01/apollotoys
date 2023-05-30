import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.usatoday.com/gcdn/media/2021/04/01/USATODAY/usatsports/Reviewed.com-RvEW-27144-boardgames.jpg" height={500}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Diversão para a familia</h3>
          <p>Aqui todos se divertem</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://domf5oio6qrcr.cloudfront.net/medialibrary/10992/b8b237ee-7cfe-4eab-b79b-dac389707899.jpg" height={500}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Compra segura e garantida</h3>
          <p>Pagamentos aprovados em até 30 minutos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://familiesforlife.sg/play-as-a-family/PublishingImages/5-Board-Games-for-Family.jpg" height={500}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Criatividade e raciocinio</h3>
          <p>
            Os jogos trabalham diversas partes importantes
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;