import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const CreatePassword = lazy(() => import("../../components/User/CreatePassword.jsx"));

const CreatePasswordPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <CreatePassword/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default CreatePasswordPage;