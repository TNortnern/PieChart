const templateReducer = (state = {name: 'Sales Revenue', property: 'saleRev'}, { type, payload }) => {
    switch (type) {
        case 'CHANGE_TEMPLATE':
            return payload
    
        default:
            return state
    }


};
export default templateReducer