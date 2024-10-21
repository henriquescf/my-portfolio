import i18next from "i18next";
import { createContext, useContext } from "react";
import useLocalStorage from "use-local-storage";

const IsLanguagePtContext = createContext ({})

export const useIsLanguagePtContext = () => {
    return useContext(IsLanguagePtContext)
}

export const IsLanguagePtProvider = ({children}: any) => {
    const [isLanguagePt, setLanguagePt] = useLocalStorage("isLanguagePt", true);
    const toggleLanguage = (lang: string) => {
        i18next.changeLanguage(lang)
    }

    return(
        <IsLanguagePtContext.Provider value={{isLanguagePt, setLanguagePt, toggleLanguage}}>
            {children}
        </IsLanguagePtContext.Provider>
    )
}