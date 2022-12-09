import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   profile:{
     name: "",
    email: "",
    password: "",
    cpassword: ""
}
};

export const counterSlice = createSlice({
  name: "signupReducer",
  initialState,
  reducers: {
    addUser:(state, action) =>{
       let userdata = action.payload;

       state.profile.name = userdata.name;
       state.profile.email = userdata.email;  
       state.profile.password = userdata.password
       state.profile.cpassword = userdata.cpassword


        const new_value = (state.profile.name === "email") ? value.toLowerCase() : value;
        seUserRegistration((prev) => {
          return {
            ...prev, [name]: new_value
    
          }
        })
    },
    handleSubmit:(state, action) =>{ 
        state.preventDefault()
        const newRecord = { ...userRegistration}
        console.log(newRecord)
        setRecords([...records, newRecord]);
        seUserRegistration({ name: "", email: "" ,password: "",cpassword: ""});
        
        props.getDataFromSignUp(newRecord);
        navigate("/");

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
    handleSubmit,
 
} = counterSlice.actions;

export default counterSlice.reducer;
