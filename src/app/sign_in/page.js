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

const SignIn = () => {

    const handleLogin = async (values) => {
        const toastId = toast.loading("Login in.....")
        try {
            const res = await userLogin(values);
            console.log("login",res.data.accessToken);
            if (res?.data?.accessToken) {
                toast.success(res?.message, {id:toastId});
                storeUserInfo({ accessToken: res?.data?.accessToken });

            } else {
                toast.error(res?.message, {id:toastId});

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
                            <TCInput type="email" name="email" placeholder="Enter your email" />
                            <TCInput type="password" name="password" placeholder="Enter your Password" />
                            <button className='btn primary-btn mt-4'>Login</button>
                        </TCForm>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default SignIn;