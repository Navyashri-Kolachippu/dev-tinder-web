import { configureStore} from "@reduxjs/toolkit";
import loginReducer from "../utils/loginSlice";
import feedReducer from "../utils/feedSlice";
import connectionReducer from "../utils/connectionSlice";
import requestReducer from "../utils/requestsSlice";

const appStore = configureStore({
    reducer:{
     user: loginReducer,
     feed: feedReducer,
     connection:connectionReducer,
     request:requestReducer,
    },
});

export default appStore;