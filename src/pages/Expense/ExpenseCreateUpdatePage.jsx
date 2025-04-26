import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const ExpenseCreateUpdate = lazy(() => import("../../components/Expense/ExpenseCreateUpdate.jsx"));

const ExpenseCreateUpdatePage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <ExpenseCreateUpdate/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default ExpenseCreateUpdatePage;