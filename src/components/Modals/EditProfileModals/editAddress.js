'use client'

import { toast } from "sonner";
import { CiEdit } from "react-icons/ci";
import TCForm from "@/components/Forms/TCForm";
import TCInput from "@/components/Forms/TCInput";
import TCSelect from "@/components/Forms/TCSelect";

import { useEffect, useState } from "react";
import { selectOptions } from "@/utils/selectOptions";
import { lowerCase } from "lodash";
import { useUpdateAddressMutation } from "@/redux/features/profile/profileApi";
import { selectUpozila } from "@/utils/selectUpozila";

const EditAddress = ({ info, modalId = "address" }) => {
    const [districts, setDistricts] = useState([]);
    const [presentArea, setPresentArea] = useState([]);
    const [permanentArea, setPermanentArea] = useState([]);
    const [selectedPresentDistrict, setSelectedPresentDistrict] = useState("");
    const [selectedPermanentDistrict, setSelectedPermanentDistrict] = useState("");

    console.log(info);


    const [updateAddress] = useUpdateAddressMutation()

    const defaultValues = {
        "presentAddress.address": info?.profile?.presentAddress?.address,
        "presentAddress.area": lowerCase(info?.profile?.presentAddress?.area),

        "permanentAddress.address": info?.profile?.permanentAddress?.address,
        "permanentAddress.area": lowerCase(info?.profile?.permanentAddress?.area),
    };

    useEffect(() => {
        fetch('https://sohojapi.vercel.app/api/districts')
            .then(res => res.json())
            .then(data => {
                setDistricts(data);

                // Find and set district IDs from district names
                if (info?.profile?.presentAddress?.district && data.length > 0) {
                    const presentDistrictObj = data.find(d => d.name === info.profile.presentAddress.district);
                    if (presentDistrictObj) {
                        setSelectedPresentDistrict(presentDistrictObj.id);
                    }
                }

                if (info?.profile?.permanentAddress?.district && data.length > 0) {
                    const permanentDistrictObj = data.find(d => d.name === info.profile.permanentAddress.district);
                    if (permanentDistrictObj) {
                        setSelectedPermanentDistrict(permanentDistrictObj.id);
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching districts:', error);
                setDistricts([]);
            });
    }, [info?.profile?.presentAddress?.district, info?.profile?.permanentAddress?.district]);

    const handlePresentSelect = (event) => {
        setSelectedPresentDistrict(event.target.value)
    }
    const handlePermanentSelect = (event) => {
        setSelectedPermanentDistrict(event.target.value)
    }

    //TODO: Remove the useEffect make code efficient by using redux
    //! Temporary solution
    useEffect(() => {
        if (selectedPresentDistrict) {
            fetch(`https://sohojapi.vercel.app/api/upzilas/${selectedPresentDistrict}`)
                .then(res => res.json())
                .then(data => setPresentArea(data))
                .catch(error => {
                    console.error('Error fetching present area upazilas:', error);
                    setPresentArea([]);
                });
        } else {
            setPresentArea([]);
        }
    }, [selectedPresentDistrict]);

    useEffect(() => {
        if (selectedPermanentDistrict) {
            fetch(`https://sohojapi.vercel.app/api/upzilas/${selectedPermanentDistrict}`)
                .then(res => res.json())
                .then(data => setPermanentArea(data))
                .catch(error => {
                    console.error('Error fetching permanent area upazilas:', error);
                    setPermanentArea([]);
                });
        } else {
            setPermanentArea([]);
        }
    }, [selectedPermanentDistrict]);
    const handleEdit = async (data) => {
        const toastId = toast.loading('Sending Request, please wait...')

        // Find district names from IDs for storing in profile
        const presentDistrictName = districts.find(d => d.id === selectedPresentDistrict)?.name || "";
        const permanentDistrictName = districts.find(d => d.id === selectedPermanentDistrict)?.name || "";


        const fromData = {
            presentAddress: {
                address: data.presentAddress.address,
                area: data.presentAddress.area,
                district: presentDistrictName,
            },
            permanentAddress: {
                address: data.permanentAddress.address,
                area: data.permanentAddress.area,
                district: permanentDistrictName,
            }
        }

        const res = await updateAddress(fromData); if (res?.data?.success) {
            toast.success(res?.data?.message, { id: toastId, duration: 6000 });
            document.getElementById(modalId).close()
        }
        else {
            toast.error(res?.data?.message, { id: toastId, duration: 6000 });
        }        // console.log(fromData);
    }

    return (
        <>
            <button onClick={() => document.getElementById(modalId).showModal()} className="btn btn-sm bg-inherit hover:bg-inherit text-gray-600 border-2"><CiEdit className="text-xl" /> Edit</button>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <h3 className="font-bold text-lg pb-5">Edit your address</h3>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById(modalId).close()}>✕</button>
                    <TCForm onsubmit={handleEdit} defaultValues={defaultValues}>
                        <p>Present Address</p>
                        <div className='grid md:grid-cols-2 gap-3 mb-4 '>
                            <TCInput label="Address" name="presentAddress.address" placeholder="Enter Your Address" type="text" />
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">District</span>
                                </div>                                <select name='presentAddress.district' value={selectedPresentDistrict || ""} onChange={handlePresentSelect} className="select select-bordered w-full">
                                    <option disabled value="">Select District</option>
                                    {
                                        districts?.map(district => <option value={district.id} key={district.id}>{district.name}</option>)
                                    }
                                </select>
                            </label>
                            <TCSelect label="Area" disabled={!presentArea?.length} options={selectUpozila(presentArea)} placeholder="Select Area" name="presentAddress.area" />
                        </div>
                        <p>Permanent Address</p>
                        <div className='grid md:grid-cols-2 gap-3 mb-4 '>
                            <TCInput label="Address" name="permanentAddress.address" placeholder="Enter Your Address" type="text" />
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">District</span>
                                </div>                                <select name='permanentAddress.district' value={selectedPermanentDistrict || ""} onChange={handlePermanentSelect} className="select select-bordered w-full ">
                                    <option disabled value="">Select District</option>
                                    {
                                        districts?.map(district => <option value={district.id} key={district.id}>{district.name}</option>)
                                    }
                                </select>
                            </label>
                            <TCSelect label="Area" disabled={!permanentArea?.length} options={selectUpozila(permanentArea)} placeholder="Select Area" name="permanentAddress.area" />
                        </div>                        <button className="btn primary-btn" type="submit" >Edit</button>
                        <button className="btn ms-4" type="reset" onClick={() => document.getElementById(modalId).close()}>Cancel</button>
                    </TCForm>
                </div>
            </dialog>
        </>
    );
};

export default EditAddress;