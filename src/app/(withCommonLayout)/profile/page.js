'use client'
import EditAcademicInfo from "@/components/Modals/EditProfileModals/editAcademicInfo";
import EditAddress from "@/components/Modals/EditProfileModals/editAddress";
import EditDetails from "@/components/Modals/EditProfileModals/editDetails";
import EditOthersInfo from "@/components/Modals/EditProfileModals/editOtherInfo";
import EditPersonalInfo from "@/components/Modals/EditProfileModals/editPersonalInfo";
import Loader from "@/components/shared/Loader/Loader";
import { useGetMyProfileQuery } from "@/redux/features/profile/profileApi";
import dayjs from "dayjs";
import { capitalize } from "lodash";
import Image from "next/image";

const ProfilePage = () => {


    const { data, isLoading } = useGetMyProfileQuery(undefined);
    // console.log(data);
    return (
        <>
            {
                isLoading ? <Loader /> :
                    <div className="mx-10 flex flex-col gap-5 justify-end items-center my-4 ">

                        {/* profile picture  */}
                        <div className="card flex-row items-center justify-center bg-base-100 w-3/4 border border-solid px-10">
                            <div>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <Image src={data?.profile?.profileImage} height={500} width={500} alt="profile_image" className="rounded-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">{data?.profile?.name}</h2>
                                <div className="text-sm text-gray-500">
                                    {
                                        data?.role === 'tutor' && <p>{data?.tutorQualification[0]?.qualification.degree}</p>
                                    }
                                    <p>{`${data?.profile?.presentAddress?.address}, ${data?.profile?.presentAddress?.area}, ${data?.profile?.presentAddress?.district}`}</p>
                                </div>
                            </div>
                        </div>

                        {/* Description  */}
                        {
                            data?.role === 'tutor' &&
                            < div className="card bg-base-100 w-3/4 border border-solid ">
                                <div className="card-body">
                                    <div className="flex justify-between items-center">
                                        <h2 className="card-title ">Details</h2>
                                        <EditDetails details={data.details} userId={data.user_id} />
                                    </div>
                                    <div className=" text-gray-500">
                                        <p>{capitalize(data?.details)}</p>
                                    </div>
                                </div>
                            </div>

                        }

                        {/* personal Info  */}
                        <div className="card bg-base-100 w-3/4 border border-solid ">
                            <div className="card-body">
                                <div className="flex justify-between items-center">
                                    <h2 className="card-title mb-3">Personal Information</h2>
                                    <EditPersonalInfo info={data} />
                                </div>
                                <div className="text-gray-500 grid grid-cols-2">
                                    <div className="mb-3">
                                        <p>Name</p>
                                        <p className="font-semibold mt-1">{capitalize(data?.profile?.name)}</p>
                                    </div>
                                    <div className="mb-3">
                                        <p>Gender</p>
                                        <p className="font-semibold mt-1">{capitalize(data?.profile?.gender)}</p>
                                    </div>
                                    <div className="mb-3">
                                        <p>Email</p>
                                        <p className="font-semibold mt-1">{data?.profile?.email}</p>
                                    </div>
                                    <div className="mb-3">
                                        <p>Phone</p>
                                        <p className="font-semibold mt-1">{data?.profile?.contactNo}</p>
                                    </div>
                                    <div className="mb-3">
                                        <p>Date of Birth</p>
                                        <p className="font-semibold mt-1">{dayjs(data?.profile?.dateOfBirth).format("DD-MM-YYYY")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Address  */}

                        <div className="card bg-base-100 w-3/4 border border-solid ">
                            <div className="card-body">
                                <div className="grid grid-cols-2">
                                    <div>
                                        <h2 className="card-title mb-5">Present Address</h2>
                                        <div className="text-gray-500">
                                            <div className="mb-3">
                                                <p>Address</p>
                                                <p className="font-semibold mt-1">{capitalize(data?.profile?.presentAddress?.address)}</p>
                                            </div>
                                            <div className="mb-3">
                                                <p>Area</p>
                                                <p className="font-semibold mt-1">{capitalize(data?.profile?.presentAddress?.area)}</p>
                                            </div>
                                            <div className="mb-3">
                                                <p>District</p>
                                                <p className="font-semibold mt-1">{data?.profile?.presentAddress?.district}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <h2 className="card-title mb-5">Permanent Address</h2>
                                            <EditAddress info={data} />
                                        </div>
                                        <div className="text-gray-500">
                                            <div className="mb-3">
                                                <p>Address</p>
                                                <p className="font-semibold mt-1">{capitalize(data?.profile?.permanentAddress?.address)}</p>
                                            </div>
                                            <div className="mb-3">
                                                <p>Area</p>
                                                <p className="font-semibold mt-1">{capitalize(data?.profile?.permanentAddress?.area)}</p>
                                            </div>
                                            <div className="mb-3">
                                                <p>District</p>
                                                <p className="font-semibold mt-1">{data?.profile?.permanentAddress?.district}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            data?.role === 'tutor' &&
                            <>
                                {/* Qualification  */}
                                <div className="card bg-base-100 w-3/4 border border-solid ">
                                    <div className="card-body">
                                        <div className="flex justify-between items-center">

                                            <h2 className="card-title mb-3">Academic Information</h2>
                                            <EditAcademicInfo info={data} />
                                        </div>
                                        {
                                            data?.tutorQualification?.map((tQ, index) => <div
                                                key={index}
                                                className="text-gray-500 grid grid-cols-4 gap-10">
                                                <div className="mb-3">
                                                    <p>Degree</p>
                                                    <p className="font-semibold mt-1">{capitalize(tQ?.qualification?.degree)}</p>
                                                </div>
                                                <div className="mb-3 col-span-2">
                                                    <p>Institution</p>
                                                    <p className="font-semibold mt-1">{capitalize(tQ?.qualification?.institution)}</p>
                                                </div>
                                                <div className="mb-3">
                                                    <p>Passing Year</p>
                                                    <p className="font-semibold mt-1">{tQ?.qualification?.year}</p>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>

                                {/* Others  */}
                                <div className="card bg-base-100 w-3/4 border border-solid ">
                                    <div className="card-body">
                                        <div className="flex justify-between items-center">

                                            <h2 className="card-title mb-3">Others</h2>
                                            <EditOthersInfo info={data} />
                                        </div>
                                        <div className="text-gray-500 grid grid-cols-2">
                                            <div className="mb-3">
                                                <p>Expertise</p>
                                                <p className="font-semibold mt-1">{data?.experties?.map(ex => capitalize(ex)).join(', ')}</p>
                                            </div>
                                            <div className="mb-3">
                                                <p>Experience</p>
                                                <p className="font-semibold mt-1">{data?.yearOfExperience} years</p>
                                            </div>

                                            <div className="mb-3">
                                                <p>Class</p>
                                                <p className="font-semibold mt-1">{data?.class.join(', ')}</p>
                                            </div>
                                            <div className="mb-3">
                                                <p>Medium</p>
                                                <p className="font-semibold mt-1">{data?.medium.join(', ')}</p>
                                            </div>
                                            <div className="mb-3">
                                                <p>Fee</p>
                                                <p className="font-semibold mt-1">{data?.fee} TK/Month</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div >
            }
        </>
    );
};

export default ProfilePage;