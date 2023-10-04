import { Button } from "react-bootstrap";
import imgBattleship from "../assets/images/projects/battleship.png";
import imgItemTracker from "../assets/images/projects/item-tracker 2.png";

export const Projects = () => {
  const projects = [
    {
      image: imgBattleship,
      title: "Project 1",
      description: "description 1",
    },
    {
      image: imgItemTracker,
      title: "Project 2",
      description: "description 2",
    },
    {
      image: imgBattleship,
      title: "Project 1",
      description: "description 1",
    },
    {
      image: imgItemTracker,
      title: "Project 2",
      description: "description 2",
    },
  ];
  return (
    <div className="page-container" style={{ height: "fit-content" }}>
      <div className="page-title"> Projects </div>
      <div className="page-body">
        <div>Personal and Clients projects</div>
        <div>
          Here you will find what I do and my current skills mostly in
          programming.
        </div>
        <div>
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.image} alt="" />
              <div>{project.title}</div>
              <div>{project.description}</div>
              <Button>Case Study</Button>
            </div>
          ))}
        </div>
        <Button> Contact</Button>
      </div>
    </div>
  );
};
