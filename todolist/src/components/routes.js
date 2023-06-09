import AllCollections from "../Layout/collections/AllCollections";
import Dashboard from "../Layout/dashboard/Dashboard";
import TodoInCollection from "../Layout/todoInCollection/TodoInCollection";
import Account from "../Layout/account/Account";

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