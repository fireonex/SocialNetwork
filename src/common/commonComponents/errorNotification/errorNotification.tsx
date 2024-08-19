import {S} from "./errorNotification.styles"

type Props = {
    message: string;
};


export const errorNotification = ({message}: Props) => {
    return (
        <S.AlertContainer>
            <S.AlertContent>
                <S.AlertIcon>⚠️</S.AlertIcon>
                <S.AlertMessage>{message}</S.AlertMessage>
            </S.AlertContent>
        </S.AlertContainer>
    );
};




