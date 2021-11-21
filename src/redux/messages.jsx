const initialState = {
  items: [],
  filter: '',
  loading: false,
  loadingMessage: false
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'messages/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'messages/load/success':
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case 'message/add/start':
      return {
        ...state,
        loadingMessage: true
      }

    case 'message/add/success':
      return {
        ...state,
        items: [...state.items, action.payload],
        loadingMessage: false
      };

    case 'delete/messages/success':
      return {
        ...state,
        items: state.items.filter((message) => message._id !== action.payload),
      };

    case 'filter/messages':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default messagesReducer;
