// const filter = value => ({
//   type: 'filter',
//   payload: value,
// });

import { createAction } from '@reduxjs/toolkit';

const filter = createAction('filter');
export default filter;
