import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    initialState: { visibilty: true },
    name: 'sidebar',
    reducers: {
        setSidebarVisibility(state, action) {
            state.visibilty = action.payload;
        }
    }
})

const sidebarReducer = sidebarSlice.reducer;
export const { setSidebarVisibility } = sidebarSlice.actions
export default sidebarReducer;
