import { configureStore} from "@reduxjs/toolkit";
import loginReducer from "../utils/loginSlice";
import feedReducer from "../utils/feedSlice";
import connectionReducer from "../utils/connectionSlice";

const appStore = configureStore({
    reducer:{
     user: loginReducer,
     feed: feedReducer,
     connection:connectionReducer,
    },
});

export default appStore;