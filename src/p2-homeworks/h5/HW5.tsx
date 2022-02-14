import React from 'react'
import Header from './Header/Header'
import {Routings} from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <HashRouter>
            <Header/>
            <Routings/>
            </HashRouter>
        </div>
    )
}

export default HW5
