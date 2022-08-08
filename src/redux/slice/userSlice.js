import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:'user',
    initialState:{
        username:null
    },
    reducers:{
        addUserName: (state,action) =>{
            state.username = action.payload.username;
        }
    }

});

export const {addUserName} = userSlice.actions;
export default userSlice.reducer;