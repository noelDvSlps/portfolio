/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import imgBattleship from "../assets/images/projects/battleship.png";
import imgItemTracker from "../assets/images/projects/item-tracker 2.png";

const NavbarContext = createContext({});

export const NavbarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const projects = [
    {
      id: 1,
      image: imgBattleship,
      title: "Battleship",
      description: `Classic game to make opponent’s ships sinks first before they sink yours. `,
      overview: `● Built a capstone project using VueJS, which my bootcamp did not teach 
      ● Deployed backend through Render.com’s managed server using mongoDB database`,
      tools: ["Vue", "MongoDB"],
      link: "https://battleship-opal.vercel.app/",
    },
    {
      id: 2,
      image: imgItemTracker,
      title: "Item Tracker",
      description: `Some companies struggle on the whereabouts of all the tools that employees are using. I came up with an idea that would let the users borrow and return tools that would give users accountability of item(s) they are in possession with.`,
      overview: `● Project when I was a student 
      ● Front End: React
      ● Prisma, SQLite server as backend
      ● Backend deployed in Render
      ● Custom seeds for reliable testing, and for recovery purposes.
      ● Used Cloudinary for adding images
      `,
      tools: ["React"],
      link: "https://item-tracker-lovat.vercel.app/",
    },
  ];

  return (
    <NavbarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        toggle,
        projects,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  return useContext(NavbarContext);
};
