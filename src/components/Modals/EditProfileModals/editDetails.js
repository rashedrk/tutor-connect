'use client'

import { toast } from "sonner";
import TCTextArea from "@/components/Forms/TCTextArea";
import { CiEdit } from "react-icons/ci";
import TCForm from "@/components/Forms/TCForm";

const EditDetails = ({ details, userId }) => {

    const defaultValues = {
        details
    }


    const handleEdit = async (data) => {
        // const toastId = toast.loading('Sending Request, please wait...')
        // const fromData = {
        //     detailsId: posteddetails.details_id,
        //     data,
        // }

        // const res = await updatedetails(fromData);
        // if (res?.data?.success) {
        //     toast.success(res?.data?.message, { id: toastId, duration: 6000 });
        //     document.getElementById('details').close()
        // }
        // else {
        //     toast.error(res?.data?.message, { id: toastId, duration: 6000 });
        // }

        console.log(data);
    }

    return (
        <>
            <button onClick={() => document.getElementById('details').showModal()} className="btn btn-sm bg-inherit hover:bg-inherit text-gray-600 border-2"><CiEdit className="text-xl" /> Edit</button>
            <dialog id="details" className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <h3 className="font-bold text-lg pb-5">Edit your details</h3>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('details').close()}>✕</button>
                    <TCForm onsubmit={handleEdit} defaultValues={defaultValues}>
                        <div className='mb-4 '>
                            <TCTextArea name="details" placeholder="Enter Your Details" />
                        </div>
                        <button className="btn primary-btn" type="submit" >Edit</button>
                        <button className="btn ms-4" type="reset" onClick={() => document.getElementById('details').close()}>Cancel</button>
                    </TCForm>
                </div>
            </dialog>
        </>
    );
};

export default EditDetails;