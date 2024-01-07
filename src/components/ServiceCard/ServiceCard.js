import Image from "next/image";

const ServiceCard = ({ image, title, description }) => {
    return (
        <div className=" grid text-center w-80">
            <div className="h-28 flex align-middle">
                <Image
                    src={image}
                    alt=""
                    width={120}
                    height={120}
                    className="mx-auto hover:grayscale"
                />
            </div>
            <h2 className="mt-4 font-semibold text-xl">{title}</h2>
            <p className="mt-2 text-sm">{description}</p>
        </div>
    );
};

export default ServiceCard;