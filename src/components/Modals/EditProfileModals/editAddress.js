'use client'

import { toast } from "sonner";
import { CiEdit } from "react-icons/ci";
import TCForm from "@/components/Forms/TCForm";
import TCInput from "@/components/Forms/TCInput";
import TCSelect from "@/components/Forms/TCSelect";

import { useEffect, useState } from "react";
import { selectOptions } from "@/utils/selectOptions";

const EditAddress = ({ info }) => {

    const [districts, setDistricts] = useState([]);
    const [presentArea, setPresentArea] = useState([]);
    const [permanentArea, setPermanentArea] = useState([]);
    const [selectedPresentDistrict, setSelectedPresentDistrict] = useState("");
    const [selectedPermanentDistrict, setSelectedPermanentDistrict] = useState("");

    const defaultValues = {
        
    }

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


    const handleEdit = async (data) => {
        // const toastId = toast.loading('Sending Request, please wait...')
        // const fromData = {
        //     addressId: postedaddress.address_id,
        //     data,
        // }

        // const res = await updateaddress(fromData);
        // if (res?.data?.success) {
        //     toast.success(res?.data?.message, { id: toastId, duration: 6000 });
        //     document.getElementById('address').close()
        // }
        // else {
        //     toast.error(res?.data?.message, { id: toastId, duration: 6000 });
        // }

        console.log(data);
    }

    return (
        <>
            <button onClick={() => document.getElementById('address').showModal()} className="btn btn-sm bg-inherit hover:bg-inherit text-gray-600 border-2"><CiEdit className="text-xl" /> Edit</button>
            <dialog id="address" className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <h3 className="font-bold text-lg pb-5">Edit your address</h3>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('address').close()}>✕</button>
                    <TCForm onsubmit={handleEdit} defaultValues={defaultValues}>
                        <p>Present Address</p>
                        <div className='grid md:grid-cols-2 gap-3 mb-4 '>
                            <TCInput name="presentAddress.address" placeholder="Enter Your Address" type="text" />
                            <select name='presentAddress.district' value={selectedPresentDistrict} onChange={handlePresentSelect} className="select select-bordered w-full">
                                <option disabled selected value="">Select District</option>
                                {
                                    districts?.map(district => <option value={district.district} key={district.district}>{district.district}</option>)
                                }
                            </select>
                            <TCSelect disabled={!presentArea} options={selectOptions(presentArea?.upazillas)} label="Select Area" name="presentAddress.area" />
                        </div>
                        <p>Permanent Address</p>
                        <div className='grid md:grid-cols-2 gap-3 mb-4 '>
                            <TCInput name="permanentAddress.address" placeholder="Enter Your Address" type="text" />
                            <select name='permanentAddress.district' value={selectedPermanentDistrict} onChange={handlePermanentSelect} className="select select-bordered w-full ">
                                <option disabled selected value="">Select District</option>
                                {
                                    districts?.map(district => <option value={district.district} key={district.district}>{district.district}</option>)
                                }
                            </select>
                            <TCSelect disabled={!permanentArea} options={selectOptions(permanentArea?.upazillas)} label="Select Area" name="permanentAddress.area" />
                        </div>
                        <button className="btn primary-btn" type="submit" >Edit</button>
                        <button className="btn ms-4" type="reset" onClick={() => document.getElementById('address').close()}>Cancel</button>
                    </TCForm>
                </div>
            </dialog>
        </>
    );
};

export default EditAddress;