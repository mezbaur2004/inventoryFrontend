import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const VerifyOTP =lazy(()=>import("../../components/User/VerifyOTP.jsx"))

const VerifyOtpPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <VerifyOTP/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default VerifyOtpPage;