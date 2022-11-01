import React, { useEffect } from 'react';
import AllForums from './AllForums';
import CreatePost from './CreatePost';
import MyForums from './MyForums';
//import { useGetAllForumsQuery } from '../../store/forumsSlice';
//import {useGetAllForumsQuery} from '../../store/forumsSlice';
import {formusItems} from '../../dummyData';


const Forums =()=> {
    const [isMe, setIsMe] = React.useState(false);
    //const [getAllForums,{isLoading}] = useGetAllForumsQuery()
    // const [getAllForums,{}] = useGetAllForumsQuery()

    useEffect(()=>{

    })

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
             {isMe ? <MyForums formusItems={formusItems}  /> : <AllForums  formusItems={formusItems}/>}
                <CreatePost />
            </div>
        </div>
    )
}

export default Forums