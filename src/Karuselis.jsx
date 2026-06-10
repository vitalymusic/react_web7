import Carousel from 'react-bootstrap/Carousel';


function Karuselis() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://picsum.photos/id/5/1200/400" text="First slide" className='w-100'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/id/12/1200/400" text="Second slide" className='w-100' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/id/20/1200/400" text="Third slide" className='w-100'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Karuselis;