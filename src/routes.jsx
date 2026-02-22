import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AchievementsCerts from "./pages/AchievementsCerts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "skills", element: <Skills /> },
      { path: "projects", element: <Projects /> },
      {path: "achievements-certs", element: <AchievementsCerts /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;