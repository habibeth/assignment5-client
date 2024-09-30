import DashboardLayout from "../../components/layout/DashboardLayout";
import ProtectedRoute from "../../components/layout/ProtectedRoute";

const Dashboard = () => {
    return <ProtectedRoute role={undefined}><DashboardLayout /></ProtectedRoute>;
};

export default Dashboard;