import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed:(state,action)=>{
            return action.payload;
        },
        removeFeed:(state,action)=>{
            console.log(action.payload)
             var newArray = state.data.filter(x => x.id != action.payload.id);
             return newArray;
        },
        removeAllFeed:(state,action)=>{
            return null;
        }
    }
})

export const {addFeed,removeFeed,removeAllFeed}=feedSlice.actions;
export default feedSlice.reducer;