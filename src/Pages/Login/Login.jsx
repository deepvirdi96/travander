import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import Content from "../../Components/Content/Content";
import styles from './Login.module.css';

const Login = () => {
  return (
    <Content>
      <section className={styles.login__section}>
        <Container>
            <h2 className={styles.login__title}>Login</h2>
          <Row>
            <div className="col-md-6 offset-md-3">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Row>
        </Container>
      </section>
    </Content>
  );
};

export default Login;
