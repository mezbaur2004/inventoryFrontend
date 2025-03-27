import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const Login = lazy(() => import("../../components/User/Login.jsx"));

const LoginPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <Login/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default LoginPage;