
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const gallery = [
  'src/assets/gallery.png',
  'src/assets/gallery1.png',
  'src/assets/gallery2.png',
  'src/assets/gallery3.jpg',
];

const Gallery = () => {
  return (
    <section id="screenshots" className="py-5">
      <Container>
        <h2 className="text-center">Gallery</h2>
        <Row>
          {gallery.map((src, index) => (
            <Col key={index} md={4} className="mb-3">
              <Image src={src} thumbnail />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
