import {Friend} from "./Friend";
import {friendsType} from "../redux/State";
import {S} from './Friend.styles'

type FriendsPropsType = {
    friendsData: friendsType[]
};

export const Friends = ({friendsData}: FriendsPropsType) => {
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