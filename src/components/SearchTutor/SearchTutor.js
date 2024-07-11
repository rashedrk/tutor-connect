'use client'
import React, { useEffect, useState } from 'react';
import TCForm from '../Forms/TCForm';
import TCSelect from '../Forms/TCSelect';
import { genderOptions, mediumOptions, studentClassOptions, subjectsOptions } from '@/constant';
import { selectOptions } from '@/utils/selectOptions';

const SearchTutor = () => {
    const [districts, setDistricts] = useState([]);
    const [upozila, setUpozila] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("")

    useEffect(() => {
        fetch('https://bdapis.com/api/v1.2/districts')
            .then(res => res.json())
            .then(data => setDistricts(data?.data))
    }, []);

    const handleSelect = (event) => {
        setSelectedDistrict(event.target.value)
    }

    useEffect(() => {
        fetch(`https://bdapis.com/api/v1.2/district/${selectedDistrict}`)
            .then(res => res.json())
            .then(data => setUpozila(data.data));
    }, [selectedDistrict]);

    const submitHandler = (data) => {
        const fromData = {
            district: selectedDistrict,
            ...data
        };

        console.log(fromData);
    }

    return (
        <div className='bg-no-repeat bg-cover' style={{ backgroundImage: 'url(https://i.ibb.co/R4kczMf/pexels-andrea-piacquadio-3769995.jpg)', }}>
            <div className='bg-[#0d2c3d] bg-opacity-60 min-h-screen md:flex items-center justify-center gap-12 w-full p-3'>
                <div className='text-white drop-shadow-lg mb-5 md:mb-0'>
                    <h1 className='font-bold text-6xl'>Find The</h1>
                    <h2 className='font-bold text-5xl my-6 border-b-2 border-b-orange-400'>Perfect Tutor for</h2>
                    <h1 className='font-bold text-6xl'>Offline & Online</h1>
                </div>
                <div className='md:w-[45%] p-9 bg-[#0a202c] bg-opacity-50 rounded-xl'>
                    <TCForm onsubmit={submitHandler}>
                        <div className='grid md:grid-cols-2 gap-5 mb-4'>
                            <select name='district' value={selectedDistrict} onChange={handleSelect} className="select select-bordered w-full max-w-xs rounded-full">
                                <option disabled selected value="">Select District</option>
                                {
                                    districts?.map(district => <option value={district.district} key={district.district}>{district.district}</option>)
                                }
                            </select>
                            <TCSelect disabled={!upozila} options={selectOptions(upozila?.upazillas)} label="Select Area" name="upozila" />
                            <TCSelect options={studentClassOptions} label="Select Class" name="class" />
                            <TCSelect options={mediumOptions} label="Select Medium" name="medium" />
                            <TCSelect options={subjectsOptions} label="Select subject" name="experties" />
                            <TCSelect options={genderOptions} label="Select Gender" name="gender" />
                        </div>
                        <button type='submit' className="btn primary-btn min-w-full rounded-full">Search Tutor</button>
                    </TCForm>
                </div>
            </div>
        </div>
    );
};

export default SearchTutor;