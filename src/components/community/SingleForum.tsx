import React from 'react';
import { Avatar, Typography } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import userAvatar from '../../assests/community/userPic.png';


function SingleForum() {
    return (
        <div className='flex flex-col gap-y-4 shadow-lg p-4 mt-4 w-[100%] sm:max-w-[70%] font-Poppins'>
            <div className='flex items-center gap-x-4'>
                <Avatar src={userAvatar} alt='user avatar' />
                <div className='flex flex-col'>
                    <h6>Mayar Mohamed</h6>
                    <Typography variant='caption'>a month ago</Typography>
                </div>
            </div>
            <h3 className='text-green text-lg'>How To treat cactus Plant ?</h3>
            <span className='text-post max-w-[80%]'>leaf, in botany, any usually flattened green outgrowth from the stem of a vascular plant. As the primary sites of photosynthesis, leaves manufacture food for plants, which in turn ultimately nourish and</span>
            <img src='https://lavie.orangedigitalcenteregypt.com/uploads/4b9766af-1eb1-43ab-973c-7da2a209c94f.png'alt='post img' />
            <div className='flex gap-x-4'>
                <div>
                    <ThumbUpOffAltIcon /> 0 likes
                </div>
                <div>
                    <ChatBubbleOutlineIcon /> 2 Replies
                </div>
            </div>
        </div>
    )
}

export default SingleForum

/*
https://lavie.orangedigitalcenteregypt.com/uploads/4b9766af-1eb1-43ab-973c-7da2a209c94f.png
 */