import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const ExpenseList = lazy(() => import("../../components/Expense/ExpenseList.jsx"));

const ExpenseListPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <ExpenseList/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default ExpenseListPage;