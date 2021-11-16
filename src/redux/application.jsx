const initialState = {
  profile: [],
  loading: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'profile/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'profile/load/success':
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default profileReducer;
