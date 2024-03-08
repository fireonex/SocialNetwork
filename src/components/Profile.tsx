import React from 'react';
import '../App.css';


export const Profile = () => {
    return (
        <div className={'content'}>
            <div>
                <img
                    src={'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}
                    alt={'nature img'}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    new posts
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

