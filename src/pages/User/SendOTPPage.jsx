import {Fragment, lazy, Suspense} from "react";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const SendOTP = lazy(() => import("../../components/User/SendOTP.jsx"));

const SendOtpPage = () => {
    return (
            <Fragment>
                    <Suspense fallback={<LazyLoader/>}>
                        <SendOTP/>
                    </Suspense>
            </Fragment>
    );
};

export default SendOtpPage;