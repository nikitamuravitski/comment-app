import { createSlice, current } from '@reduxjs/toolkit';

function searchTree(state, matchingID) {
    let result = null;
    
    for (let i = 0; result === null && i < state.length; i++) {

        if (state[i].id === matchingID) {
            state[i].childrenCount++
            return state[i]
        }
        
        result = searchTree(state[i].children, matchingID);
    }
   
    return result;
}

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: [],
    reducers: {
        addComment: (state, action) => {
            state.push(action.payload)
        },
        addReply: (state, action) => {
            const { parentID } = action.payload;
            let result = searchTree(state, parentID);
            
            result.children.push(action.payload);
        }

    }
})
export default commentSlice.reducer
export const { addComment, addReply } = commentSlice.actions