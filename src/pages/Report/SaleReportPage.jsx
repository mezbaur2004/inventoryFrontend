import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const SaleReport = lazy(() => import("../../components/Report/SaleReport.jsx"));

const SaleReportPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <SaleReport/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default SaleReportPage;