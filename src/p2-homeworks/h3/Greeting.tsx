import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string;
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void;
    addUser: () => void;
    error: string;
    totalUsers: number;
    onKeyPressCallback: (event: KeyboardEvent<HTMLInputElement>) => void;
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressCallback} // деструктуризация пропсов
) => {
    const inputClass = name === "" ? s.error : "";

    return (
        <div>
            <input value={name} onKeyPress={onKeyPressCallback} onChange={setNameCallback} className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
