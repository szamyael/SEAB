import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Parts } from "./pages/Parts";
import { Types } from "./pages/Types";
import { Activities } from "./pages/Activities";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "parts", Component: Parts },
      { path: "types-and-process", Component: Types },
      { path: "activities", Component: Activities },
    ],
  },
]);
