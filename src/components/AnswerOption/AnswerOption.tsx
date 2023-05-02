import { Button } from "@chakra-ui/react";

import { useQuestionStore } from "../../store/questions";
import { Props } from "./types";

const AnswerOption = ({ answer, counter }: Props) => {
    const questionsRandom = useQuestionStore((state) => state.questionsRandom);
    const validateOption = useQuestionStore((state) => state.validateOption);

    const disabledAnswers = useQuestionStore((state) => state.disabledAnswers);
    const setDisabledAnswers = useQuestionStore(
        (state) => state.setDisabledAnswers
    );
    const addResultsOfQuestions = useQuestionStore(
        (state) => state.addResultsOfQuestions
    );

    const handleOnClick = () => {
        validateOption({
            optionUser: answer,
            options: questionsRandom[counter].answers,
            indexOptionCorrect: questionsRandom[counter].correctAnswer,
        });
        setDisabledAnswers(counter);
        addResultsOfQuestions({
            ...questionsRandom[counter],
            userAnswer: questionsRandom[counter].answers.indexOf(answer),
        });
    };

    return (
        <Button
            size='md'
            w='70%'
            variant='outline'
            isDisabled={Boolean(disabledAnswers[counter])}
            colorScheme='twitter'
            onClick={handleOnClick}
        >
            {answer}
        </Button>
    );
};

export default AnswerOption;
