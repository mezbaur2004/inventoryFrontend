import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const SupplierList = lazy(() => import("../../components/Supplier/SupplierList.jsx"));

const SupplierListPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <SupplierList/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default SupplierListPage;