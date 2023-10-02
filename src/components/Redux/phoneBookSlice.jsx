const initialStore = {
    phoneBook: [
        { id: 'id-1', name: 'Tesliak', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ]
}
export const phoneBookReducer = (state = initialStore.phoneBook, action) => {
     switch (action.type) {
        case 'phoneBook/addContacts':
            return  [...state, action.payload]

        default:
            return state;
    }
}
export const addContacts = (value) => {
    return {
        type: 'phoneBook/addContacts',
        payload: value
    }
}
