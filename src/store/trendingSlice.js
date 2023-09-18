import { createSlice } from "@reduxjs/toolkit";

const initialState={
    resdata:[]

}

export const trendingSlice=createSlice({
    name:"trending",
    initialState,
    reducers:{
       getResData:(state,action)=>{
        state.resdata=action.payload
       }

    }
})

export const {getResData} = trendingSlice.actions;
export default trendingSlice.reducer