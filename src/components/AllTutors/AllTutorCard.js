import { capitalize } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md";
import AddToSave from "./AddToSave";
const AllTutorCard = ({ tutor }) => {
    const { tutor_id, profile, details, rating, experties, tutorQualification, fee } = tutor;

    return (
        <div className="card bg-base-100 md:w-[90%] w-full shadow-sm mb-3 rounded hover:shadow-lg">
            <div className="card-body p-3 md:p-8 text-gray-500">
                <div className="flex  md:items-center justify-between gap-1">
                    <div className="flex flex-col md:flex-row gap-3 justify-start md:items-center ">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <Image
                                    src={profile?.profileImage}
                                    alt=""
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        <div>

                            <div className="flex gap-1 items-center">
                                <Link href={`/tutor/${tutor_id}`} className="font-semibold text-lg text-gray-800">{profile?.name}</Link>
                                <div className="tooltip" data-tip="Verified">
                                    <MdOutlineVerified className="text-[#00A5A7]" />
                                </div>
                            </div>
                            <p className="text-sm mb-1">{tutorQualification[0]?.qualification.degree}</p>
                            <div className="text-sm text-gray-500 flex gap-5 justify-center items-center">
                                <div className=" flex items-center gap-1">
                                    <p>{Number(rating).toFixed(1)}</p>
                                    <FaStar className="text-orange-500 " />
                                </div>
                                <div className=" flex items-center gap-1">
                                    <CiLocationOn className="text-base" />
                                    <p >{profile?.presentAddress?.area}, {profile?.presentAddress?.district}.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div >
                        <p>starting From:</p>
                        <h2 className="md:text-lg text-[#00A5A7] font-semibold">৳{fee}/Month</h2>
                    </div>
                </div>
                <p className="my-2">{details}</p>
                <div>
                    <h6 className="text-sm font-semibold text-gray-800 mb-3">Subjects that I teach</h6>
                    <div className="flex gap-5">
                        {experties.map((sub, index) =>
                            <div key={index} className="bg-[#F2F4F7] px-5 py-2 text-gray-800 font-light rounded">
                                {capitalize(sub)}
                            </div>
                        )}
                    </div>
                </div>
                <div className="card-actions justify-between items-center border-t mt-4 pt-4">
                   <AddToSave tutorId={tutor_id}/>
                    <Link href={`/tutor/${tutor_id}`} className="btn primary-btn btn-sm rounded">View Full Details</Link>
                </div>
            </div>
        </div>
    );
};

export default AllTutorCard;