import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import Image from "next/image";

const TutorCard = ({tutor}) => {
    const {id, name, description, image, rating, price, expertise } = tutor;
    return (
        <div className="card w-96 h-[34rem] bg-base-100 shadow-xl">
            <figure className="h-56">
                <Image
                    src={image}
                    alt=""
                    width={450}
                    height={450}
                />
            </figure>
            <div className="card-body">
                <div className="flex ">
                    <h2 className="card-title flex-grow">{name}</h2>
                    <h1 className="font-bold text-2xl ">${price}/hr</h1>
                </div>
                <p>{description}</p>
                <div className="card-actions my-3 ">
                    {expertise.map((sub, index) =>  <div key={index} className="badge badge-outline">{sub}</div>)}
                </div>
                <div className="card-actions justify-between items-center">
                    <div className="flex  gap-2">
                        <span className="mt-1 font-bold text-orange-600">{rating}</span>
                        <Rating
                            style={{ maxWidth: 90 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                    <button className="btn primary-btn">see more</button>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;