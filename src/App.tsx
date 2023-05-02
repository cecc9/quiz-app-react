import { useEffect } from "react";
import { Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { useQuestionStore } from "./store/questions";

import QuestionList from "./components/QuestionList/QuestionList";

import JavaScript from "./components/icons/JavaScript";

function App() {
    const fetchQuestions = useQuestionStore((state) => state.fetchQuestions);

    const [isLargerThan600] = useMediaQuery("(max-width: 600px)");

    useEffect(() => {
        fetchQuestions();
        // Si no queremos poner las deps, podemos desactivarlo con el comentario...
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchQuestions]);

    return (
        <Stack
            bg='#282c34'
            w='100%'
            h='100vh'
            direction='column'
            justify='center'
            align='center'
            spacing={8}
        >
            <Stack direction='row' align='center' spacing={6}>
                <Text
                    fontSize={`${isLargerThan600 ? "4xl" : "5xl"}`}
                    as='b'
                    color='white'
                >
                    App Question
                </Text>
                <JavaScript size={isLargerThan600 ? "60" : "80"} />
            </Stack>

            <QuestionList />
        </Stack>
    );
}

export default App;
