import { createContext, useContext } from "react";
import useLocalStorage from "use-local-storage";

const IsDarkModeContext = createContext ({})

export const useIsDarkModeContext = () => {
    return useContext(IsDarkModeContext)
}

export const IsDarkModeProvider = ({children}: any) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", true)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        document.body.classList.toggle("dark")
    }

    return(
        <IsDarkModeContext.Provider value={{darkMode, setDarkMode, toggleDarkMode}}>
            {children}
        </IsDarkModeContext.Provider>
    )
}