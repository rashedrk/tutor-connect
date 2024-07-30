'use client'

import { daysOptions, mediumOptions, studentClassOptions, subjectsOptions } from "@/constant";
import TCForm from "../Forms/TCForm";
import TCInput from "../Forms/TCInput";
import TCSelect from "../Forms/TCSelect";
import { useEffect, useState } from "react";
import { selectOptions } from "@/utils/selectOptions";
import { useParams } from "next/navigation";
import { useRequestTutorMutation } from "@/redux/features/tuition/tuitionApi";
import TCTimePicker from "../Forms/TCTimePicker";
import TCMultiSelect from "../Forms/TCMultiSelect";
import { HttpStatusCode } from "axios";
import { toast } from "sonner";

const BookTutorModal = () => {
    const { tutorId } = useParams();
    const [districts, setDistricts] = useState([]);
    const [upozila, setUpozila] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("")

    const [addRequest] = useRequestTutorMutation()

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

    const handleBookingSubmit = async (data) => {
        const toastId = toast.loading('Sending Request, please wait...')

        data.fullAddress.district = selectedDistrict

        const fromData = {
            tutorId,
            data,
        }

        const res = await addRequest(fromData);
        console.log(res);
        if (res?.data?.statusCode == HttpStatusCode.Created) {
            toast.success(res?.data?.message, { id: toastId, duration: 6000 });
            document.getElementById('book_tutor').close()
        }
        else {
            toast.error(res?.data?.message, { id: toastId, duration: 6000 });
        }
    }

    return (
        <>
            <button className="btn primary-btn mt-2" onClick={() => document.getElementById('book_tutor').showModal()}>Book Now</button>
            <dialog id="book_tutor" className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <h3 className="font-bold text-lg pb-5">Book Your Tutor</h3>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('book_tutor').close()}>✕</button>
                    <TCForm onsubmit={handleBookingSubmit}>
                        <div className='grid md:grid-cols-2 gap-3 mb-4'>
                            <TCSelect options={subjectsOptions} placeholder="Select subject" name="subject" />
                            <TCSelect options={studentClassOptions} placeholder="Select Class" name="class" />
                            <TCSelect options={mediumOptions} placeholder="Select Medium" name="medium" />
                            <TCInput name="fullAddress.address" placeholder="Enter your Address" type="text" />

                            <select name="fullAddress.district" value={selectedDistrict} onChange={handleSelect} className="select select-bordered w-full">
                                <option disabled selected value="">Select District</option>
                                {
                                    districts?.map(district => <option value={district.district} key={district.district}>{district.district}</option>)
                                }
                            </select>
                            <TCSelect disabled={!upozila} options={selectOptions(upozila?.upazillas)} placeholder="Select Area" name="fullAddress.area" />

                            <TCTimePicker name="schedule.startTime" placeholder="Start Time" />
                            <TCTimePicker name="schedule.endTime" placeholder="End Time" />
                            <TCMultiSelect placeholder="Select days" options={daysOptions} name="schedule.days" />

                            <TCInput placeholder="Enter your contact No" name="contactNo" />
                            <TCInput placeholder="Enter offered salary" name="salary" type="number" />
                        </div>
                        <button className="btn primary-btn" type="submit" >Request</button>
                        <button className="btn ms-4" type="reset" onClick={() => document.getElementById('book_tutor').close()}>Close</button>
                    </TCForm>
                </div>
            </dialog>
        </>
    );
};

export default BookTutorModal;