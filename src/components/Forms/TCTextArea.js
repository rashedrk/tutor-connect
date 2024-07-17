import { Controller, useFormContext } from "react-hook-form";

const TCTextArea = ({ name, label, placeholder, disabled = false, className }) => {
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
                    <textarea
                        {...field}
                        placeholder={placeholder}
                        disabled={disabled}
                        className={`input input-bordered w-full input-md ${className}`}
                    />
                </label>
            )}
        />
    );
};

export default TCTextArea;