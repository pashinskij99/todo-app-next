import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";

interface ModalSliceState {
  isActive: boolean
}

const initialState: ModalSliceState = {
  isActive: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload
    }
  }
})

export const {setActive} = modalSlice.actions
export default modalSlice.reducer
