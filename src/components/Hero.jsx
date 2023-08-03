import React from 'react';
import Typed from 'react-typed';

const Hero = ()=>{
    return (
        <div className='text-white '>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
                <p className='text-[#00df9a] font-bold p-2'>Are you excited to play?</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Definitely Yes</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-medium py-4'>Why not? </p>
                    <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4' strings={['Football' ,'Cricket','Swimming']} typeSpeed={120} backSpeed={140} loop/>
                </div>
                <div className='md:text-2xl text-xl font-medium text-gray-500'>
                    <p>Starts with Just 99/hour</p>
                    <p>Come with your friend to avail discounts</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:text-black hover:bg-white'>Book Now</button>
                
            </div>
        </div>

    );
}

export default Hero