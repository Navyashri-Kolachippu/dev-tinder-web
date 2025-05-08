import { configureStore} from "@reduxjs/toolkit";
import loginReducer from "../utils/loginSlice";
import feedReducer from "../utils/feedSlice";

const appStore = configureStore({
    reducer:{
     user: loginReducer,
     feed: feedReducer,
    },
});

export default appStore;