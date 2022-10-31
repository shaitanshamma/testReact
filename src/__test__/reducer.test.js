import {messageListReducer} from "../store/reducers/messageReducer";


describe('reducer test', () => {
    it('return something', () => {
        const initialState = {
            messageList: []
        }

        const receved = JSON.stringify(messageListReducer(initialState, {
            type: "addMessage", payload: "123"
        }))

        expect(receved).toEqual(JSON.stringify({
            messageList: ['123']
        }))
    })
})