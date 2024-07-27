import BookTutorModal from "@/components/Modals/BookTutorModal";
import Image from "next/image";

const TutorDetails = async ({ params }) => {
    const { tutorId } = params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/tutor/${tutorId}`, { cache: "no-store" });
    const tutor = await res.json();

    const { details, experties, yearOfExperience, fee, tutorQualification } = tutor?.data;
    const { profileImage, name, contactNo, email } = tutor?.data?.profile;
    const { address, area, district } = tutor?.data?.profile?.presentAddress;

    return (
        <>
            <div className="flex flex-col items-center ">
                <Image src={profileImage} alt="" width={500} height={500} />
                <div className="p-5 lg:px-10">
                    <h1 className="font-bold text-xl">{name}</h1>
                    <p className="text-base">{details}</p>
                    <p className="py-1 font-semibold">Expertise Subjects:</p>
                    <p className="pb-2">
                        {experties.join(", ")}
                    </p>
                    <p className="py-1 font-semibold">Experience:</p>
                    <p className="pb-2">
                        {yearOfExperience}
                    </p>
                    <p className="py-1 font-semibold">Fees:</p>
                    <p className="pb-2">
                        {fee} tk/month
                    </p>
                    <p className="py-1 font-semibold">Qualifications:</p>
                    <div className="pb-2">
                        {tutorQualification?.map(({ qualification }) => <div key={qualification?.qualification_id}>
                            {qualification.degree}, {qualification.institution}, {qualification.year} .
                        </div>)}
                    </div>
                    <p className="py-1 font-semibold">Address:</p>
                    <p className="pb-2">
                        {address}, {area}, {district}.
                    </p>
                    <p className="py-1 font-semibold">Contact No:</p>
                    <p className="pb-2">
                        {contactNo}
                    </p>
                    <p className="py-1 font-semibold">Email:</p>
                    <p className="pb-2">
                        {email}
                    </p>
                    <BookTutorModal />
                </div>
            </div>

        </>
    );
};

export default TutorDetails;