import { createHashRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Staff } from "./pages/Staff";
import { Programs } from "./pages/Programs";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { Root } from "./pages/Root";
import { SummerCampRegistration } from "./pages/SummerCampRegistration";
import { Donate } from "./pages/Donate";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "staff", Component: Staff },
      { path: "programs", Component: Programs },
      { path: "gallery", Component: Gallery },
      { path: "contact", Component: Contact },
      { path: "summer-camp/register", Component: SummerCampRegistration },
      { path: "donate", Component: Donate },
    ],
  },
]);
