import s from './App.module.css';
import Input from "./components/Input/Input";

function App() {
    return (
        <div className={s.app}>
            <header className={s.header}>
                <span>LOGO</span>
                <span>селект выбора языка</span>
            </header>
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
                                    <tr>
                                        <th>Валюта</th>
                                        <th>Курс</th>
                                        <th>Получу</th>
                                    </tr>
                                    <tr>
                                        <td>USD</td>
                                        <td>60р за 1$ </td>
                                        <td>2$</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className={s.footer}>
                <div className={'container'}>
                    &#169; 2022
                </div>
            </footer>
        </div>
    );
}

export default App;
