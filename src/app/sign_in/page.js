'use client'

import Image from 'next/image';
import React from 'react';
import login from '@/assets/svg/login.svg'
import TCForm from '@/components/Forms/TCForm';
import TCInput from '@/components/Forms/TCInput';
import { Fade } from 'react-awesome-reveal';
import { storeUserInfo } from '@/services/auth.services';
import { userLogin } from '@/services/actions/userLogin';
import { toast } from 'sonner';
import Link from 'next/link';
import { MdLogin } from 'react-icons/md';
import { RiAdminLine, RiLockPasswordLine } from 'react-icons/ri';
import TryDemo from '@/components/Modals/TryDemo';

const SignIn = () => {

    const handleLogin = async (values) => {
        const toastId = toast.loading("Login in.....")
        try {
            const res = await userLogin(values);
            // console.log("login", res.data.accessToken);
            if (res?.data?.accessToken) {
                toast.success(res?.message, { id: toastId });
                storeUserInfo({ accessToken: res?.data?.accessToken });

            } else {
                toast.error(res?.message, { id: toastId });

            }
        } catch (error) {

        }
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col justify-between gap-10 lg:flex-row">
                <Image
                    src={login}
                    alt=''
                    width={500}
                    height={500}
                    className=" rounded-lg "
                />
                <Fade direction='right' triggerOnce>
                    <div className='shadow-xl p-10 rounded-md w-96'>
                        <h2 className="text-4xl font-bold uppercase text-center mb-5">Login<span className="text-[#004E7C]"> Here !</span></h2>
                        <TCForm onsubmit={handleLogin}>
                            <TCInput type="email" name="email" placeholder="Enter your email" className="mb-4" />
                            <TCInput type="password" name="password" placeholder="Enter your Password" />
                            <button className='btn primary-btn mt-4 w-full'><MdLogin className='text-xl' />Login </button>
                        </TCForm>

                        <div className="divider text-sm my-3">OR</div>
                        <TryDemo handleLogin={handleLogin}/>
                        <div className='mt-3 flex gap-2 text-sm mb-3'>
                            <p>Dont have an account?</p>
                            <Link href="/register" className='link'>Register</Link>
                        </div>
                        <Link href='/' className='link text-sm '>Back to Home</Link>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default SignIn;