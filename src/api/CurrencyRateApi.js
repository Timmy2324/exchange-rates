const baseUrl = 'https://cdn.cur.su/api/latest.json';


export const currencyRateAPI = {
    getLatestCurrency() {
        return fetch(baseUrl)
            .then(res => res.json());
    }
}