import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Error from "../Error";
import AllServices from "../pages/AllServices/AllServices";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import AddService from "../pages/AddService/AddService";
import MyServices from "../pages/MyServices/MyServices";
import MySchedules from "../pages/MySchedules/MySchedules";
import UpdateService from "../pages/UpdateService/UpdateService";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '*',
                element: <Error />
            },

            {
                path: '/services',
                element: <AllServices />
            },
            {
                path: '/service-details/:id',
                element: <PrivateRoute><ServiceDetails /></PrivateRoute>
            },
            {
                path: '/dashboard/add-service',
                element: <PrivateRoute><AddService /></PrivateRoute>
            },
            {
                path: '/dashboard/my-services',
                element: <PrivateRoute><MyServices /></PrivateRoute>
            },
            {
                path: '/dashboard/my-service/update/:id',
                element: <PrivateRoute><UpdateService /></PrivateRoute>
            },
            {
                path: '/dashboard/my-schedules',
                element: <PrivateRoute><MySchedules /></PrivateRoute>
            },

        ]
    },
]);

export default router;