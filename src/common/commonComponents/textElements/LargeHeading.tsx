import styled from "styled-components";

type Props = {
    text: string;
}

export const LargeHeading = ({text}: Props) => {
    return (
        <StyledLargeHeading>{text}</StyledLargeHeading>
    )
}

export const StyledLargeHeading = styled.h3`
    font-family: "IM FELL English", sans-serif;
    font-size: 25px;
    margin: 0 auto;
`