import { CREATE_CONVERSATION, DELETE_CONVERSATION } from "./types";

const initialState = {
  conversations: [
    { id: "chat01", name: "Чат-01" },
    { id: "chat02", name: "Чат-02" },
    { id: "chat03", name: "Чат-03" },
  ],
  // conversations: ["room1", "room2", "room3"],
};

export const conversationsReducer = (state = initialState, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case CREATE_CONVERSATION:
      // console.log(state)
      // console.log(state.conversations)
      return {
        ...state,
        conversations: [...state.conversations, action.payload],
      };

    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
