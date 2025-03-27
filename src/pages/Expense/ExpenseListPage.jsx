import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const ExpenseTypeList = lazy(() => import("../../components/ExpenseType/ExpenseTypeList.jsx"));

const ExpenseListPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <ExpenseTypeList/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default ExpenseListPage;