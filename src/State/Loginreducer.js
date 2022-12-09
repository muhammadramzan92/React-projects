import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   profile:{  
    username: "",
   userpassword: ""
}
};

export const counterSlice = createSlice({
  name: "signReducer",
  initialState,
  reducers: {
    handleChange:(state, action) =>{
        const { name, value } = state.target;
        const new_value = (name === "email") ? value.toLowerCase() : value;
        setlogUser((prev) => {
          return {
            ...prev, [name]: new_value
    
          }
        })
    },
    handleSubmit1:(state, action) =>{ 
        state.preventDefault()
    if ((props.passData.name===logUser.username) && (props.passData.password===logUser.userpassword) ){
          props.getDatalogin(logUser==null?'':logUser);
          navigateto('/Welcome')
         }else
         {
          // navigateto('/Errorpage')
          alert('Please input correct userName and Password')
         
        }
    },





    // increment: (state) => {
    //   state.count = state.count + 1;
    // },
    // decrement: (state) => {
    //   state.count -= 1;
    // },
    // reset: (state) => {
    //   state.count = 0;
    // },
    // changeByAmount: (state, action) => {
    //   state.count += action.payload;
    // },
    // register: (state, action) => {
    //   state.count = action.payload;
    // }
  }
});

export const {
    handleChange,
    handleSubmit1,
 
} = counterSlice.actions;

export default counterSlice.reducer;
