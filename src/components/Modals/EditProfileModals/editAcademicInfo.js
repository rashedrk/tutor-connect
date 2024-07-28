'use client'

import { toast } from "sonner";
import { CiEdit } from "react-icons/ci";
import TCForm from "@/components/Forms/TCForm";
import TCInput from "@/components/Forms/TCInput";
import TCSelect from "@/components/Forms/TCSelect";
import TCDatePicker from "@/components/Forms/TCDatePicker";
import { genderOptions } from "@/constant";

const EditAcademicInfo = ({ info }) => {

    const defaultValues = {
        name: info.profile.name,
        gender: info.gender,
        email: info.email,
        contactNo: info.profile.contactNo,
        dateOfBirth: new Date(info.profile.dateOfBirth)
    }


    const handleEdit = async (data) => {
        // const toastId = toast.loading('Sending Request, please wait...')
        // const fromData = {
        //     academic_infoId: postedacademic_info.academic_info_id,
        //     data,
        // }

        // const res = await updateacademic_info(fromData);
        // if (res?.data?.success) {
        //     toast.success(res?.data?.message, { id: toastId, duration: 6000 });
        //     document.getElementById('academic_info').close()
        // }
        // else {
        //     toast.error(res?.data?.message, { id: toastId, duration: 6000 });
        // }

        console.log(data);
    }

    return (
        <>
            <button onClick={() => document.getElementById('academic_info').showModal()} className="btn btn-sm bg-inherit hover:bg-inherit text-gray-600 border-2"><CiEdit className="text-xl" /> Edit</button>
            <dialog id="academic_info" className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <h3 className="font-bold text-lg pb-5">Edit your academic info</h3>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('academic_info').close()}>✕</button>
                    <TCForm onsubmit={handleEdit} defaultValues={defaultValues}>
                        <div className='grid md:grid-cols-2 gap-3 mb-4 '>
                            <TCInput name="name" placeholder="Enter Your Name" type="text" />
                            <TCSelect name="gender" label="Gender" options={genderOptions} />
                            <TCInput name="email" placeholder="Enter Your Email" type="email" />
                            <TCInput name="contactNo" placeholder="Enter Your Contact No" type="text" />
                            <TCDatePicker name="dateOfBirth" placeholder="Date of Birth" />
                        </div>
                        <button className="btn primary-btn" type="submit" >Edit</button>
                        <button className="btn ms-4" type="reset" onClick={() => document.getElementById('academic_info').close()}>Cancel</button>
                    </TCForm>
                </div>
            </dialog>
        </>
    );
};

export default EditAcademicInfo;