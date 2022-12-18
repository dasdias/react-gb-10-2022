import { 
  sendMessage,
  getMessagesStart,
  getMessagesSuccess,
  getMessagesError,
} from "./actions";

export const sendMessageWithBot = (chatId, message) => (dispatch) => {

  console.log(chatId);
  console.log(message);
  dispatch(sendMessage(chatId, message));

  if (message.author === "User") {
    setTimeout(() => {
      dispatch(
        sendMessage(chatId, { author: "Bot", message: "hello from thunk" })
      );
    }, 500);
  }
};


export const getMessages = () => async (dispatch, _, api) => {
  const messages = {};

  try {
    dispatch(getMessagesStart());

    const snapshot = await api.getMessagesApi();

    
    snapshot.forEach((snap) => {
      // console.log(snap);
      messages[snap.key] = Object.values(snap.val());
    });

    dispatch(getMessagesSuccess(messages));
  } catch (e) {
    dispatch(getMessagesError(e));
  }
};

export const sendMessageFb = (message, chatId) => async (dispatch, _, api) => {
  try {
    // dispatch(getMessagesStart());

    const newMessage = await api.createMessageApi(message, chatId);

    dispatch(sendMessageWithBot(chatId, newMessage));

    // dispatch(getMessagesSuccess(messages));
  } catch (e) {
    // dispatch(getMessagesError(e));
  }
};
