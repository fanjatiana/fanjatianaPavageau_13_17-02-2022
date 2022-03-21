import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
    isLogged : boolean
  }
  
  const initialState : UserState = {
    isLogged : true
  }
  
  
  const loginStatusSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
      getInfoLoginStatus : (state,action : PayloadAction<boolean>)=> {
        state.isLogged= action.payload;
      }
    }
    
  })
  
  export const {getInfoLoginStatus} = loginStatusSlice.actions;
  export default loginStatusSlice.reducer;
  