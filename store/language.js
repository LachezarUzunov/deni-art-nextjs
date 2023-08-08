import { createContext, useState } from "react";

const LanguageContext = createContext({
    version: "",
    changeLang: function(english) {},
});

export function LanguageContextProvider(props) {
    const [bulgarian, setBulgarian] = useState(true);

    function changeLangHandler(english) {
        
        if (english) setBulgarian(false)
        else setBulgarian(true)
    }

    const context = { version: bulgarian, changeLang: changeLangHandler }

    return (
        <LanguageContext.Provider value={context}>
            {props.children}
        </LanguageContext.Provider>
    )
}

export default LanguageContext;