import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const CustomerCreateUpdate = lazy(() => import("../../components/Customer/CustomerCreateUpdate.jsx"));

const CustomerCreateUpdatePage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <CustomerCreateUpdate/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default CustomerCreateUpdatePage;