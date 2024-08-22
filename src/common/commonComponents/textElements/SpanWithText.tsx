import styled from "styled-components";

type Props = {
    text: string;
}

export const SpanWithText = ({text}: Props) => {
    return (
        <StyledSpan>{text}</StyledSpan>
    )
}

export const StyledSpan = styled.span`
    font-family: "IM FELL English", sans-serif;
    font-size: 18px;
    margin: 0;
`