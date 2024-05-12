import { configureStore } from '@reduxjs/toolkit'
import cardSlick from '../Font/Cart/cardSlick.js'

export const store = configureStore({
  reducer: {
    card:cardSlick,
  },
})