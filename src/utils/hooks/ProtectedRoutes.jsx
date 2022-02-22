import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from 'state/selectors';

const useAuth = () => {
    const userState = useSelector(selectUser);
    console.log(userState.data);
    const user = userState.data;
    console.log(user);
    return user && user.loggedIn;
};

const ProtectedRoutes = () => {
    const location = useLocation();
    const isAuth = useAuth();
    return isAuth ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

export default ProtectedRoutes;
