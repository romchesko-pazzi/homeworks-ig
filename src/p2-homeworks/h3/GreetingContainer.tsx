import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>;
    addUserCallback: (name: string) => void;
}

// более простой и понятный для новичков

// более современный и удобный для про :)
// уровень локальной логики
// const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
function GreetingContainer(props: GreetingContainerPropsType) {
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        setError("");
        setName(event.currentTarget.value);
    }

    const addUser = () => {
        if (name !== "") {
            props.addUserCallback(name.trim())
            alert(`Hello ${name} !`);
            setName("");
        }
        if (name === "") {
            setError("name is required!");
        }
    }

    const onKeyPressCallback = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addUser();
        }
    }

    const totalUsers = props.users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressCallback={onKeyPressCallback}
        />
    )
}

export default GreetingContainer
