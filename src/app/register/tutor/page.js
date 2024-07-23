'use client'

import TCDatePicker from '@/components/Forms/TCDatePicker';
import TCFileUpload from '@/components/Forms/TCFileUpload';
import TCForm from '@/components/Forms/TCForm';
import TCInput from '@/components/Forms/TCInput';
import TCMultiSelect from '@/components/Forms/TCMultiSelect';
import TCSelect from '@/components/Forms/TCSelect';
import TCTextArea from '@/components/Forms/TCTextArea';
import { genderOptions, studentClassOptions, subjectsOptions } from '@/constant';
import { useRegisterTutorMutation } from '@/redux/features/users/userApi';
import { fileUploader } from '@/utils/fileUploader';
import { selectOptions } from '@/utils/selectOptions';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

const TutorRegister = () => {
    const router = useRouter();
    const [districts, setDistricts] = useState([]);
    const [presentArea, setPresentArea] = useState([]);
    const [permanentArea, setPermanentArea] = useState([]);
    const [selectedPresentDistrict, setSelectedPresentDistrict] = useState("");
    const [selectedPermanentDistrict, setSelectedPermanentDistrict] = useState("");

    const [registerTutor] = useRegisterTutorMutation()

    useEffect(() => {
        fetch('https://bdapis.com/api/v1.2/districts')
            .then(res => res.json())
            .then(data => setDistricts(data?.data))
    }, []);

    const handlePresentSelect = (event) => {
        setSelectedPresentDistrict(event.target.value)
    }
    const handlePermanentSelect = (event) => {
        setSelectedPermanentDistrict(event.target.value)
    }

    //TODO: Remove the useEffect make code efficient by using redux
    //! Temporary solution
    useEffect(() => {
        fetch(`https://bdapis.com/api/v1.2/district/${selectedPresentDistrict}`)
            .then(res => res.json())
            .then(data => setPresentArea(data.data));
    }, [selectedPresentDistrict]);

    useEffect(() => {
        fetch(`https://bdapis.com/api/v1.2/district/${selectedPermanentDistrict}`)
            .then(res => res.json())
            .then(data => setPermanentArea(data.data));
    }, [selectedPermanentDistrict]);




    const handleSubmit = async (data) => {
        const toastId = toast.loading("Creating! Please wait....");
        data.presentAddress.district = selectedPresentDistrict;
        data.permanentAddress.district = selectedPermanentDistrict;

        try {
            const profileImage = await fileUploader(data?.profileImage);
            const tutorData = {
                ...data,
                profileImage
            };

            const res = await registerTutor(tutorData);
            // console.log(res);
            if (res?.data.statusCode === 201) {
                toast.success(res?.data.message, { id: toastId });
                router.push('/sign_in')
            } else {
                toast.error(res?.data.message, { id: toastId });
            }


        } catch (error) {
            toast.error(error?.message, { id: toastId });
        }

        // console.log(data);
    }


    return (
        <div className='py-10 px-10 lg:mx-10'>
            <TCForm onsubmit={handleSubmit}>
                <h2 className='font-semibold text-lg mb-2'>Personal Information</h2>
                <TCFileUpload name="profileImage" label="Upload Profile Picture" className="mb-3" />
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                    <TCInput name="name" placeholder="Enter Your Name" type="text" />
                    <TCInput name="email" placeholder="Enter Your Email" type="email" />
                    <TCInput name="password" placeholder="Enter Your Password" type="password" />
                    <TCSelect name="gender" label="Gender" options={genderOptions} />
                    <TCDatePicker name="dateOfBirth" placeholder="Date of Birth" />
                    <TCInput name="contactNo" placeholder="Enter Your Contact No" type="text" />
                </div>

                <h2 className='font-semibold text-lg mb-2 mt-6'>Present Address</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                    <TCInput name="presentAddress.address" placeholder="Enter Your Address" type="text" />
                    <select name='presentAddress.district' value={selectedPresentDistrict} onChange={handlePresentSelect} className="select select-bordered w-full">
                        <option disabled selected value="">Select District</option>
                        {
                            districts?.map(district => <option value={district.district} key={district.district}>{district.district}</option>)
                        }
                    </select>
                    <TCSelect disabled={!presentArea} options={selectOptions(presentArea?.upazillas)} label="Select Area" name="presentAddress.area" />
                </div>


                <h2 className='font-semibold text-lg mb-2 mt-6'>Permanent Address</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                    <TCInput name="permanentAddress.address" placeholder="Enter Your Address" type="text" />
                    <select name='permanentAddress.district' value={selectedPermanentDistrict} onChange={handlePermanentSelect} className="select select-bordered w-full ">
                        <option disabled selected value="">Select District</option>
                        {
                            districts?.map(district => <option value={district.district} key={district.district}>{district.district}</option>)
                        }
                    </select>
                    <TCSelect disabled={!permanentArea} options={selectOptions(permanentArea?.upazillas)} label="Select Area" name="permanentAddress.area" />
                </div>

                <h2 className='font-semibold text-lg mb-2 mt-6'>Qualification</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                    <TCInput name="qualification.degree" placeholder="Enter Your Degree" type="text" />
                    <TCInput name="qualification.year" placeholder="Enter passing year" type="text" />
                    <TCInput name="qualification.institution" placeholder="Enter institution name" type="text" />

                </div>

                <h2 className='font-semibold text-lg mb-2 mt-6'>Other Information</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                    <TCMultiSelect options={subjectsOptions} placeholder="Select Subject" name="expertise" />
                    <TCMultiSelect options={studentClassOptions} placeholder="Select Class" name="class" />
                    <TCInput name="yearOfExperience" placeholder="Enter Year of Experience" type="text" />
                    <TCInput name="fee" placeholder="Enter Expected Fee" type="text" />
                    <TCTextArea name="details" placeholder="Enter Your Details" />
                </div>

                <button className='btn primary-btn mt-4' type='submit'>Register</button>
            </TCForm>
        </div>
    );
};

export default TutorRegister;