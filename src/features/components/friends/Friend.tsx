import {S} from './Friend.styles'


type Props = {
    friendPhoto: string
    friendName: string
};

export const Friend = ({friendPhoto, friendName}: Props) => {
    return (
        <S.FriendWrapper>
            <S.FriendAvatar src={friendPhoto} alt={'friend photo'}/>
            <S.FriendName>{friendName}</S.FriendName>
        </S.FriendWrapper>
    );
};