import React, { createContext, useState, useCallback, useContext, useEffect } from 'react';

export const rus = {
    gender: "Пол",
    male: "Мужчина",
    female: "Женщина",
    page: "Страница",
    res: "Кол-во результатов",
    nat: "Национальность",
    th: "Тема",
    lang: "Язык",
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
    lang: "Language",
    users: "Random Users",
    inf: "Information",
    ph: "Phone",
    email: "Email",
    loc: "Location",
};
export const langs = { rus, eng };

const LocalesContext = createContext({});
export const useLocales = () => useContext(LocalesContext);

const LocalesProviders = ({ children }) => {
    const [lang, setLang] = useState(localStorage.getItem("lang") ?? "eng");

    useEffect(() => {
        localStorage.setItem("lang", lang)
    }, [lang])

    const toggleLang = useCallback(() => {
        setLang((prev) => (prev === "eng" ? "rus" : "eng"));
    }, []);
    return (
        <LocalesContext.Provider value={{ trans: langs[lang], toggleLang }}>
            {children}
        </LocalesContext.Provider>
    )
}

export default LocalesProviders