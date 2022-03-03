import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TokenState {
  value: string | null;
}

const initialState: TokenState = {
  value: null,
};

export const tokenSlice = createSlice({
    name:'token',
    initialState,
    reducers :{
        getToken : (state, action: PayloadAction<string | null>) =>{
            state.value = action.payload;
        }
    }
})

export const {getToken} = tokenSlice.actions;

export default tokenSlice.reducer;
