import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <div className="page-title"> NotFound </div>
      <div
        className="page-body"
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "1em",
            fontWeight: "300px",
            textAlign: "center",
          }}
        >
          {window.location.href} is not valid.
        </div>

        <Button onClick={() => navigate("/")}> Home</Button>
      </div>
    </div>
  );
};
