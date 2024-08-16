import {NavLink} from "react-router-dom";
import {S} from "../Dialogs.styles";

type Props = {
    id: string
    personName: string
}

export const Dialog = ({id, personName}: Props) => {
    return (
        <S.DialogNavWrapper>
            <NavLink to={`/dialogs/${id}`}>{personName}</NavLink>
        </S.DialogNavWrapper>
    )
}