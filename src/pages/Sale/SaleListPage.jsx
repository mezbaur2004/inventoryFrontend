import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const SaleList = lazy(() => import("../../components/Sale/SaleList.jsx"));

const SaleListPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <SaleList/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default SaleListPage;