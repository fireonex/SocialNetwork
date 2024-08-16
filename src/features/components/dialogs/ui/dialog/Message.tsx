import {S} from "../Dialogs.styles";

type Props = {
    text: string
}

export const Message = ({text}: Props) => {
    return (
        <S.Message>{text}</S.Message>
    )
}