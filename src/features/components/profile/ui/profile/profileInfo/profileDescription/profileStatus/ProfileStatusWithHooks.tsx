import React, {ChangeEvent, useEffect, useState} from "react";
import styled from "styled-components";
import {SmallHeading} from "../../../../../../../../common/commonComponents/textElements/SmallHeading";
import {Caption} from "../../../../../../../../common/commonComponents/textElements/Caption";
import {CustomInput} from "../../../../../../../../common/commonComponents/antdComponents/CustomInput";


type Props = {
    status: string;
    updateStatus: (status: string) => void;
    isOwner: boolean;
}

const StatusContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;

    h4 {
        margin: 0;
    }
`;

const InputContainer = styled.div`
    max-width: 600px;
    margin-top: 20px;
`

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
    {!props.isOwner
        ? <StatusContainer onDoubleClick={activateModeHandler}>
            <SmallHeading text={'My status: '}/>
            <Caption text={props.status || 'no status'}/>
        </StatusContainer>
        : <>{!editMode && <StatusContainer onDoubleClick={activateModeHandler}>
            <SmallHeading text={'My status: '}/>
            <Caption text={props.status || 'no status'}/>
        </StatusContainer>
        }
            {
                editMode && <InputContainer>
                    <CustomInput value={status}
                                 onChange={onStatusChange}
                                 onBlur={deactivateModeHandler}
                                 autoFocus={true}/>
                </InputContainer>
            }
        </>
    }
    </>

}




