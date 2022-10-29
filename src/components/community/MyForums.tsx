import React from 'react';
import SingleForum from './SingleForum';
import {formusItems } from '../../dummyData'
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
const MyForums = () => {
  return (
    <>
      {/* {formusItems.map((item) => (
        <SingleForum key={item.forumId} item={item}/>
      ))} */}
      <SingleForum />
      <SingleForum />
    </>
  )
}

export default MyForums