import styled from "styled-components";

type Props = {
    text: string;
}

export const SmallHeading = ({text}: Props) => {
    return (
        <StyledSmallHeading>{text}</StyledSmallHeading>
    )
}

export const StyledSmallHeading = styled.h4`
    font-family: "IM FELL English", sans-serif;
    font-size: 20px;
    margin: 0 auto;
`