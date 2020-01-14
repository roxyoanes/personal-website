import React from "react"
import PropTypes from "prop-types"

import languages from "../assets/languages"

export const LanguageContext = React.createContext(
  languages.EN // default value
)

export const LanguageWrapper = ({ children }) => {
  const [lang, setLang] = React.useState(languages.EN)

  const switchLanguage = language => {
    setLang(languages[language])
  }

  return (
    <LanguageContext.Provider value={{ lang, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

LanguageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
