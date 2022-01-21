import React from 'react'
import {AffairType} from "./HW2";
import styles from "./Affairs.module.css"

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void;
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }

    return (
        <div className={styles.main}>
            <div className={styles.name}>{props.affair.name}</div>
            <div className={"priority"}>{props.affair.priority}</div>
            <button onClick={deleteCallback}>del</button>
        </div>
    )
}

export default Affair