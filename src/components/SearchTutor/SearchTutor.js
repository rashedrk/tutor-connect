'use client'
import React, { useEffect, useState } from 'react';
import TCForm from '../Forms/TCForm';
import TCSelect from '../Forms/TCSelect';
import { genderOptions, mediumOptions, studentClassOptions, subjectsOptions } from '@/constant';
import { useRouter } from 'next/navigation';
import { selectUpozila } from '@/utils/selectUpozila';

const SearchTutor = () => {
    const router = useRouter();
    const [districts, setDistricts] = useState([]);
    const [upozila, setUpozila] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState({ id: "", name: "" });

    useEffect(() => {
        fetch('https://sohojapi.vercel.app/api/districts')
            .then(res => res.json())
            .then(data => setDistricts(data))
    }, []);

    const handleSelect = (event) => {
        const district = districts.find(d => d.id === event.target.value);
        setSelectedDistrict(district ? { id: district.id, name: district.name } : { id: "", name: "" });
    }

    useEffect(() => {
        fetch(`https://sohojapi.vercel.app/api/upzilas/${selectedDistrict.id}`)
            .then(res => res.json())
            .then(data => setUpozila(data));
    }, [selectedDistrict]);

    const submitHandler = (data) => {
        const fromData = {
            district: selectedDistrict.name,
            ...data
        };

        // Construct query parameters
        const queryParams = new URLSearchParams();
        Object.entries(fromData).forEach(([key, value]) => {
            if (value !== undefined && value !== '') {
                queryParams.append(key, value);
            }
        });

        //sending data as query parameters
        const url = `/all_tutors?${queryParams.toString()}`;
        router.push(url);
    }

    return (
        <div className='bg-no-repeat bg-cover' style={{ backgroundImage: 'url(https://i.ibb.co/R4kczMf/pexels-andrea-piacquadio-3769995.jpg)', }}>
            <div className='bg-[#0d2c3d] bg-opacity-60 min-h-[90vh] md:flex items-center justify-center gap-12 w-full p-3'>
                <div className='text-white drop-shadow-lg mb-5 md:mb-0'>
                    <h1 className='font-bold text-6xl'>Find The</h1>
                    <h2 className='font-bold text-5xl my-6 border-b-2 border-b-orange-400'>Perfect Tutor for</h2>
                    <h1 className='font-bold text-6xl'>Offline & Online</h1>
                </div>
                <div className='md:w-[45%] p-9 bg-[#0a202c] bg-opacity-50 rounded-xl'>
                    <TCForm onsubmit={submitHandler}>
                        <div className='grid md:grid-cols-2 gap-5 mb-4'>
                            <select name='district' value={selectedDistrict.id} onChange={handleSelect} className="select select-bordered w-full  rounded-full">
                                <option disabled value="">Select District</option>
                                {
                                    districts?.map(district => <option value={district.id} key={district.id}>{district.name}</option>)
                                }
                            </select>
                            <TCSelect disabled={!upozila} options={selectUpozila(upozila)} placeholder="Select Area" name="upozila" className="rounded-full" />
                            <TCSelect options={studentClassOptions} placeholder="Select Class" name="class" className="rounded-full" />
                            <TCSelect options={mediumOptions} placeholder="Select Medium" name="medium" className="rounded-full" />
                            <TCSelect options={subjectsOptions} placeholder="Select subject" name="experties" className="rounded-full" />
                            <TCSelect options={genderOptions} placeholder="Select Gender" name="gender" className="rounded-full" />
                        </div>
                        <button type='submit' className="btn primary-btn min-w-full rounded-full">Search Tutor</button>
                    </TCForm>
                </div>
            </div>
        </div>
    );
};

export default SearchTutor;