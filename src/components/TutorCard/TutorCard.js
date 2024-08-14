import { Rating } from "@smastrom/react-rating";
import { capitalize } from "lodash";
import Image from "next/image";
import Link from "next/link";

const TutorCard = ({ tutor }) => {
    const { tutor_id, profile, details, rating, experties, tutorQualification, fee } = tutor;
    // console.log(tutor);
    return (
        <div className="card card-compact w-96 h-[28rem] bg-base-100 shadow-xl">
            <figure className="h-56">
                <Image
                    src={profile.profileImage}
                    alt=""
                    width={450}
                    height={450}
                />
            </figure>
            <div className="card-body">
                <div className="flex justify-between">
                    <div>
                        <h2 className="card-title flex-grow">{profile.name}</h2>
                        <p>{tutorQualification[0].qualification?.degree}</p>
                    </div>
                    <h1 className="font-bold text-lg">৳{fee}/month</h1>
                </div>
                <p className="line-clamp-2">{details}</p>
                <div className="card-actions my-1 ">
                    <div className="flex gap-5">
                        {experties.map((sub, index) =>
                            <div key={index} className="bg-[#F2F4F7] px-5 py-2 text-gray-800 font-light rounded">
                                {capitalize(sub)}
                            </div>
                        )}
                    </div>
                </div>
                <div className="card-actions justify-between items-center">
                    <div className="flex  gap-2">
                        <span className="mt-1 font-bold text-orange-600">{Number(rating).toFixed(1)}</span>
                        <Rating
                            style={{ maxWidth: 90 }}
                            value={rating || 0}
                            readOnly
                        />
                    </div>
                    <Link href={`/tutor/${tutor_id}`} className="btn primary-btn">see more</Link>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;