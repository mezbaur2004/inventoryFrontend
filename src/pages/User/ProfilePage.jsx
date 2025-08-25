import {Fragment, lazy, Suspense} from "react";
import MasterLayout from "../../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../../components/MasterLayout/LazyLoader.jsx";
const Profile = lazy(() => import("../../components/User/Profile.jsx"));

const ProfilePage = () => {
    return (
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <Profile/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
    );
};

export default ProfilePage;