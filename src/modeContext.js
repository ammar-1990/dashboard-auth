import { createContext } from "react";
import { useReducer } from "react";
import modeReducer from "./modeReducer";

export const ModeContext =createContext('light');


export const ModeContextProvider =({children})=> {
    const [mode , dispatch]= useReducer(modeReducer,'light')
    return (
<ModeContext.Provider value={{mode,dispatch}}>
   {children}
</ModeContext.Provider>
    )
}