const defaultMessageList = {
    messageList: [
        {
            message_id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, vitae.',
            chat_id: 1
        },
        {
            message_id: 2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, vitae.',
            chat_id: 1
        },
        {
            message_id: 3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, vitae.',
            chat_id: 2
        },
        {
            message_id: 4,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, vitae.',
            chat_id: 2
        },
        {
            message_id: 5,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, vitae.',
            chat_id: 3
        },
        {
            message_id: 6,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, vitae.',
            chat_id: 3
        }
    ]
}


export function messageListReducer(state = defaultMessageList, action) {
    switch (action.type) {
        case 'delete':
            return {
                ...state,
                messageList: state.messageList.filter((message) => message.message_id !== action.payload)
            }

        case 'addMessage':
            return {
                ...state,
                messageList: [...state.messageList, action.payload],
                botMessage: action.payload.text,
            }

        default:
            return defaultMessageList
    }
}

