import { createContext, useContext } from "react";
import useLocalStorage from "use-local-storage";

const IsDarkModeContext = createContext ({})

export const useIsDarkModeContext = () => {
    return useContext(IsDarkModeContext)
}

export const IsDarkModeProvider = ({children}: any) => {
    const [isDarkMode, setDarkMode] = useLocalStorage("isDarkMode", true);

    return(
        <IsDarkModeContext.Provider value={{isDarkMode, setDarkMode}}>
            {children}
        </IsDarkModeContext.Provider>
    )
}