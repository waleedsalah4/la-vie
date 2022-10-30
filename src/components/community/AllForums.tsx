import React from 'react'
import SingleForum from './SingleForum'

function AllForums() {
    return (
        <>
            <div className='flex flex-col'>
                <SingleForum />
                <SingleForum />
            </div>
        </>
    )
}

export default AllForums