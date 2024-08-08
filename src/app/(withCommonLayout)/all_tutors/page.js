import TutorFilter from "@/components/AllTutors/TutorFilter";
import { IoIosArrowBack } from "react-icons/io";

const AllTutorsPage = () => {
    return (
        <div className="drawer lg:drawer-open bg-[#F2F4F7]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center  justify-center">
                {/* Page content here */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cumque aperiam ipsa nulla quo corrupti laboriosam quidem numquam ad voluptate consequatur perspiciatis iure autem tempore hic maxime quaerat veritatis modi officiis illo, voluptas molestiae quis. Dolor, blanditiis maxime perferendis exercitationem, distinctio quia magnam accusamus dicta doloremque impedit, aperiam odio nihil ea neque explicabo eos laudantium doloribus quisquam totam vitae. Nesciunt tempora eligendi non deleniti, repellendus unde illum, earum, ducimus autem doloremque blanditiis. Rerum aliquid asperiores accusantium quos, cupiditate recusandae alias laboriosam vel sequi, eum illum delectus? Vero veritatis optio, nam accusamus voluptatibus, officiis dolore architecto possimus veniam aspernatur omnis a!

                <label htmlFor="my-drawer-2" className="btn primary-btn ps-2 drawer-button lg:hidden  left-[28rem] fixed">
                    <IoIosArrowBack className="text-2xl font-bold"/>
                </label>
            </div>
            <div className="drawer-side bg-white lg:mx-5">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu  text-base-content min-h-full w-60 p-4">
                    {/* Sidebar content here */}
                    <TutorFilter/>
                </ul>
            </div>
        </div>
    );
};

export default AllTutorsPage;