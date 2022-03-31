import {createSlice,PayloadAction } from "@reduxjs/toolkit";

// slice to retrieve the token

type TokenState = {
  value:string | null;
}

const initialState : TokenState = {
  value : null,
}


const tokenSlice = createSlice({
  name:"token",
  initialState,
  reducers:{
    getToken(state,action : PayloadAction<string | null>){
      state.value = action.payload;
    }
  }
  
})

export const {getToken} = tokenSlice.actions;
export default tokenSlice.reducer;



