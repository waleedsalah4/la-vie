import React from 'react'
import ShopFilter from './ShopFilter';
import ShopItems from './ShopItems';
import {shopData} from '../../dummyData'

function Shop() {
    return (
        <div className='px-10 py-10'>
            <h1 className='font-Poppins font-medium text-center text-2xl mb-8'>Plants</h1>
            <div className='flex flex-col sm:flex-row justify-between gap-x-12 gap-y-4'>
                {/* <div className='flex flex-col'> */}
                    <ShopFilter />
                {/* </div> */}
                <div className='flex flex-wrap gap-x-4 gap-y-4'>
                    {shopData && shopData.map(item => (
                        <ShopItems key={item.id} {...item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop