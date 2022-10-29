import React from 'react';
// import { useNavigate } from 'react-router-dom';
import AllForums from './AllForums';
import CreatePost from './CreatePost';
import MyForums from './MyForums';
// import {formusItems} from '../../dummyData';


function Forums() {
    // const navigate = useNavigate();
    const [isMe, setIsMe] = React.useState(false);
    const handelShowAllForms = () => {
        setIsMe(false)
    }
    const handelShowMyForms = () => {
        setIsMe(true)
    }
    return (
        // <div className='flex'>
        <div className='flex flex-col'>
            <div className='flex gap-x-10 w-4/5 border-b border-border'>
                <button 
                    className={`p-4 bg-none text-2xl ${!isMe && "border-b-2 border-green"}`}
                    onClick={handelShowAllForms}
                >
                    All forums
                </button>
                <button 
                    className={`p-4 bg-none text-2xl ${isMe && "border-b-2 border-green"}`}
                    onClick={handelShowMyForms}
                >
                    My forums
                </button>
            </div>
            <div className='flex flex-col-reverse sm:flex-row justify-around mt-4 gap-x-2 gap-y-2'>
             {isMe ? <MyForums  /> : <AllForums />}
                <CreatePost />
            </div>
        </div>
    )
}

export default Forums