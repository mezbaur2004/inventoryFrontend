import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const SaleCreateUpdate = lazy(() => import("../../components/Sale/SaleCreateUpdate.jsx"));

const SaleCreateUpdatePage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <SaleCreateUpdate/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default SaleCreateUpdatePage;