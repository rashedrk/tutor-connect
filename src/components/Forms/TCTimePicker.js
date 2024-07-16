import { useState } from "react";
import DatePicker from "react-datepicker";
import { Controller, useFormContext } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

const TCTimePicker = ({ name, label, disabled = false, className }) => {
    const { control } = useFormContext();
    const [startDate, setStartDate] = useState(new Date());

    return (
        <Controller
            control={control}
            name={name}
            render={({ field  }) => (
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
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        className={`input input-bordered w-full input-md ${className}`}
                        disabled={disabled}
                    />
                </label>
            )}
        />
    );
};

export default TCTimePicker;