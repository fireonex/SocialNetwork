import styled from "styled-components";


const Dialogs = styled.section`
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

export const S = {
    Dialogs,
    DialogsItems,
    Dialog,
    Messages,
    Message
}