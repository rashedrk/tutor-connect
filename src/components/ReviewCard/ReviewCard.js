import { ratingStyles } from "@/app/(withCommonLayout)/tutor/[tutorId]/page";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({review}) => {
    const {name, img, rating, description} = review;
    return (
        <div className="card bg-base-100 w-full border mb-3 rounded shadow-lg h-40">
            <div className="card-body flex-col p-5 text-gray-500">
                <div className="flex  md:items-center justify-between gap-1">
                    <div className="flex flex-col md:flex-row gap-3 justify-start md:items-center ">
                        <div className="avatar">
                            <div className="w-11 rounded-full">
                                <Image
                                    src={img}
                                    alt=""
                                    width={80}
                                    height={80}
                                />
                            </div>
                        </div>
                        <div>

                            <div className="flex gap-1 items-center text-sm">
                                <h6 className="font-semibold text-gray-800">{name}</h6>

                            </div>

                            <div className="text-xs text-gray-500 flex gap-5 justify-left items-center">
                                <div className=" flex items-center gap-2 text-[#008E90]">
                                    <span className="mt-1 font-bold ">{Number(rating).toFixed(1)}</span>
                                    <Rating
                                        style={{ maxWidth: 90 }}
                                        value={rating || 0}
                                        readOnly
                                        itemStyles={ratingStyles}
                                    />
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
                <p className="my-2 text-xs text-gray-500 text-justify">{description}</p>

            </div>
        </div>
    );
};

export default ReviewCard;