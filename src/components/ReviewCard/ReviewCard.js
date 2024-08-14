import { ratingStyles } from "@/app/(withCommonLayout)/tutor/[tutorId]/page";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const ReviewCard = () => {
    return (
        <div className="card bg-base-100 w-[98%] border mb-3 rounded shadow-lg mx-2">
            <div className="card-body p-3 md:p-8 text-gray-500">
                <div className="flex  md:items-center justify-between gap-1">
                    <div className="flex flex-col md:flex-row gap-3 justify-start md:items-center ">
                        <div className="avatar">
                            <div className="w-14 rounded-full">
                                <Image
                                    src="https://i.ibb.co/CQ3jRSy/pexels-andrea-piacquadio-716411.jpg"
                                    alt=""
                                    width={80}
                                    height={80}
                                />
                            </div>
                        </div>
                        <div>

                            <div className="flex gap-1 items-center">
                                <h6 className="font-semibold text-lg text-gray-800">{"Md Rashedul Islam"}</h6>

                            </div>

                            <div className="text-sm text-gray-500 flex gap-5 justify-left items-center">
                                <div className=" flex items-center gap-2 text-[#008E90]">
                                    <span className="mt-1 font-bold ">{Number(4.7).toFixed(1)}</span>
                                    <Rating
                                        style={{ maxWidth: 90 }}
                                        value={4.7 || 0}
                                        readOnly
                                        itemStyles={ratingStyles}
                                    />
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, earum cum? Ut praesentium, aliquam quos ducimus voluptatem ea. Blanditiis odio inventore et, hic totam aperiam animi quod cum dignissimos, accusantium facilis. Nulla in voluptatum deserunt autem earum suscipit quia ex, cum magni sapiente aspernatur fuga nisi asperiores consequatur, perferendis minus? Nisi earum, facilis corrupti consequuntur alias rem nesciunt quasi, repellendus perspiciatis ipsum dolorem quo sed praesentium sunt sint porro dolorum assumenda unde quis, eveniet velit? Sit cumque sunt necessitatibus autem veniam beatae, unde pariatur esse, dolorem nam excepturi, dolor ipsam.</p>

            </div>
        </div>
    );
};

export default ReviewCard;