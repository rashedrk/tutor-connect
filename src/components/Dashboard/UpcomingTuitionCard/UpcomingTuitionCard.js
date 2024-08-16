import dayjs from 'dayjs';
import React from 'react';
import { FiClock } from "react-icons/fi";
import { IoLocationOutline } from 'react-icons/io5';

const UpcomingTuitionCard = ({ tuition }) => {
    return (
        <div className='bg-white shadow rounded-md py-4 px-5 mb-3'>
            <h6 className='font-semibold text-sm text-[#00A5A7]'>{tuition?.student?.name}</h6>
            <p className='text-xs my-1 text-gray-500 flex justify-start items-center gap-1'>
                <FiClock />{
                    `${dayjs(tuition?.schedule?.startTime).format('h:mm A')} - ${dayjs(tuition?.schedule?.endTime).format('h:mm A')}`
                }
            </p>
            <p className='text-xs text-gray-500 flex justify-start items-center gap-1'>
                <IoLocationOutline /> Sathmatha, Bogura Sadar
            </p>
        </div>
    );
};

export default UpcomingTuitionCard;