import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const DashBoard=lazy(()=>import("../../components/Dashboard/DashBoard.jsx")) ;

const DashBoardPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <DashBoard/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default DashBoardPage;