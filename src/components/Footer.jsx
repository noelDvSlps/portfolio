import { AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";
export const Footer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <hr />
      <div className="footer">
        <div>© Copyright 2023. Made by Noel Pulido</div>
        <div>
          <AiOutlineLinkedin style={{ fontSize: "2em" }} />
          <AiOutlineFacebook style={{ fontSize: "2em" }} />
        </div>
      </div>
    </div>
  );
};
