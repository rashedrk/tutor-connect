'use client'

import CountUp from 'react-countup';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import UpcomingTuitionCard from '../UpcomingTuitionCard/UpcomingTuitionCard';

const TutorDashboard = () => {
    const data = [
        {
            name: 'Sat',
            uv: 10,
        },
        {
            name: 'Sun',
            uv: 5,
        },
        {
            name: 'Mon',
            uv: 7,
        },
        {
            name: 'Tue',
            uv: 6,
        },
        {
            name: 'Wed',
            uv: 10,
        },
        {
            name: 'Thu',
            uv: 8,
        },
        {
            name: 'Fri',
            uv: 2,
        },
    ];

    return (
        <>
            <div className="grid grid-cols-3 gap-5 w-full">
                <div className="card card-compact  bg-base-100 shadow rounded-md">
                    <div className="card-body justify-center items-center">
                        <h2 className="card-title text-[#00A5A7]">
                            <CountUp
                                start={2}
                                end={10}
                                duration={2}
                                enableScrollSpy
                            />
                        </h2>
                        <p className="text-gray-500 text-sm">Active Tuitions</p>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100  shadow rounded-md">
                    <div className="card-body justify-center items-center">
                        <h2 className="card-title text-[#00A5A7]">
                            <CountUp
                                start={1}
                                end={5}
                                duration={2}
                                enableScrollSpy
                            />
                        </h2>
                        <p className="text-gray-500 text-sm">Pending Requests</p>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100   shadow rounded-md">
                    <div className="card-body justify-center items-center">
                        <h2 className="card-title text-[#00A5A7]">
                            <CountUp
                                start={30}
                                end={48}
                                duration={2}
                                enableScrollSpy
                            />
                        </h2>
                        <p className="text-gray-500 text-sm">Total Hours this month</p>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-3 gap-10 justify-center items-start '>
                <div className="mt-10 h-80 pb-12 pe-10  bg-white shadow rounded-md col-span-2" >
                    <h6 className='text-center text-gray-500 font-semibold pt-6'>Tuition per Day</h6>
                    <ResponsiveContainer >
                        <BarChart
                            width={500}
                            height={300}
                            data={data}

                        >
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="uv" fill="#00A5A7" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className=''>
                    <h6 className='text-center text-gray-500 font-semibold py-4 '>Upcoming Tuitions</h6>
                    <UpcomingTuitionCard />
                    <UpcomingTuitionCard />
                    <UpcomingTuitionCard />

                </div>
            </div>
        </>
    );
};

export default TutorDashboard;