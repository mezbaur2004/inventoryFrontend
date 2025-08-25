import {Fragment, lazy, Suspense} from "react";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const Login = lazy(() => import("../../components/User/Login.jsx"));

const LoginPage = () => {
    return (
            <Fragment>
                    <Suspense fallback={<LazyLoader/>}>
                        <Login/>
                    </Suspense>
            </Fragment>
    );
};

export default LoginPage;