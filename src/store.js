
import {createStore } from "redux";

import { counterReducer } from "./reducer";


export const Store = createStore(counterReducer);
