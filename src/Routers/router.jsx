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
import Loading from "../Components/Layout/Main/Loading";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact ";
import Dashboard from "../Pages/Dashboard";
import DashboardLayout from "../Components/Layout/DashboardLayout";
import AllGroupTable from "../Pages/AllGroupTable";
import DashboardOverview from "../Pages/DashboardOverview";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                loader: () => fetch("https://assignment-10-server-woad-two.vercel.app/create-group/data"),
                Component: MainLayout,
                HydrateFallback: Loading
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
                path: "/group-details/:id",
                loader: ({ params }) => fetch(`https://assignment-10-server-woad-two.vercel.app/create-group/data/${params.id}`),

                element: <PrivateRouter>
                    <GroupDetailsPage></GroupDetailsPage>
                </PrivateRouter>


            },
            {
                path: "/all-group/",
                loader: () => fetch("https://assignment-10-server-woad-two.vercel.app/create-group/data"),
                Component: AllGroup,
                HydrateFallback: Loading

            },
            
            {
                path: "/view-Details/:id",
                loader: ({ params }) => fetch(`https://assignment-10-server-woad-two.vercel.app/create-group/data/${params.id}`),
                Component: MyGroupViewDetails,
                HydrateFallback: Loading
            },
            {
                path: "/About-us",
                Component: AboutUs
            },
            {
                path: "/contact",
                Component: Contact
            },
            // {
            //     path: "/Dashboard",
            //     Component: Dashboard
            // },
            {
                path: "*",
                Component: ErrorPage
            },

        ]
    },
    {
        path: "/Dashboard",
        Component: DashboardLayout,
        children:[
            {
                index: true,
                Component: DashboardOverview
            }
            ,
            {
                path: "/Dashboard/:email",
                loader: ({ params }) => fetch(`https://assignment-10-server-woad-two.vercel.app/create-group/${params.email}`),
                element: <PrivateRouter>
                    <MyGroup></MyGroup>
                </PrivateRouter>

            },
            {
                path: "/Dashboard/create-group",
                element: <PrivateRouter>
                    <CreateGroup></CreateGroup>
                </PrivateRouter>
            },
            {
                path: "/Dashboard/all-group/",
                loader: () => fetch("https://assignment-10-server-woad-two.vercel.app/create-group/data"),
                Component: AllGroupTable,
                HydrateFallback: Loading

            },
        ]
    }
])