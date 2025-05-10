import { createSlice } from "@reduxjs/toolkit";

const connectionSlice=createSlice({
    name:"connection",
    initialState:null,
    reducers:{
        addConnectionData:(state,action)=>{
            return action.payload;
        },
        removeConnectionData:(state,action)=>{
            console.log(action.payload);
            var newArray= state.filter(x=>x.requestId != action.payload);
            return newArray;
        },
        removeAllConnectionData:(state,action)=>{
            return null;
        }
    }
})

export const {addConnectionData,removeConnectionData,removeAllConnectionData}=connectionSlice.actions;
export default connectionSlice.reducer;