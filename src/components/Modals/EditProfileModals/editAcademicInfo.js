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
        tutorQualification: info?.tutorQualification?.map((q) => ({
            qualification_id: q.qualification_id,
            degree: q.qualification.degree,
            year: q.qualification.year,
            institution: q.qualification.institution,
        })),
    };


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
            <dialog id="academic_info" className="modal modal-bottom sm:modal-middle ">

                <div className="modal-box">
                    <h3 className="font-bold text-lg pb-5">Edit your academic info</h3>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('academic_info').close()}>✕</button>
                    <TCForm onsubmit={handleEdit} defaultValues={defaultValues}>
                        <div className='grid md:grid-cols-2 gap-3 mb-4 '>
                            {
                                info?.tutorQualification?.map((qualification, index) => (
                                    <>
                                        <input
                                            name={`tutorQualification[${index}].qualification_id`}
                                            type="hidden"
                                            className="hidden"
                                            value={qualification.qualification_id}
                                        />
                                        <TCInput name={`tutorQualification[${index}].degree`} placeholder="Enter Your Degree" type="text" />
                                        <TCInput name={`tutorQualification[${index}].year`} placeholder="Enter passing year" type="text" />
                                        <TCInput name={`tutorQualification[${index}].institution`} placeholder="Enter institution name" type="text" />

                                    </>
                                ))
                            }
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