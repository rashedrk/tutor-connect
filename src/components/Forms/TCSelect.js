import { Controller, useFormContext } from "react-hook-form";

const TCSelect = ({ name, label, options, disabled = false, className }) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <select disabled={disabled} {...field} className={`select select-bordered w-full  ${className}`}>
                    <option disabled selected>{label}</option>
                    {
                        options?.map(option => <option key={option.label} value={option.value}>{option.label}</option>)
                    }
                </select>
            )}
        />
    );
};

export default TCSelect;