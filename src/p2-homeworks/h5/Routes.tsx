import React from 'react'
import {Error404} from "./pages/Error404";
import {PreJunior} from "./pages/PreJunior";
import {Route, Routes, Navigate} from "react-router-dom";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    junior: "/junior",
    juniorPlus: "/juniorPlus"
}

export function Routings() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.junior} element={<Junior/>}/>
                <Route path={PATH.juniorPlus} element={<JuniorPlus/>}/>

                <Route path={"*"} element={<Error404/>}/>
            </Routes>
        </div>
    )
}