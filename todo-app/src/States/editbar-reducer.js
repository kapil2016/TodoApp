import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
    initialState: { visibility: false, values: { listId: '', id: '', title: '', description: '' } },
    name: 'editbar',
    reducers: {
        setEditbarVisibility(state, action) {
            state.visibility = action.payload.visibility;
            if (action.payload.values) {
                state.values = action.payload.values
            };
        },
    }
})

export const { setEditbarVisibility } = editSlice.actions;
const editbarReducer = editSlice.reducer;
export default editbarReducer;