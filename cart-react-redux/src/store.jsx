import { createStore } from "redux";
import rootred from "./redux/reducers/mainreducer";


const store = createStore(
    rootred
)

export default store;