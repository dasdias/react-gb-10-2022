export const messagessSelector = (chatId) => (state) => {
  // console.log(chatId);
  // console.log(state);
  return state.messages.messages[chatId] ?? [];
}
