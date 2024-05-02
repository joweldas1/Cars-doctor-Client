import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Route.jsx";
import Provider from "./Pages/Provider/Provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 <div className="max-w-7xl mx-auto">
   <React.StrictMode>
    <Provider>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
 </div>
);
