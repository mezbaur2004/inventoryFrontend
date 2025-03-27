import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const ProductCreateUpdate = lazy(() => import("../../components/Product/ProductCreateUpdate.jsx"));

const ProductCreateUpdatePage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <ProductCreateUpdate/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default ProductCreateUpdatePage;