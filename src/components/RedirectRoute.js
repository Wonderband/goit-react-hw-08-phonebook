import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogged } from 'redux/selectors';

export const AuthRoute = ({ component: Component, redirectTo = '/' }) => { 
    const isLoggedIn = useSelector(selectIsLogged);
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}

export const LoggedRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLogged);
    return isLoggedIn ? Component : <Navigate to={redirectTo}/>;
}