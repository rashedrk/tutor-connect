import { Controller, useFormContext } from "react-hook-form";

const TCSelect = ({ name, label, options, disabled = false, className, placeholder }) => {
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
                    <select disabled={disabled} {...field} className={`select select-bordered w-full  ${className}`}>
                        <option disabled selected>{placeholder}</option>
                        {
                            options?.map(option => <option key={option.label} value={option.value}>{option.label}</option>)
                        }
                    </select>
                </label>
            )}
        />
    );
};

export default TCSelect;