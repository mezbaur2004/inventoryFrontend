import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/FormHelper";
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import {getToken} from "../helper/SessionHelper";
import {
    SetExpenseChart,
    SetExpenseTotal, SetPurchaseChart, SetPurchaseTotal,
    SetReturnChart,
    SetReturnTotal, SetSaleChart, SetSaleTotal
} from "../redux/state-slice/dashboard-slice";
import {BaseURL} from "../helper/config";
const AxiosHeader={headers:{"token":getToken()}}


export async function ExpensesSummary(){
    try {
        store.dispatch(ShowLoader())
        let URL=BaseURL+"/ExpenseSummary";
        let res=await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetExpenseChart(res.data['data'][0]['Last30Days']))
            store.dispatch(SetExpenseTotal(res.data['data'][0]['Total'][0]['TotalAmount']))
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e){
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
    }
}

export async function ReturnSummary(){
    try {
        store.dispatch(ShowLoader())
        let URL=BaseURL+"/ReturnSummary";
        let res=await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetReturnChart(res.data['data'][0]['Last30Days']))
            store.dispatch(SetReturnTotal(res.data['data'][0]['Total'][0]['TotalAmount']))
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e){
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
    }
}

export async function SaleSummary(){
    try {
        store.dispatch(ShowLoader())
        let URL=BaseURL+"/SaleSummary";
        let res=await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetSaleChart(res.data['data'][0]['Last30Days']))
            store.dispatch(SetSaleTotal(res.data['data'][0]['Total'][0]['TotalAmount']))
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e){
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
    }
}

export async function PurchaseSummary(){
    try {
        store.dispatch(ShowLoader())
        let URL=BaseURL+"/PurchaseSummary";
        let res=await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetPurchaseChart(res.data['data'][0]['Last30Days']))
            store.dispatch(SetPurchaseTotal(res.data['data'][0]['Total'][0]['TotalAmount']))
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e){
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
    }
}

