import { useParams } from "react-router-dom";
import { useNavbar } from "../providers/navbarProvider";
import { Button } from "react-bootstrap";

export const Project = () => {
  const { projects } = useNavbar();
  const { projectId } = useParams();
  const result = projects.filter((project) => {
    return project.id == projectId;
  });
  //title, img, overview, tools used, project link, go back button

  return (
    <div className="page-body">
      <div className="project">
        <img src={result[0].image} alt="" style={{ borderRadius: "12px" }} />
        <div>{result[0].title}</div>
        <p>{result[0].description}</p>
        <p>{result[0].overview}</p>
        <div>Tools</div>
        <div style={{ display: "flex" }}>
          {result[0].tools.map((tool, index) => (
            <span
              style={{
                margin: "5px",
                padding: "5px 10px",
                borderRadius: "8px",
                backgroundColor: "gray",
              }}
              key={index}
            >
              {tool}
            </span>
          ))}
        </div>

        <Button href={result[0].link}>LINK</Button>
      </div>
    </div>
  );
};
