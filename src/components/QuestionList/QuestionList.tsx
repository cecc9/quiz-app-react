import { useMemo, useState } from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Stack,
    Text,
    useMediaQuery,
} from "@chakra-ui/react";

import { useQuestionStore } from "../../store/questions";

import Question from "../Question/Question";
import AllResults from "../AllResults/AllResults";

const QuestionList = () => {
    const [isLargerThan600] = useMediaQuery("(max-width: 600px)");

    const [allResultsReady, setAllResultsReady] = useState<boolean>(false);

    const counter = useQuestionStore((state) => state.counter);
    const increment = useQuestionStore((state) => state.increment);
    const decrement = useQuestionStore((state) => state.decrement);

    const questionsRandom = useQuestionStore((state) => state.questionsRandom);
    const getQuesRandom = useQuestionStore((state) => state.getQuesRandom);
    const results = useQuestionStore((state) => state.results);
    const disabledAnswers = useQuestionStore((state) => state.disabledAnswers);

    const disabledAnswersLength = useMemo(
        () => Object.values(disabledAnswers).length,
        [disabledAnswers]
    );

    if (questionsRandom.length <= 0) {
        return (
            <Button size='lg' onClick={() => getQuesRandom()}>
                Empezar a Jugar!
            </Button>
        );
    }

    if (allResultsReady) {
        return (
            <Box w={isLargerThan600 ? "350px" : "900px"}>
                <AllResults setAllResultsReady={setAllResultsReady} />
            </Box>
        );
    }

    return (
        <Box w={isLargerThan600 ? "350px" : "500px"}>
            <Question questionOp={questionsRandom[counter]} counter={counter} />

            <ButtonGroup
                w='100%'
                size='md'
                mt={8}
                spacing={8}
                justifyContent='center'
            >
                {disabledAnswersLength === questionsRandom.length ? (
                    <Button
                        size='lg'
                        onClick={() => setAllResultsReady((prev) => !prev)}
                    >
                        ver resultados
                    </Button>
                ) : (
                    <>
                        <Button onClick={decrement}>anterior</Button>
                        <Button onClick={increment}>siguiente</Button>
                    </>
                )}
            </ButtonGroup>

            <Stack w='100%' direction='row' justify='center' mt={8}>
                <Text color='whiteAlpha.900' as='b' fontSize='md'>
                    correctas: {results.correct}
                </Text>
                <Text color='whiteAlpha.900' as='b' fontSize='md'>
                    incorrectas: {results.incorrect}
                </Text>
            </Stack>
        </Box>
    );
};

export default QuestionList;
