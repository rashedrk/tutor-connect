'use client'

import { toast } from "sonner";
import { CiEdit } from "react-icons/ci";
import TCForm from "@/components/Forms/TCForm";
import TCInput from "@/components/Forms/TCInput";
import TCMultiSelect from "@/components/Forms/TCMultiSelect";
import { mediumOptions, studentClassOptions, subjectsOptions } from "@/constant";
import { useUpdateOthersInfoMutation } from "@/redux/features/profile/profileApi";


const EditOthersInfo = ({ info }) => {
    const [updateOthersInfo] = useUpdateOthersInfoMutation()

    const defaultValues = {
        experties: info.experties,
        yearOfExperience: info.yearOfExperience,
        class: info.class,
        medium: info.medium,
        fee: info.fee
    }


    const handleEdit = async (data) => {
        const toastId = toast.loading('Sending Request, please wait...')


        const res = await updateOthersInfo(data);
        if (res?.data?.success) {
            toast.success(res?.data?.message, { id: toastId, duration: 6000 });
            document.getElementById('others_info').close()
        }
        else {
            toast.error(res?.data?.message, { id: toastId, duration: 6000 });
        }

        // console.log(data);
    }

    return (
        <>
            <button onClick={() => document.getElementById('others_info').showModal()} className="btn btn-sm bg-inherit hover:bg-inherit text-gray-600 border-2"><CiEdit className="text-xl" /> Edit</button>
            <dialog id="others_info" className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <h3 className="font-bold text-lg pb-5">Edit your others info</h3>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('others_info').close()}>✕</button>
                    <TCForm onsubmit={handleEdit} defaultValues={defaultValues}>
                        <div className='grid md:grid-cols-2 gap-3 mb-4 '>
                            <TCMultiSelect options={subjectsOptions} placeholder="Select Subject" name="experties" />
                            <TCInput name="yearOfExperience" placeholder="Enter Year of Experience" type="text" />
                            <TCMultiSelect options={studentClassOptions} placeholder="Select Class" name="class" />
                            <TCMultiSelect options={mediumOptions} placeholder="Select Medium" name="medium" />
                            <TCInput name="fee" placeholder="Enter Expected Fee" type="text" />
                        </div>
                        <button className="btn primary-btn" type="submit" >Edit</button>
                        <button className="btn ms-4" type="reset" onClick={() => document.getElementById('others_info').close()}>Cancel</button>
                    </TCForm>
                </div>
            </dialog>
        </>
    );
};

export default EditOthersInfo;