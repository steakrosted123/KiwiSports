import React from 'react';
import googlemap from '../assets/googlemap.png'

const Location = ()=>{
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 md:p-10'>
                <img className='rounded-md w-[500] mx-auto my-4' src={googlemap} alt="/"></img>
                <div className='flex flex-col justify-center md:px-10'>
                    <p className='text-[#00df9a] font-bold'>Alangiyam Road,Dharapuram - 638657</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Kiwi Sports.</h1>
                    <p>Near Aurobindo Vidhyalaya School </p>
                    <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white cursor-pointer'>Get on google map</button>
                </div>
            </div>
        </div>
    );
}

export default Location