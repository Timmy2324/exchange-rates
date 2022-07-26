import React from 'react';
import s from "./CurrencyRateCalculator.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {useState, useEffect} from "react";
import {currencyRateAPI} from "../../api/CurrencyRateApi";
import {Dictionary} from "../../dictionary";

export const CurrencyRateCalculator = (props) => {
    const {
        language
    } = props;
    const allCurrency = [
        {
            id: 1,
            currency: "AMD",
            symbol: "&#1423;",
        },
        {
            id: 2,
            currency: "USD",
            symbol: "&#36;",
        },
        {
            id: 3,
            currency: "EUR",
            symbol: "&#8364;",
        },
        {
            id: 4,
            currency: "GBP",
            symbol: "&#163;",
        },
        {
            id: 5,
            currency: "CHF",
            symbol: "<span>&#8355;</span>",
        },
    ];

    const [data, setData] = useState();
    const [amountCurrency, setAmountCurrency] = useState(1);
    const [currentCurrency, setCurrentCurrency] = useState(allCurrency[0]);



    useEffect(() => {
        currencyRateAPI.getLatestCurrency()
            .then(data => {
                setData(data);
            });
    }, []);

    const currencyButtons = allCurrency.map((item) => {
        return <Button
            key={item.id}
            onClick={() => changeCurrency(item)}
            className={s.currencyButton}
            active={currentCurrency.currency === item.currency}
        >
            {item.currency}
        </Button>
    });

    const getRate = (currency) => {
        return data ? Math.floor(data && data['rates'][currentCurrency.currency] / data['rates'][currency] * 10000) / 10000 : 0;
    }

    const currencyTable = allCurrency.filter((item) => item.currency !== currentCurrency.currency)
        .map((item) => {
            return (<tr key={item.id} className={s.tableRow}>
                <td className={s.currencyColumn}>{item.currency}</td>
                <td className={s.ratesColumn}>
                    {getRate(item.currency)} <span dangerouslySetInnerHTML={{__html: currentCurrency.symbol}}/> {Dictionary["calculatorCurrency"]["tableFor"][language]} 1
                    <span dangerouslySetInnerHTML={{__html: item.symbol}}/></td>
                <td className={s.totalColumn}>{Math.floor(amountCurrency / getRate(item.currency) * 10000) / 10000 || 0} <span dangerouslySetInnerHTML={{__html: item.symbol}}/></td>
            </tr>)
        });

    const changeCurrency = (currency) => {
        setCurrentCurrency(currency);
    }

    const onChangeAmountCurrency = (e) => {
        if (e.length > 6) {
            return;
        }
        return setAmountCurrency(e.replace(/\D/g, ''));
    }

    return (
        <div className={s.currencyCard}>
            <div className={s.currencyAmount}>
                <h3 className={s.currencyTitle}>{Dictionary["calculatorCurrency"]["titleGive"][language]}</h3>
                <Input className={s.inputGive} value={amountCurrency} onChange={onChangeAmountCurrency}/>
                {currencyButtons}
            </div>
            <div className={s.currencyCurrent}>
                <h3 className={s.currencyTitle}>{Dictionary["calculatorCurrency"]["titleReceive"][language]}</h3>
                <table className={s.currencyTable}>
                    <thead className={s.currencyTable}>
                    <tr className={s.tableRow}>
                        <th className={`${s.tableHead} + ${s.currencyColumn}`}>{Dictionary["calculatorCurrency"]["tableCurrency"][language]}</th>
                        <th className={`${s.tableHead} + ${s.ratesColumn}`}>{Dictionary["calculatorCurrency"]["tableRates"][language]}</th>
                        <th className={`${s.tableHead} + ${s.totalColumn}`}>{Dictionary["calculatorCurrency"]["tableTotal"][language]}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currencyTable}
                    </tbody>
                </table>
            </div>
        </div>
    );
};