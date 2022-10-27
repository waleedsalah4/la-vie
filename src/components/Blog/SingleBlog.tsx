import React from 'react'
import {useParams} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import BlogImg from '../../assests/blog/SingleBlog.png';

const item = {
    img: BlogImg,
    title: '5 Simple Tips treat plant',
    date: '2 days ago',
}

const SingleBlog = ()=> {
    const params = useParams()
  return (
    <div className='px-10 py-16'>
        <h1 className='font-Poppins font-medium text-center text-4xl mb-8 ml-10'>Blogs</h1>
        <div className='flex flex-col items-center justify-around flex-wrap gap-x-6 gap-y-6'>
            <div className='flex justify-center'>
                <img src={BlogImg} alt='blog img' />
            </div>
            <div>
            <Typography variant='caption' className='text-green'>2 days ago</Typography>
                  <Typography gutterBottom variant="h5" component="div">
                     5 Simple Tips treat plant
                  </Typography>
                  <p className='font-Poppins font-light text-blogText mb-8'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className='font-Poppins font-light text-blogText mb-8' >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog