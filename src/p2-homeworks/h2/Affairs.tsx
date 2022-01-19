import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'


type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void;
    deleteAffairCallback: (_id: number) => void;
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((m: AffairType, i) => (
        <Affair
            key={i} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={m.name}
            _id={m._id}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    }
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
