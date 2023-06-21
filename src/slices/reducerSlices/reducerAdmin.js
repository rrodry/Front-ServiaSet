import { createSlice } from '@reduxjs/toolkit'


export let counterSlice = createSlice({
  name: 'adminPanel',
  initialState : {
    planillas:"",
    planillasAdmin:""
  },
  reducers: {
    adminPlanillas: (state, action ) => {
        state.planillas = action.payload
    },
    showPlanillaAdm: (state, action) =>{
      state.planillasAdmin = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { adminPlanillas, showPlanillaAdm } = counterSlice.actions

export default counterSlice.reducer