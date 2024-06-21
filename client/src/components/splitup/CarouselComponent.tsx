import React from 'react';
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';

interface CarouselProps {
  children: React.ReactNode[];
  interval: number;
  next: () => void;
  previous: () => void;
}

const Carousels: React.FC<CarouselProps> = ({ children, interval, next, previous }) => {
  return (
    <Carousel interval={interval}>
      {children.map((child, index) => (
        <CarouselItem key={index}>{child}</CarouselItem>
      ))}
    </Carousel>
  );
};

export default Carousels;