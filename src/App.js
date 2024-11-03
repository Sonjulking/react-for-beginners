import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/movie/:id",
        element: <Detail/>
    },
    {
        path: "/hello",
        element: <h2>hello</h2>
    }
]);

function App() {
    return (
            <RouterProvider router={router}/>
    );
}

export default App;