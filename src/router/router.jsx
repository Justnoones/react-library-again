import React from 'react';
import Home from '../pages/Home';
import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layouts/Layout';
import BookDetail from '../components/BookDetail';
import NotFound404Page from '../components/NotFound404Page';
import Create from '../pages/Create';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "books/:id",
        element: <BookDetail />
      },
      {
        path: "create",
        element: <Create />
      },
      {
        path: "*",
        element: <NotFound404Page />
      }
    ]
  },
]);

export { router }