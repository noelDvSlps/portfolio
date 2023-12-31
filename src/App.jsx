import "./App.css";
import "./responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NavbarProvider } from "./providers/navbarProvider";
import { Project } from "./pages/Project";
import { NotFound } from "./pages/NotFound";
import ScrollToTop from "./helpers/ScrollToTop";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <NavbarProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar>
          <Toaster position="top-center" reverseOrder={false} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/projects/:projectId" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </NavbarProvider>
  );
}

export default App;
