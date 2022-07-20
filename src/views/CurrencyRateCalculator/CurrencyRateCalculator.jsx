import React from 'react';
import s from "./CurrencyRateCalculator.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export const CurrencyRateCalculator = () => {

    const currencyButtons = ["AMD", "USD", "EUR", "GBP", "CHF"].map((item, index) => {
        return <Button key={index} className={s.currencyButton}>{item}</Button>
    });

    return (
        <div className={s.currencyCard}>
            <div className={s.currencyAmount}>
                <h3 className={s.currencyTitle}>Отдам</h3>
                <Input className={s.inputGive}/>
                {currencyButtons}
            </div>
            <div className={s.currencyCurrent}>
                <h3 className={s.currencyTitle}>Получу</h3>
                <table className={s.currencyTable}>
                    <thead className={s.currencyTable}>
                    <tr className={s.tableRow}>
                        <th className={s.tableHead}>Валюта</th>
                        <th className={s.tableHead}>Курс</th>
                        <th className={s.tableHead}>Получу</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className={s.tableRow}>
                        <td>USD</td>
                        <td>60р за 1$</td>
                        <td>2$</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};