import styled from "styled-components";

type Props = {
    text: string;
}

export const Caption = ({text}: Props) => {
    return (
        <StyledCaption>{text}</StyledCaption>
    )
}

export const StyledCaption = styled.p`
    font-family: "IM FELL English", sans-serif;
    font-size: 18px;
    margin: 0;
`