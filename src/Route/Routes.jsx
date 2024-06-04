import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home"
import Error from "../Pages/ErrorPage/Error";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivareRoute from "../PrivateRoute/PrivareRoute";
import Profile from "../Pages/Profile/Profile";
import Ticket from "../Pages/Ticket/Ticket";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/ContactUs/ContactUs";
const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/public/event_data.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element:<ContactUs></ContactUs> 
            },
            {
                path: '/aEvents/:id',
                element:
                    <PrivareRoute>
                        <ViewDetails></ViewDetails>
                    </PrivareRoute>,
                loader: () => fetch(`/public/event.json`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/ticket',
                element:
                    <PrivareRoute>
                        <Ticket></Ticket>
                    </PrivareRoute>
            },
            {
                path: '/profile',
                element:
                    <PrivareRoute>
                        <Profile></Profile>
                    </PrivareRoute>
            }
        ]
    }
])

export default Routes;