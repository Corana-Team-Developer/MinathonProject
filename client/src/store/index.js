import {configureStore} from '@reduxjs/toolkit'
import  showhideReducer from "./showhide-context"
const store = configureStore({
    reducer: {
        showhide: showhideReducer
    }
})

export default store