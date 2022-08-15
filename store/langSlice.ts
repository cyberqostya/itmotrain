import { createSlice } from '@reduxjs/toolkit';
import engimg from '../public/eng.svg';
import rusimg from '../public/rus.svg';

const initialState = {
  value: {payload: 'rus', type: 'lang/update'},
  choose: {
    rus: { title: 'Рус', image: rusimg, urlPart: '&language_id=1' },
    eng: { title: 'Eng', image: engimg, urlPart: '&language_id=2' },
  }
}

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action;
    },
  },
})


export const { update } = langSlice.actions;
export default langSlice.reducer;