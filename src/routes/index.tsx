import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {mainRoutes} from './main';

export function AppRoutes() {
    let routes = mainRoutes;
    const router = createBrowserRouter(routes);
    return <RouterProvider router={router} />;
  }