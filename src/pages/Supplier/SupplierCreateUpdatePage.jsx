import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const SupplierCreateUpdate = lazy(() => import("../../components/Supplier/SupplierCreateUpdate.jsx"));

const SupplierCreateUpdatePage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <SupplierCreateUpdate/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default SupplierCreateUpdatePage;