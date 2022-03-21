import { Navigate, Outlet} from 'react-router-dom';


const PrivateRoute = (props: {
    user: Object,
    redirectPath:string
    children: any,
}) => {
    if (!props.user) {
        return <Navigate to={props.redirectPath} replace />;
      }
    
      return props.children ? props.children : <Outlet />;
};

export default PrivateRoute;