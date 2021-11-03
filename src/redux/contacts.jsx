const initialState = {
    items: [],
    change: false,
    filter: '',
    loading: false
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "contacts/load/start":
            return {
                ...state,
                loading: true
            }

        case "contacts/load/success":
            return {
                ...state,
                items: action.payload,
                loading: false
            }

        case "change/profile":
            return {
                ...state,
                change: !state.change
            }

        case "search/contact":
            return {
                ...state,
                filter: action.payload,
                items: state.items.filter(item => item.fullname.indexOf(state.filter) > -1)
            }

        default: return state;
    }
}

export default contactsReducer;