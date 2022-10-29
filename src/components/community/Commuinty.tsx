import React from 'react'
import CreatePost from './CreatePost'
import Forums from './Forums'

function Commuinty() {
    return (
        <div className='px-10 py-16 flex-flex-col'>
            <h1 className='font-Poppins font-medium text-center text-4xl mb-8 ml-10'>Formus</h1>
            
            {/* <div className='flex'> */}
                <Forums />
                {/* <CreatePost /> */}
            {/* </div> */}
        </div>
    )
}

export default Commuinty