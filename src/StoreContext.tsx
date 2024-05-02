import { Store } from "redux";
import {actionType, rootStateType, store} from "./components/redux/redux-store";
import React from "react";

interface StoreContextType {
    store: Store<rootStateType, actionType>;
}

export const StoreContext = React.createContext<StoreContextType | null>(null);
