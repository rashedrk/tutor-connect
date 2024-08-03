
import Image from 'next/image';
import Link from 'next/link';
import tutor from '@/assets/svg/tutor.svg'
import student from '@/assets/svg/student.svg'

const RegisterModal = () => {
    return (
        <>
            <p
                onClick={() => document.getElementById('register').showModal()}
                className='link cursor-pointer'>
                Register
            </p>
            <dialog id="register" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-xl pb-6">Register as:</h3>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('register').close()}>✕</button>
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
                        <Link href="/register/student" className="card bg-base-100 w-52 shadow-xl">
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
            </dialog>
        </>
    );
};

export default RegisterModal;