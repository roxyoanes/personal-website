import React from "react"

import StyledFooter from "./styled-components/styled-footer"
import { LanguageContext } from "../components/LanguageContext"

const Footer = () => {
  const [isSent, setIsSent] = React.useState(false)
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const sendForm = event => {
    event.preventDefault()
    const form = event.target
    
    /* fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => setIsSent(true))
      .catch(error => console.log(error)) */
  }

  return (
    <LanguageContext.Consumer>
      {({ lang }) => (
        <StyledFooter>
          <div className="form-wrapper">
            <h3 className="title">{lang.footer.title}</h3>
            <form
              className="send-wrapper"
              method="post"
              name="contact-form"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={sendForm}
            >
              {/* the form name hidden field is required to support form submission without javascript */}
              <input type="hidden" name="form-name" value="contact-form" />
              {/* bot field */}
              <p hidden>
                <label>
                  Don't fill this out:{" "}
                  <input onChange={handleChange} name="bot-field" />
                </label>
              </p>
              <input
                type="text"
                placeholder={lang.footer.placeholder1}
                name="name"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder={lang.footer.placeholder2}
                name="email"
                onChange={handleChange}
              />
              <textarea
                type="text"
                name="message"
                placeholder={lang.footer.placeholder3}
                onChange={handleChange}
              />
              <div className="btn-wrapper">
                <button type="submit" className="send-btn">
                  {lang.footer.button}
                </button>
              </div>
            </form>
          </div>
        </StyledFooter>
      )}
    </LanguageContext.Consumer>
  )
}

export default Footer
