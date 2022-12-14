import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CreateModal from './CreateModal';

function CreatePost() {
    return (
        <div className='flex flex-col gap-y-4'>
            <div className='relative'>
                <input type='search' placeholder='search Forum' className='p-4 outline-none border-2 rounded border-green indent-4 w-[100%]' />
                <SearchIcon  className='absolute top-1/3 left-2' />
            </div>
            <button className='py-2 px-8 text-white bg-green rounded-lg font-semibold'>Search</button>
            <CreateModal />
        </div>
    )
}

export default CreatePost