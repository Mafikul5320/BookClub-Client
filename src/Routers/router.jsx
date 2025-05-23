import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/Layout/HomeLayout";
import MainLayout from "../Components/Layout/Main/MainLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import CreateGroup from "../Pages/CreateGroup";
import GroupDetailsPage from "../Pages/GroupDetailsPage";
import AllGroup from "../Pages/AllGroup";
import MyGroup from "../Pages/MyGroup";
import ErrorPage from "../Pages/ErrorPage";
import MyGroupViewDetails from "../Pages/MyGroupViewDetails";
import PrivateRouter from "../Context/PrivateRouter";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                loader: () => fetch("http://localhost:3000/create-group/data"),
                Component: MainLayout
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/create-group",
                element: <PrivateRouter>
                    <CreateGroup></CreateGroup>
                </PrivateRouter>
            },
            {
                path: "/group-details/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/create-group/data/${params.id}`),
                element: <PrivateRouter>
                    <GroupDetailsPage></GroupDetailsPage>
                </PrivateRouter>
            },
            {
                path: "/all-group",
                loader: () => fetch("http://localhost:3000/create-group/data"),
                Component: AllGroup
            },
            {
                path: "/my-group/:email",
                loader: ({ params }) => fetch(`http://localhost:3000/create-group/${params.email}`),
                element: <PrivateRouter>
                    <MyGroup></MyGroup>
                </PrivateRouter>

            },
            {
                path: "//view-Details/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/create-group/data/${params.id}`),
                Component: MyGroupViewDetails
            },
            {
                path: "*",
                Component: ErrorPage
            }
        ]
    }
])