import React from 'react';
import SingleForum from './SingleForum';
// import {formusItems } from '../../dummyData'
import { Item, Items } from './types';
/*
interface likes {
  forumId: string,
  userId: string
}
interface comment {
  forumId: string,
  forumCommentId: string,
  userId: string,
  comment: string,
  createdAt: string
}

interface userdata {
  firstName: string,
  lastName: string,
  imageUrl: string
}

interface Item {
  forumId: string,
  title: string,
  description: string,
  imageUrl: string,
  user: userdata | any,
  forumLikes: likes[] | any,
  ForumComments: comment[] | any
}

interface props  {
  items: Item[]
}
*/
const MyForums: React.FC<{formusItems: Item[]}> = ({formusItems}) => {
  return (
    <>
      <div className='flex flex-col w-[100%] sm:max-w-[70%]'>
        {/* <SingleForum />
        <SingleForum /> */}
      {formusItems.map((item) => (
        <SingleForum key={item.forumId} item={item}/>
      ))}
      </div>
    </>
  )
}

export default MyForums