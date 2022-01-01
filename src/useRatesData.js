import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });
    const apiURL = "https://api.exchangerate.host/latest?base=PLN";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiURL);
                const { rates, date, base: baseCurrency } = response.data;

                setRatesData({
                    status: "success",
                    rates,
                    date,
                    baseCurrency,
                })

            } catch {
                setRatesData({
                    status: "error",
                })
            }
        };
        setTimeout(fetchData, 1000);

    }, []);

    return ratesData;
};