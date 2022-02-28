import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";

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
  trans: langs.RU,
  toggleLang: () => {},
});
export const useLocales = () => useContext(LocalesContext);

type LangProp = "RU" | "EN";

const LocalesProviders: React.FC = ({ children }) => {
  const [lang, setLang] = useState<LangProp>(
    JSON.parse(localStorage.getItem("language") ?? '"RU"') as LangProp
  );

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(lang));
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "EN" ? "RU" : "EN"));
  }, []);

  return (
    <LocalesContext.Provider value={{ trans: langs[lang], toggleLang }}>
      {children}
    </LocalesContext.Provider>
  );
};

export default LocalesProviders;
