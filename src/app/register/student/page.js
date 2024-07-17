import TCForm from '@/components/Forms/TCForm';
import TCInput from '@/components/Forms/TCInput';
import React from 'react';

const StudentRegister = () => {
    const handleSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <TCForm>
                <TCInput name="name" placeholder="Enter Your Name" type="text" />
                <TCInput name="name" placeholder="Enter Your Name" type="text" />
            </TCForm>
        </>
    );
};

export default StudentRegister;