import { AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";
export const Footer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <hr />
      <div
        style={{
          // backgroundColor: "gray",
          color: "white",
          height: "100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>© Copyright 2023. Made by Noel Pulido</div>
        <div>
          <AiOutlineLinkedin style={{ fontSize: "2em" }} />
          <AiOutlineFacebook style={{ fontSize: "2em" }} />
        </div>
      </div>
    </div>
  );
};
