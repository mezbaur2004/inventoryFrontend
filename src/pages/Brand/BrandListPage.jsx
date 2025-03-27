import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import {Fragment, lazy, Suspense} from "react";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const BrandList = lazy(() => import("../../components/Brand/BrandList.jsx"));

const BrandListPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <BrandList/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default BrandListPage;