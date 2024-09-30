import { Navigate } from "react-router-dom";
import { logout, TUser, useCurrentToken } from "../../redux/feature/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

import { ReactNode } from "react";
import { verifyToken } from "../../utlis/verifyToken";

const ProtectedRoute = ({ children, role }: { children: ReactNode, role: string | undefined }) => {
    const token = useAppSelector(useCurrentToken);

    let user;
    if (token) {
        user = verifyToken(token);
    }

    const userRole = (user as TUser)?.role;

    const dispatch = useAppDispatch();

    if (role !== undefined && role !== userRole) {
        dispatch(logout())
        return <Navigate to={"/login"} replace={true} />
    }

    if (!token) {
        return <Navigate to={"/login"} replace={true} />
    }

    return children
};

export default ProtectedRoute;