const defaultChatList = {
    chatList:
        [
            {
                id: 1,
                name: 'first_chat'
            },
            {
                id: 2,
                name: 'second_chat'
            },
            {
                id: 3,
                name: 'third_chat'
            },
        ]
}

export function chatListReducer(state=defaultChatList, action){
    switch (action.type){
        case 'delete':
            return {
                ...state,
                chatList: state.chatList.filter((chat) => chat.id !== action.payload)
            }
        case 'addChat':
            return {
                ...state,
                chatList: [...state.chatList, action.payload]
            }
        default: return defaultChatList
    }
}