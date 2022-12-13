import Carousel from 'react-bootstrap/Carousel';
import first from './bro.png';
import second from './movie.png';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <img src={first} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src={second} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
