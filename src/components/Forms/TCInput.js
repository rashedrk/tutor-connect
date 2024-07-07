import { Controller, useFormContext } from "react-hook-form";

const TCInput = ({ name, label, type, placeholder, disabled = false, className }) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({field}) => (
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">{label}</span>
                    </div>
                    <input
                        {...field}
                        type={type}
                        placeholder={placeholder}
                        disabled={disabled}
                        className={`input input-bordered w-full input-md ${className}`}
                    />
                </label>
            )}
        />
    );
};

export default TCInput;