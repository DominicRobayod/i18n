import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const language = navigator.language.startsWith("es") ? "es" : "en";
const messages = language === "es" ? localeEsMessages : localeEnMessages;

ReactDOM.render(
  <IntlProvider locale={language} messages={messages}>
    <JobsList language={language} />
  </IntlProvider>,
  document.getElementById("root")
);
