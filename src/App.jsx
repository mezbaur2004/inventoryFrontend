import React, {Fragment} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import BrandCreateUpdatePage from "./pages/Brand/BrandCreateUpdatePage.jsx";
import DashBoardPage from "./pages/Dashboard/DashBoardPage.jsx";
import Page404 from "./pages/NotFound/Page404.jsx";
import ProfilePage from "./pages/User/ProfilePage.jsx";
import BrandListPage from "./pages/Brand/BrandListPage.jsx";
import CategoryCreateUpdatePage from "./pages/Category/CategoryCreateUpdatePage.jsx";
import CategoryListPage from "./pages/Category/categoryListPage.jsx";
import CustomerCreateUpdatePage from "./pages/Customer/CustomerCreateUpdatePage.jsx";
import CustomerListPage from "./pages/Customer/CustomerListPage.jsx";
import ExpenseTypeCreateUpdatePage from "./pages/ExpenseType/ExpenseTypeCreateUpdatePage.jsx";
import ExpenseTypeListPage from "./pages/ExpenseType/ExpenseTypeListPage.jsx";
import ExpenseCreateUpdatePage from "./pages/Expense/ExpenseCreateUpdatePage.jsx";
import ExpenseListPage from "./pages/Expense/ExpenseListPage.jsx";
import ProductCreateUpdatePage from "./pages/Product/ProductCreateUpdatePage.jsx";
import ProductListPage from "./pages/Product/ProductListPage.jsx";
import PurchaseCreateUpdatePage from "./pages/Purchase/PurchaseCreateUpdatePage.jsx";
import PurchaseListPage from "./pages/Purchase/PurchaseListPage.jsx";
import ReturnCreateUpdatePage from "./pages/Return/ReturnCreateUpdatePage.jsx";
import ReturnListPage from "./pages/Return/ReturnListPage.jsx";
import SaleCreateUpdatePage from "./pages/Sale/SaleCreateUpdatePage.jsx";
import SaleListPage from "./pages/Sale/SaleListPage.jsx";
import SupplierCreateUpdatePage from "./pages/Supplier/SupplierCreateUpdatePage.jsx";
import SupplierListPage from "./pages/Supplier/SupplierListPage.jsx";
import PurchaseReportPage from "./pages/Report/PurchaseReportPage.jsx";
import ReturnReportPage from "./pages/Report/ReturnReportPage.jsx";
import SaleReportPage from "./pages/Report/SaleReportPage.jsx";
import ExpenseReportPage from "./pages/Report/ExpenseReportPage.jsx";
import FullscreenLoader from "./components/MasterLayout/FullscreenLoader.jsx";
import LoginPage from "./pages/User/LoginPage.jsx";
import RegistrationPage from "./pages/User/RegistrationPage.jsx";
import SendOTPPage from "./pages/User/SendOTPPage.jsx";
import CreatePasswordPage from "./pages/User/CreatePasswordPage.jsx";
import VerifyOTPPage from "./pages/User/VerifyOTPPage.jsx";
import {getToken} from "./helper/SessionHelper.js";
import {Toaster} from "react-hot-toast";

const App = () => {

    if(getToken()){
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="/BrandCreateUpdatePage" element={<BrandCreateUpdatePage/>}/>
                        <Route path="/BrandListPage" element={<BrandListPage/>}/>

                        <Route path="/CategoryCreateUpdatePage" element={<CategoryCreateUpdatePage/>}/>
                        <Route path="/CategoryListPage" element={<CategoryListPage/>}/>

                        <Route path="/CustomerCreateUpdatePage" element={<CustomerCreateUpdatePage/>}/>
                        <Route path="/CustomerListPage" element={<CustomerListPage/>}/>

                        <Route path="/ExpenseTypeCreateUpdatePage" element={<ExpenseTypeCreateUpdatePage/>}/>
                        <Route path="/ExpenseTypeListPage" element={<ExpenseTypeListPage/>}/>

                        <Route path="/ExpenseCreateUpdatePage" element={<ExpenseCreateUpdatePage/>}/>
                        <Route path="/ExpenseListPage" element={<ExpenseListPage/>}/>

                        <Route path="/ProductCreateUpdatePage" element={<ProductCreateUpdatePage/>}/>
                        <Route path="/ProductListPage" element={<ProductListPage/>}/>

                        <Route path="/PurchaseCreateUpdatePage" element={<PurchaseCreateUpdatePage/>}/>
                        <Route path="/PurchaseListPage" element={<PurchaseListPage/>}/>

                        <Route path="/ReturnCreateUpdatePage" element={<ReturnCreateUpdatePage/>}/>
                        <Route path="/ReturnListPage" element={<ReturnListPage/>}/>

                        <Route path="/SaleCreateUpdatePage" element={<SaleCreateUpdatePage/>}/>
                        <Route path="/SaleListPage" element={<SaleListPage/>}/>

                        <Route path="/SupplierCreateUpdatePage" element={<SupplierCreateUpdatePage/>}/>
                        <Route path="/SupplierListPage" element={<SupplierListPage/>}/>

                        <Route path="/PurchaseReportPage" element={<PurchaseReportPage/>}/>
                        <Route path="/ReturnReportPage" element={<ReturnReportPage/>}/>
                        <Route path="/SaleReportPage" element={<SaleReportPage/>}/>
                        <Route path="/ExpenseReportPage" element={<ExpenseReportPage/>}/>


                        <Route path="/" element={<DashBoardPage/>}/>
                        <Route path="/Profile" element={<ProfilePage/>}/>
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </BrowserRouter>
                <Toaster/>
                <FullscreenLoader/>
            </Fragment>
        );
    }else{
        return(
          <Fragment>
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Navigate to="/Login" replace />}/>
                      <Route path="/Login" element={<LoginPage />}/>
                      <Route path="/Registration" element={<RegistrationPage />}/>
                      <Route path="/SendOTP" element={<SendOTPPage/>}/>
                      <Route path="/VerifyOTP" element={<VerifyOTPPage/>}/>
                      <Route path="/CreatePassword" element={<CreatePasswordPage/>}/>
                      <Route path="*" element={<Page404/>}/>
                  </Routes>
              </BrowserRouter>
              <Toaster/>
              <FullscreenLoader/>
          </Fragment>
        );
    }
};

export default App;