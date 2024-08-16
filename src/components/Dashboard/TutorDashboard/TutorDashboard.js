'use client'

import CountUp from 'react-countup';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import UpcomingTuitionCard from '../UpcomingTuitionCard/UpcomingTuitionCard';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa6';
import { LiaUserClockSolid } from "react-icons/lia";

const TutorDashboard = ({data}) => {
   const {overview, tuitionByDay , upcomingTuition} = data;
   const {activeTuitions, pendingRequests, totalHours} = overview;

    return (
        <div className='md:mx-8'>
            <div className="grid grid-cols-3 gap-10 w-full">
                <div className="card card-compact  bg-base-100 shadow rounded-md">
                    <div className="card-body justify-center items-center">
                        <h2 className="card-title text-[#00A5A7] flex items-center justify-center">
                        <FaChalkboardTeacher className='text-2xl' />
                            <CountUp
                                start={2}
                                end={activeTuitions}
                                duration={2}
                                enableScrollSpy
                            />
                        </h2>
                        <p className="text-gray-500 text-sm">Active Tuitions</p>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100  shadow rounded-md">
                    <div className="card-body justify-center items-center">
                        <h2 className="card-title text-[#00A5A7] flex items-center justify-center">
                        <LiaUserClockSolid className='text-2xl' />
                        
                            <CountUp
                                start={1}
                                end={pendingRequests}
                                duration={2}
                                enableScrollSpy
                            />
                        </h2>
                        <p className="text-gray-500 text-sm">Pending Requests</p>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100   shadow rounded-md">
                    <div className="card-body justify-center items-center ">
                        <h2 className="card-title text-[#00A5A7] flex items-center justify-center">
                        <FaRegClock className='text-2xl' />
                            <CountUp
                                start={5}
                                end={totalHours}
                                duration={2}
                                enableScrollSpy
                            />
                        </h2>
                        <p className="text-gray-500 text-sm">Total Hours this month</p>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-3 gap-10 justify-center items-start '>
                <div className="mt-10 h-80 pb-16 pe-10  bg-white shadow rounded-md col-span-2" >
                    <h6 className='text-center text-gray-500 font-semibold pt-6 pb-4'>Tuition per Day</h6>
                    <ResponsiveContainer >
                        <BarChart
                            width={500}
                            height={300}
                            data={tuitionByDay}

                        >
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="tuitions" fill="#00A5A7" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className=''>
                    <h6 className='text-center text-gray-500 font-semibold py-4 '>Upcoming Tuitions</h6>

                    {
                        upcomingTuition?.length > 0 ? 
                        upcomingTuition.map((tuition, index) => <UpcomingTuitionCard key={index} tuition={tuition}  />)
                        :
                        <h6 className='text-center text-xs text-gray-500 font-semibold py-4 '>No tuitions Today</h6>
                    }
                </div>
            </div>
        </div>
    );
};

export default TutorDashboard;