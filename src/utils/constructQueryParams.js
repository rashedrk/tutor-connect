export const constructQueryParams = (filter) => {

    return Object.entries(filter)
        .filter(([key, value]) => value !== undefined && value !== null && value !== '')
        .map(([key, value]) => ({
            name: key,
            value: value
        }));;
};
