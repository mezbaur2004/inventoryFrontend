import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BrandCreateUpdatePage from "./pages/Brand/BrandCreateUpdatePage.jsx";

const App = () => {

    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/BrandCreateUpdatePage" element={<BrandCreateUpdatePage/>}/>


                </Routes>
            </BrowserRouter>
        </Fragment>
    );
};

export default App;