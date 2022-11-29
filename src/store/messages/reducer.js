import { nanoid } from 'nanoid';
import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";

const initialState = {
  messages: {
    chat01: [
      { author: "User", message: "test", id: nanoid() },
      { author: "Bot", message: "test", id: nanoid() },
    ],
  }
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [...(state.messages[action.payload.roomId] ?? []),
          { ...action.payload.message, id: nanoid() },
          ]
        }
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };

    default:
      return state;
  }
};
