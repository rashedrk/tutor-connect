import { Controller, useFormContext } from "react-hook-form";
import Select from 'react-select'

const TCMultiSelect = ({ name, placeholder, options, disabled = false, className, label }) => {
    const { control } = useFormContext();

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
                    <Select
                        {...field}
                        options={options}
                        disabled={disabled}
                        className={` rounded-xl w-full  ${className}`}
                        isMulti
                        placeholder={placeholder}
                        onChange={(selected) => {
                            field.onChange(selected ? selected.map(option => option.value) : []);
                        }}
                        value={options.filter(option => field?.value?.includes(option.value))}
                    />
                </label>
            )}
        />
    );
};

export default TCMultiSelect;