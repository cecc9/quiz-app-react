import { useState } from "react";
import { useQuestionStore } from "../store/questions";

export const useCounter = () => {
    const [counter, setCounter] = useState<number>(0);
    const questionsRandom = useQuestionStore((state) => state.questionsRandom);

    const incrementCounter = () => {
        if (counter < questionsRandom.length - 1) {
            setCounter(counter + 1);
        }
    };
    const decrementCounter = () => {
        if (counter > 0) {
            setCounter((prev) => prev - 1);
        }
    };

    return { counter, incrementCounter, decrementCounter };
};
