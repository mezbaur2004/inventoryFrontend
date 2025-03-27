import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const SendOTP = lazy(() => import("../../components/User/SendOTP.jsx"));

const SendOtpPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <SendOTP/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default SendOtpPage;