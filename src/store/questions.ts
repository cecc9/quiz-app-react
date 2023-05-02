import { create } from "zustand";
import { StateQuestions, Actions } from "./types";

export const useQuestionStore = create<StateQuestions & Actions>((set) => ({
    questions: [],
    questionsRandom: [],
    disabledAnswers: {},
    resultsOfQuestions: [],
    results: {
        correct: 0,
        incorrect: 0,
    },
    counter: 0,

    increment: () =>
        set((state) => ({
            ...state,
            counter:
                state.counter < state.questionsRandom.length - 1
                    ? state.counter + 1
                    : state.counter,
        })),

    decrement: () =>
        set((state) => ({
            ...state,
            counter: state.counter > 0 ? state.counter - 1 : state.counter,
        })),

    fetchQuestions: async () => {
        const response = await fetch("/questions.json");
        const data = await response.json();
        set((state) => ({ ...state, questions: data }));
    },

    getQuesRandom: () => {
        const numberRandom = Math.floor(Math.random() * 6);
        set((state) => ({
            ...state,
            questionsRandom: state.questions.slice(
                numberRandom,
                numberRandom + 5
            ),
        }));
    },

    resetQuesRandom: () => {
        set((state) => ({
            ...state,
            questionsRandom: [],
            resultsOfQuestions: [],
            disabledAnswers: {},
            results: {
                correct: 0,
                incorrect: 0,
            },
            counter: 0,
        }));
    },

    validateOption: ({ optionUser, options, indexOptionCorrect }) => {
        const operatorBool = optionUser === options[indexOptionCorrect];
        set((state) => ({
            ...state,
            results: {
                correct: operatorBool
                    ? state.results.correct + 1
                    : state.results.correct,
                incorrect: operatorBool
                    ? state.results.incorrect
                    : state.results.incorrect + 1,
            },
        }));

        return false;
    },

    setDisabledAnswers: (counter) => {
        set((state) => ({
            ...state,
            disabledAnswers: { ...state.disabledAnswers, [counter]: true },
        }));
    },

    addResultsOfQuestions: (userResponse) => {
        set((state) => ({
            ...state,
            resultsOfQuestions: [...state.resultsOfQuestions, userResponse],
        }));
    },
}));
