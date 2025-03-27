import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const ReturnReport = lazy(() => import("../../components/Report/ReturnReport.jsx"));

const ReturnReportPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <ReturnReport/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default ReturnReportPage;