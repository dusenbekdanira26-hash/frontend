import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from  "./Layout";
import Home from "./Home";
import Courses from "./Courses";
import CourseDetail from "./CourseDetail";
import NotFound from "./NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "courses", element: <Courses /> },
            { path: "courses/:id", element: <CourseDetail /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}