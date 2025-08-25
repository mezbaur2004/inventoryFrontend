import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const ReturnList = lazy(() => import("../../components/Return/ReturnList.jsx"));

const ReturnListPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <ReturnList/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default ReturnListPage;