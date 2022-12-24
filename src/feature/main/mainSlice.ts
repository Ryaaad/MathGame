import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  OPR: [
    {id:0,op:"+",state:false},
    {id:1,op:"-",state:false},
    {id:2,op:"X",state:false},
    {id:3,op:"/",state:false},
  ],
  Start: false,
  Begin:false
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    Click:(state,action:PayloadAction<number>)=>{
      let Start=false;
      state.OPR[action.payload].state=!state.OPR[action.payload].state
    state.OPR.forEach(element => {
      if(element.state!=false) Start=true; 
    });
    if(Start) state.Start=true;
    else state.Start=false
    },
    Begin:(state=>{
      state.Begin=true;
    })
  }
});
export const {Click,Begin}= mainSlice.actions
export default mainSlice.reducer;