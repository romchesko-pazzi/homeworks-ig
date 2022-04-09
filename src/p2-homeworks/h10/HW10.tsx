import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, LoadingStateType} from "./bll/loadingReducer";
import s from "./HW10.module.css";
import {hrHR} from "@mui/material/locale";

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch();
    const loading = useSelector<AppStoreType, LoadingStateType>(state => state.loading);
    const setLoading = () => {
        dispatch(loadingAC(loading.isLoading));
        setTimeout(() => {
            dispatch(loadingAC(!loading.isLoading))
        }, 2000)
    };


    return (
        <div style={{textAlign: "center"}}>
            homeworks 10
            {loading.isLoading
                ? (
                    <div className={s.loading}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ) : (
                    <div style={{marginBottom:"51px"}}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            <hr/>
        </div>
)
}

export default HW10
