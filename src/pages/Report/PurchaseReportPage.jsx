import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const PurchaseReport = lazy(() => import("../../components/Report/PurchaseReport.jsx"));

const PurchaseReportPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <PurchaseReport/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default PurchaseReportPage;