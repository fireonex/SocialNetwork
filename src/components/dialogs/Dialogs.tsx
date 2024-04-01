import {S} from './Dialogs.styles'
import {Dialog} from "./dialog/Dialog";
import {Message} from "./dialog/Message";

export const Dialogs = () => {
    return (
        <S.Dialogs>
            <S.DialogsItems>
                <Dialog id={1} personName={'Sam'}/>
                <Dialog id={2} personName={'John'}/>
                <Dialog id={3} personName={'Sarah'}/>
                <Dialog id={4} personName={'Tom'}/>
                <Dialog id={5} personName={'Rebecca'}/>
            </S.DialogsItems>
            <S.Messages>
                <Message text={'Whats up bro??'}/>
                <Message text={'I love you'}/>
                <Message text={'Lets go to restaurant'}/>
            </S.Messages>
        </S.Dialogs>
    )
}


