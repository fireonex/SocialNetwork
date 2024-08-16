import React, {ChangeEvent, useEffect, useState} from "react";


type Props = {
    status: string;
    updateStatus: (status: string) => void;
}

export const ProfileStatusWithHooks = (props: Props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateModeHandler = () => {
        setEditMode(true)
    }
    //
    const deactivateModeHandler = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    //
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }


    return <>
        {!editMode && <div onDoubleClick={activateModeHandler}>
            {!props.status ? 'user status' : props.status}
        </div>}
        {editMode &&
         <div>
            <input value={status}
                   onChange={onStatusChange}
                   onBlur={deactivateModeHandler}
                   autoFocus={true}/>
        </div>}
    </>
}




