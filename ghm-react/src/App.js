import { useState, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Languages */
import En from "./languages/en.json";
import Ge from "./languages/ge.json";
import Hu from "./languages/hu.json";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Rooms from "./Components/Rooms";
import About from "./Components/About";
import Location from "./Components/Location";
import Slopes from "./Components/Slopes";
/* Translation package */
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Book from "./Components/Book";

/* LANGUAGES */
const translationsEn = En;
const translationsGe = Ge;
const translationsHu = Hu;

i18n
  .use(initReactI18next) //passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      ge: { translation: translationsGe },
      hu: { translation: translationsHu },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
/* LANGUAGES END */

function App() {
  /* STATES */
  const [activelanguage, setActiveLanguage] = useState("en");

  /* useTranslation hook */
  const { t } = useTranslation();

  return (
    /* Router component around the main component to allow react router */
    <Router>
      {/* display loading while loading  */}
      <Suspense fallback="Loading...">
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Navbar
                i18n={i18n}
                t={t}
                activelanguage={activelanguage}
                setActiveLanguage={setActiveLanguage}
              />
              <Hero t={t} />
              <About t={t} />
              <Rooms t={t} />
              <Location t={t} />
              <Slopes t={t} />
              <Gallery t={t} />
              <Contact t={t} />
              <Footer t={t} />
            </Route>
            <Route exact path="/book" t={t}>
              <Book t={t} activelanguage={activelanguage} />
              <Footer t={t} />
            </Route>
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
