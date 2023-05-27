import { createSlice, current } from '@reduxjs/toolkit'

let initialState = {
  moviles:[],
  msg: ""
}

export let counterSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    getServ: (state, action) => {
      state.moviles = []
      action.payload.map( e => {
        return state.moviles.push({
          movil: e.movil,
          servicios: e.servicios
        })
      })
    },
    increment: (state, action) => {
      state.moviles.map( e => {
        if(e.movil === action.payload.data.movil){
          e.servicios = action.payload.data.servicios
          state.msg = action.payload.msg
        }
        return state
      })
    },
    addBase: (state, action) => {
      state.moviles.push(action.payload.movil)
      console.log(current(state));
    },
    deleteBase: (state, action) => {

      const estado = state.moviles.filter( e => e.movil !== action.payload)
      state.moviles = estado
      
    }
  }
})

// Action creators are generated for each case reducer function
export const { getServ, increment, addBase, deleteBase } = counterSlice.actions

export default counterSlice.reducer