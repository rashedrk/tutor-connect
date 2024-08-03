import BookTutorModal from "@/components/Modals/BookTutorModal";
import { Rating, Star } from "@smastrom/react-rating";
import dayjs from "dayjs";
import { capitalize } from "lodash";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

const ratingStyles = {
    itemShapes: Star,
    activeFillColor: '#00A5A7',
    inactiveFillColor: '#E0E0E0',

}

const TutorDetails = async ({ params }) => {
    const { tutorId } = params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/tutor/${tutorId}`, { cache: "no-store" });
    const tutor = await res.json();

    const { details, experties, yearOfExperience, fee, tutorQualification, rating } = tutor?.data;
    const { profileImage, name, contactNo, email, gender, dateOfBirth } = tutor?.data?.profile;
    const { address, area, district } = tutor?.data?.profile?.presentAddress;

    return (
        <>
            <div className="grid grid-cols-4 mx-20 my-5 gap-10">
                <div >
                    <Image src={profileImage} alt="" width={500} height={500} />
                </div>
                <div className="col-span-3">
                    <div className="flex justify-right items-center gap-3 mb-1">
                        <h1 className="font-bold text-2xl text-gray-600">{name}</h1>
                        <div className="text-gray-500 text-xs flex items-center gap-1">
                            <CiLocationOn className="text-base" />
                            <p >{area}, {district}.</p>
                        </div>
                    </div>
                    <p className="text-[#00A5A7] text-sm ">{tutorQualification[0]?.qualification.degree}</p>

                    <div className="mt-5 flex items-center gap-12">
                        <div>
                            <h6 className="uppercase text-xs font-semibold text-gray-400">RATINGS</h6>
                            <div className="flex  gap-2 text-[#008E90]">
                                <span className="mt-1 font-bold ">{Number(rating).toFixed(1)}</span>
                                <Rating
                                    style={{ maxWidth: 105 }}
                                    value={rating || 0}
                                    readOnly
                                    itemStyles={ratingStyles}
                                />
                            </div>
                        </div>
                        <div>
                            <h6 className="uppercase text-xs font-semibold text-gray-400">Fee</h6>
                            <p className="mt-1 text-gray-600 font-semibold">{fee} BDT/Month</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <BookTutorModal />
                    </div>

                </div>
                <div >
                    {/* Education  */}
                    <h6 className="uppercase  text-xs font-semibold text-gray-400 mb-3">
                        Education
                    </h6>
                    <div className="mb-8">
                        {tutorQualification?.map(({ qualification }) => <div
                            key={qualification?.qualification_id}
                            className="mb-3"
                        >
                            <h5 className="font-semibold text-base text-gray-600">{qualification.degree}</h5>
                            <p className="text-sm">{qualification.institution}</p>
                            <p className="text-xs">({qualification.year})</p>
                        </div>)}
                    </div>

                    {/* Expertise  */}
                    <h6 className="uppercase  text-xs font-semibold text-gray-400 mb-3">
                        Expertise Subjects
                    </h6>
                    <div className="mb-8">
                        {experties.map(exp => <p
                            key={exp}
                            className="font-semibold text-base text-gray-600"
                        >
                            {capitalize(exp)}
                        </p>)}
                    </div>

                    {/* Year of Experience  */}
                    <h6 className="uppercase  text-xs font-semibold text-gray-400 mb-3">
                        Year of Experience
                    </h6>
                    <p className="text-gray-600 mb-8">{yearOfExperience} years</p>
                </div>
                <div className="col-span-3">
                    {/* Details  */}
                    <h6 className="uppercase  text-xs font-semibold text-gray-400 mb-3">
                        Details
                    </h6>
                    <p className="text-gray-700 my-2 text-justify mb-8">{details}</p>
                    {/* contact Information  */}
                    <h6 className="uppercase  text-xs font-semibold text-gray-400 mb-3">
                        Contact Information
                    </h6>
                    <div className="font-semibold mb-8 grid grid-cols-2 text-gray-600">
                        <div className="grid grid-cols-2 gap-y-3">
                            <h4>Phone:</h4>
                            <p className="text-[#008E90]">{contactNo}</p>
                            <h4>Address:</h4>
                            <p>{address}, {area}, {district}.</p>
                            <h4>Email:</h4>
                            <p className="text-[#008E90]">{email}</p>
                        </div>
                    </div>


                    {/* basic information  */}
                    <h6 className="uppercase  text-xs font-semibold text-gray-400 mb-3">
                        Basic Information
                    </h6>
                    <div className="font-semibold mb-8 grid grid-cols-2 text-gray-600">
                        <div className="grid grid-cols-2 gap-y-3">
                            <h4>Birthday:</h4>
                            <p >{dayjs(dateOfBirth).format("DD MMM YYYY")}</p>
                            <h4>Gender:</h4>
                            <p >{capitalize(gender)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TutorDetails;