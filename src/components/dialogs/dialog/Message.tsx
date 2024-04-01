import {S} from "../Dialogs.styles";

type MessagePropsType = {
    text: string
}

export const Message = ({text}: MessagePropsType) => {
    return (
        <S.Message>{text}</S.Message>
    )
}