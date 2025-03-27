import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const Registration = lazy(() => import("../../components/User/Registration.jsx"));

const RegistrationPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <Registration/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default RegistrationPage;