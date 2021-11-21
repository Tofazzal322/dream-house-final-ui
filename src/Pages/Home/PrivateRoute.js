import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../hook/useAuth"

const PrivateRoute = ({ children }) => {
    
    const { user,isLoading } = useAuth();
    let location = useLocation();
    if(isLoading){return <Spinner></Spinner>}
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;