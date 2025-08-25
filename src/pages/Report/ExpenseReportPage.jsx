import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const ExpenseReport = lazy(() => import("../../components/Report/ExpenseReport.jsx"));

const ExpenseReportPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <ExpenseReport/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default ExpenseReportPage;