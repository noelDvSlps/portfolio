import { useNavigate, useParams } from "react-router-dom";
import { useNavbar } from "../providers/navbarProvider";
import { Button } from "react-bootstrap";

export const Project = () => {
  const navigate = useNavigate();
  const { projects } = useNavbar();
  const { projectId } = useParams();
  const result = projects.filter((project) => {
    return project.id == projectId;
  });
  //title, img, overview, tools used, project link, go back button

  return (
    <div className="page-container" style={{ height: "fit-content" }}>
      <div className="page-body">
        <h2 className="page-title">{result[0].title}</h2>
        <div className="project" style={{ border: "none" }}>
          <img src={result[0].image} alt="" style={{ borderRadius: "12px" }} />
          <div className="overview">
            <h3>Overview</h3>
            <p>{result[0].description}</p>
            <p>{result[0].overview}</p>
            <h3>Tools</h3>
            <div className="tools">
              {result[0].tools.map((tool, index) => (
                <div
                  style={{
                    margin: "5px",
                    padding: "5px 10px",
                    borderRadius: "8px",
                    backgroundColor: "gray",
                    width: "fit-content",
                  }}
                  key={index}
                >
                  {tool}
                </div>
              ))}
            </div>
            <Button href={result[0].link} target="_blank">
              LINK
            </Button>
            <Button
              style={{
                marginLeft: "20px",
              }}
              variant="light"
              onClick={() => navigate("/projects")}
            >
              GO BACK
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
