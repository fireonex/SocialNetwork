import {Friend} from "./Friend";
import {S} from './Friend.styles'
import {friends} from "../navbar/navbarReducer";


type Props = {
    friendsData: friends[]
};

export const Friends = ({friendsData}: Props) => {
    return (
        <div>
            <S.FriendsTitle>Friends</S.FriendsTitle>
            <S.FriendsWrapper>
                {
                    friendsData.map(el =>
                        <Friend key={el.id} friendPhoto={el.friendPhoto} friendName={el.friendName}/>)
                }
            </S.FriendsWrapper>
        </div>
    );
};