import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivareRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <div className="container mx-auto text-center">
            <h1 className="text-xl font-bold font-poppins flex justify-center items-center h-[80vh]">Loading......</h1>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};
PrivareRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivareRoute;