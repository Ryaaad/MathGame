import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  OPR: [
    {id:0,op:"+",state:false},
    {id:1,op:"-",state:false},
    {id:2,op:"X",state:false},
    {id:3,op:"/",state:false},
  ],
  Start: false,
  Begin:false,
  Score:0,
  Val1:Math.floor(Math.random() * (1000 - -1000 + 1) + -1000), 
  Val2:Math.floor(Math.random() * (1000 - -1000 + 1) + -1000),  
  output: {
    OP: "",
    res1: [5,false],
    res2: [5,false]
} ,
changed:false,
lose:false
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
    }),
    Result:((state,action:PayloadAction< { OP: string | undefined; res1: any[]; res2: any[] }>)=>{
      function financial(x:any) {
        return Number.parseFloat(x).toFixed(2);
      }
      state.output.OP=action.payload.OP!;
      state.output.res1= [+financial( action.payload.res1[0]),action.payload.res1[1]];
      state.output.res2= [+financial( action.payload.res2[0]),action.payload.res2[1]];
    }),
    Try:((state,action:PayloadAction< boolean>)=>{
      state.changed=!state.changed
    if(action.payload==true){
      state.Score++;
      state.Val1=Math.floor(Math.random() * (1000 - -1000 + 1) + -1000);
      state.Val2=Math.floor(Math.random() * (1000 - -1000 + 1) + -1000);
    }
    else state.lose=true
    
    }), 
  }
});
export const {Click,Begin,Result,Try}= mainSlice.actions
export default mainSlice.reducer;