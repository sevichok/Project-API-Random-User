import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { LocalesTypes, DataLangTypes } from "./Locales.Types";

export const rus = {
  gender: "Пол",
  male: "Мужчина",
  female: "Женщина",
  page: "Страница",
  res: "Кол-во результатов",
  nat: "Национальность",
  th: "Тема",
  lng: "Язык",
  users: "Пользователи",
  inf: "Информация",
  ph: "Телефон",
  email: "Почта",
  loc: "Адрес",
};
export const eng = {
  gender: "Gender",
  male: "Male",
  female: "Female",
  page: "Page",
  res: "Results",
  nat: "Nationality",
  th: "Theme",
  lng: "Language",
  users: "Random Users",
  inf: "Information",
  ph: "Phone",
  email: "Email",
  loc: "Location",
};

const langs = { RU: rus, EN: eng };
console.log(langs);

const LocalesContext = createContext({
  trans: langs.RU ?? langs.EN,
  toggleLang: () => {},
});
export const useLocales = () => useContext(LocalesContext);

const LocalesProviders: React.FC = ({ children }) => {
  const [lang, setLang] = useState<LocalesTypes>(rus);

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(lang));
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === eng ? rus : eng));
  }, []);

  return (
    <LocalesContext.Provider value={{ trans: lang, toggleLang }}>
      {children}
    </LocalesContext.Provider>
  );
};

export default LocalesProviders;
