import { createSlice } from "@reduxjs/toolkit";

const connectionSlice=createSlice({
    name:"connection",
    initialState:null,
    reducers:{
        addConnectionData:(state,action)=>{
            return action.payload;
        },
        removeConnectionData:(state,action)=>{
            return null;
        }
    }
})

export const {addConnectionData,removeConnectionData}=connectionSlice.actions;
export default connectionSlice.reducer;