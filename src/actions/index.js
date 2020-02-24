export const selectTemplate = payload => {
    return {
        type: "CHANGE_TEMPLATE",
        payload
    }
}

export const newProduct = payload => {
    return {
        type: "NEW_PRODUCT",
        payload
    }
}