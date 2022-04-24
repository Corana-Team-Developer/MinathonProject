import { createSlice } from "@reduxjs/toolkit";

const showhideSlice  = createSlice({
    name: 'showhide',
    initialState: {
        showform: false
    },
    reducers:{
        showFormHandler: (state,action)=>{
            console.log("true")
            state.showform = true;
            console.log(state.showform)
        },
        hideFormHandler: (state,action)=>{
            state.showform = false;
        }

    }
})

export const showhideAction = showhideSlice.actions
export default showhideSlice.reducer