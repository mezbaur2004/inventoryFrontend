import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const ExpenseTypeCreateUpdate = lazy(() => import("../../components/ExpenseType/ExpenseTypeCreateUpdate.jsx"));

const ExpenseTypeCreateUpdatePage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <ExpenseTypeCreateUpdate/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default ExpenseTypeCreateUpdatePage;