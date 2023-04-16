import { useRoutes } from "react-router-dom";
import Home from "src/pages/site/Home";
import Home1 from "src/pages/site/index"
import Trending from "src/pages/site/Trending";
import Login from "src/pages/site/Login"
import Register from "src/pages/site/Register"
import Forgot from "src/pages/site/Forgot"

const Router = () => {
    const routes = useRoutes(
        [
            {
                path: "/",
                element: <Home1 />
            },
            {
                 path: "/login",
                 element: <Login />
            },
            { 
                path: "/register",
                element: <Register />
            },
            { 
                path: "/forgot",
                element: <Forgot  />
            },
            {
                path: "/home",
                element: <Home />
            },
            { path: "/category/:id" },
            {
                path: "/trending",
                element: <Trending />
            },
            { path: "/search/:keyword" },
            { path: "/detail/:id" },
            { path: "/profile" },
            { 
                path: "/auth/dashboard",
                element: < Home / >
            }

        ]
    );
    return routes;
}

export default Router;