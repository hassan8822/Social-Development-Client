 import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

import JoinedEvent from "../Pages/JoinedEvent/JoinedEvent";
import ManageEvent from "../Pages/ManageEvent/ManageEvent";
import UpcomingEvents from "../Pages/UpcomingEvents/UpcomingEvents";
import PrivateRoute from "../Povider/PrivateRoute";
import CreateEvent from "../Pages/CreateEvent/CreateEvent";
import EventDetails from "../Pages/EventDetails/EventDetails";

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
        element: <PrivateRoute>
          <CreateEvent></CreateEvent>
        </PrivateRoute>
      
      },
      {
        path: "/event/:id",
        Component: EventDetails,
        loader: ({params}) =>{
         return fetch(`http://localhost:3000/events/${params.id}`)
        }

      },
      {
        path: "/joinedevent",
        element: <PrivateRoute>
          <JoinedEvent></JoinedEvent>
        </PrivateRoute>
      },
      {
        path: "/manageevent",
        Component: ManageEvent
      }
    ]
  },
]);
