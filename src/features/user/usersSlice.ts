import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StringifyOptions } from "querystring";

interface UserState{
    firstName: string,
      lastName: string,
      email: string,
      id: string,
  }
  
  const initialState : UserState = {
    firstName: "",
      lastName: "",
      email: "",
      id: "",
  }
  
  
  const usersSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
      getInfosUsers : (state,{payload:{firstName,lastName,email,id}} : PayloadAction<{firstName:string,lastName:string,email:string,id:string}>) => {
        state.firstName= firstName;
        state.lastName= lastName;
        state.email= email;
        state.id= id;
      }
    }
    
  })
  
  export const {getInfosUsers} = usersSlice.actions;
  export default usersSlice.reducer;
  