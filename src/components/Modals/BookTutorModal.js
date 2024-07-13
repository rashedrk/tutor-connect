'use client'

import { mediumOptions, studentClassOptions, subjectsOptions } from "@/constant";
import TCForm from "../Forms/TCForm";
import TCInput from "../Forms/TCInput";
import TCSelect from "../Forms/TCSelect";
import { useEffect, useState } from "react";
import { selectOptions } from "@/utils/selectOptions";

const BookTutorModal = () => {
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

    const handleBookingSubmit = (data) => {
        console.log(data);
    }

    return (
        <>

            <button className="btn primary-btn mt-2" onClick={() => document.getElementById('book_tutor').showModal()}>Book Now</button>
            <dialog id="book_tutor" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Book Your Tutor</h3>
                    <TCForm onsubmit={handleBookingSubmit}>
                        <div className='grid md:grid-cols-2 gap-5 mb-4'>
                            <TCSelect options={subjectsOptions} label="Select subject" name="experties" />
                            <TCSelect options={studentClassOptions} label="Select Class" name="class" />
                            <TCSelect options={mediumOptions} label="Select Medium" name="medium" />

                            <TCInput name="address.village" placeholder="Enter your village name" type="text" />
                            <TCInput name="address.postOffice" placeholder="Enter your Post office" type="text" />
                            <TCInput name="address.postalCode" placeholder="Enter your Post office" type="text" />
                            <TCInput name="address.policeStaion" placeholder="Enter your Post office" type="text" />

                            <select name='address.district' value={selectedDistrict} onChange={handleSelect} className="select select-bordered w-full max-w-xs">
                                <option disabled selected value="">Select District</option>
                                {
                                    districts?.map(district => <option value={district.district} key={district.district}>{district.district}</option>)
                                }
                            </select>
                            <TCSelect disabled={!upozila} options={selectOptions(upozila?.upazillas)} label="Select Area" name="address.upozila" />
                        </div>
                        <button className="btn" type="submit">Request</button>
                    </TCForm>
                    <div className="modal-action">
                        <form method="dialog">

                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default BookTutorModal;