// src/components/Features.js
import React from 'react';
import { Container } from 'react-bootstrap';

const features = [
  { title: 'Feature 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus praesentium, nisi numquam cupiditate ab odit distinctio esse minus quia!', icon: 'src/assets/feature1.png' },
  { title: 'Feature 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus praesentium, nisi numquam cupiditate ab odit distinctio esse minus quia!', icon: 'src/assets/feature2.png' },
  { title: 'Feature 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus praesentium, nisi numquam cupiditate ab odit distinctio esse minus quia!', icon: 'src/assets/feature3.png' },
];

const Features = () => {
  return (
    <section id="features" className="py-5">
      <Container>
        <h2 className="text-center">Features</h2>
        <div style={styles.featuresWrapper}>
          {features.map((feature, index) => (
            <div key={index} style={styles.feature}>
              <img src={feature.icon} alt={`${feature.title} Icon`} style={styles.icon} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const styles = {
  featuresWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  feature: {
    flex: '1 1 30%',
    maxWidth: '30%',
    minWidth: '250px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  icon: {
    marginBottom: '15px',
    width: '100px',
    height: '100px',
  },
};

export default Features;
