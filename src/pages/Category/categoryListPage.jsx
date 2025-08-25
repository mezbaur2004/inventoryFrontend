import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const CategoryList = lazy(() => import("../../components/Category/CategoryList.jsx"));

const CategoryListPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <CategoryList />
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default CategoryListPage;