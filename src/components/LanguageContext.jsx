import React from "react";

import languages from "../assets/languages";

export const LanguageContext = React.createContext(
  languages.EN // default value
);

export const LanguageWrapper = ({children}) => {
  const [lang, setLang] = React.useState(languages.EN);

  const switchLanguage = (language) => {
    setLang(languages[language])
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLanguage }}>{children}</LanguageContext.Provider>
  )
}
