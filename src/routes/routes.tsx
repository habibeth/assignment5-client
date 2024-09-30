import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utlis/routeGenerator";
import { navbarPaths } from "./Navbar.routes";
import { adminPaths } from "./admin.routes";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: routeGenerator(navbarPaths)
    },
    {
        path: "/admin",
        element: (
            <ProtectedRoute role="admin">
                <Dashboard />
            </ProtectedRoute>
        ),
        children: routeGenerator(adminPaths)
    },
    {
        path: '*',
        element: <NotFound />
    }


])

export default router