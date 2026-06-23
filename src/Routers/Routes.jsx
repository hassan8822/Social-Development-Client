 import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateEvent from "../Pages/CreateEvent/CreateEvent";
import JoinedEvent from "../Pages/JoinedEvent/JoinedEvent";
import ManageEvent from "../Pages/ManageEvent/ManageEvent";
import UpcomingEvents from "../Pages/UpcomingEvents/UpcomingEvents";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path: "/upcomingevents",
        Component: UpcomingEvents

      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path: "/createevent",
        Component: CreateEvent
      },
      {
        path: "/joinedevent",
        Component: JoinedEvent
      },
      {
        path: "/manageevent",
        Component: ManageEvent
      }
    ]
  },
]);
