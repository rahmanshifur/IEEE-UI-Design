import { createStore, persist } from "easy-peasy";
import EventModel from "./model/event";


const store = createStore({
   event: persist(EventModel),

})
export default store