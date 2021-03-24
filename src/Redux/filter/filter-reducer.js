import { createReducer } from '@reduxjs/toolkit';

const filterReducer = createReducer('', {
  filter: (state, { payload }) => payload,
});
export default filterReducer;
