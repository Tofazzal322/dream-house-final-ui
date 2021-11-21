import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../hook/useAuth"

const AdminRoute = ({ children }) => {
     const { user,isLoading,admin } = useAuth();
    let location = useLocation();
    if(isLoading){return <Spinner></Spinner>}
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/home" state={{ from: location }} />;
}
export default AdminRoute;