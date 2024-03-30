import React from "react";
import {S} from './Header.styles'


export const Header = () => {
    return (
        <S.Header>
            <S.Logo
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU'}
                alt={'logo'}/>
        </S.Header>
    )
}


