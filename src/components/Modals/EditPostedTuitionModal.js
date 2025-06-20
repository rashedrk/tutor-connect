'use client'

import { daysOptions, mediumOptions, studentClassOptions, subjectsOptions } from "@/constant";
import TCForm from "../Forms/TCForm";
import TCInput from "../Forms/TCInput";
import TCSelect from "../Forms/TCSelect";
import { useEffect, useState } from "react";
import TCTimePicker from "../Forms/TCTimePicker";
import TCMultiSelect from "../Forms/TCMultiSelect";
import { toast } from "sonner";
import { RiEdit2Line } from "react-icons/ri";
import { useUpdateTuitionMutation } from "@/redux/features/tuition/tuitionApi";
import { selectUpozila } from "@/utils/selectUpozila";

const EditPostedTuitionModal = ({ postedTuition }) => {
    const [districts, setDistricts] = useState([]);
    const [upozila, setUpozila] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState({ id: "", name: "" }); const [updateTuition] = useUpdateTuitionMutation();

    const { subject, contactNo, salary, medium } = postedTuition;
    const { address, area, district } = postedTuition.address;
    const { days, startTime, endTime } = postedTuition.schedule;

    const defaultValues = {
        subject,
        class: postedTuition.class,
        contactNo,
        "fullAddress.address": address,
        "fullAddress.area": area,
        "fullAddress.district": district,
        salary,
        medium,
        "schedule.days": days,
        "schedule.startTime": startTime,
        "schedule.endTime": endTime,
    }

    useEffect(() => {
        fetch('https://sohojapi.vercel.app/api/districts')
            .then(res => res.json())
            .then(data => {
                setDistricts(data);

                // Find and set district ID from district name if it exists
                if (district && data.length > 0) {
                    const foundDistrict = data.find(d => d.name === district);
                    if (foundDistrict) {
                        setSelectedDistrict({ id: foundDistrict.id, name: foundDistrict.name });
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching districts:', error);
                setDistricts([]);
            });
    }, [district]);

    const handleSelect = (event) => {
        const districtId = event.target.value;
        const foundDistrict = districts.find(d => d.id === districtId);
        setSelectedDistrict(foundDistrict ? { id: foundDistrict.id, name: foundDistrict.name } : { id: "", name: "" });
    }

    useEffect(() => {
        if (selectedDistrict?.id) {
            fetch(`https://sohojapi.vercel.app/api/upzilas/${selectedDistrict.id}`)
                .then(res => res.json())
                .then(data => setUpozila(data))
                .catch(error => {
                    console.error('Error fetching upazilas:', error);
                    setUpozila([]);
                });
        } else {
            setUpozila([]);
        }
    }, [selectedDistrict.id]);

    const handleEdit = async (data) => {
        const toastId = toast.loading('Sending Request, please wait...')

        data.fullAddress.district = selectedDistrict.name || district;

        const fromData = {
            tuitionId: postedTuition.tuition_id,
            data,
        }

        const res = await updateTuition(fromData);
        if (res?.data?.success) {
            toast.success(res?.data?.message, { id: toastId, duration: 6000 });
            document.getElementById('tuition').close()
        }
        else {
            toast.error(res?.data?.message, { id: toastId, duration: 6000 });
        }
    }

    return (
        <>

            <li onClick={() => document.getElementById('tuition').showModal()}><a><RiEdit2Line fontSize={"20px"} />Edit</a></li>
            <dialog id="tuition" className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <h3 className="font-bold text-lg pb-5">Edit your posted tuition</h3>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('tuition').close()}>✕</button>
                    <TCForm onsubmit={handleEdit} defaultValues={defaultValues}>
                        <div className='grid md:grid-cols-2 gap-3 mb-4'>
                            <TCSelect options={subjectsOptions} placeholder="Select subject" name="subject" />
                            <TCSelect options={studentClassOptions} placeholder="Select Class" name="class" />
                            <TCSelect options={mediumOptions} placeholder="Select Medium" name="medium" />
                            <TCInput name="fullAddress.address" placeholder="Enter your Address" type="text" />                            <select name="fullAddress.district" value={selectedDistrict.id || ""} onChange={handleSelect} className="select select-bordered w-full">
                                <option disabled value="">Select District</option>
                                {
                                    districts?.map(district => <option value={district.id} key={district.id}>{district.name}</option>)
                                }
                            </select>
                            <TCSelect disabled={!upozila.length} options={selectUpozila(upozila)} placeholder="Select Area" name="fullAddress.area" />

                            <TCTimePicker name="schedule.startTime" placeholder="Start Time" />
                            <TCTimePicker name="schedule.endTime" placeholder="End Time" />
                            <TCMultiSelect placeholder="Select days" options={daysOptions} name="schedule.days" />

                            <TCInput placeholder="Enter your contact No" name="contactNo" />
                            <TCInput placeholder="Enter offered salary" name="salary" type="number" />
                        </div>
                        <button className="btn primary-btn" type="submit" >Edit</button>
                        <button className="btn ms-4" type="reset" onClick={() => document.getElementById('tuition').close()}>Cancel</button>
                    </TCForm>
                </div>
            </dialog>
        </>
    );
};

export default EditPostedTuitionModal;