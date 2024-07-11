export const selectOptions = (options) => {
    return options?.map(value => ({
        label: value,
        value: value.toLowerCase()
    }))
}