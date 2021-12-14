import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const internalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(internalId);
        }
    });

    return date
};