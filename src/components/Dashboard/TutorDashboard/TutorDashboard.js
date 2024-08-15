'use client'

import CountUp from 'react-countup';
import { FaChalkboardTeacher } from "react-icons/fa";

const TutorDashboard = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-5 w-11/12">
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

            
        </>
    );
};

export default TutorDashboard;