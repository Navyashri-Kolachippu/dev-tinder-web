import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name :"request",
    initialState:null,
    reducers:{
        addRequest:(state,action)=>{
            return action.payload;
        },
        removeRequest:(state,action)=>{
            //console.log(action.payload);
            var newArray = state.filter(x => x.requestId != action.payload);
             return newArray;
        },
        removeAllRequests:(state,action)=>{
            return null;
        }
    }
})

export const {addRequest,removeRequest,removeAllRequests}=requestSlice.actions;
export default requestSlice.reducer;