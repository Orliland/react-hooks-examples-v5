export const initialState = {
  selectedId: 0,
  message: "Hello",
  drafts: {},
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      let drafts = {};
      drafts[action.currentContact] = state.message;
      const message =
        state.drafts[action.contactId] == undefined
          ? ""
          : state.drafts[action.contactId];
      return {
        ...state,
        selectedId: action.contactId,
        message: message,
        drafts: { ...state.drafts, ...drafts },
      };
    }
    case "edited_message": {
      return {
        ...state,
        message: action.message,
      };
    }
    case "sent_message": {
      let drafts = {};
      drafts[action.contactId] = "";
      return {
        ...state,
        message: "",
        drafts: { ...state.drafts, drafts },
      };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
