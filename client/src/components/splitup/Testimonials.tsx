import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Carousel, CarouselItem } from 'react-bootstrap';

interface CarouselProps {
  children: React.ReactNode[];
  interval: number;
  next: () => void;
  previous: () => void;
}

const Testimonials = () => {
  const next = () => console.log('Next button clicked!');
  const previous = () => console.log('Previous button clicked!');

  return (
    <div className="testimonials">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" md="6" className="text-center">
            <h1 className="title mb-5" style={{ fontSize: "3vw" }}>
              What Our Students Say
            </h1>
            <Carousel interval={3000}>
              <CarouselItem>
              <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque sit amet nulla auctor, vestibulum magna sed,
                    convallis ex. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Donec sed odio
                    dui. Donec sed odio dui.
                  </p>
                  <h5>
                    <b>John Doe</b>
                  </h5>
              </CarouselItem>
              <CarouselItem>
              <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesquesit amet nulla auctor, vestibulum magna sed,
                    convallis ex. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Donec sed odio
                    dui. Donec sed odio dui.
                  </p>
                  <h5>
                    <b>Jane Doe</b>
                  </h5>
              </CarouselItem>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;