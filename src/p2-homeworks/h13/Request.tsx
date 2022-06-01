import React, {useState} from 'react';
import {postRequest} from "./RequestsAPI";
import {Switch} from "@mui/material";

export const Request = () => {

    const [text, setText] = useState("");

    // const getData = (isChecked: boolean) => {
    //     postRequest(isChecked).then(res => {
    //         const {errorText} = res.data
    //         setText(errorText);
    //     }).catch(error => {
    //         const {errorText} = error.response.data;
    //         setText(errorText);
    //     });
    // }


    const getData = async (isChecked: boolean) => {
        try {
            const response = await postRequest(isChecked);
            const {errorText} = response.data
            setText(errorText);
        } catch (err: any) {
            const {errorText} = err.response.data;
            setText(errorText);
        }
    }


    return (
        <div>
            <Switch onChange={(event) => getData(event.currentTarget.checked)} color={"secondary"}/>
            {text}
        </div>
    );
};
