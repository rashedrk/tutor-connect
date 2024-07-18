"use client"

import TCForm from '@/components/Forms/TCForm';
import TCInput from '@/components/Forms/TCInput';
import TCMultiSelect from '@/components/Forms/TCMultiSelect';
import TCSelect from '@/components/Forms/TCSelect';
import TCTimePicker from '@/components/Forms/TCTimePicker';
import { daysOptions, genderOptions, mediumOptions, studentClassOptions, subjectsOptions } from '@/constant';
import useUserInfo from '@/hooks/useUserInfo';
import { useCreateTuitionMutation } from '@/redux/features/tuition/tuitionApi';
import { selectOptions } from '@/utils/selectOptions';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

const CreateTuition = () => {
    const [districts, setDistricts] = useState([]);
    const [area, setArea] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const userInfo = useUserInfo();
    const [createTuition] = useCreateTuitionMutation();

    const handleSelect = (event) => {
        setSelectedDistrict(event.target.value)
    }


    //TODO: Remove the useEffect make code efficient by using redux
    //! Temporary solution

    useEffect(() => {
        fetch('https://bdapis.com/api/v1.2/districts')
            .then(res => res.json())
            .then(data => setDistricts(data?.data))
    }, []);

    useEffect(() => {
        fetch(`https://bdapis.com/api/v1.2/district/${selectedDistrict}`)
            .then(res => res.json())
            .then(data => setArea(data.data));
    }, [selectedDistrict]);

    const submitHandler = async(data) => {
        const toastId = toast.loading("Creating! Please wait....");
        data.fullAddress.district = selectedDistrict;
        const tuitionData = {
            ...data,
            student_id: userInfo.user_id,
            class: Number(data.class),
        }

        try {
            const res = await createTuition(tuitionData);
            if (res?.data.statusCode === 201) {
                toast.success(res?.data.message, { id: toastId });
            } else {
                toast.error(res?.data.message, { id: toastId });
            }
        } catch (error) {
            toast.error(error?.message, { id: toastId });
        }
    };


    return (
        <>
            <TCForm onsubmit={submitHandler}>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 mb-2'>
                    <TCSelect name="class" options={studentClassOptions} label="Select Your Class" />
                    <TCSelect name="subject" options={subjectsOptions} label="Select Subject" />
                    <TCSelect name="medium" options={mediumOptions} label="Select Your Medium" />
                    <TCInput name="fullAddress.address" placeholder="Enter your Address" />
                    <select name='fullAddress.district' value={selectedDistrict} onChange={handleSelect} className="select select-bordered w-full">
                        <option disabled selected value="">Select District</option>
                        {
                            districts?.map(district => <option value={district.district} key={district.district}>{district.district}</option>)
                        }
                    </select>
                    <TCSelect disabled={!area} options={selectOptions(area?.upazillas)} label="Select Area" name="fullAddress.area" />
                    <TCSelect name="gender" options={genderOptions} label="Gender" />
                    <TCInput name="contactNo" placeholder="Enter your Contact No" />
                    <TCInput name="salary" placeholder="Enter Offered Salary" />
                    <TCMultiSelect options={daysOptions} name="schedule.days" placeholder="Select days" />
                    <TCTimePicker placeholder="Start Time" name="schedule.startTime" />
                    <TCTimePicker placeholder="End Time" name="schedule.endTime" />
                </div>
                <button type='submit' className='btn primary-btn'>Create</button>
            </TCForm>
        </>
    );
};

export default CreateTuition;