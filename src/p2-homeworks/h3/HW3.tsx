import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';

// types
export type UserType = {
    id: string;
    name: string;
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]);
    const addUserCallback = (name: string) => {
        let newUser = {id: v1(), name: name}
        setUsers([...users, newUser]);
    }

    return (
        <div>
            <hr/>
            homeworks 3
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
        </div>
    )
}
export default HW3