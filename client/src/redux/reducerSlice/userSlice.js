// // 'use client'
// // import { createSlice } from '@reduxjs/toolkit';
// // const initialState = {
// //     count: 0
// // }
// // export const countSlice = createSlice({
// //   name: 'count',
// //   initialState,
// //   reducers: {
// //     increment: (state, action) => {
      
// //     }
// // }});

// // export const { increment } = countSlice.actions;
// // export default countSlice.reducer;
// // userReducer.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   count: 0
// };

// export const countSlice = createSlice({
//   name: 'count',
//   initialState,
//   reducers: {
//     increment: (state, action) => {
//       // Assuming you want to increment the count by 1
//       state.count += 1;
//     }
//   }
// });

// export const { increment } = countSlice.actions;
// export default countSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetails:{},
  token:'',
  isLoggedIn: false
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserDetails:(state,action)=>{
      const {userDetails,token}=action.payload
      return {
        ...state,
        userDetails,
        token,
        isLoggedIn: true
      }
    },
    logout:(state,action)=>{
     return {
      ...initialState
     }
    }
}});

export const { addUserDetails,logout } = userSlice.actions;
export default userSlice.reducer;