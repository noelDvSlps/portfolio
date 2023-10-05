import { Button, Form } from "react-bootstrap";
export const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-title"> Contact </div>
      <div className="page-body">
        <div className="form-container">
          <Form>
            <Form.Group className="mb-3" controlId="form.name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.message">
              <Form.Label>Enter your message here</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
