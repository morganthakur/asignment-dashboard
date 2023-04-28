import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { useGetAllProductsQuery } from '../Services/ProductApi';

export interface CounterState {
  data:[],
  isLoading:boolean
}

const initialState: CounterState = {
data:[],
isLoading:true
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProducts: (state,action) => {
    state.data = action.payload
    },
    decrement: (state) => {
  
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addProducts, decrement } = productSlice.actions

export default productSlice.reducer