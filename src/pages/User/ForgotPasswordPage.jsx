import {Fragment, lazy, Suspense} from "react";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const ForgetPassword = lazy(() => import("../../components/User/SendOTP.jsx"));

const ForgotPasswordPage = () => {
    return (
            <Fragment>
                    <Suspense fallback={<LazyLoader/>}>
                        <ForgetPassword/>
                    </Suspense>
            </Fragment>
    );
};

export default ForgotPasswordPage;