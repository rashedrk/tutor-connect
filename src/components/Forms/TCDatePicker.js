import { useState } from "react";
import DatePicker from "react-datepicker";
import { Controller, useFormContext } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

const TCDatePicker = ({ name, placeholder, disabled = false, className, label }) => {
    const { control, getValues } = useFormContext();
    const [startDate, setStartDate] = useState(getValues(name));

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <label className="form-control w-full">
                    {
                        label && <div className="label">
                            <span className="label-text">{label}</span>
                        </div>
                    }
                    <DatePicker
                        {...field}
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date)
                            field.onChange(date);
                        }}
                        className={`input input-bordered w-full input-md ${className}`}
                        disabled={disabled}
                        placeholderText={placeholder}
                        dateFormat="dd-MM-yyyy"
                        
                        //  showMonthYearDropdown
                    />
                </label>
            )}
        />
    );
};

export default TCDatePicker;