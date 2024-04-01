import styled from "styled-components";


const Dialogs = styled.section`
    display: grid;
    grid-template-columns: 2fr 10fr;
`

const DialogsItems = styled.div`

`

const DialogNavWrapper = styled.div`
    padding: 10px;
    border: 1px solid #0c3306;
    margin-left: 10px;
    font-size: 20px;

    a {
        text-decoration: none;
        color: #135005;
    }

    & > a.active {
        text-decoration: none;
        color: #0c3306;
    }

    & > a:hover {
        color: steelblue; /* Цвет ссылки */
    }
`

const Messages = styled.div`

`

const Message = styled.div`
    padding: 10px;
`

export const S = {
    Dialogs,
    DialogsItems,
    DialogNavWrapper,
    Messages,
    Message
}