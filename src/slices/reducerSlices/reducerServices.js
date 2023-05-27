import { createSlice, current } from '@reduxjs/toolkit'


export let counterSlice = createSlice({
  name: 'servicesOld',
  initialState : {
    serviciosOld:[],
    novedades:"",
    msg: ""
  },
  reducers: {
    getServOld: (state, action) => {
      state.serviciosOld = action.payload
    },
    disNovedades: (state, action) =>{
      state.novedades = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { getServOld, disNovedades } = counterSlice.actions

export default counterSlice.reducer