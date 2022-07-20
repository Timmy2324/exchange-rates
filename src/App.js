import s from './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {CurrencyRateCalculator} from "./views/CurrencyRateCalculator/CurrencyRateCalculator";

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <section className={s.mainScreen}>
                <div className={'container'}>
                    <div className={s.mainScreenWrapper}>
                        <h1 className={s.mainTitle}>Калькулятор курса валют</h1>
                        <CurrencyRateCalculator/>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default App;
