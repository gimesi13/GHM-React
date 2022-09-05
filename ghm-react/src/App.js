import { useState, Suspense } from "react";
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

/* LANGUAGES */
const translationsEn = { welcome: "Welcome!!!" };
const translationsGe = { welcome: "Willkommen!" };
const translationsHu = { welcome: "Szia!" };

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
  /* useTranslation hook */
  const { t } = useTranslation();

  return (
    /* display loading while loading */
    <Suspense fallback="Loading...">
      <div className="App">
        <Navbar i18n={i18n} />
        <Hero t={t} />
        <About />
        <Rooms />
        <Location />
        <Slopes />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
