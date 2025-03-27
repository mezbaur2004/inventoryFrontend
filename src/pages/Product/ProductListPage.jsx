import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const ProductList = lazy(() => import("../../components/Product/ProductList.jsx"));

const ProductListPage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <ProductList/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default ProductListPage;