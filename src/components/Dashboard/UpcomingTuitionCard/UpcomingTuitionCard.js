import React from 'react';
import { FiClock } from "react-icons/fi";
import { IoLocationOutline } from 'react-icons/io5';

const UpcomingTuitionCard = () => {
    return (
        <div className='bg-white shadow rounded-md py-4 px-5 mb-3'>
            <h6 className='font-semibold text-sm text-[#00A5A7]'>Md Rashedul Islam</h6>
            <p className='text-xs my-1 text-gray-500 flex justify-start items-center gap-1'>
            <FiClock /> 5:00 PM - 6:00 PM 
            </p>
            <p className='text-xs text-gray-500 flex justify-start items-center gap-1'>
            <IoLocationOutline /> Sathmatha, Bogura Sadar 
            </p>
        </div>
    );
};

export default UpcomingTuitionCard;