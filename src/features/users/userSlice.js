import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";

// const fetchUser = createAsyncThunk(
//     'fetchusers',
//     async (thunkAPI) => {
//         const res = await fetch('https://randomuser.me/api/?results=10');
//         const data = await res.json();
//         return data.results;
//     }
//   )


const userSlice = createSlice({
    name: 'user',
    initialState: {
        usersList: []
    },
    reducers: {
        addUsers: (state, {payload}) => {
            state.usersList.length === 0 && state.usersList.push(...payload);
        },
        delUser: (state, {payload}) => {
            let userList = current(state.usersList);
            state.usersList = userList.filter((obj) => obj.login.uuid !== payload.login.uuid)
        }
    },
});

export default userSlice.reducer;

export const {addUsers, delUser} = userSlice.actions;