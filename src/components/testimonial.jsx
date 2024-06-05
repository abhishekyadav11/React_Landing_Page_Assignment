// src/components/Testimonials.js
import React from 'react';
import { Container } from 'react-bootstrap';

const testimonials = [
  { quote: "This app changed my life! Highly recommended.", name: "User 1", avatar: "src/assets/profile1.jpg" },
  { quote: "A must-have tool for anyone looking to improve productivity.", name: "User 2", avatar: "src/assets/profile2.jpg" },
  { quote: "A must-have tool for anyone looking to improve productivity.", name: "User 3", avatar: "src/assets/profile3.jpg" },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="d-flex justify-content-center py-5 bg-light">
      <Container>
        <h2 className="text-center">Testimonials</h2>
        <div style={styles.testimonialsWrapper}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={styles.testimonial}>
              <img src={testimonial.avatar} alt={`${testimonial.name} Avatar`} style={styles.avatar} />
              <p>"{testimonial.quote}"</p>
              <h5>- {testimonial.name}</h5>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const styles = {
  testimonialsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  testimonial: {
    flex: '1 1 45%',
    maxWidth: '45%',
    minWidth: '250px',
    marginBottom: '20px',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    marginBottom: '15px',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
  },
};

export default Testimonials;
