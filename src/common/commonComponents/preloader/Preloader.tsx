import React from "react";
import loader from '../../assets/tube-spinner.svg'

type Props = {

};

export const Preloader = (props: Props) => {
    return (
        <img src={loader} alt={'loading'}/>
    );
};