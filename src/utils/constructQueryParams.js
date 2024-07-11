export const constructQueryParams = (filter) => {
    const params = new URLSearchParams();
    for (const key in filter) {
        if (filter[key]) {
            params.append(key, filter[key]);
        }
    }
    return params.toString();
};