import avatar from '../../../assets/defaultSmallUserImg.png'
import {S} from './FriendMessage.styles'

// export type UserType = {
//     avatar: string
//     name: string
// }
//
// export type UserMessageType = {
//     text: string
//     time: string
// }

// export type FriendMessageType = {
//     id: number
//     user: UserType
//     message: UserMessageType
// }
//
// export type FriendPropsType = {
//     message: FriendMessageType
// }

//
// export const FriendMessage = ({message}: FriendPropsType) => {
//     return (
//         <S.friendMessage
//             id={'hw1-friend-message-' + message.id}
//         >
//             <S.friendImageAndText>
//                 <img
//                     id={'hw1-friend-avatar-' + message.id}
//                     src={message.user.avatar}
//                 />
//                 <S.friendText>
//                     <S.friendName
//                         id={'hw1-friend-name-' + message.id}
//                     >
//                         {message.user.name}
//                     </S.friendName>
//                     <S.friendMessageText
//                         id={'hw1-friend-text-' + message.id}
//                     >
//                         {message.message.text}
//                     </S.friendMessageText>
//                 </S.friendText>
//             </S.friendImageAndText>
//             <S.friendTime
//                 id={'hw1-friend-time-' + message.id}
//             >
//                 {message.message.time}
//             </S.friendTime>
//         </S.friendMessage>
//     )
// }