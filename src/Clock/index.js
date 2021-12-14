import { useCurrentDate } from "./useCurrentTime";
import { Wrapper } from "./styled";

const formatDate = date => date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long"
})

const Clock = () => {
    const date = useCurrentDate();

    return (
        <Wrapper className="clock">
            Dzisiaj jest
            {" "}
            {formatDate(date)}
        </Wrapper>
    );
}

export default Clock;