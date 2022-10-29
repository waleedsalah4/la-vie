import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface itemProps{
    img: any,
    name: string,
    price: string,
    text: string
    id: string
}

function ShopItems({img, name,text, price, id}: itemProps) {
    return (
        <Card sx={{ maxWidth: 345,cursor: 'pointer' }}>
            <CardMedia
              component="img"
              height="140"
              image={img}
              alt="blog img"
            />
            <CardContent>
                <div className='flex justify-between'>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant='caption' className='text-green'>{price}</Typography>
                </div>
              <Typography variant="body2" color="text.secondary">
                {text}
              </Typography>
            </CardContent>
            <CardActions>
                <button className='bg-green text-white rounded p-2 w-[100%]'>Add to Cart</button>
            </CardActions>
        </Card>

    )
}

export default ShopItems