import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
    name: 'users',
    initialState: [{
        id: 0,
        name: '',
        email: '',
        password: ''
    }],
    reducers: {
        getUsers: (state, action) => {
            state = action.payload
            return state
        },
        addUser: (state, action) => {
            state.push(action.payload)
            return state
        },
        editUser: (state, action) => {
            state = state.map(i => i.id === action.payload.id ? action.payload : i)
            return state
        },
        deleteUser: (state, action) => {
            state = state.filter(i => i.id !== action.payload)
            return state
        }
    }
})
export const { getUsers, addUser, editUser, deleteUser } = users.actions
export default users.reducer