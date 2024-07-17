import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
const TCFileUpload = ({ name, disabled = false, className }) => {
    const { control } = useFormContext();

    const [fileName, setFileName] = useState("");

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName("");
        }
    };


    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value, ...field } }) => (
                <div className={`file-upload-wrapper ${className}`}>
                    <label className="customFileLabel">
                        {fileName || "Upload profile pic"}
                        <input
                            {...field}
                            type="file"
                            disabled={disabled}
                            className="customFileInput"
                            onChange={(e) => {
                                onChange((e?.target).files[0])
                                handleFileChange(e);
                            }
                            }
                        />
                    </label>
                </div>
            )}
        />
    );
};

export default TCFileUpload;