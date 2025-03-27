import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const ForgetPassword = lazy(() => import("../../components/User/SendOTP.jsx"));

const ForgotPasswordPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <ForgetPassword/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default ForgotPasswordPage;