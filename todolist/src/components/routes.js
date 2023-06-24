import Account from "../Layout/account/Account";
import Dashboard from "../Layout/dashboard/Dashboard";
import AllCollections from "../Layout/collections/AllCollections";
import TodoInCollection from "../Layout/todoInCollection/TodoInCollection";

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
    },
    {
        path:"/account",
        element: <Account />
    }
]