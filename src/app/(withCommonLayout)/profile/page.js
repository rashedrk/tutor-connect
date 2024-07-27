'use client'
import Loader from "@/components/shared/Loader/Loader";
import { useGetMyProfileQuery } from "@/redux/features/users/userApi";
import dayjs from "dayjs";
import { capitalize } from "lodash";
import Image from "next/image";

const ProfilePage = () => {
    const { data, isLoading } = useGetMyProfileQuery(undefined);
    console.log(data);
    return (
        <>
            {
                isLoading ? <Loader /> :
                    <div className="mx-10 flex flex-col gap-5 justify-end items-center my-4">
                        My Profile

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
                                    <p>{data?.tutorQualification[0]?.qualification.degree}</p>
                                    <p>{`${data?.profile?.presentAddress?.address}, ${data?.profile?.presentAddress?.area}, ${data?.profile?.presentAddress?.district}`}</p>
                                </div>
                            </div>
                        </div>

                        {/* personal Info  */}
                        <div className="card bg-base-100 w-3/4 border border-solid ">
                            <div className="card-body">
                                <h2 className="card-title mb-3">Personal Information</h2>
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
                                        <h2 className="card-title mb-5">Permanent Address</h2>
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
                    </div>
            }
        </>
    );
};

export default ProfilePage;