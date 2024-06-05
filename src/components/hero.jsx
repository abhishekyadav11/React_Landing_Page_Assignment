import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Hero() {
  return (
    <>
      <section id="hero" className="hero-section d-flex align-items-center" style={styles.heroSection}>
        <Container style={styles.container}>
          <div style={styles.content}>
            <h1 style={styles.headline}>Transform Your Productivity: Discover the Future of Task Management</h1>
            <p style={styles.subheadline} className='fw-semibold'>Seamlessly organize your life and maximize your time with our intuitive app.</p>
            <div style={styles.buttons}>
              <Button variant="primary" size="lg" className="m-2">Download Now</Button>
              <Button variant="outline-dark" size="lg" className="m-2">Learn More</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

const styles = {
  heroSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    backgroundImage: 'url(\'src/assets/gallery.png\')' ,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    maxWidth: '800px',
  },
  headline: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  subheadline: {
    fontSize: '1.25rem',
    marginBottom: '20px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  }
};

export default Hero;
