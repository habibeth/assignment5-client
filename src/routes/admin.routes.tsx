import AddRoom from "../pages/Admin/AddRoom/AddRoom";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AllBookings from "../pages/Admin/AllBookings/AllBookings";
import AllRoomsManagement from "../pages/Admin/AllRoomsManagement/AllRoomsManagement";
import AllSlots from "../pages/Admin/AllSlots/AllSlots";
import AllUsers from "../pages/Admin/AllUsers/AllUsers";
import CreateSlots from "../pages/Admin/CreateSlots/CreateSlots";
import UpdateRoom from "../pages/Admin/UpdateRoom/UpdateRoom";

export const adminPaths: any = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'Room Management',
        children: [
            {
                name: 'Add Room',
                path: "addRoom",
                element: <AddRoom />
            },
            {
                name: 'Manage Room',
                path: "allRoomsManagement",
                element: <AllRoomsManagement />
            },
        ]
    },
    {
        path: 'updateRoom/:id',
        element: <UpdateRoom />
    },
    {
        name: 'Manage User',
        path: "allUsers",
        element: <AllUsers />
    },
    {
        name: 'Slots Management',
        children: [
            {
                name: 'Create Slots',
                path: "createSlots",
                element: <CreateSlots />
            },
            {
                name: 'All Slots',
                path: "getAllSlots",
                element: <AllSlots />
            },
        ]
    },
    {
        name: 'Booking',
        children: [
            {
                name: 'All Booking',
                path: "getAllBooking",
                element: <AllBookings />
            }
        ]
    }
]