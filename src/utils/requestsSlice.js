import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name :"request",
    initialState:null,
    reducers:{
        addRequest:(state,action)=>{
            return action.payload;
        },
        removeRequest:(state,action)=>{
            var newArray = state.filter(r=>r.id != action.payload.id);
            return newArray;
        },
        removeAllRequests:(state,action)=>{
            return null;
        }
    }
})

export const {addRequest,removeRequest,removeAllRequests}=requestSlice.actions;
export default requestSlice.reducer;