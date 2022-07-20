import s from './App.module.css';
import Input from "./components/Input/Input";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <section className={s.mainScreen}>
                <div className={'container'}>
                    <div className={s.mainScreenWrapper}>
                        <h1 className={s.mainTitle}>Калькулятор курса валют</h1>
                        <div className={s.currencyCard}>
                            <div className={s.currencyAmount}>
                                <span>У меня есть</span>
                                <Input/>
                                <span>Хочу приобрести</span>
                                <Input/>
                            </div>
                            <div className={s.currencyCurrent}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Валюта</th>
                                            <th>Курс</th>
                                            <th>Получу</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>USD</td>
                                            <td>60р за 1$</td>
                                            <td>2$</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default App;
