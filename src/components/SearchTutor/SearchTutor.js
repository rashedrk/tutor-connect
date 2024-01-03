import React from 'react';

const SearchTutor = () => {
    return (
        <div className='bg-no-repeat bg-cover' style={{ backgroundImage: 'url(https://i.ibb.co/R4kczMf/pexels-andrea-piacquadio-3769995.jpg)', }}>
            <div className='bg-[#0d2c3d] bg-opacity-60 min-h-screen flex items-center justify-center gap-12 w-full'>
                <div className='text-white drop-shadow-lg'>
                    <h1 className='font-bold text-6xl'>Find The</h1>
                    <h2 className='font-bold text-5xl my-6 border-b-2 border-b-orange-400'>Perfect Tutor for</h2>
                    <h1 className='font-bold text-6xl'>Offline & Online</h1>
                </div>
                <div className='w-[45%] p-9 bg-[#0a202c] bg-opacity-50 rounded-xl'>
                    <div className='grid grid-cols-2 gap-5 mb-4'>
                        <select className="select select-bordered w-full max-w-xs rounded-full">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>

                    </div>
                    <button className="btn primary-btn min-w-full">Search Tutor</button>
                </div>
            </div>
        </div>
    );
};

export default SearchTutor;