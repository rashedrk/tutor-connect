import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import Marquee from "react-fast-marquee";

import img1 from "@/assets/sponsors/img1.png";
import img4 from "@/assets/sponsors/img4.png";
import img5 from "@/assets/sponsors/img5.png";
import img6 from "@/assets/sponsors/img6.png";
import img7 from "@/assets/sponsors/img7.jpg";
import img8 from "@/assets/sponsors/img8.webp";
import img9 from "@/assets/sponsors/img9.png";
import img10 from "@/assets/sponsors/img10.png";
import img11 from "@/assets/sponsors/img11.png";


const Sponsors = () => {
    const sponsors = [img1, img4, img5, img6, img7, img8, img9, img10, img11];
    return (
        <div className="bg-white">
            <SectionTitle
                titleFirst="Our Partners &"
                titleLast="Sponsors"
            />
            <Marquee className="py-5">
                {
                    sponsors.map(sponsor => <Image
                        key=""
                        src={sponsor}
                        alt=""
                        width={150}
                        height={150}
                        className="ms-4"
                    />)
                }
            </Marquee>

        </div>
    );
};

export default Sponsors;