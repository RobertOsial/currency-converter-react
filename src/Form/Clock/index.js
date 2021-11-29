import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./style.css";

const formatDate = date => date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long"
})

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const internalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(internalId);
        }
    });

    return (
        <div className="clock">
            Dzisiaj jest
            {" "}
            {formatDate(date)}
        </div>
    );
}

export default Clock;