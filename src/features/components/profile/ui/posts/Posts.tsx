import React from 'react';
import {Post} from "./post/Post";
import {PostsFormDataType, ReduxAddPostForm} from "./AddPostForm";
import {postData, ProfileStructure} from "../../types";
import styled from "styled-components";
import {LargeHeading} from "../../../../../common/commonComponents/textElements/LargeHeading";

type postsProps = {
    messagesData: Array<postData>
    addPost: (newPostText: string) => void;
    isOwner: boolean;
    profile: ProfileStructure | null
}

export const Posts = ({ messagesData, addPost, isOwner, profile}: postsProps) => {

    const onSubmitHandler = (formData: PostsFormDataType) => {
        addPost(formData.newPostText);
    };

    if (!isOwner) return null;

    return (
        <PostsWrapper>
            <HeadingWrapper>
                <LargeHeading text={'My posts'} />
            </HeadingWrapper>
            <ReduxAddPostForm onSubmit={onSubmitHandler} />
            {messagesData.map(el =>
                <Post key={el.id} message={el.post} count={el.likesCount} profile={profile}/>
            )}
        </PostsWrapper>
    );
};

const PostsWrapper = styled.div`
    margin: 40px 10% 30px auto; 
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap: 15px;
`;

const HeadingWrapper = styled.div`
    text-align: center;
    width: 100%; 
`;
