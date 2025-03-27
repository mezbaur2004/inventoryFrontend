import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const CustomerList = lazy(() => import("../../components/Customer/CustomerList.jsx"));

const CustomerListPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <CustomerList/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default CustomerListPage;