import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import sun from '../../assests/product/sun.png';
import drop from '../../assests/product/drop.png';
import temperature from '../../assests/product/temperature.png';

const images = [
    {img: 'https://lavie.orangedigitalcenteregypt.com/uploads/4b9766af-1eb1-43ab-973c-7da2a209c94f.png', id: '1'},
    {img: 'https://lavie.orangedigitalcenteregypt.com/uploads/f985a224-ee41-411e-9327-dfb9822544ab.png', id: '2'},

]

function ProductDetails() {
    const [imgSrc, setImgSrc] = React.useState(images[0].img)
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();
        // console.info('You clicked a breadcrumb.');
    }
    const setSrc = (src: string) => {
        setImgSrc(src)
    }
    return (
        <div className='px-10 py-16'>
            <div className='font-Poppins text-center text-4xl mb-8 ml-10'>
                <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb" className='flex justify-center'>
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Plants</Link>
                    <Typography color="text.primary">Snake Plant</Typography>
                </Breadcrumbs>
                </div>
            </div>
            <div className='flex justify-around items-start gap-x-8 gap-y-4'>
                    <div className='flex flex-col gap-x-4 gap-y-4'>
                        {images && images.map(item => (
                            <img 
                                key={item.id} 
                                src={item.img} 
                                alt='product' 
                                className='w-28 h-36 rounded cursor-pointer object-cover' onClick={()=> setSrc(item.img)}
                            />
                        ))}
                    </div>
                    <div>
                        <img src={imgSrc} alt='product' className='object-cover' />
                    
                    </div>
                <div className='w-[50%] flex flex-col gap-y-4'>
                    <div>
                        <h1 className='font-Poppins font-medium text-2xl'>SNAKE PLANT (SANSEVIERIA)</h1>
                        <h3 className='text-green font-Poppins'>EGP180.00</h3>
                    </div>
                    <div className='flex gap-x-4'>
                        <div className='flex flex-col justify-center items-center bg-heat p-4 gap-y-2 rounded w-24'>
                            <p className='flex'>29<sup>%</sup> <img src={sun} alt='sun' /></p>
                            <p className='font-Poppins font-light text-sm'>Sunlite</p>
                            
                        </div>
                        <div className='flex flex-col justify-center items-center bg-heat p-4 gap-y-2 rounded w-24'>
                            <p className='flex'>10<sup>%</sup> <img src={drop} alt='sun' /></p>
                            <p className='font-Poppins font-light text-sm'>water</p>
                            
                        </div>
                        <div className='flex flex-col justify-center items-center bg-heat p-4 gap-y-2 rounded w-24'>
                            <p className='flex'>29<sup>°C</sup> <img src={temperature} alt='sun' /></p>
                            <p className='font-Poppins font-light text-sm'>Temperature</p>
                            
                        </div>

                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <h4 className='font-Poppins text-blogText font-medium '>Information</h4>
                        <p className='ml-4 text-blogText'>
                             Native to southern Africa, snake plants are well adapted to conditions similar to those in southern regions of the United States. Because of this, they may be grown outdoors for part of all of the year in USDA zones 8 and warmer
                        </p>
                        <div className='ml-4 flex items-center gap-x-5'>
                            <p className='mr-8'>Qty:</p>
                            <button className='text-4xl text-grey'>-</button>
                            <span className='text-2xl'>1</span>
                            <button className='text-3xl text-grey'>+</button> 
                        </div>
                        <button className='bg-green text-white p-2 rounded w-[80%]'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails