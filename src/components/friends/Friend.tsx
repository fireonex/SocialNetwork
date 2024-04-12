import {S} from './Friend.styles'


type FriendPropsType = {
    friendPhoto: string
    friendName: string
};

export const Friend = ({friendPhoto, friendName}: FriendPropsType) => {
    return (
        <S.FriendWrapper>
            <S.FriendAvatar src={friendPhoto} alt={'friend photo'}/>
            <S.FriendName>{friendName}</S.FriendName>
        </S.FriendWrapper>
    );
};