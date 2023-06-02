import AllCollections from "./collections/AllCollections";
import Dashboard from "./dashboard/Dashboard";
import TodoInCollection from "./todoInCollection/TodoInCollection";

export const routes = [
    {
        path:"/",
        element: <Dashboard />
    },
    {
        path:"/collections",
        element: <AllCollections />
    },
    {
        path:"collection/:collection",
        element: <TodoInCollection/>
    }
]