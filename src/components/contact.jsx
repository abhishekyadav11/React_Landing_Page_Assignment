import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="py-5" style={styles.contactSection}>
      <Container>
        <h2 className="text-center" style={styles.heading}>Contact Us</h2>
        <div style={styles.formWrapper}>
          <Form style={styles.form}>
            <Form.Group controlId="formName">
              <Form.Label style={styles.label}>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" style={styles.input} required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label style={styles.label}>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" style={styles.input} required />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label style={styles.label}>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message" style={styles.input} required />
            </Form.Group>
            <Button variant="primary" type="submit" style={styles.button}>Send</Button>
          </Form>
        </div>
      </Container>
    </section>
  );
};

const styles = {
  contactSection: {
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '50px 0',
  },
  heading: {
    marginBottom: '30px',
    color: '#333',
  },
  formWrapper: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  form: {
    background: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    marginBottom: '20px',
  },
  button: {
    width: '100%',
  },
};

export default Contact;
