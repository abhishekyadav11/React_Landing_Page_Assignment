// src/components/Pricing.js
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const pricingPlans = [
  { name: 'Basic', price: '$9.99/month', features: ['Feature 1', 'Feature 2'] },
  { name: 'Pro', price: '$19.99/month', features: ['Feature 1', 'Feature 2'] },
  // Add more plans as needed
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-5">
      <Container>
        <h2 className="text-center">Pricing</h2>
        <div style={styles.pricingWrapper}>
          {pricingPlans.map((plan, index) => (
            <div key={index} style={styles.pricingCard}>
              <Card className="text-center" style={styles.card}>
                <Card.Body>
                  <Card.Title>{plan.name}</Card.Title>
                  <Card.Text>{plan.price}</Card.Text>
                  <ul className="list-unstyled">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <Button variant="primary">Choose Plan</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const styles = {
  pricingWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  pricingCard: {
    flex: '1 1 45%',
    maxWidth: '45%',
    minWidth: '250px',
    marginBottom: '20px',
  },
  card: {
    height: '100%',
  },
};

export default Pricing;
