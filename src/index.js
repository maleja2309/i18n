import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";

var lan = 'es';
var loc = localeEsMessages;
if (navigator.language.toString() != 'es') {
    lan = 'en';
    loc = localeEnMessages;
};

ReactDOM.render(
    <IntlProvider locale={lan} messages={loc}>
        <JobsList />
    </IntlProvider>, document.getElementById("root"));

