import s from './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {CurrencyRateCalculator} from "./views/CurrencyRateCalculator/CurrencyRateCalculator";
import {useState} from "react";
import {Dictionary} from "./dictionary";

function App() {
    const [language, setLanguage] = useState("RU");
    return (
        <div className={s.app}>
            <Header changeLanguage={setLanguage}/>
            <section className={s.mainScreen}>
                <div className={'container'}>
                    <div className={s.mainScreenWrapper}>
                        <h1 className={s.mainTitle}>{Dictionary["mainTitle"][language]}</h1>
                        <CurrencyRateCalculator language={language}/>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default App;
