import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const PurchaseList = lazy(() => import("../../components/Purchase/PurchaseList.jsx"));

const PurchaseListPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <PurchaseList/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default PurchaseListPage;