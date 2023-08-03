import {MdOutlineCalendarMonth , MdCalendarToday} from 'react-icons/md';
import {IoIosToday} from 'react-icons/io';

const Cards = () =>{
    return (
        <div className="bg-white w-full py-[10rem] px-4 ">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
                    <MdOutlineCalendarMonth size={50} className='w-20 mx-auto mt-[-3rem] bg-white'/>
                    <h1 className="text-2xl font-bold text-center py-4">Yearly Plan</h1>
                    <p className='text-center text-4xl font-bold'>24,999</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Per Day one hour to any Sport</p>
                        <p className='py-2 border-b mx-8'>Free kiwiCard membership access</p>
                        <p className='py-2 border-b mx-8'>Unlimited Shows and Party access</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:text-[#00df9a] hover:bg-black' >Book Now</button>
                </div>
                <div className="bg-green-300 w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
                    <MdCalendarToday size={50} className='w-20 mx-auto mt-[-3rem] '/>
                    <h1 className="text-2xl font-bold text-center py-4">Monthly Plan</h1>
                    <p className='text-center text-4xl font-bold'>2499</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Per Day one hour to any two Sport</p>
                        <p className='py-2 border-b mx-8'>Flat 50% off on kiwiCard membership access</p>
                        <p className='py-2 border-b mx-8'>2 free Shows</p>
                    </div>
                    <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black hover:bg-[#00df9a] hover:text-black' >Book Now</button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <IoIosToday size={50} className='w-20 mx-auto mt-[-3rem] bg-white'/>
                    <h1 className="text-2xl font-bold text-center py-4">Daily Plan</h1>
                    <p className='text-center text-4xl font-bold'>99</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>One hour to one Sport</p>
                        <p className='py-2 border-b mx-8'>-</p>
                        <p className='py-2 border-b mx-8'>-</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:text-[#00df9a] hover:bg-black' >Book Now</button>
                </div>
            </div>
        </div>
    );

}

export default Cards;