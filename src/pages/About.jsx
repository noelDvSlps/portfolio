import { Button } from "react-bootstrap";

export const About = () => {
  return (
    <div className="page-container">
      <div className="page-title"> About </div>
      <div
        className="page-body"
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            margin: "30px 0px",
            fontSize: "1em",
            fontWeight: "300px",
            textAlign: "center",
            whiteSpace: "pre-wrap",
          }}
        >
          Here you will find what I do and my current skills mostly in
          programming. &#10; Do you have an idea? &#10; Let&apos;s turn it into
          reality!
        </div>

        <Button> Contact</Button>
      </div>
    </div>
  );
};
