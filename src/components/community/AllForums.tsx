import React from 'react'
import SingleForum from './SingleForum'
import { Item } from './types'

const AllForums: React.FC<{formusItems: Item[]}>  = ({formusItems}) => {
    return (
        <>
            <div className='flex flex-col w-[100%] sm:max-w-[70%]'>
            {formusItems.map((item) => (
                <SingleForum key={item.forumId} item={item}/>
            ))}
            </div>
        </>
    )
}

export default AllForums