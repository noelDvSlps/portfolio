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
        <div>
          Here you will find what I do and my current skills mostly in
          programming.
        </div>
        <div>
          Do you have an{" "}
          <span
            style={{
              color: "yellow",
              fontSize: "3em",
            }}
          >
            IDEA ?{" "}
          </span>
          let me turn it into
          <div
            style={{
              color: "blue",
              fontSize: "3em",
            }}
          >
            REALITY
          </div>
          <span
            style={{
              color: "yellow",
              fontSize: "7em",
              padding: 0,
              margin: 0,
            }}
          >
            :
          </span>
          let me
          <span
            style={{
              color: "blue",
              fontSize: "3em",
            }}
          >
            WORK ON IT
          </span>
        </div>

        <Button> Contact</Button>
      </div>
    </div>
  );
};
