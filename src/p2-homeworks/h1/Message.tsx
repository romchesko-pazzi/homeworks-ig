import React from 'react'
import styles from "./Message.module.css"

type MessagePropsType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

const Message = (props: MessagePropsType) => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.first}>
                    <img alt={"avatar"} src={props.avatar} className={styles.image}/>
                </div>
                <div className={styles.second}>
                    <div className={styles.name}>
                        {props.name}
                    </div>
                    <div className={styles.message}>
                        {props.message}
                        <div/>
                        <div className={styles.time}>
                            {props.time}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Message
