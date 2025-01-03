import React from "react";
import { useTranslation, Trans } from "react-i18next";
const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
};
const Reacti18next = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <p>
        <Trans i18nKey="description.part1">
          Edit <code>src/App.js</code> and save to reload.
        </Trans>
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("description.part2")}
      </a>
    </>
  );
};

export default Reacti18next;
