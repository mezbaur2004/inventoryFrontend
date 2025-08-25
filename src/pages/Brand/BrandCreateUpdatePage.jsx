import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const BrandCreateUpdate = lazy(() => import("../../components/Brand/BrandCreateUpdate.jsx"));

const BrandCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <BrandCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default BrandCreateUpdatePage;