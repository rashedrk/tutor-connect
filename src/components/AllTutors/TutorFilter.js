'use client'
import { studentClassOptions } from "@/constant";
import TCSelect from "../Forms/TCSelect";
import TCForm from "../Forms/TCForm";

const TutorFilter = () => {
    const handleSubmit = (values) => {
        console.log(values);
        
    }
    return (
        <>
            <TCForm onsubmit={handleSubmit}>
                <div>
                    <h2 className="text-xl font-semibold mb-3">Education level</h2>
                    <TCSelect options={studentClassOptions} name="class" placeholder="Select Class" className="select-md"/>
                    <TCSelect options={studentClassOptions} name="class" placeholder="Select Class" className="select-md"/>
                </div>
            </TCForm>
        </>
    );
};

export default TutorFilter;