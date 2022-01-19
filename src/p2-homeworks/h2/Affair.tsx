import React from 'react';

type AffairPropsType = {
    _id: number;
    affair: string;
    deleteAffairCallback: (_id: number) => void;
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props._id);
    }

    return (
        <div>
            <button onClick={deleteCallback}>delete</button>
            {props.affair}
        </div>
    )
}

export default Affair;