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
  
export interface Item {
    forumId: string,
    title: string,
    description: string,
    imageUrl: string,
    userId: string,
    user: userdata ,
    forumLikes: likes[] 
    ForumComments: comment[] 
}
  
export interface Items  {
    items: Item[]
}
  