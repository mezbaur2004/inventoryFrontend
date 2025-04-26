import {Fragment, lazy, Suspense} from "react";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const CreatePassword = lazy(() => import("../../components/User/CreatePassword.jsx"));

const CreatePasswordPage = () => {
    return (
            <Fragment>
                    <Suspense fallback={<LazyLoader/>}>
                        <CreatePassword/>
                    </Suspense>
            </Fragment>
    );
};

export default CreatePasswordPage;