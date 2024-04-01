import {NavLink} from "react-router-dom";
import {S} from "../Dialogs.styles";

type DialogPropsType = {
    id: number
    personName: string
}

export const Dialog = ({id, personName}: DialogPropsType) => {
    return (
        <S.DialogNavWrapper>
            <NavLink to={`/dialogs/${id}`}>{personName}</NavLink>
        </S.DialogNavWrapper>
    )
}