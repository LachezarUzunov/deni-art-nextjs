import { createContext, useState } from "react";

const LanguageContext = createContext({
    version: "",
    changeLang: function() {},
});

export function LanguageContextProvider(props) {
    const [en, setEn] = useState(false);

    function changeLangHandler(english) {
        
        if (english) setEn(true)
        else setEn(false)
    }

    const context = {lang: en, changeLang: changeLangHandler}

    return (
        <LanguageContext.Provider value={context}>
            {props.children}
        </LanguageContext.Provider>
    )
}

export default LanguageContext;