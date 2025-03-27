import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import {Fragment, lazy, Suspense} from "react";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const CategoryCreateUpdate = lazy(()=>import("../../components/Category/CategoryCreateUpdate.jsx"))

const CategoryCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <CategoryCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default CategoryCreateUpdatePage;