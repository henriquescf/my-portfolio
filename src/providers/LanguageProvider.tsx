import { createContext, useContext } from "react";
import useLocalStorage from "use-local-storage";

const IsLanguagePtContext = createContext ({})

export const useIsLanguagePtContext = () => {
    return useContext(IsLanguagePtContext)
}

export const IsLanguagePtProvider = ({children}: any) => {
    const [isLanguagePt, setLanguagePt] = useLocalStorage("isLanguagePt", true);

    return(
        <IsLanguagePtContext.Provider value={{isLanguagePt, setLanguagePt}}>
            {children}
        </IsLanguagePtContext.Provider>
    )
}