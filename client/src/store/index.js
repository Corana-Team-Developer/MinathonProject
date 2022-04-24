import {configureStore} from '@reduxjs/toolkit'
import  showhideReducer from "./showhide-context"
import planReducer from "./plan-context"
const store = configureStore({
    reducer: {
        showhide: showhideReducer,
        plan: planReducer
    }
})

export default store