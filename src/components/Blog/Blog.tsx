import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import blog1 from '../../assests/home/blog1.png';
import blog2 from '../../assests/home/blog2.png';
import blog3 from '../../assests/home/blog3.png';

const categories = [
    {
        img: blog1,
        date: '2 days ago',
        title: '5 Simple Tips treat plant',
        text: 'leaf, in botany, any usually flattened green outgrowth from the stem of  ',
        id: '1'
    },
    {
        img: blog2,
        date: '2 days ago',
        title: '5 Simple Tips treat plant',
        text: 'leaf, in botany, any usually flattened green outgrowth from the stem of  ',
        id: '2'
    },
    {
        img: blog3,
        date: '2 days ago',
        title: '5 Simple Tips treat plant',
        text: 'leaf, in botany, any usually flattened green outgrowth from the stem of  ',
        id: '3'
    },
    {
        img: blog3,
        date: '2 days ago',
        title: '5 Simple Tips treat plant',
        text: 'leaf, in botany, any usually flattened green outgrowth from the stem of  ',
        id: '4'
    },
    {
        img: blog2,
        date: '2 days ago',
        title: '5 Simple Tips treat plant',
        text: 'leaf, in botany, any usually flattened green outgrowth from the stem of  ',
        id: '5'
    },
    {
        img: blog1,
        date: '2 days ago',
        title: '5 Simple Tips treat plant',
        text: 'leaf, in botany, any usually flattened green outgrowth from the stem of  ',
        id: '6'
    },
]

function Blog() {
    const navigate = useNavigate();
    const goTosingleBlog = (id: string) => {
        navigate(`/blog/${id}`)
    }
    return (
    <div className='px-10 py-16'>
        <h1 className='font-Poppins font-medium text-center text-4xl mb-8 ml-10'>Blogs</h1>
        <div className='flex items-center justify-around flex-wrap gap-x-6 gap-y-6'>
            {categories.map((item) => (
                <Card sx={{ maxWidth: 345,cursor: 'pointer' }} key={item.id} onClick={() =>goTosingleBlog(item.id)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.img}
                  alt="blog img"
                />
                <CardContent>
                    <Typography variant='caption' className='text-green'>{item.date}</Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>

            ))}
        </div>
    </div>
    )
}

export default Blog