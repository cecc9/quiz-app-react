export type Question = {
    id: number;
    question: string;
    code: string;
    answers: string[];
    correctAnswer: number;
};

export type ResultsOfQuestions = Question & { userAnswer: number };

export type TriviaQuestion = {
    optionUser: string;
    options: string[];
    indexOptionCorrect: number;
};

export type TriviaQuestionCounter = TriviaQuestion & { counter: number }; // delete this type

export type Results = {
    correct: number;
    incorrect: number;
};

export type StateQuestions = {
    questions: Question[];
    questionsRandom: Question[];
    results: Results;
    disabledAnswers: {
        [key: number]: boolean;
    };
    resultsOfQuestions: ResultsOfQuestions[];
    counter: number;
};

export type Actions = {
    fetchQuestions: () => Promise<void>;
    getQuesRandom: () => void;
    validateOption: ({
        optionUser,
        options,
        indexOptionCorrect,
    }: TriviaQuestion) => boolean;
    setDisabledAnswers: (counter: number) => void;
    addResultsOfQuestions: (question: ResultsOfQuestions) => void;
    resetQuesRandom: () => void;
    increment: () => void;
    decrement: () => void;
};

export type TriviaQuestion = {
    optionUser: string;
    options: string[];
    indexOptionCorrect: number;
};
