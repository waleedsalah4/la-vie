import React from 'react';
import { Avatar, Typography } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import userAvatar from '../../assests/community/userPic.png';
import { Item } from './types';


const SingleForum: React.FC<{item: Item}> =({item}) => {
    return (
        <div className='flex flex-col gap-y-4 shadow-lg p-4 mt-4 w-[100%] font-Poppins'>
            <div className='flex items-center gap-x-4'>
                <Avatar src={item.user.imageUrl} alt='user avatar' />
                <div className='flex flex-col'>
                    <h6>{item.user.firstName} {item.user.lastName}</h6>
                    <Typography variant='caption'>a month ago</Typography>
                </div>
            </div>
            <h3 className='text-green text-lg'>{item.title}</h3>
            <span className='text-post max-w-[80%]'>{item.description}</span>
            <img src='https://lavie.orangedigitalcenteregypt.com/uploads/4b9766af-1eb1-43ab-973c-7da2a209c94f.png'alt='post img' />
            <div className='flex gap-x-4'>
                <div>
                    <ThumbUpOffAltIcon /> {item.forumLikes.length} likes
                </div>
                <div>
                    <ChatBubbleOutlineIcon /> {item.ForumComments.length} Replies
                </div>
            </div>
        </div>
    )
}

export default SingleForum

/*
https://lavie.orangedigitalcenteregypt.com/uploads/4b9766af-1eb1-43ab-973c-7da2a209c94f.png
 */