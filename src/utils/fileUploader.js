export const fileUploader = async(file) => {
    const formData = new FormData();
    formData.append("image", file);
    // Return the fetch promise
    return fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        {
            method: "POST",
            body: formData,
        }
    )
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                // Return the uploaded image URL
                return data.data.display_url;
            } else {
                // Throw an error if upload failed
                throw new Error("Failed to upload image");
            }
        });
}