import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/FormHelper";
import {getToken} from "../helper/SessionHelper";
import {OnChangeCustomerInput, ResetFormValue, SetCustomerList, SetCustomerListTotal} from "../redux/state-slice/customer-slice";
import {BaseURL} from "../helper/config";

const AxiosHeader={headers:{"token":getToken()}}

export async function CustomerListRequest(pageNo, perPage, searchKeyword) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/CustomerList/"+pageNo+"/"+perPage+"/"+searchKeyword;
        const result = await axios.get(URL,AxiosHeader)
        console.log(result)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            if (result.data['data'][0]['Rows'].length > 0) {
                store.dispatch(SetCustomerList(result.data['data'][0]['Rows']))
                store.dispatch(SetCustomerListTotal(result.data['data'][0]['Total'][0]['count']))
            } else {
                store.dispatch(SetCustomerList([]))
                store.dispatch(SetCustomerListTotal(0))
                ErrorToast("No Data Found")
            }
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}


export async function CreateCustomerRequest(PostBody,ObjectID) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/CreateCustomer"
        if(ObjectID!==0){
            URL = BaseURL+"/UpdateCustomer/"+ObjectID;
        }
        const result = await axios.post(URL,PostBody,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            SuccessToast("Request Successful");
            store.dispatch(ResetFormValue())
            return  true;
        }
        else if(result.status === 200 && result.data['status'] === "fail") {
            if(result.data['data']['keyPattern']['Phone']===1){
                ErrorToast("Mobile Number Already Exist")
                return false;
            }
        }
        else {
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return  false
    }
}


export async function FillCustomerFormRequest(ObjectID) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/CustomerDetailsByID/"+ObjectID;
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            let FormValue=result.data['data'][0];
            store.dispatch(OnChangeCustomerInput({Name:"Name",Value:FormValue['Name']}));
            store.dispatch(OnChangeCustomerInput({Name:"Phone",Value:FormValue['Phone']}));
            store.dispatch(OnChangeCustomerInput({Name:"Email",Value:FormValue['Email']}));
            store.dispatch(OnChangeCustomerInput({Name:"Address",Value:FormValue['Address']}));
            return  true;
        } else {
            debugger;
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        debugger;
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return  false
    }
}


export async function DeleteCustomerRequest(ObjectID) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL + "/DeleteCustomer/" + ObjectID;
        const result = await axios.get(URL, AxiosHeader)
        store.dispatch(HideLoader())

        if (result.status === 200) {
            if (result.data['status'] === "associate") {
                ErrorToast(result.data['data']); // Handle association message
                return false;
            }
            if (result.data['status'] === "associated") {  // Handle "associated with Sales" message
                ErrorToast(result.data['data']);
                return false;
            }
            if (result.data['status'] === "success") {
                SuccessToast("Request Successful");
                return true;
            }
        }
        ErrorToast("Request Fail! Try Again")
        return false;
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    }
}



