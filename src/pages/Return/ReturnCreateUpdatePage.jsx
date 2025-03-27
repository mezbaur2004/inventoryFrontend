import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const ReturnCreateUpdate = lazy(() => import("../../components/Return/ReturnCreateUpdate.jsx"));

const ReturnCreateUpdatePage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <ReturnCreateUpdate/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default ReturnCreateUpdatePage;