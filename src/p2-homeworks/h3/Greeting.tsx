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
    const inputClass = error !== "" ? s.error : "";

    return (
        <div>
            <input value={name} onKeyPress={onKeyPressCallback} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span className={s.total}>{totalUsers}</span>
            <div className={s.text}>{error}</div>
        </div>
    )
}

export default Greeting
