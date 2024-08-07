import { useState } from "react";
import DatePicker from "react-datepicker";
import { Controller, useFormContext } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

const TCTimePicker = ({ name, placeholder, disabled = false, className }) => {
    const { control } = useFormContext();
    const [startDate, setStartDate] = useState("");

    return (
        <Controller
            control={control}
            name={name}
            render={({ field  }) => (
                <label className="form-control w-full">
                    <DatePicker
                        {...field}
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date)
                            field.onChange(date);
                        }}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        className={`input input-bordered w-full input-md ${className}`}
                        disabled={disabled}
                        placeholderText={placeholder}
                    />
                </label>
            )}
        />
    );
};

export default TCTimePicker;