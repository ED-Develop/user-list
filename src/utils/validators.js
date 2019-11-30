export const required = (values) => {
    if (values) {
        return undefined
    }
    return 'This field is required!'
};

export const maxLength = (Length) => (values) => {
    if (values && values.length >= Length) {
        return `Max length is ${Length} symbols`;
    }
    return undefined;
};