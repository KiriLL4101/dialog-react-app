export default function reducer(state: any, action: { type: string, payload?: any }) {
    switch (action.type) {
        case "remove-message":
            return {
                ...state,
                messages: state.messages.filter(
                    (message: any) => message.id !== action.payload
                ),
            };

        case "add-message":
            return {
                ...state,
                messages: state.messages.concat(action.payload),
            };

        case "update-status":
            return {
                ...state,
                messages: state.messages.map((message: any) => {
                    if (message.id === action.payload.id) {
                        return {
                            ...message,
                            status: action.payload.status,
                        };
                    }

                    return message;
                }),
            };

        default:
            throw new Error("Unknown action type");
    }
}