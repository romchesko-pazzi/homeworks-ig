import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./Clock.module.css";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId);
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date());
        }, 1000)
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true);
    }
    const onMouseLeave = () => {
        setShow(false);
    }


    const stringTime = date?.toLocaleTimeString(); // fix with date
    const stringDate = date?.toDateString(); // fix with date

    return (
        <div style={{height: "130px"}}>
            <div className={s.time} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {stringTime}
            </div>

            {show && (
                <div style={{fontSize: "30px", marginTop: "10px"}}>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
