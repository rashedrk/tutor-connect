
export const selectUpozila = (upozilas) => {
    return upozilas?.map(upozila => ({
        value: upozila.name,
        label: upozila.name
    })) || [];
};
