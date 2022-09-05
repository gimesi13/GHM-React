import React from "react";

function Hero({ t }) {
  return (
    <section className="hero">
      <h1>{t("welcome")}</h1>
      <p>asd</p>
      <div className="hero-arrow">arrow</div>
    </section>
  );
}

export default Hero;
