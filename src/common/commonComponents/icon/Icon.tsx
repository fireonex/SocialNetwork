import React from 'react';
import IconSprite from '../../assets/sprite.svg';


type IconProps = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    transform?: string;
}

export const Icon = ({iconId, height, transform, viewBox, width}: IconProps) => {
    return (
        <svg width={width || "40"} height={height || "40"} viewBox={viewBox || "0 0 40 40"} fill="none"
             xmlns="http://www.w3.org/2000/svg" transform={transform}>
            <use xlinkHref={ `${IconSprite}#${iconId}` }/>
        </svg>
    );
};

