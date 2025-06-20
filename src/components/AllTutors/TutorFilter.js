'use client'
import { genderOptions, mediumOptions, studentClassOptions, subjectsOptions } from "@/constant";
import TCSelect from "../Forms/TCSelect";
import TCForm from "../Forms/TCForm";
import { useEffect, useState } from "react";
import { selectOptions } from "@/utils/selectOptions";
import TCInput from "../Forms/TCInput";
import { selectUpozila } from "@/utils/selectUpozila";

const TutorFilter = ({ setFilter, defaultValues }) => {
    const [districts, setDistricts] = useState([]);
    const [upozila, setUpozila] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState({ id: "", name: "" });

    useEffect(() => {
        fetch('https://sohojapi.vercel.app/api/districts')
            .then(res => res.json())
            .then(data => {
                setDistricts(data);
                // Set initial selected district if defaultValues.district exists
                if (defaultValues.district && data.length > 0) {
                    const foundDistrict = data.find(d => d.name === defaultValues.district);
                    if (foundDistrict) {
                        setSelectedDistrict({ id: foundDistrict.id, name: foundDistrict.name });
                    }
                }
            })
    }, [defaultValues.district]);

    const handleSelect = (event) => {
        const districtId = event.target.value;
        const district = districts.find(d => d.id === districtId);
        setSelectedDistrict(district ? { id: district.id, name: district.name } : { id: "", name: "" });
    }

    useEffect(() => {
        if (selectedDistrict?.id) {
            fetch(`https://sohojapi.vercel.app/api/upzilas/${selectedDistrict.id}`)
                .then(res => res.json())
                .then(data => setUpozila(data))
                .catch(error => {
                    console.error('Error fetching upzilas:', error);
                    setUpozila([]);
                });
        } else {
            setUpozila([]);
        }
    }, [selectedDistrict.id]);


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
                </div>                <div className="mb-4 space-y-3">
                    <h2 className="text-lg font-semibold ">Address</h2>
                    <select name='district' value={selectedDistrict.id} onChange={handleSelect} className="select select-bordered w-full ">
                        <option disabled value="">Choose District</option>
                        {
                            districts?.map(district => <option value={district.id} key={district.id}>{district.name}</option>)
                        }
                    </select>
                    <TCSelect disabled={!upozila?.length} options={selectUpozila(upozila)} placeholder="Choose Area" name="upozila" />
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