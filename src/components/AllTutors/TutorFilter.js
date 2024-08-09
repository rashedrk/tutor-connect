'use client'
import { genderOptions, mediumOptions, studentClassOptions, subjectsOptions } from "@/constant";
import TCSelect from "../Forms/TCSelect";
import TCForm from "../Forms/TCForm";
import { useEffect, useState } from "react";
import { selectOptions } from "@/utils/selectOptions";
import TCMultiSelect from "../Forms/TCMultiSelect";
import TCInput from "../Forms/TCInput";

const TutorFilter = () => {
    const [districts, setDistricts] = useState([]);
    const [upozila, setUpozila] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("")

    useEffect(() => {
        fetch('https://bdapis.com/api/v1.2/districts')
            .then(res => res.json())
            .then(data => setDistricts(data?.data))
    }, []);

    const handleSelect = (event) => {
        setSelectedDistrict(event.target.value)
    }

    useEffect(() => {
        fetch(`https://bdapis.com/api/v1.2/district/${selectedDistrict}`)
            .then(res => res.json())
            .then(data => setUpozila(data.data));
    }, [selectedDistrict]);


    const handleSubmit = (values) => {
        console.log(values);

    }
    return (
        <div className="shadow-sm">
            <TCForm onsubmit={handleSubmit}>
                <div className="mb-4 space-y-3">
                    <h2 className="text-lg font-semibold mb-2">Education</h2>
                    <TCSelect options={studentClassOptions} name="class" placeholder="Choose Class" className="select-md" />
                    <TCSelect options={subjectsOptions} name="subject" placeholder="Choose Subject" className="select-md"  />
                </div>
                <div className="mb-4 space-y-3">
                    <h2 className="text-lg font-semibold mb-2">Price Range</h2>
                    <div className="flex gap-1 justify-center items-center">
                        <TCInput name="minPrice" type="number" placeholder="Min Price"/>
                        -
                        <TCInput name="maxPrice" type="number" placeholder="Max Price"/>
                    </div>
                </div>
                <div className="mb-4 space-y-3">
                    <h2 className="text-lg font-semibold ">Address</h2>
                    <select name='district' value={selectedDistrict} onChange={handleSelect} className="select select-bordered w-full ">
                        <option disabled selected value="">Choose District</option>
                        {
                            districts?.map(district => <option value={district.district} key={district.district}>{district.district}</option>)
                        }
                    </select>
                    <TCSelect disabled={!upozila} options={selectOptions(upozila?.upazillas)} placeholder="Choose Area" name="upozila" />
                </div>
                <div className="mb-4 space-y-3">
                    <h2 className="text-lg font-semibold ">Miscellaneous</h2>
                    <TCMultiSelect name="gender" options={genderOptions} placeholder="Choose gender"/>
                    <TCMultiSelect name="medium" options={mediumOptions} placeholder="Choose Medium"/>
                </div>
            </TCForm>
        </div>
    );
};

export default TutorFilter;