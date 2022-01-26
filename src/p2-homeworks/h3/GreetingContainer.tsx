import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    users: any // need to fix any
    addUserCallback: any // need to fix any
}

// более простой и понятный для новичков
// более современный и удобный для про :)
// уровень локальной логики
// const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
function GreetingContainer(props: GreetingContainerPropsType) {

    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [totalUsers, setTotalUsers] = useState<number>(0);

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }
    const addUser = () => {
        alert(`Hello ${name} !`)
        setName("");
        setTotalUsers(totalUsers + 1);
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
