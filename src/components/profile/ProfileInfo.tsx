import React from 'react';

type ProfilePropsType = {
    avatarSrc: string
    avatarAlt: string
    description: string
}

export const ProfileInfo = ({avatarSrc, avatarAlt, description}: ProfilePropsType) => {
    return (
        <div>
            <div>
                <img
                    src={avatarSrc}
                    alt={avatarAlt}/>
            </div>
            <div>
                {description}
            </div>
        </div>
    );
};

