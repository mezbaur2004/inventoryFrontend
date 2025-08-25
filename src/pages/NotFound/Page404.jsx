import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const NotFound=lazy(()=>import("../../components/NotFound/NotFound.jsx"));

const Page404 = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <NotFound/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default Page404;