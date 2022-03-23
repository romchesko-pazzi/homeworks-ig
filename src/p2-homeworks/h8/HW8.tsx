import React, {useReducer, useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./HW8.module.css";
import {
    AlternativeSortReducer,
    check18AC,
    sortByAscendingOrderAC,
    sortByDecreasingOrderAC
} from "./AlternativeSortReducer";

export type UserType = {
    _id: number,
    name: string,
    age: number,
}

const initialPeople = [
    {_id: 0, name: 'Александр', age: 66},
    {_id: 1, name: 'Кот', age: 3},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople);

    const finalPeople = people.map((p: UserType) => (
        <div className={s.list} key={p._id}>
            <div>
                {p.name}
            </div>
            <div>
                {p.age}
            </div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort in ascending order'}));
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort by decreasing order'}));
    const sort18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check age 18'}));

    return (
        <div className={s.main}>
            {finalPeople}
            <div className={s.buttons}>
                <div><SuperButton onClick={sortUp}>sort in ascending order</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort by decreasing order</SuperButton></div>
                <div><SuperButton onClick={sort18}>check 18</SuperButton></div>
            </div>
        </div>


    )
}

export default HW8

//ALTERNATIVE HW8
//
// function HW8() {
//     // const [people, peopleDispatch] = useReducer(AlternativeSortReducer, initialPeople);
//     const [people, setPeople] = useState<Array<UserType>>(initialPeople);
//
//     const finalPeople = people.map((p: UserType) => (
//         <div className={s.list} key={p._id}>
//             <div>
//                 {p.name}
//             </div>
//             <div>
//                 {p.age}
//             </div>
//         </div>
//     ))
//     const sortByAscendingOrder = () => {
//         setPeople(AlternativeSortReducer(initialPeople,sortByAscendingOrderAC()));
//     }
//     const sortByDecreasingOrder = () => {
//         setPeople(AlternativeSortReducer(initialPeople,sortByDecreasingOrderAC()));
//     }
//     const check18 = () => {
//         setPeople(AlternativeSortReducer(initialPeople,check18AC()));
//     }
//     return (
//         <div className={s.main}>
//             {finalPeople}
//             <div className={s.buttons}>
//                 <div><SuperButton onClick={sortByAscendingOrder}>sort in ascending order</SuperButton></div>
//                 <div><SuperButton onClick={sortByDecreasingOrder}>sort by decreasing order</SuperButton></div>
//                 <div><SuperButton onClick={check18}>check 18</SuperButton></div>
//             </div>
//         </div>
//     )
// }
//
// export default HW8;
