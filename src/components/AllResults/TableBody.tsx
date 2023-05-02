import { Center, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import CodeBlock from "../CodeBlock/CodeBlock";
import { ResultsOfQuestions } from "../../store/types";

type Props = {
    resultsOfQuestions: ResultsOfQuestions[];
};

const TableBody = ({ resultsOfQuestions }: Props) => {
    return (
        <Tbody>
            {resultsOfQuestions &&
                resultsOfQuestions.map((question) => (
                    <Tr key={question.id}>
                        <Td w='250px'>
                            <CodeBlock
                                codeString={question.code}
                                language='javascript'
                                width='100%'
                            />
                        </Td>
                        <Td bg='whatsapp.600'>
                            <Center>
                                <Text
                                    as='b'
                                    fontSize='lg'
                                    color='whiteAlpha.900'
                                >
                                    {question.answers[question.correctAnswer]}
                                </Text>
                            </Center>
                        </Td>
                        <Td
                            bg={`${
                                question.answers[question.correctAnswer] ===
                                question.answers[question.userAnswer]
                                    ? "whatsapp.600"
                                    : "red.500"
                            }`}
                        >
                            <Center>
                                <Text
                                    as='b'
                                    fontSize='lg'
                                    color='whiteAlpha.900'
                                >
                                    {question.answers[question.userAnswer]}
                                </Text>
                            </Center>
                        </Td>
                    </Tr>
                ))}
        </Tbody>
    );
};

export default TableBody;
