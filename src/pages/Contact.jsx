import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
export const Contact = () => {
  const formRef = useRef();
  const [validated, setValidated] = useState(false);

  const handleReset = () => {
    formRef.current.reset();
    setValidated(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    sendEmail(e);
  };

  const sendEmail = (e) => {
    e.target.querySelector("#button").innerText = "Sending...";

    emailjs
      .sendForm(
        "service_or52vp6",
        "template_xcoyzem",
        formRef.current,
        "NWynk5Twyg6aD9i-R"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Message sent!");
            setValidated(true);
            handleReset();
          } else {
            toast.error("Something went wrong, please try again");
          }
        },
        (error) => {
          toast.error(error.text || "Something went wrong, please try again");
        }
      )
      .then(() => {
        e.target.querySelector("#button").innerText = "Submit";
      });
  };

  return (
    <div className="page-container">
      <div className="page-title"> Contact </div>
      <div className="page-body">
        <div className="form-container">
          <Form
            ref={formRef}
            id="form"
            onSubmit={handleSubmit}
            validated={validated}
          >
            <Form.Group className="mb-3" controlId="form.name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your name"
                name="user_name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your email"
                name="user_email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.message">
              <Form.Label>Enter your message here</Form.Label>
              <Form.Control
                required
                minLength={10}
                as="textarea"
                rows={5}
                placeholder="Enter your message"
                name="message"
              />
            </Form.Group>
            <Button type="submit" id="button">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
