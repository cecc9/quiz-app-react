import { Stack, Text } from "@chakra-ui/react";

import { Props } from "./types";

import AnswerOption from "../AnswerOption/AnswerOption";
import CodeBlock from "../CodeBlock/CodeBlock";

const Question = ({ questionOp, counter }: Props) => {
    return (
        <Stack align='center' spacing={8}>
            <Text fontSize='xl' as='b' color='twitter.500' textAlign='center'>
                {questionOp.question}
            </Text>

            <CodeBlock
                codeString={questionOp.code}
                key={counter}
                language='javascript'
            />
            <Stack w='100%' align='center'>
                {questionOp.answers.map((answer) => (
                    <AnswerOption
                        key={answer}
                        answer={answer}
                        counter={counter}
                    />
                ))}
            </Stack>
        </Stack>
    );
};

export default Question;
