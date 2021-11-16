export const profileLoad = () => {
  return (dispatch) => {
    dispatch({
      type: 'profile/load/start',
    });
    fetch('https://api.intocode.ru:8001/api/profile')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'profile/load/success',
          payload: json,
        });
      });
  };
};

export const contactLoad = () => {
  return (dispatch) => {
    dispatch({
      type: 'contacts/load/start',
    });
    fetch('https://api.intocode.ru:8001/api/contacts')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'contacts/load/success',
          payload: json,
        });
      });
  };
};

export const messagesLoad = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'messages/load/start',
    });
    fetch(
      `https://api.intocode.ru:8001/api/messages/${id}/5f2ea3801f986a01cefc8bcd`,
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'messages/load/success',
          payload: json,
        });
      });
  };
};

export const addMessage = (text, date, id) => {
  return (dispatch) => {
    fetch('https://api.intocode.ru:8001/api/messages', {
      method: 'POST',
      body: JSON.stringify({
        content: text,
        time: date,
        type: 'text',
        contactId: id,
        myId: '5f2ea3801f986a01cefc8bcd',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'add/comment',
          payload: json,
        });
      });
  };
};

export const deleteMessage = (id) => {
  return (dispatch) => {
    fetch(`https://api.intocode.ru:8001/api/messages/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'delete/messages/success',
          payload: id,
        });
      });
  };
};

export const changeProfile = (change) => {
  return {
    type: 'change/profile',
    payload: change,
  };
};

export const searchContact = (text) => {
  return {
    type: 'search/contact',
    payload: text,
  };
};

export const searchMessages = (text) => {
  return {
    type: 'filter/messages',
    payload: text,
  };
};
