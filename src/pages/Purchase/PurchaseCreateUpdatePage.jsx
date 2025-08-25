import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const PurchaseCreateUpdate = lazy(() => import("../../components/Purchase/PurchaseCreateUpdate.jsx"));

const PurchaseCreateUpdatePage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <PurchaseCreateUpdate/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default PurchaseCreateUpdatePage;