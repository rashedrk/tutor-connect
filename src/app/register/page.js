import Image from "next/image";
import tutor from '@/assets/svg/tutor.svg'
import student from '@/assets/svg/student.svg'
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Link from "next/link";

const Register = () => {
    return (
        <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center">
            <SectionTitle titleFirst="Register" titleLast="As"/>
            <div className="flex w-full justify-center items-center flex-col lg:flex-row">
                <Link href="/register/tutor" className="card bg-base-100 w-52 shadow-xl">
                    <figure className="px-1">
                        <Image
                            src={tutor}
                            alt=''
                            width={100}
                            height={100}
                            className=" rounded-lg "
                        />
                    </figure>
                        <h2 className="text-center font-semibold text-lg">A Tutor</h2>
                </Link>
                <div className="divider lg:divider-horizontal">OR</div>
                <Link  href="/register/student" className="card bg-base-100 w-52 shadow-xl">
                    <figure className="px-1">
                        <Image
                            src={student}
                            alt=''
                            width={100}
                            height={100}
                            className=" rounded-lg "
                        />
                    </figure>
                        <h2 className="text-center font-semibold text-lg">A Student</h2>
                    
                </Link>
            </div>
            </div>
    );
};

export default Register;