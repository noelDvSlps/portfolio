import { Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useNavbar } from "../providers/navbarProvider";

export const Projects = () => {
  const navigate = useNavigate();
  const nav = (id) => {
    navigate(`/projects/${id}`);
  };
  const { projects } = useNavbar();

  return (
    <div className="page-container" style={{ height: "fit-content" }}>
      <div className="page-title"> Projects </div>
      <div className="page-body">
        <div>Personal and Clients projects</div>
        <div className="projects">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <img
                src={project.image}
                alt=""
                style={{ borderRadius: "12px" }}
              />
              <div className="overview">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <Button onClick={() => nav(project.id)}>Case Study</Button>
              </div>
            </div>
          ))}
        </div>
        <Button> Contact</Button>
      </div>
    </div>
  );
};
