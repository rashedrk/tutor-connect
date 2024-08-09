'use client'
import { genderOptions, mediumOptions, studentClassOptions, subjectsOptions } from "@/constant";
import TCSelect from "../Forms/TCSelect";
import TCForm from "../Forms/TCForm";
import { useEffect, useState } from "react";
import { selectOptions } from "@/utils/selectOptions";
import TCInput from "../Forms/TCInput";
import { lowerCase } from "lodash";

const TutorFilter = ({ setFilter, defaultValues }) => {
    const [districts, setDistricts] = useState([]);
    const [upozila, setUpozila] = useState([]);
    console.log(defaultValues.district);
    
    const [selectedDistrict, setSelectedDistrict] = useState(defaultValues.district)

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
        const fromData = {
            district: selectedDistrict,
            ...values
        };

        setFilter(fromData);

        console.log(fromData);


    }
    return (
        <div className="shadow-sm">
            <TCForm onsubmit={handleSubmit} defaultValues={defaultValues}>
                <div className="mb-4 space-y-3">
                    <h2 className="text-lg font-semibold mb-2">Education</h2>
                    <TCSelect options={studentClassOptions} name="class" placeholder="Choose Class" className="select-md" />
                    <TCSelect options={subjectsOptions} name="experties" placeholder="Choose Subject" className="select-md" />
                </div>
                <div className="mb-4 space-y-3">
                    <h2 className="text-lg font-semibold mb-2">Price Range</h2>
                    <div className="flex gap-1 justify-center items-center">
                        <TCInput name="minPrice" type="number" placeholder="Min Price" />
                        -
                        <TCInput name="maxPrice" type="number" placeholder="Max Price" />
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
                    <TCSelect name="gender" options={genderOptions} placeholder="Choose gender" />
                    <TCSelect name="medium" options={mediumOptions} placeholder="Choose Medium" />
                </div>

                <button type="submit" className="btn primary-btn">Apply Filters</button>
            </TCForm>
        </div>
    );
};

export default TutorFilter;