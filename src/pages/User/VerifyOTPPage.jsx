import {Fragment, lazy, Suspense} from "react";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const VerifyOTP =lazy(()=>import("../../components/User/VerifyOTP.jsx"))

const VerifyOtpPage = () => {
    return (
            <Fragment>
                    <Suspense fallback={<LazyLoader/>}>
                        <VerifyOTP/>
                    </Suspense>
            </Fragment>
    );
};

export default VerifyOtpPage;