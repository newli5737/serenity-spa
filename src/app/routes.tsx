import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { BookingPage } from "./pages/BookingPage";
import { AboutPage } from "./pages/AboutPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "dich-vu", Component: ServicesPage },
      { path: "dat-lich", Component: BookingPage },
      { path: "gioi-thieu", Component: AboutPage },
      { path: "thu-vien", Component: GalleryPage },
      { path: "lien-he", Component: ContactPage },
    ],
  },
]);
