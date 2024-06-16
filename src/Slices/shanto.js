import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    singelSmartPhone: (state , action)=>{
      state.value= action.payload
       console.log(action)
    },
  },
})

// Action creators are generated for each case reducer function
export const { singelSmartPhone } = counterSlice.actions

export default counterSlice.reducer
