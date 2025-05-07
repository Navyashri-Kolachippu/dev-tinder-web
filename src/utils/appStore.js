import { configureStore} from "@reduxjs/toolkit";
import loginReducer from "../utils/loginSlice";

const appStore = configureStore({
    reducer:{
     user: loginReducer,
    },
});

export default appStore;