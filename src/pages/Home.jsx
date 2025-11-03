import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Home.css'; // We'll create this next

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={6} className="fade-in">
              <h1 className="display-4 fw-bold mb-4 text-white">
                Agro-Link
              </h1>
              <p className="lead mb-4 text-light">
                Bringing farmers and consumers together. Enjoy farm-fresh produce delivered right to your door. Support local growers while getting top-quality products at honest prices.
              </p>
              <div className="d-flex flex-wrap gap-3">
                {!isAuthenticated ? (
                  <>
                    <Button as={Link} to="/signup" variant="light" size="lg" className="px-4 py-3">
                       🎯 Let’s Begin
                    </Button>
                    <Button as={Link} to="/products" variant="outline-light" size="lg" className="px-4 py-3">
                      𖠩 Explore Products
                    </Button>
                  </>
                ) : (
                  <Button as={Link} to="/products" variant="light" size="lg" className="px-4 py-3">
                    𖠩 See What’s Fresh
                  </Button>
                )}
              </div>
            </Col>
            <Col lg={6} className="text-center fade-in">
              <div className="hero-visual p-4">
                <div className="d-flex justify-content-center gap-4 mb-4">
                  <div className="visual-item">
                    <div className="visual-icon">👨‍🌾</div>
                    <small className="text-light">Farmers</small>
                  </div>
                  <div className="visual-item">
                    <div className="visual-icon">🛒</div>
                    <small className="text-light">Customers</small>
                  </div>
                  <div className="visual-item">
                    <div className="visual-icon">🚛</div>
                    <small className="text-light">Home Delivery</small>
                  </div>
                </div>
                <div className="stats-container bg-light rounded p-3 shadow">
                  <Row className="text-dark">
                    <Col xs={4}>
                      <div className="stat-number text-success fw-bold">1000+</div>
                      <div className="stat-label small">Farmers</div>
                    </Col>
                    <Col xs={4}>
                      <div className="stat-number text-success fw-bold">500+</div>
                      <div className="stat-label small">Products</div>
                    </Col>
                    <Col xs={4}>
                      <div className="stat-number text-success fw-bold">5K+</div>
                      <div className="stat-label small">Orders</div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold text-gradient">Why Trust Agro-Link?</h2>
              <p className="text-muted lead">The smarter, fresher way to shop directly from farms</p>
            </Col>
          </Row>
          
          <Row>
            <Col md={4} className="mb-4">
              <Card className="feature-card h-100 border-0 shadow-custom">
                <Card.Body className="text-center p-4">
                  <div className="feature-icon">👨‍🌾</div>
                  <Card.Title className="h5 mb-3">For Farmers</Card.Title>
                  <Card.Text className="text-muted">
                    Connect directly with consumers and sell your fresh produce without intermediaries.
                    Gain better profits, expand your reach, and grow your brand effortlessly using our intuitive platform.
                  </Card.Text>
                  {!isAuthenticated && (
                    <Button as={Link} to="/signup" variant="outline-success" className="mt-2">
                      Start Your Journey →
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card className="feature-card h-100 border-0 shadow-custom">
                <Card.Body className="text-center p-4">
                  <div className="feature-icon">🛒</div>
                  <Card.Title className="h5 mb-3">For Customers</Card.Title>
                  <Card.Text className="text-muted">
                    Purchase high-quality, organic produce directly from trusted local farmers.
                    Promote sustainable agriculture and receive farm-fresh goods conveniently at your doorstep.
                  </Card.Text>
                  {!isAuthenticated && (
                    <Button as={Link} to="/signup" variant="outline-success" className="mt-2">
                      Start Exploring →
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card className="feature-card h-100 border-0 shadow-0 shadow-custom">
                <Card.Body className="text-center p-4">
                  <div className="feature-icon">⚡</div>
                  <Card.Title className="h5 mb-3">Quick Service, Trusted Quality</Card.Title>
                  <Card.Text className="text-muted">
                    Fresh from the farm to your door — delivered within hours of harvest!
                    Enjoy live tracking, safe transactions, and top-notch support for a truly fresh farm-to-table journey.
                  </Card.Text>
                  <Button as={Link} to="/products" variant="outline-success" className="mt-2">
                    Explore Now →
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How It Works */}
      <section className="how-it-works py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold text-success">The Way It Works →</h2>
              <p className="text-muted">A Step-by-Step Guide to Get Started</p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={3} className="text-center">
              <div className="step-number bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                #1
              </div>
              <h5>Sign Up</h5>
              <p className="text-muted small">Register your profile — choose Farmer or Consumer</p>
            </Col>
            <Col md={3} className="text-center">
              <div className="step-number bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                #2
              </div>
              <h5>Browse & List</h5>
              <p className="text-muted small">Discover products or display your farm’s offerings</p>
            </Col>
            <Col md={3} className="text-center">
              <div className="step-number bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                #3
              </div>
              <h5>Order & Confirm</h5>
              <p className="text-muted small">Place orders and get confirmation</p>
            </Col>
            <Col md={3} className="text-center">
              <div className="step-number bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                #4
              </div>
              <h5>Delivery</h5>
              <p className="text-muted small">Fresh produce delivered to your door</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      {!isAuthenticated && (
        <section className="cta-section bg-success text-white py-5">
          <Container>
            <Row className="text-center">
              <Col>
                <h3 className="fw-bold mb-3">Want to Be Part of the Change?</h3>
                <p className="mb-4 opacity-90">
                  Become part of the growing Agro-Link community of farmers and consumers.
                </p>
                <Button as={Link} to="/signup" variant="light" size="lg" className="px-5 py-3 fw-bold">
                  Create Your Free Account
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </div>
  );
};

export default Home;