import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes";
import s from "./Header.module.css";

function Header() {
    return (
        <div className={s.main}>
            <div>
                <NavLink to={PATH.PRE_JUNIOR} className={x => x.isActive ? s.linkGold : s.link}>Pre-Junior</NavLink>
            </div>
            <div>
                <NavLink to={PATH.junior} className={x => x.isActive ? s.linkGold : s.link}>Junior</NavLink>
            </div>
            <div>
                <NavLink to={PATH.juniorPlus} className={x => x.isActive ? s.linkGold : s.link}>Junior-Plus</NavLink>
            </div>
        </div>
    )
}

export default Header
