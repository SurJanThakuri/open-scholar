import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../screens/public/Home/Home";
import { ROUTE_COLLECTION } from ".";
import Reviews from "../screens/public/Reviews/Reviews";
import Faculties from "../screens/public/Faculties/Faculties";

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <MainLayout />,
                children: [
                    {
                        path: ROUTE_COLLECTION.HOME,
                        element: <Home />
                    },
                    {
                        path: ROUTE_COLLECTION.REVIEW,
                        element: <Reviews />,
                    },
                    {
                        path: ROUTE_COLLECTION.FACULTY,
                        element: <Faculties />
                    }
                ]
            },
            {
                path: "*",
                element: <div>404 Not Found</div>
            }
        ]
    }
]);

export default router;