import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC, select} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ["dark", "red", "green", "darkslateblue"];

function HW12() {
    const {color} = useSelector(select);
    const dispatch = useDispatch();

    const changeTheme = (option: string) => {
        dispatch(changeThemeC(option));
    }

    return (
        <div className={s[color]}>
            <hr/>
            <span className={s[color + '-text']}>
                homeworks 12
            </span>

            <SuperSelect options={themes} onChangeOption={(option) => changeTheme(option)}/>

            <hr/>
        </div>
    );
}

export default HW12;
