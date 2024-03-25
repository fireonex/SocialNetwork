import styled from "styled-components";


export const Dialogs = () => {
    return (
        <StyledDialogs>
            <DialogsItems>
                <Dialog>Sam</Dialog>
                <Dialog>John</Dialog>
                <Dialog>Sarah</Dialog>
                <Dialog>Tom</Dialog>
                <Dialog>Rebecca</Dialog>
            </DialogsItems>
            <Messages>
                <Message>Hello</Message>
                <Message>What's up bro??</Message>
                <Message>I love you</Message>
                <Message>Let's go to restaurant</Message>
            </Messages>
        </StyledDialogs>
    )
}


const StyledDialogs = styled.section`
    display: grid;
    grid-template-columns: 2fr 10fr;
`

const DialogsItems = styled.div`

`

const Dialog = styled.div`
    padding: 10px;
    border: 1px solid #0c3306;
`

const Messages = styled.div`

`

const Message = styled.div`
    padding: 10px;
`