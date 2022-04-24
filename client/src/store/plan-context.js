import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
    name: "plan",
    initialState: {
        items:[]
    },
    reducers:{
        setPlan: (state,action)=>{
            state.items = action.payload.data
        },
        getPlan: (state, action) => state.items
    }
})
export default planSlice.reducer
export const planActions = planSlice.actions