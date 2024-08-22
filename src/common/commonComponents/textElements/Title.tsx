import styled from "styled-components";

type Props = {
    text: string;
}

export const Title = ({text}: Props) => {
    return (
        <StyledTitle>{text}</StyledTitle>
    )
}

export const StyledTitle = styled.h2`
    font-family: "IM FELL English", sans-serif;
    font-size: 40px;
    margin: 0 auto;
`