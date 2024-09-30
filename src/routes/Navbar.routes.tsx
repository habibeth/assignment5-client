import ProtectedRoute from "../components/layout/ProtectedRoute";
import About from "../pages/About/About";
import ContactUs from "../pages/Contact/Contact";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/login";
import MeetingRooms from "../pages/MeetingRooms/MeetingRooms";
import Register from "../pages/register/register";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import BookingConfirmation from "../pages/User/BookingConfirmation/BookingConfirmation";
import CreateBookingRoom from "../pages/User/BookingRoom/BookingRoom";
import MyBookings from "../pages/User/MyBookings/MyBookings";



export const navbarPaths = [
    {
        name: "Home",
        path: "/",
        element: <Home />
    },
    {
        name: "Meeting Rooms",
        path: "meeting-rooms",
        element: <MeetingRooms />
    },
    {
        path: "meeting-room/:id",
        element: <RoomDetails />
    },
    {
        name: "About Us",
        path: "about-us",
        element: <About />
    },
    {
        name: "Contact Us",
        path: "contact-us",
        element: <ContactUs />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/bookingRoom/:id",
        element: <CreateBookingRoom />
    },
    {
        path: "/bookingConfirmation",
        element: <BookingConfirmation />
    },
    {
        path: "/user/myBookings",
        element: (
            <ProtectedRoute role="user">
                <MyBookings />
            </ProtectedRoute>
        )
    },
];
