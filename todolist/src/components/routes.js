import AllCollections from "./collections/AllCollections";
import Dashboard from "./dashboard/Dashboard";

export const routes = [
    {
        path:"/",
        element: <Dashboard />
    },
    {
        path:"/collections",
        element: <AllCollections />
    }
]