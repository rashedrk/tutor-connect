import React from 'react';

const SearchTutor = () => {
    return (
        <div className='bg-no-repeat bg-cover' style={{ backgroundImage: 'url(https://i.ibb.co/R4kczMf/pexels-andrea-piacquadio-3769995.jpg)', }}>
            <div className='bg-[#0d2c3d] bg-opacity-60 min-h-screen md:flex items-center justify-center gap-12 w-full p-3'>
                <div className='text-white drop-shadow-lg mb-5 md:mb-0'>
                    <h1 className='font-bold text-6xl'>Find The</h1>
                    <h2 className='font-bold text-5xl my-6 border-b-2 border-b-orange-400'>Perfect Tutor for</h2>
                    <h1 className='font-bold text-6xl'>Offline & Online</h1>
                </div>
                <div className='md:w-[45%] p-9 bg-[#0a202c] bg-opacity-50 rounded-xl'>
                    <div className='grid md:grid-cols-2 gap-5 mb-4'>
                        <select className="select select-bordered w-full max-w-xs rounded-full">
                            <option disabled selected>Select District</option>
                            <option>Dhaka</option>
                            <option>Bogura</option>
                            <option>Rajshahi</option>
                            <option>Chittagong</option>
                            <option>Sylhet</option>
                        </select>
                        <select className="select select-bordered w-full max-w-xs rounded-full">
                            <option disabled selected>Select Area</option>
                            <option>Dhaka</option>
                            <option>Bogura</option>
                        </select>
                        <select className="select select-bordered w-full max-w-xs rounded-full">
                            <option disabled selected>Select Class</option>
                            <option>Class 7</option>
                            <option>Class 6</option>
                            <option>Class 5</option>
                            <option>Class 4</option>
                            <option>Class 3</option>
                            <option>Class 2</option>
                            <option>Class 1</option>
                        </select>
                        <select className="select select-bordered w-full max-w-xs rounded-full">
                            <option disabled selected>Select Medium</option>
                            <option>Bangla</option>
                            <option>English</option>
                        </select>
                        <select className="select select-bordered w-full max-w-xs rounded-full">
                            <option disabled selected>Select Subject</option>
                            <option>Bangla</option>
                            <option>English</option>
                            <option>Math</option>
                            <option>Science</option>
                        </select>
                        <select className="select select-bordered w-full max-w-xs rounded-full">
                            <option disabled selected>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>

                    </div>
                    <button className="btn primary-btn min-w-full rounded-full">Search Tutor</button>
                </div>
            </div>
        </div>
    );
};

export default SearchTutor;